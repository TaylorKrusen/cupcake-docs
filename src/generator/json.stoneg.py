from __future__ import unicode_literals

import json

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

from stone.backends.js_helpers import (
    fmt_jsdoc_union,
    fmt_type,
    fmt_type_name,
)


class JsonBackend(CodeBackend):

    def generate(self, api):
        for namespace in api.namespaces.values():
            for data_type in namespace.data_types:
                self._generate_type(data_type)
        for namespace in api.namespaces.values():
            self._generate_namespace_json(namespace)


    def _generate_type(self, data_type):
        with self.output_to_relative_path('types/{}.json'.format(fmt_type_name(data_type))):

            if is_struct_type(data_type):
                self._generate_struct(data_type)
            elif is_union_type(data_type):
                self._generate_union(data_type)

    def _emit_type_json_header(self, type):
        self.emit("{")
        with self.indent():
            self.emit('"type":"'+format(fmt_type_name(type)+'",'))
            if type.doc:
                self.emit('"description":' + json.dumps(type.doc) + ',')

    def _emit_json_footer(self):
        self.emit("}")

    def _generate_struct(self, struct_type):
        self._emit_type_json_header(struct_type)
        with self.indent():
            self.emit('"properties":[')

            # Some structs can explicitly list their subtypes. These structs
            # have a .tag field that indicate which subtype they are.
            if struct_type.is_member_of_enumerated_subtypes_tree():
                if struct_type.has_enumerated_subtypes():
                    # This struct is the parent to multiple subtypes.
                    # Determine all of the possible values of the .tag
                    # property.
                    tag_values = []
                    for tags, _ in struct_type.get_all_subtypes_with_tags():
                        for tag in tags:
                            tag_values.append('"%s"' % tag)

                    jsdoc_tag_union = fmt_jsdoc_union(tag_values)

                    with self.indent():
                        self.emit('{')
                        with self.indent():
                            self.emit('"name":".tag",')
                            self.emit('"type":"string",')
                            self.emit('"description":"Tag identifying the subtype.",')
                            self.emit('"values":"{}"'.format(jsdoc_tag_union))

                        self.emit('},')
                else:
                    # This struct is a particular subtype. Find the applicable
                    # .tag value from the parent type, which may be an
                    # arbitrary number of steps up the inheritance hierarchy.
                    parent = struct_type.parent_type
                    while not parent.has_enumerated_subtypes():
                        parent = parent.parent_type
                    # parent now contains the closest parent type in the
                    # inheritance hierarchy that has enumerated subtypes.
                    # Determine which subtype this is.
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
                        field_js_type = fmt_type(field_type)
                        # Translate nullable types into optional properties.

                        field_name = '[' + field.name + ']' if nullable else field.name

                        self.emit('"name":"{}",'.format(field.name))
                        self.emit('"type":"{}",'.format(field_js_type))
                        self.emit('"optional":"{}",'.format(nullable))
                        if field.doc:
                            self.emit('"description":{}'.format(json.dumps(field.doc)))

                    self.emit('},')

            self.emit(']')

        self._emit_json_footer()

    def _generate_union(self, union_type):
        union_name = fmt_type_name(union_type)
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
                            self.emit('"type":"{}",'.format(fmt_type(variant_data_type)))
                            self.emit('"description":{},'.format(json.dumps(variant_doc)))

                        self.emit('},')

            with self.indent():
                self.emit('{')

                with self.indent():
                    jsdoc_tag_union = fmt_jsdoc_union(variant_types)
                    self.emit('"name":".tag",')
                    self.emit('"type":"string",')
                    self.emit('"description":"Tag identifying the union variant.",')
                    self.emit('"values":"{}"'.format(jsdoc_tag_union))
                self.emit('}')

            self.emit("]")
        self._emit_json_footer()


    # Generate a namespace json file
    def _generate_namespace_json(self, namespace):

        route_versions = []

        # If that route only has datatypes and no routes, skip.
        if not namespace.routes:
            return

        with self.output_to_relative_path('namespaces/{}.json'.format(namespace.name)):

            self.emit("{")
            with self.indent():
                self.emit('"namespace":"' + namespace.name + '",')
                if namespace.doc:
                    self.emit('"description":' + json.dumps(namespace.doc) + ',')

                self.emit('"routes": [')

                # Routes within the namespace
                for route_name in sorted(namespace.routes_by_name):
                    routes = namespace.routes_by_name[route_name]

                    # Skip if all the route versions are deprecated
                    is_deprecated = all(
                        (route.deprecated for route in routes.at_version.itervalues())
                    )
                    if is_deprecated:
                        continue

                    with self.indent():
                        self.emit('"{}",'.format(route_name))

                    route_versions.append(routes.at_version)

                self.emit(']')

            self.emit('}')

        for r in route_versions:
            self._generate_route_versions(namespace, r)

    # Generate all the versions of a route
    def _generate_route_versions(self, namespace, routes_by_version):

        composites = []

        # TODO: how to handle different versions? just use latest for now.
        route = routes_by_version.get(max(routes_by_version.keys()))

        with self.output_to_relative_path('routes/{}/{}.json'.format(namespace.name, route.name)):

            self.emit("{")
            with self.indent():
                self.emit('"route":"' + route.name + '",')
                if route.doc:
                    self.emit('"description":' + json.dumps(route.doc) + ',')

                # Meta
                self.emit('"version": {},'.format(route.version))
                self.emit('"allow_app_folder": {},'.format(route.attrs.get("allow_app_folder_app")))
                self.emit('"select_admin_mode": "{}",'.format(route.attrs.get("select_admin_mode")))
                self.emit('"format": "{}",'.format(route.attrs.get("style", "rpc")))
                self.emit('"subdomain": "{}",'.format(route.attrs.get("host", "api")))

                # Args, results, and errors
                self.emit('"arguments":"{}",'.format(self._get_route_datatype(route.arg_data_type)))
                self.emit('"result":"{}",'.format(self._get_route_datatype(route.result_data_type)))
                self.emit('"errors":"{}"'.format(self._get_route_datatype(route.error_data_type)))

            self.emit('}')

    # helper to emit either complex name or struct name in routes
    def _get_route_datatype(self, datatype):
        while (is_nullable_type(datatype) or is_list_type(datatype) or is_alias(datatype) ):
            datatype = datatype.data_type
        if is_void_type(datatype):
            return "Void"
        elif is_user_defined_type(datatype):
            return fmt_type_name(datatype)
        else:
            raise Exception("Unexpected datatype %r" % datatype)