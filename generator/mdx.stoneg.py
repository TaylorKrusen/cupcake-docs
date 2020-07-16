from __future__ import unicode_literals

import json

from collections import OrderedDict

from stone.backend import CodeBackend
from stone.ir.data_types import (
    is_alias,
    is_list_type,
    is_map_type,
    is_nullable_type,
    is_numeric_type,
    is_primitive_type,
    is_string_type,
    is_struct_type,
    is_boolean_type,
    is_tag_ref,
    is_timestamp_type,
    is_union_type,
    is_user_defined_type,
    is_void_type,
    unwrap_nullable,
    unwrap,
)

from stone.ir import (
    Boolean,
    Bytes,
    Float32,
    Float64,
    Int32,
    Int64,
    List,
    String,
    Timestamp,
    UInt32,
    UInt64,
    Void,
    is_list_type,
    is_struct_type,
    is_user_defined_type,
)

PARAMETER = "param"
RETURN_VALUE = "return"
ERROR = "error"

class MdxBackend(CodeBackend):
    def generate(self, api):
        #build an in memory dicitonary of all types
        self.all_types = {}
        for namespace in api.namespaces.values():
            namespace_dict = {}
            for data_type in namespace.data_types:
                if namespace.name == data_type.namespace.name:
                    namespace_dict[data_type.name] = self._get_type_json(data_type)
            self.all_types[namespace.name] = namespace_dict
        
        # then iterate across namespaces and routes
        for namespace in api.namespaces.values():
            self._generate_namespace_markdown(namespace)

    # Generate a namespace markdown file contaning NS doc and a list of routes
    def _generate_namespace_markdown(self, namespace):

        route_versions = []

        # If that namespace only has datatypes and no routes, skip.
        if not namespace.routes:
            return



        # Routes within the namespace
        for route_name in sorted(namespace.routes_by_name):
            routes = namespace.routes_by_name[route_name]
            route_versions.append(routes.at_version)

        for r in route_versions:
            self._generate_route_versions_markdown(namespace, r)

    #------------------------------------------------------------------------------------------------
    # MDX Files
    #------------------------------------------------------------------------------------------------

    # Generate route MDX files
    def _generate_route_versions_markdown(self, namespace, routes_by_version):
        
        for v in routes_by_version:
            route = routes_by_version.get(v)

            js_file_name = 'type-lookup/{}.js'.format('{}/{}'.format(namespace.name, route.name).replace('/', '-'))
            mdx_file_name = 'mdx/routes/{}.mdx'.format('{}/{}'.format(namespace.name, route.name).replace('/', '-'))
            
            if v > 1:
                js_file_name = 'type-lookup/{}.js'.format('{}/{}-{}'.format(namespace.name, route.name, route.version).replace('/', '-'))
                mdx_file_name = 'mdx/routes/{}.mdx'.format('{}/{}-{}'.format(namespace.name, route.name, route.version).replace('/', '-'))
            
            with self.output_to_relative_path(mdx_file_name):

                self.emit("---")
                self.emit("name: /{}".format(route.name))
                self.emit("route: /{}/{}".format(namespace.name, route.name))
                self.emit("namespace: {}".format(namespace.name))
                self.emit("version: {}".format(route.version))
                self.emit("menu: {}".format(namespace.name if not route.deprecated else 'Deprecated'))
                if route.doc:
                    self.emit_raw("description: {}".format(route.doc.replace('\n', '\\n').replace(': ', ':&nbsp').replace(':val:', '').replace(':field:', '').replace(':route:', '').replace(':type:', '')+"\n"))
                self.emit("isDeprecated: {}".format('true' if route.deprecated else 'false'))
                self.emit("urlStructure: https://{}.dropbox.com/{}/{}/{}".format(route.attrs.get("host", "api"), route.version, namespace.name, route.name ))            
                self.emit("endpointFormat: {}".format(route.attrs.get("style")))
                self.emit("isPreview: {}".format('true' if route.attrs.get("is_preview") else 'false'))
                self.emit("scope: {}".format(route.attrs.get("scope")))
                self.emit("authentication:")
                for a in route.attrs.get("auth", "user").split(", "):
                    self.emit("  - {}".format(a))
                if route.attrs.get("select_admin_mode"):
                    self.emit("  - {}".format(route.attrs.get("select_admin_mode")))
                self._generate_route_datatype(route.arg_data_type, PARAMETER)
                self._generate_route_datatype(route.result_data_type, RETURN_VALUE)
                self._generate_route_datatype(route.error_data_type, ERROR)
                self.emit("---")
                self.emit("")

                self.emit('import Endpoint from \'../../components/Endpoint\'')
                self.emit('import stoneTypes from \'../../{}\''.format(js_file_name))
                self.emit('')
            
                self.emit('<Endpoint endpointProps={{typeInfo: stoneTypes, ...props.pageContext.frontmatter}} />');
        
            # scan through datatypes to create a JSON file of all types and nested types in the route
            with self.output_to_relative_path(js_file_name):
                self.routeTypesDict = {}
                if not is_void_type(route.arg_data_type):
                    self._collect_route_datatypes(route.arg_data_type)
                if not is_void_type(route.result_data_type):
                    self._collect_route_datatypes(route.result_data_type)
                if not is_void_type(route.error_data_type):
                    self._collect_route_datatypes(route.error_data_type)
                self.emit_raw(u'export default {}\n'.format(json.dumps(self.routeTypesDict,  sort_keys=True, indent=4, separators=(',', ': '))))
                self.routeTypesDict = {}

    def _collect_route_datatypes(self, datatype):
        if is_void_type(datatype):
            return        

        dt = datatype
        if is_list_type(datatype):
            dt = datatype.data_type
                        
        if dt.namespace.name not in self.routeTypesDict:
            self.routeTypesDict[dt.namespace.name] = {}
            
        self.routeTypesDict[dt.namespace.name][dt.name] = self.all_types[dt.namespace.name][dt.name]
        self._collect_stone_types(self.all_types[dt.namespace.name][dt.name])

    def _collect_stone_types(self, parameter):
        fields = parameter['fields']
        for field in fields:
            self._collect_field_datatypes(field['type'])

    def _collect_field_datatypes(self, parameter_type):
        if 'stone_type' in parameter_type:
            self._collect_stone_types(parameter_type)
        elif 'primitive' in parameter_type:
            pass
        elif 'list' in parameter_type:
            self._collect_field_datatypes(parameter_type['list'])
        elif 'map' in parameter_type:
            pass
        elif 'optional' in parameter_type:
            self._collect_field_datatypes(parameter_type['optional'])
        elif 'namespace' in parameter_type:
            self._add_stone_type_to_temp_dict(parameter_type['namespace'], parameter_type['datatype'])
            self._collect_stone_types(self.all_types[parameter_type['namespace']][parameter_type['datatype']])

    def _add_stone_type_to_temp_dict(self, namespace, datatype):
        if namespace not in self.routeTypesDict:
            self.routeTypesDict[namespace] = {}
        self.routeTypesDict[namespace][datatype] = self.all_types[namespace][datatype]

    # helper to emit either complex name or struct name in routes
    def _generate_route_datatype(self, datatype, section):
        self.emit("{}Type: ".format(section))

        nullable = False
        while is_nullable_type(datatype) or is_alias(datatype):
            datatype = datatype.data_type
        if is_void_type(datatype):
            self.emit("  namespace: Void")
            self.emit("  datatype: Void")
        elif  is_list_type(datatype):
            self.emit("  namespace: {}".format(datatype.data_type.namespace.name))
            self.emit("  datatype: {}[]".format(datatype.data_type.name))
            self.generate_examples(datatype.data_type, section)
        elif is_user_defined_type(datatype):
            self.emit("  namespace: {}".format(datatype.namespace.name))
            self.emit("  datatype: {}".format(datatype.name))
            self.generate_examples(datatype, section)
        else:
            raise Exception("Unexpected datatype %r" % datatype)

    # helper to generate route example json
    def generate_examples(self, datatype, section):
        if section == PARAMETER:
            examples = datatype.get_examples(compact=True)
        else:
            examples = datatype.get_examples()

        if len(examples) == 1:
            example = examples.values()[0]
            if example.text is None and example.label == "other":
                # If the only example is default other, skip it
                return

        self.emit("{}Examples: ".format(section))

        for tag, example in examples.iteritems():
            example_dict = example.value
            if len(example_dict) == 0:
                continue

            if section == ERROR:
                example_dict = OrderedDict(
                    [("error_summary", self._error_summary(example.value)), ("error", example.value),]
                )

                if example.text:
                    self.emit("  - label: {}".format(example.text))
                elif example.label:
                    self.emit("  - label: {}".format(example.label))

                self.emit_raw("    content: " +json.dumps(example_dict, separators=(',', ': ')) + "\n")

            if len(examples) == 1:
                example = examples.values()[0]
                self.emit("  - label: default")
                self.emit_raw("    content: " +json.dumps( example.value, separators=(',', ': ')) + "\n")

            elif len(examples) > 1:
                if example.text:
                    self.emit("  - label: {}".format(example.text))
                elif example.label:
                    self.emit("  - label: {}".format(example.label))

                self.emit_raw("    content: " +json.dumps(example.value) + "\n")

    @staticmethod
    def _error_summary(value):
        current = value
        parts = []
        while True:
            if ".tag" in current:
                tag = current[".tag"]
                parts.append(tag)
                if tag in current:
                    current = current[tag]
                elif "reason" in current:
                    current = current["reason"]
                else:
                    break
            elif "reason" in current:
                tag = current["reason"]
            else:
                break
        parts.append("...")
        return "/".join(parts)

    #------------------------------------------------------------------------------------------------
    # JSON Data types
    #------------------------------------------------------------------------------------------------
    
    # Build JSON dictionary of types
    def _get_type_json(self, data_type):
        if is_struct_type(data_type):
            return self._generate_struct(data_type)
        elif is_union_type(data_type):
            return self._generate_union(data_type)
        else:
            assert False, 'unexpected type'
    
    def _generate_struct(self, struct_type):
        type_dict = {}
        type_dict["stone_type"] = "struct"
        if struct_type.doc is not None:
            type_dict["description"] = struct_type.doc
        type_dict["fields"] = [self._generate_field(field) for field in struct_type.all_fields]

        # Some structs can explicitly list their subtypes
        if struct_type.is_member_of_enumerated_subtypes_tree():
            type_dict["todo"] = True
        return type_dict
        """
            if struct_type.has_enumerated_subtypes():
                # This struct is the parent to multiple subtypes.
                tag_values = []
                for tags, _ in struct_type.get_all_subtypes_with_tags():
                    for tag in tags:
                        tag_values.append('"%s"' % tag)

                union = self.fmt_union_values(tag_values)

                with self.indent():
                    self.emit('{')
                    with self.indent():
                        self.emit('"name":".tag",')
                        self.emit('"type":"string",')
                        self.emit('"description":"Tag identifying the subtype.",')
                        # TODO: clean up outputting unions
                        self.emit(union.replace('{', '').replace('}', ''))
                        self.emit('"optional":false')

                    self.emit('},')
            else:
                # This struct is a particular subtype.
                parent = struct_type.parent_type
                while not parent.has_enumerated_subtypes():
                    parent = parent.parent_type
                for subtype in parent.get_enumerated_subtypes():
                    if subtype.data_type == struct_type:
                        with self.indent():
                            self.emit('{')
                            with self.indent():
                                self.emit('"name":".tag",')
                                self.emit('"type":"string",')
                                self.emit('"description":"Tag identifying the subtype.",')
                                self.emit('"optional":true')
                            self.emit('},')
                            break
            """
                

    def _generate_union(self, union_type):
        type_dict = {}
        type_dict["stone_type"] = "union" if union_type.closed else "open_union"
        if union_type.doc is not None:
            type_dict["description"] = union_type.doc
        type_dict["fields"] = [self._generate_field(field) for field in union_type.all_fields]
        return type_dict

    def _generate_field(self, field):
        field_dict = {}
        field_dict["parameter"] = field.name
        if field.doc is not None:
            field_dict["description"] = field.doc
        field_dict["type"] = self._generate_field_type(field.data_type)
        return field_dict

    def _generate_field_type(self, type):
        type_dict = {}
        unwrapped, nullable, alias = unwrap(type)
        if alias:
            assert False, 'alias'
        if nullable:
            type_dict['optional'] = self._generate_field_type(unwrapped)
            return type_dict
        
        if is_list_type(unwrapped):
            type_dict['list'] = self._generate_field_type(unwrapped.data_type)
        elif is_map_type(unwrapped):
            if is_primitive_type(unwrapped.key_data_type):
                type_dict['key'] = unwrapped.key_data_type.name
            else:
                assert False, 'non-primitive key'
            type_dict['map'] = self._generate_field_type(unwrapped.value_data_type)
        elif is_user_defined_type(unwrapped):
            type_dict["namespace"] = unwrapped.namespace.name
            type_dict["datatype"] = unwrapped.name
        elif is_primitive_type(unwrapped):
            type_dict["primitive"] = unwrapped.name
            # TODO: validators
        else:
            assert False, 'unexpected type'
        return type_dict