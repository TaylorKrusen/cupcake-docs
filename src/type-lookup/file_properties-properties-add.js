export default {
    "file_properties": {
        "AddPropertiesArg": {
            "fields": [
                {
                    "description": "A unique identifier for the file or folder.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The property groups which are to be added to a Dropbox file. No two groups in the input should  refer to the same template.",
                    "parameter": "property_groups",
                    "type": {
                        "list": {
                            "datatype": "PropertyGroup",
                            "namespace": "file_properties"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AddPropertiesError": {
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
                    "description": "A property group associated with this template and file already exists.",
                    "parameter": "property_group_already_exists",
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
        "PropertyGroup": {
            "description": "A subset of the property fields described by the corresponding :type:`PropertyGroupTemplate`. Properties are always added to a Dropbox file as a :type:`PropertyGroup`. The possible key names and value types in this group are defined by the corresponding :type:`PropertyGroupTemplate`.",
            "fields": [
                {
                    "description": "A unique identifier for the associated template.",
                    "parameter": "template_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The actual properties associated with the template. There can be up to 32 property types per template.",
                    "parameter": "fields",
                    "type": {
                        "list": {
                            "datatype": "PropertyField",
                            "namespace": "file_properties"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
