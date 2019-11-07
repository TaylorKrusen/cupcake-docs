from __future__ import unicode_literals
import sys
from contextlib import contextmanager

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
)

def primitive_type_data(datatype):
    assert is_primitive_type(datatype)
    validator = None
    if is_void_type(datatype):
        type_name = "Void"
    elif is_boolean_type(datatype):
        type_name = "Boolean"
        self.emit(left_type_name+"Boolean"+right_type_name)
    elif is_timestamp_type(datatype):
        type_name = "Timestamp"
        if datatype.format is not None:
            validator = validator or {}
            validator["format"] = datatype.format
    elif is_string_type(datatype):
        type_name = "String"
        if datatype.min_length is not None:
            validator = validator or {}
            validator["min_length"] = datatype.min_length
        if datatype.max_length is not None:
            validator = validator or {}
            validator["max_length"] = datatype.max_length
        if datatype.pattern is not None:
            validator = validator or {}
            validator["pattern"] = datatype.pattern
    elif is_numeric_type(datatype):
        type_name = "Numeric"
    else:
        assert False, "Unexpected datatype %r" % datatype
    data = {"typeName": type_name}
    if validator:
        data["validator"] = validator
    return data


class YamlEmitter(object):
    def __init__(self):
        self.buffer = []
        self.indent = 0
    
    @contextmanager
    def indent(self):
        self.indent += 2
        yield
        self.indent -= 2
    
    def newline(self):
        self.buffer.append('\n')
        self.buffer.append(' ' * self.indent)
    
    def emit(self, value):
        pieces = value.splitlines()
        if len(pieces) == 0:
            return
        self.buffer.append(pieces[0])
        for piece in pieces[1:]:
            self.newline()
            self.buffer.append(value)
    
    def result(self):
        return ''.join(self.buffer)

    def emit_yaml(self, yaml) :
        if isinstance(yaml, bool):
            self.emit('true' if yaml else 'false')
        elif isinstance(yaml, int) or isinstance(yaml, long) or isinstance(yaml, float):
            self.emit('{}'.format(yaml))
        elif isinstance(yaml, list):
            if len(yaml) == 0:
                self.emit('[]')
            else:
                for item in yaml:
                    self.emit('- ')
                    with self.indent():
                        self.emit_yaml(item)
        elif isinstance(yaml, dict):
            if len(yaml) == 0:
                self.emit('{}')
            else:
                assert isinstance(key, str) or isinstance(key, unicode)
                for key in yaml:
                    self.emit('{}: '.format(key))
                    with self.indent():
                        self.emit_yaml(yaml[key])
        elif isinstance(yaml, str) or isinstance(yaml, unicode):
            self.emit('{}'.format(yaml.replace('"', '\"').replace('\n', '\\n').replace('\\', '\\\\')))
        else:
            assert False, 'unexpected type: {}'.format(typeof(yaml))


class TypeGenerator(object):
    def __init__(self):
        self.generated_types = {}
    
    def add_type(self, datatype) :
        if datatype.namespace.name not in self.generated_types:
            self.generated_types[datatype.namespace.name] = {}
        namespace_dict = self.generated_types[datatype.namespace.name]
        if datatype.name in namespace_dict:
            return
        datatype_dict = {}


        if is_union_type(datatype):
            if datatype.closed:
                datatype_dict["kind"] = "union"
            else:
                datatype_dict["kind"] = "open_union"
        else:
            datatype_dict["kind"] = "struct"
        
        if datatype.doc is not None:
            datatype_dict["explanation"] = datatype.doc

        datatype_dict["members"] = [self._add_field(field) for field in datatype.all_fields]
        namespace_dict[datatype.name] = datatype_dict
        
    def _add_field(self, field):
        member = {}

        datatype = field.data_type

        # Unroll maps, lists, aliases, and nullables
        while (is_nullable_type(datatype) or is_list_type(datatype) or is_map_type(datatype) or is_alias(datatype)):
            if is_list_type(datatype):
                member["list"] = True
            elif is_map_type(datatype):
                assert False, "wow a map {}".format(datatype)
                member["map"] = True
            elif is_nullable_type(datatype):
                left_type_name = left_type_name + "Optional "
                member["optional"] = True
            if is_map_type(datatype):
                datatype = datatype.value_data_type
            else:
                datatype = datatype.data_type

        if is_user_defined_type(datatype):
            member["type"] = {"namespace": datatype.namespace.name, "datatype": datatype.name}
            self.add_type(datatype)

        elif is_primitive_type(datatype):
            data = primitive_type_data(datatype)
            member.extend(data)
        else:
            raise Exception("Unexpected datatype %r" % datatype)
        
        if field.doc is not None:
            member["explanation"] = field.doc
        
        return member


class MarkdownBackend(CodeBackend):

    def __init__(self, *args, **kwargs):
        super(MarkdownBackend, self).__init__(*args, **kwargs)
        self.type_file_counter = 0
        self.generated_types = {}
    
    def _has_already_generated_type(self, datatype):
        namespace_name = datatype.namespace.name
        datatype_name = datatype.name
        if datatype_name == 'PollError':
            print >> sys.stderr, namespace_name, datatype_name, self.generated_types
        if namespace_name not in self.generated_types:
            self.generated_types[namespace_name] = {datatype_name}
            if datatype_name == 'PollError':
                print >> sys.stderr, 'no namespace'
            return False
        namespace = self.generated_types[namespace_name]
        if datatype_name not in namespace:
            namespace.add(datatype_name)
            if datatype_name == 'PollError':
                print >> sys.stderr, 'no datatype'
            return False
        if datatype_name == 'PollError':
            print >> sys.stderr, 'already there'
        return True 

    def generate(self, api):
        """Generates a module for each namespace."""
        for namespace in api.namespaces.values():
            # One module per namespace is created. The module takes the name
            # of the namespace.
            self._generate_namespace_md(namespace)

    # Generate a namespace
    def _generate_namespace_md(self, namespace):

        route_versions = []

        with self.output_to_relative_path('namespaces/{}.md'.format(namespace.name)):

            # If that route only has datatypes and no routes, skip.
            if not namespace.routes:
                return

            # Namespace
            self.emit("# "+namespace.name)
            self.emit_raw("\n")

            # Top level namespace doc.
            # TODO: parse this with process_doc
            if namespace.doc is not None:
                self.emit("## Doc")
                self.emit_raw(namespace.doc)
                self.emit_raw("\n")

            # Routes within the namespace
            self.emit("## Routes")
            self.emit_raw("\n")

            for route_name in sorted(namespace.routes_by_name):
                routes = namespace.routes_by_name[route_name]

                # Skip if all the route versions are deprecated
                is_deprecated = all(
                    (route.deprecated for route in routes.at_version.itervalues())
                )
                if is_deprecated:
                    continue

                self.emit("* "+route_name)
                route_versions.append(routes.at_version)

        for r in route_versions:
            self._generate_route_versions(namespace, r)

    # Generate all the versions of a route
    def _generate_route_versions(self, namespace, routes_by_version):

        composites = []

        # TODO: how to handle different versions? just use latest for now.
        route = routes_by_version.get(max(routes_by_version.keys()))

        frontmatter = {}
        frontmatter["namespace"] = namespace.name
        frontmatter["endpoint"] = route.name
        frontmatter["route"] = "/{}/{}".format(namespace.name, route.name)
        if deprecated:
            frontmatter["deprecated"] = str(route.deprecated)
        frontmatter["description"] = route.doc
        frontmatter.extend({key: str(value) for (key, value) in route.attrs.iteritems()})
        frontmatter["isDeprec"]

        with self.output_to_relative_path('routes/{}/{}.md'.format(namespace.name, route.name)):
            self.emit('---')

            # Route name
            self.emit("# {}/{}".format(namespace.name, route.name))
            self.emit_raw("\n")

            # Meta
            self.emit("## Meta")
            self.emit("* version: {}".format(route.version))
            self.emit("* allow app folder: {}".format(route.attrs.get("allow_app_folder_app")))
            self.emit("* select admin-mode: {}".format(route.attrs.get("select_admin_mode")))
            self.emit("* format: {}".format(route.attrs.get("style", "rpc")))
            self.emit("* subdomain: {}".format(route.attrs.get("host", "api")))
            self.emit_raw("\n")

            # Route doc
            if route.doc is not None:
                self.emit("## Doc")
                self.emit_raw(route.doc+"\n")
                self.emit_raw("\n")

            # Args, results, and errors
            self.emit("## Argument")
            self._generate_route_datatype(route.arg_data_type, composites)

            self.emit("## Result")
            self._generate_route_datatype(route.result_data_type, composites)

            self.emit("## Error")
            self._generate_route_datatype(route.error_data_type, composites)

        for dt in composites:
            self.generate_composite(dt)

    # helper to emit either complex name or struct name in routes
    def _generate_route_datatype(self, datatype, composites):
        while (is_nullable_type(datatype) or is_list_type(datatype) or is_alias(datatype) ):
            datatype = datatype.data_type
        if is_void_type(datatype):
            self.emit("Void")
        elif is_user_defined_type(datatype):
            self.emit(datatype.name)
            composites.append(datatype)
        else:
            raise Exception("Unexpected datatype %r" % datatype)

    # generate complex data types
    def generate_composite(self, datatype):
        if self._has_already_generated_type(datatype):
            return

        subtypes = []

        self.type_file_counter += 1
        with self.output_to_relative_path('types/{}.md'.format(self.type_file_counter)):
            self.emit('---')
            self.emit('namespace: {}'.format(datatype.namespace.name))
            self.emit('dataname: {}'.format(datatype.name))
            self.emit('---')
            self.emit("# {}".format(datatype.name))

            if is_union_type(datatype):
                self.emit("Union")

            if datatype.doc is not None:
                self.emit("## Doc")
                self.emit_raw(datatype.doc+"\n")
                self.emit_raw("\n")

            self.emit("## Fields")
            for field in datatype.all_fields:
                self._generate_field(field, subtypes)

        # Nested composites
        for dt in subtypes:
            self.generate_composite(dt)

    def _generate_field(self, field, subtypes):
        datatype = field.data_type

        self.emit("### "+field.name)

        left_type_name = ""
        right_type_name = ""

        # Unroll maps, lists, aliases, and nullables
        while (is_nullable_type(datatype) or is_list_type(datatype) or is_map_type(datatype) or is_alias(datatype)):
            if is_list_type(datatype):
                left_type_name = left_type_name + "List of ("
                right_type_name = right_type_name + ")"
            elif is_map_type(datatype):
                left_type_name = left_type_name + "Map of ("
                right_type_name = right_type_name + ")"
            elif is_nullable_type(datatype):
                left_type_name = left_type_name + "Optional "

            if is_map_type(datatype):
                datatype = datatype.value_data_type
            else:
                datatype = datatype.data_type

        if is_user_defined_type(datatype):
            self.emit(left_type_name+"Type "+datatype.name+right_type_name)
            subtypes.append(datatype)

        # TODO: get min & max lengths, allowed values
        elif is_primitive_type(datatype):
            if is_void_type(datatype):
                pass
            elif is_boolean_type(datatype):
                self.emit(left_type_name+"Boolean"+right_type_name)
            elif is_timestamp_type(datatype):
                self.emit(left_type_name+"Timestamp"+right_type_name)
            elif is_string_type(datatype):
                self.emit(left_type_name+"String"+right_type_name)
            elif is_numeric_type(datatype):
                self.emit(left_type_name+"Numeric"+right_type_name)
            else:
                raise Exception("Unexpected datatype %r" % datatype)
        else:
            raise Exception("Unexpected datatype %r" % datatype)

        if field.doc is not None:
            self.emit_raw(field.doc + "\n")
            self.emit_raw("\n")
