export default {
    "file_properties": {
        "PropertiesSearchContinueArg": {
            "fields": [
                {
                    "description": "The cursor returned by your last call to :route:`properties/search` or :route:`properties/search/continue`.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PropertiesSearchContinueError": {
            "fields": [
                {
                    "description": "Indicates that the cursor has been invalidated. Call :route:`properties/search` to obtain a new cursor.",
                    "parameter": "reset",
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
        "PropertiesSearchMatch": {
            "fields": [
                {
                    "description": "The ID for the matched file or folder.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The path for the matched file or folder.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Whether the file or folder is deleted.",
                    "parameter": "is_deleted",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "List of custom property groups associated with the file.",
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
        "PropertiesSearchResult": {
            "fields": [
                {
                    "description": "A list (possibly empty) of matches for the query.",
                    "parameter": "matches",
                    "type": {
                        "list": {
                            "datatype": "PropertiesSearchMatch",
                            "namespace": "file_properties"
                        }
                    }
                },
                {
                    "description": "Pass the cursor into :route:`properties/search/continue` to continue to receive search results. Cursor will be null when there are no more results.",
                    "parameter": "cursor",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
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
