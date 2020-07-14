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

from stone.backends.helpers import (
    fmt_pascal,
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

PARAMETER = "parameters"
RETURN_VALUE = "return values"
ERROR = "errors"

class MdxBackend(CodeBackend):
    def generate(self, api):
        # get datatype JSON files first; assume they're present in md section
        for namespace in api.namespaces.values():
            for data_type in namespace.data_types:
                self._generate_type_json(data_type)
        for namespace in api.namespaces.values():
            self._generate_namespace_markdown(namespace)

    def _generate_type_json(self, data_type):
        with self.output_to_relative_path('types/{}.json'.format(self.fmt_type_name(data_type))):

            if is_struct_type(data_type):
                self._generate_struct(data_type)
            elif is_union_type(data_type):
                self._generate_union(data_type)

    def _emit_type_json_header(self, type):
        self.emit("{")
        with self.indent():
            self.emit('"type":'+format(self.fmt_json_type_name(type)+','))
            if type.doc:
                self.emit('"description":' + json.dumps(type.doc) + ',')

    def _emit_json_footer(self):
        self.emit("}")

    def _generate_struct(self, struct_type):
        self._emit_type_json_header(struct_type)
        with self.indent():
            self.emit('"properties":[')

            # Some structs can explicitly list their subtypes
            if struct_type.is_member_of_enumerated_subtypes_tree():
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

            # NOTE: Inheritance not implemented; emit all_fields
            for field in struct_type.all_fields:
                with self.indent():
                    self.emit('{')
                    with self.indent():

                        field_type, nullable, _ = unwrap(field.data_type)
                        field_js_type = self.fmt_json_type(field_type)
                        # Translate nullable types into optional properties.

                        field_name = '[' + field.name + ']' if nullable else field.name
                        self.emit('"name":"{}",'.format(field.name))
                        self.emit('"type":{},'.format(field_js_type))
                        self.emit('"optional":{},'.format('true' if nullable else 'false'))
                        if field.doc:
                            self.emit('"description":{}'.format(json.dumps(field.doc)))

                    self.emit('},')

            self.emit(']')

        self._emit_json_footer()

    def _generate_union(self, union_type):
        self._emit_type_json_header(union_type)

        with self.indent():
            self.emit('"properties":[')

            variant_types = []

            for variant in union_type.all_fields:

                with self.indent():
                    variant_types.append("'%s'" % variant.name)
                    variant_data_type, _, _ = unwrap(variant.data_type)
                    # Don't emit fields for void types.
                    if not is_void_type(variant_data_type):
                        self.emit('{')

                        with self.indent():

                            variant_doc = 'Available if .tag is %s.' % variant.name
                            if variant.doc:
                                variant_doc += ' ' + variant.doc

                            self.emit('"name":"{}",'.format(variant.name))
                            self.emit('"type":{},'.format(self.fmt_json_type(variant_data_type)))
                            self.emit('"description":{},'.format(json.dumps(variant_doc)))

                        self.emit('},')

            with self.indent():
                self.emit('{')

                with self.indent():
                    union = self.fmt_union_values(variant_types)
                    self.emit('"name":".tag",')
                    self.emit('"type":"string",')
                    self.emit('"description":"Tag identifying the union variant.",')
                    # TODO: clean up outputting unions
                    self.emit(union.replace('{', '').replace('}', ''))
                self.emit('}')

            self.emit("]")
        self._emit_json_footer()

    _base_type_table = {
        Boolean: 'boolean',
        Bytes: 'string',
        Float32: 'number',
        Float64: 'number',
        Int32: 'number',
        Int64: 'number',
        List: 'Array',
        String: 'string',
        UInt32: 'number',
        UInt64: 'number',
        Timestamp: 'Timestamp',
        Void: 'void',
    }

    def fmt_type_name(self, data_type):

        if is_user_defined_type(data_type):
            return fmt_pascal('%s%s' % (data_type.namespace.name, data_type.name))
        else:
            fmted_type = self._base_type_table.get(data_type.__class__, 'Object')
            if is_list_type(data_type):
                fmted_type = '[2' + self.fmt_type_name(data_type.data_type) + ']'
            return fmted_type

    def fmt_json_type_name(self, data_type):

        if is_user_defined_type(data_type):
            return '"'+fmt_pascal('%s%s' % (data_type.namespace.name, data_type.name))+'"'
        else:
            fmted_type = self._base_type_table.get(data_type.__class__, 'Object')
            if is_list_type(data_type):
                fmted_type = '[' + self.fmt_json_type(data_type.data_type) + ']'
            else:
                fmted_type = '"'+fmted_type+'"'
            return fmted_type

    def fmt_json_type(self, data_type):
        if is_struct_type(data_type) and data_type.has_enumerated_subtypes():
            possible_types = []
            possible_subtypes = data_type.get_all_subtypes_with_tags()
            for _, subtype in possible_subtypes:
                possible_types.append(self.fmt_json_type_name(subtype))
            if data_type.is_catch_all():
                possible_types.append(self.fmt_json_type_name(data_type))
            return self.fmt_union_values(possible_types)
        else:
            return self.fmt_json_type_name(data_type)

    def fmt_union_values(self, type_strings):
        ret = '{"option":[' + ', '.join(type_strings) + ']}' if len(type_strings) > 1 else type_strings[0]
        return ret.replace("'", '"')

    # Generate a namespace markdown file
    def _generate_namespace_markdown(self, namespace):

        route_versions = []

        # If that route only has datatypes and no routes, skip.
        if not namespace.routes:
            return

        with self.output_to_relative_path('namespaces/{}.mdx'.format(namespace.name)):

            self.emit('## {}'.format(namespace.name))
            if namespace.doc:
                self.emit_raw(namespace.doc.replace('\n', '\n\n').replace(':val:', '').replace(':field:', '').replace(':route:', '').replace(':type:', '')+"\n")
                self.emit("")

            self.emit('## Routes"')
            self.emit()

            # Routes within the namespace
            for route_name in sorted(namespace.routes_by_name):
                routes = namespace.routes_by_name[route_name]

                # Skip if all the route versions are deprecated
                is_deprecated = all(
                    (route.deprecated for route in routes.at_version.itervalues())
                )
                if is_deprecated:
                    continue

                self.emit('* {},'.format(route_name))

                route_versions.append(routes.at_version)

        for r in route_versions:
            self._generate_route_versions_markdown(namespace, r)

    # Generate all the versions of a route
    def _generate_route_versions_markdown(self, namespace, routes_by_version):

        composites = []

        # TODO: how to handle different versions? just use latest for now.
        route = routes_by_version.get(max(routes_by_version.keys()))

        with self.output_to_relative_path('routes/{}.mdx'.format('{}/{}'.format(namespace.name, route.name).replace('/', '-'))):

            self.emit("---")
            self.emit("name: /{}".format(route.name))
            self.emit("route: /{}/{}".format(namespace.name, route.name))
            self.emit("menu: {}".format(namespace.name))
            self.emit("---")
            self.emit("")

            self.emit("# /{}/{}".format(namespace.name, route.name))
            self.emit("")

            if route.doc:
                self.emit("### Description")
                # TODO: better parsing of description?
                self.emit_raw(route.doc.replace('\n', '\n\n').replace(':val:', '').replace(':field:', '').replace(':route:', '').replace(':type:', '')+"\n")
                self.emit("")

            self.emit("### URL Structure")
            self.emit("```")
            self.emit("https://{}.dropbox.com/{}/{}/{}".format(route.attrs.get("host", "api"), route.version, namespace.name, route.name ))
            self.emit("```")
            self.emit("")

            # TODO: more with permissions?
            # route.attrs.get("allow_app_folder_app")
            # route.attrs.get("select_admin_mode")

            # Args, returns, errors
            self.emit('import LinkedTypeExplanation from \'../../components/LinkedTypeExplanation\'')
            self.emit('')
            self._generate_route_datatype(route.arg_data_type, PARAMETER)
            self._generate_route_datatype(route.result_data_type, RETURN_VALUE)
            self._generate_route_datatype(route.error_data_type, ERROR)


    # helper to emit either complex name or struct name in routes
    def _generate_route_datatype(self, datatype, section):
        self.emit("### {}".format(section))

        while is_nullable_type(datatype) or is_list_type(datatype) or is_alias(datatype):
            datatype = datatype.data_type
        if is_void_type(datatype):
            self.emit("Void")
        elif is_user_defined_type(datatype):
            self.generate_examples(datatype, section)
            self.emit(self.fmt_type_name(datatype))
            self.emit('<LinkedTypeExplanation namespace={{"{}"}} datatype={{"{}"}} />'.format(datatype.namespace.name, datatype.name))
            self.emit("")
        else:
            raise Exception("Unexpected datatype %r" % datatype)

    def get_user_types(self, datatype):
        print datatype

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

        for tag, example in examples.iteritems():

            example_dict = example.value
            if len(example_dict) == 0:
                continue

            if section == ERROR:
                example_dict = OrderedDict(
                    [("error_summary", self._error_summary(example.value)), ("error", example.value),]
                )

                if example.text:
                    self.emit("Example: {}".format(example.text))
                elif example.label:
                    self.emit("Example: {}".format(example.label))

                self.emit("```")
                self.emit_raw(json.dumps(example_dict,   sort_keys=True, indent=4, separators=(',', ': ')) + "\n")
                self.emit("```")

            if len(examples) == 1:
                example = examples.values()[0]
                self.emit("Example")
                self.emit("```")
                self.emit_raw(json.dumps( example.value,  sort_keys=True, indent=4, separators=(',', ': ')) + "\n")
                self.emit("```")

            elif len(examples) > 1:
                if example.text:
                    self.emit("Example: {}".format(example.text))
                elif example.label:
                    self.emit("Example: {}".format(example.label))

                self.emit("```")
                self.emit_raw(json.dumps(example.value) + "\n")
                self.emit("```")

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