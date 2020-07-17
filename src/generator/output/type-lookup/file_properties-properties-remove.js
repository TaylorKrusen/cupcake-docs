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
        "RemovePropertiesArg": {
            "fields": [
                {
                    "description": "A unique identifier for the file or folder.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A list of identifiers for a template created by :route:`templates/add_for_user` or :route:`templates/add_for_team`.",
                    "parameter": "property_template_ids",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RemovePropertiesError": {
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
