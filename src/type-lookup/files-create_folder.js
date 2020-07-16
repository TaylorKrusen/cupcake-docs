export default {
    "file_properties": {
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
    },
    "files": {
        "CreateFolderArg": {
            "fields": [
                {
                    "description": "Path in the user's Dropbox to create.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "If there's a conflict, have the Dropbox server try to autorename the folder to avoid the conflict.",
                    "parameter": "autorename",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "CreateFolderError": {
            "fields": [
                {
                    "parameter": "path",
                    "type": {
                        "datatype": "WriteError",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "union"
        },
        "FolderMetadata": {
            "fields": [
                {
                    "description": "The last component of the path (including extension). This never contains a slash.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A unique identifier for the folder.",
                    "parameter": "id",
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
                },
                {
                    "description": "Please use :field:`sharing_info` instead.",
                    "parameter": "shared_folder_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Set if the folder is contained in a shared folder or is a shared folder mount point.",
                    "parameter": "sharing_info",
                    "type": {
                        "optional": {
                            "datatype": "FolderSharingInfo",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "Additional information if the file has custom properties with the property template specified. Note that only properties associated with user-owned templates, not team-owned templates, can be attached to folders.",
                    "parameter": "property_groups",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "PropertyGroup",
                                "namespace": "file_properties"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "FolderSharingInfo": {
            "description": "Sharing info for a folder which is contained in a shared folder or is a shared folder mount point.",
            "fields": [
                {
                    "description": "True if the file or folder is inside a read-only shared folder.",
                    "parameter": "read_only",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Set if the folder is contained by a shared folder.",
                    "parameter": "parent_shared_folder_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "If this folder is a shared folder mount point, the ID of the shared folder mounted at this location.",
                    "parameter": "shared_folder_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Specifies that the folder can only be traversed and the user can only see a limited subset of the contents of this folder because they don't have read access to this folder. They do, however, have access to some sub folder.",
                    "parameter": "traverse_only",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Specifies that the folder cannot be accessed by the user.",
                    "parameter": "no_access",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WriteConflictError": {
            "fields": [
                {
                    "description": "There's a file in the way.",
                    "parameter": "file",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There's a folder in the way.",
                    "parameter": "folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There's a file at an ancestor path, so we couldn't create the required parent folders.",
                    "parameter": "file_ancestor",
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
        "WriteError": {
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
                    "description": "Couldn't write to the target path because there was something in the way.",
                    "parameter": "conflict",
                    "type": {
                        "datatype": "WriteConflictError",
                        "namespace": "files"
                    }
                },
                {
                    "description": "The user doesn't have permissions to write to the target location.",
                    "parameter": "no_write_permission",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user doesn't have enough available space (bytes) to write more data.",
                    "parameter": "insufficient_space",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Dropbox will not save the file or folder because of its name.",
                    "parameter": "disallowed_name",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This endpoint cannot move or delete team folders.",
                    "parameter": "team_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There are too many write operations in user's Dropbox. Please retry this request.",
                    "parameter": "too_many_write_operations",
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
        }
    }
}
