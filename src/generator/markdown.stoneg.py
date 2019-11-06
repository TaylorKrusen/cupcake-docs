from __future__ import unicode_literals

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

class MarkdownBackend(CodeBackend):

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

        with self.output_to_relative_path('routes/{}/{}.md'.format(namespace.name, route.name)):

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
        subtypes = []

        with self.output_to_relative_path('types/{}.md'.format(datatype.name)):

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