export default {
    "file_properties": {
        "AddTemplateArg": {
            "fields": [
                {
                    "description": "Display name for the template. Template names can be up to 256 bytes.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Description for the template. Template descriptions can be up to 1024 bytes.",
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Definitions of the property fields associated with this template. There can be up to 32 properties in a single template.",
                    "parameter": "fields",
                    "type": {
                        "list": {
                            "datatype": "PropertyFieldTemplate",
                            "namespace": "file_properties"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AddTemplateResult": {
            "fields": [
                {
                    "description": "An identifier for template added by  See :route:`templates/add_for_user` or :route:`templates/add_for_team`.",
                    "parameter": "template_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ModifyTemplateError": {
            "fields": [
                {
                    "description": "Template does not exist for the given identifier.",
                    "parameter": "template_not_found",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "You do not have permission to modify this template.",
                    "parameter": "restricted_content",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "other",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A property field key with that name already exists in the template.",
                    "parameter": "conflicting_property_names",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There are too many properties in the changed template. The maximum number of properties per template is 32.",
                    "parameter": "too_many_properties",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There are too many templates for the team.",
                    "parameter": "too_many_templates",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The template name, description or one or more of the property field keys is too large.",
                    "parameter": "template_attribute_too_large",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "PropertyFieldTemplate": {
            "description": "Defines how a single property field may be structured. Used exclusively by :type:`PropertyGroupTemplate`.",
            "fields": [
                {
                    "description": "Key of the property field being described. Property field keys can be up to 256 bytes.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Description of the property field. Property field descriptions can be up to 1024 bytes.",
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Data type of the value of this property field. This type will be enforced upon property creation and modifications.",
                    "parameter": "type",
                    "type": {
                        "datatype": "PropertyType",
                        "namespace": "file_properties"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PropertyType": {
            "description": "Data type of the given property field added.",
            "fields": [
                {
                    "description": "The associated property field will be of type string. Unicode is supported.",
                    "parameter": "string",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "other",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        }
    }
}
