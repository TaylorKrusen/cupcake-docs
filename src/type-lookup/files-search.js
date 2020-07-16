export default {
    "files": {
        "FileCategory": {
            "fields": [
                {
                    "description": "jpg, png, gif, and more.",
                    "parameter": "image",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "doc, docx, txt, and more.",
                    "parameter": "document",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "pdf.",
                    "parameter": "pdf",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "xlsx, xls, csv, and more.",
                    "parameter": "spreadsheet",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "ppt, pptx, key, and more.",
                    "parameter": "presentation",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "mp3, wav, mid, and more.",
                    "parameter": "audio",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "mov, wmv, mp4, and more.",
                    "parameter": "video",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "dropbox folder.",
                    "parameter": "folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "dropbox paper doc.",
                    "parameter": "paper",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "any file not in one of the categories above.",
                    "parameter": "others",
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
        "FileStatus": {
            "fields": [
                {
                    "parameter": "active",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "deleted",
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
        "SearchMatchFieldOptions": {
            "fields": [
                {
                    "description": "Whether to include highlight span from file title.",
                    "parameter": "include_highlights",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
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
        "SearchOptions": {
            "fields": [
                {
                    "description": "Scopes the search to a path in the user's Dropbox. Searches the entire Dropbox if not specified.",
                    "parameter": "path",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
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
                    "description": "Restricts search to the given file status.",
                    "parameter": "file_status",
                    "type": {
                        "datatype": "FileStatus",
                        "namespace": "files"
                    }
                },
                {
                    "description": "Restricts search to only match on filenames.",
                    "parameter": "filename_only",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Restricts search to only the extensions specified. Only supported for active file search.",
                    "parameter": "file_extensions",
                    "type": {
                        "optional": {
                            "list": {
                                "primitive": "String"
                            }
                        }
                    }
                },
                {
                    "description": "Restricts search to only the file categories specified. Only supported for active file search.",
                    "parameter": "file_categories",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "FileCategory",
                                "namespace": "files"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SearchV2Arg": {
            "fields": [
                {
                    "description": "The string to search for. May match across multiple fields based on the request arguments. Query string may be rewritten to improve relevance of results.",
                    "parameter": "query",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Options for more targeted search results.",
                    "parameter": "options",
                    "type": {
                        "optional": {
                            "datatype": "SearchOptions",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "Options for search results match fields.",
                    "parameter": "match_field_options",
                    "type": {
                        "optional": {
                            "datatype": "SearchMatchFieldOptions",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "Deprecated and moved this option to SearchMatchFieldOptions.",
                    "parameter": "include_highlights",
                    "type": {
                        "primitive": "Boolean"
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
