export default {
    "file_properties": {
        "TemplateFilterBase": {
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
                }
            ],
            "stone_type": "open_union"
        }
    },
    "files": {
        "GetMetadataArg": {
            "fields": [
                {
                    "description": "The path of a file or folder on Dropbox.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "If true, :field:`FileMetadata.media_info` is set for photo and video.",
                    "parameter": "include_media_info",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If true, :type:`DeletedMetadata` will be returned for deleted file or folder, otherwise :field:`LookupError.not_found` will be returned.",
                    "parameter": "include_deleted",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If true, the results will include a flag for each file indicating whether or not  that file has any explicit members.",
                    "parameter": "include_has_explicit_shared_members",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If set to a valid list of template IDs, :field:`FileMetadata.property_groups` is set if there exists property data associated with the file and each of the listed templates.",
                    "parameter": "include_property_groups",
                    "type": {
                        "optional": {
                            "datatype": "TemplateFilterBase",
                            "namespace": "file_properties"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GetMetadataError": {
            "fields": [
                {
                    "parameter": "path",
                    "type": {
                        "datatype": "LookupError",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "union"
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
        }
    }
}
