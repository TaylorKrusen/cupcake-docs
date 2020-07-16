export default {
    "files": {
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
        "SearchArg": {
            "fields": [
                {
                    "description": "The path in the user's Dropbox to search. Should probably be a folder.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The string to search for. Query string may be rewritten to improve relevance of results. The string is split on spaces into multiple tokens. For file name searching, the last token is used for prefix matching (i.e. \"bat c\" matches \"bat cave\" but not \"batman car\").",
                    "parameter": "query",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The starting index within the search results (used for paging).",
                    "parameter": "start",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "The maximum number of search results to return.",
                    "parameter": "max_results",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "The search mode (filename, filename_and_content, or deleted_filename). Note that searching file content is only available for Dropbox Business accounts.",
                    "parameter": "mode",
                    "type": {
                        "datatype": "SearchMode",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "struct"
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
        "SearchMatch": {
            "fields": [
                {
                    "description": "The type of the match.",
                    "parameter": "match_type",
                    "type": {
                        "datatype": "SearchMatchType",
                        "namespace": "files"
                    }
                },
                {
                    "description": "The metadata for the matched file or folder.",
                    "parameter": "metadata",
                    "type": {
                        "datatype": "Metadata",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SearchMatchType": {
            "description": "Indicates what type of match was found for a given item.",
            "fields": [
                {
                    "description": "This item was matched on its file or folder name.",
                    "parameter": "filename",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This item was matched based on its file contents.",
                    "parameter": "content",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This item was matched based on both its contents and its file name.",
                    "parameter": "both",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "union"
        },
        "SearchMode": {
            "fields": [
                {
                    "description": "Search file and folder names.",
                    "parameter": "filename",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Search file and folder names as well as file contents.",
                    "parameter": "filename_and_content",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Search for deleted file and folder names.",
                    "parameter": "deleted_filename",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "union"
        },
        "SearchResult": {
            "fields": [
                {
                    "description": "A list (possibly empty) of matches for the query.",
                    "parameter": "matches",
                    "type": {
                        "list": {
                            "datatype": "SearchMatch",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "Used for paging. If true, indicates there is another page of results available that can be fetched by calling :route:`search` again.",
                    "parameter": "more",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Used for paging. Value to set the start argument to when calling :route:`search` to fetch the next page of results.",
                    "parameter": "start",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
