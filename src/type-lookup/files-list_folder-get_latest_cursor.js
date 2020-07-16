export default {
    "file_properties": {
        "TemplateError": {
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
                }
            ],
            "stone_type": "open_union"
        },
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
        "ListFolderArg": {
            "fields": [
                {
                    "description": "A unique identifier for the file.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "If true, the list folder operation will be applied recursively to all subfolders and the response will contain contents of all subfolders.",
                    "parameter": "recursive",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If true, :field:`FileMetadata.media_info` is set for photo and video. This parameter will no longer have an effect starting December 2, 2019.",
                    "parameter": "include_media_info",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If true, the results will include entries for files and folders that used to exist but were deleted.",
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
                    "description": "If true, the results will include entries under mounted folders which includes app folder, shared folder and team folder.",
                    "parameter": "include_mounted_folders",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases.",
                    "parameter": "limit",
                    "type": {
                        "optional": {
                            "primitive": "UInt32"
                        }
                    }
                },
                {
                    "description": "A shared link to list the contents of. If the link is password-protected, the password must be provided. If this field is present, :field:`ListFolderArg.path` will be relative to root of the shared link. Only non-recursive mode is supported for shared link.",
                    "parameter": "shared_link",
                    "type": {
                        "optional": {
                            "datatype": "SharedLink",
                            "namespace": "files"
                        }
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
                },
                {
                    "description": "If true, include files that are not downloadable, i.e. Google Docs.",
                    "parameter": "include_non_downloadable_files",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ListFolderError": {
            "fields": [
                {
                    "parameter": "path",
                    "type": {
                        "datatype": "LookupError",
                        "namespace": "files"
                    }
                },
                {
                    "parameter": "template_error",
                    "type": {
                        "datatype": "TemplateError",
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
        "ListFolderGetLatestCursorResult": {
            "fields": [
                {
                    "description": "Pass the cursor into :route:`list_folder/continue` to see what's changed in the folder since your previous query.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
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
        "SharedLink": {
            "fields": [
                {
                    "description": "Shared link url.",
                    "parameter": "url",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Password for the shared link.",
                    "parameter": "password",
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
