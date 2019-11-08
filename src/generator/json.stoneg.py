from __future__ import unicode_literals

import json

from collections import OrderedDict, defaultdict

import sys

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

class JsonBackend(CodeBackend):
    def generate(self, api):
        # get datatype JSON files first; assume they're present in md section
        data_dict = {}
        for namespace in api.namespaces.values():
            namespace_dict = {}
            for data_type in namespace.data_types:
                if namespace.name == data_type.namespace.name:
                    namespace_dict[data_type.name] = self._generate_type_json(data_type)
            data_dict[namespace.name] = namespace_dict

        with self.output_to_relative_path('alltypes.js'):
            self.emit(u'export default {}'.format(json.dumps(data_dict)))

    def _generate_type_json(self, data_type):
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
                
    _base_type_table = {
        Boolean: 'Boolean',
        Bytes: 'Bytes',
        Float32: 'Float32',
        Float64: 'Float64',
        Int32: 'Int32',
        Int64: 'Int64',
        List: 'List',
        String: 'String',
        UInt32: 'UInt32',
        UInt64: 'UInt64',
        Timestamp: 'Timestamp',
        Void: 'Void',
    }
        