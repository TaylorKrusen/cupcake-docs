export default {
    "files": {
        "HighlightSpan": {
            "fields": [
                {
                    "description": "String to be determined whether it should be highlighted or not.",
                    "parameter": "highlight_str",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The string should be highlighted or not.",
                    "parameter": "is_highlighted",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LookupError": {
            "fields": [
                {
                    "description": "The given path does not satisfy the required path format. Please refer to the :link:`Path formats documentation https://www.dropbox.com/developers/documentation/http/documentation#path-formats` for more information.",
                    "parameter": "malformed_path",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
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
                    "description": "This operation is not supported for this content type.",
                    "parameter": "unsupported_content_type",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The given path is locked.",
                    "parameter": "locked",
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
        "Metadata": {
            "description": "Metadata for a file or folder.",
            "fields": [
                {
                    "description": "The last component of the path (including extension). This never contains a slash.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The lowercased full path in the user's Dropbox. This always starts with a slash. This field will be null if the file or folder is not mounted.",
                    "parameter": "path_lower",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The cased path to be used for display purposes only. In rare instances the casing will not correctly match the user's filesystem, but this behavior will match the path provided in the Core API v1, and at least the last path component will have the correct casing. Changes to only the casing of paths won't be returned by :route:`list_folder/continue`. This field will be null if the file or folder is not mounted.",
                    "parameter": "path_display",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Please use :field:`FileSharingInfo.parent_shared_folder_id` or :field:`FolderSharingInfo.parent_shared_folder_id` instead.",
                    "parameter": "parent_shared_folder_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "MetadataV2": {
            "description": "Metadata for a file, folder or other resource types.",
            "fields": [
                {
                    "parameter": "metadata",
                    "type": {
                        "datatype": "Metadata",
                        "namespace": "files"
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
        "SearchError": {
            "fields": [
                {
                    "parameter": "path",
                    "type": {
                        "datatype": "LookupError",
                        "namespace": "files"
                    }
                },
                {
                    "parameter": "invalid_argument",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Something went wrong, please try again.",
                    "parameter": "internal_error",
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
        "SearchMatchV2": {
            "fields": [
                {
                    "description": "The metadata for the matched file or folder.",
                    "parameter": "metadata",
                    "type": {
                        "datatype": "MetadataV2",
                        "namespace": "files"
                    }
                },
                {
                    "description": "The list of HighlightSpan determines which parts of the file title should be highlighted.",
                    "parameter": "highlight_spans",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "HighlightSpan",
                                "namespace": "files"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SearchV2ContinueArg": {
            "fields": [
                {
                    "description": "The cursor returned by your last call to :route:`search:2`. Used to fetch the next page of results.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SearchV2Result": {
            "fields": [
                {
                    "description": "A list (possibly empty) of matches for the query.",
                    "parameter": "matches",
                    "type": {
                        "list": {
                            "datatype": "SearchMatchV2",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "Used for paging. If true, indicates there is another page of results available that can be fetched by calling :route:`search/continue:2` with the cursor.",
                    "parameter": "has_more",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Pass the cursor into :route:`search/continue:2` to fetch the next page of results.",
                    "parameter": "cursor",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
