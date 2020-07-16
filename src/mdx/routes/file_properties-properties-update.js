export default {
    "file_properties": {
        "LookUpPropertiesError": {
            "fields": [
                {
                    "description": "No property group was found.",
                    "parameter": "property_group_not_found",
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
        },
        "LookupError": {
            "fields": [
                {
                    "parameter": "malformed_path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "There is nothing at the given path.",
                    "parameter": "not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "We were expecting a file, but the given path refers to something that isn't a file.",
                    "parameter": "not_file",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "We were expecting a folder, but the given path refers to something that isn't a folder.",
                    "parameter": "not_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The file cannot be transferred because the content is restricted.  For example, sometimes there are legal restrictions due to copyright claims.",
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
                }
            ],
            "stone_type": "open_union"
        },
        "PropertyField": {
            "description": "Raw key/value data to be associated with a Dropbox file. Property fields are added to Dropbox files as a :type:`PropertyGroup`.",
            "fields": [
                {
                    "description": "Key of the property field associated with a file and template. Keys can be up to 256 bytes.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Value of the property field associated with a file and template. Values can be up to 1024 bytes.",
                    "parameter": "value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PropertyGroupUpdate": {
            "fields": [
                {
                    "description": "A unique identifier for a property template.",
                    "parameter": "template_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Property fields to update. If the property field already exists, it is updated. If the property field doesn't exist, the property group is added.",
                    "parameter": "add_or_update_fields",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "PropertyField",
                                "namespace": "file_properties"
                            }
                        }
                    }
                },
                {
                    "description": "Property fields to remove (by name), provided they exist.",
                    "parameter": "remove_fields",
                    "type": {
                        "optional": {
                            "list": {
                                "primitive": "String"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UpdatePropertiesArg": {
            "fields": [
                {
                    "description": "A unique identifier for the file or folder.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The property groups \"delta\" updates to apply.",
                    "parameter": "update_property_groups",
                    "type": {
                        "list": {
                            "datatype": "PropertyGroupUpdate",
                            "namespace": "file_properties"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UpdatePropertiesError": {
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
                    "parameter": "path",
                    "type": {
                        "datatype": "LookupError",
                        "namespace": "file_properties"
                    }
                },
                {
                    "description": "This folder cannot be tagged. Tagging folders is not supported for team-owned templates.",
                    "parameter": "unsupported_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "One or more of the supplied property field values is too large.",
                    "parameter": "property_field_too_large",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "One or more of the supplied property fields does not conform to the template specifications.",
                    "parameter": "does_not_fit_template",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There are 2 or more property groups referring to the same templates in the input.",
                    "parameter": "duplicate_property_groups",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "property_group_lookup",
                    "type": {
                        "datatype": "LookUpPropertiesError",
                        "namespace": "file_properties"
                    }
                }
            ],
            "stone_type": "open_union"
        }
    }
}
