export default {
    "file_properties": {
        "LogicalOperator": {
            "description": "Logical operator to join search queries together.",
            "fields": [
                {
                    "description": "Append a query with an \"or\" operator.",
                    "parameter": "or_operator",
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
        "PropertiesSearchArg": {
            "fields": [
                {
                    "description": "Queries to search.",
                    "parameter": "queries",
                    "type": {
                        "list": {
                            "datatype": "PropertiesSearchQuery",
                            "namespace": "file_properties"
                        }
                    }
                },
                {
                    "description": "Filter results to contain only properties associated with these template IDs.",
                    "parameter": "template_filter",
                    "type": {
                        "datatype": "TemplateFilter",
                        "namespace": "file_properties"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PropertiesSearchError": {
            "fields": [
                {
                    "parameter": "property_group_lookup",
                    "type": {
                        "datatype": "LookUpPropertiesError",
                        "namespace": "file_properties"
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
        "PropertiesSearchMode": {
            "fields": [
                {
                    "description": "Search for a value associated with this field name.",
                    "parameter": "field_name",
                    "type": {
                        "primitive": "String"
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
        "PropertiesSearchQuery": {
            "fields": [
                {
                    "description": "The property field value for which to search across templates.",
                    "parameter": "query",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The mode with which to perform the search.",
                    "parameter": "mode",
                    "type": {
                        "datatype": "PropertiesSearchMode",
                        "namespace": "file_properties"
                    }
                },
                {
                    "description": "The logical operator with which to append the query.",
                    "parameter": "logical_operator",
                    "type": {
                        "datatype": "LogicalOperator",
                        "namespace": "file_properties"
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
        },
        "TemplateFilter": {
            "fields": [
                {
                    "description": "Only templates with an ID in the supplied list will be returned (a subset of templates will be returned).",
                    "parameter": "filter_some",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "parameter": "other",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "No templates will be filtered from the result (all templates will be returned).",
                    "parameter": "filter_none",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        }
    }
}
