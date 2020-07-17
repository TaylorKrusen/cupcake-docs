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
        "MoveIntoVaultError": {
            "fields": [
                {
                    "description": "Moving shared folder into Vault is not allowed.",
                    "parameter": "is_shared_folder",
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
        "RelocationBatchArgBase": {
            "fields": [
                {
                    "description": "List of entries to be moved or copied. Each entry is :type:`RelocationPath`.",
                    "parameter": "entries",
                    "type": {
                        "list": {
                            "datatype": "RelocationPath",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "If there's a conflict with any file, have the Dropbox server try to autorename that file to avoid the conflict.",
                    "parameter": "autorename",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RelocationBatchErrorEntry": {
            "fields": [
                {
                    "description": "User errors that retry won't help.",
                    "parameter": "relocation_error",
                    "type": {
                        "datatype": "RelocationError",
                        "namespace": "files"
                    }
                },
                {
                    "description": "Something went wrong with the job on Dropbox's end. You'll need to verify that the action you were taking succeeded, and if not, try again. This should happen very rarely.",
                    "parameter": "internal_error",
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
        },
        "RelocationBatchResultEntry": {
            "fields": [
                {
                    "parameter": "success",
                    "type": {
                        "datatype": "Metadata",
                        "namespace": "files"
                    }
                },
                {
                    "parameter": "failure",
                    "type": {
                        "datatype": "RelocationBatchErrorEntry",
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
        "RelocationBatchV2Launch": {
            "description": "Result returned by :route:`copy_batch:2` or :route:`move_batch:2` that may either launch an asynchronous job or complete synchronously.",
            "fields": [
                {
                    "description": "This response indicates that the processing is asynchronous. The string is an id that can be used to obtain the status of the asynchronous job.",
                    "parameter": "async_job_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "parameter": "complete",
                    "type": {
                        "datatype": "RelocationBatchV2Result",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "union"
        },
        "RelocationBatchV2Result": {
            "fields": [
                {
                    "description": "Each entry in CopyBatchArg.entries or :field:`MoveBatchArg.entries` will appear at the same position inside :field:`RelocationBatchV2Result.entries`.",
                    "parameter": "entries",
                    "type": {
                        "list": {
                            "datatype": "RelocationBatchResultEntry",
                            "namespace": "files"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RelocationError": {
            "fields": [
                {
                    "parameter": "from_lookup",
                    "type": {
                        "datatype": "LookupError",
                        "namespace": "files"
                    }
                },
                {
                    "parameter": "from_write",
                    "type": {
                        "datatype": "WriteError",
                        "namespace": "files"
                    }
                },
                {
                    "parameter": "to",
                    "type": {
                        "datatype": "WriteError",
                        "namespace": "files"
                    }
                },
                {
                    "description": "Shared folders can't be copied.",
                    "parameter": "cant_copy_shared_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Your move operation would result in nested shared folders.  This is not allowed.",
                    "parameter": "cant_nest_shared_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "You cannot move a folder into itself.",
                    "parameter": "cant_move_folder_into_itself",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The operation would involve more than 10,000 files and folders.",
                    "parameter": "too_many_files",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There are duplicated/nested paths among :field:`RelocationArg.from_path` and :field:`RelocationArg.to_path`.",
                    "parameter": "duplicated_or_nested_paths",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Your move operation would result in an ownership transfer. You may reissue the request with the field :field:`RelocationArg.allow_ownership_transfer` to true.",
                    "parameter": "cant_transfer_ownership",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The current user does not have enough space to move or copy the files.",
                    "parameter": "insufficient_quota",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Something went wrong with the job on Dropbox's end. You'll need to verify that the action you were taking succeeded, and if not, try again. This should happen very rarely.",
                    "parameter": "internal_error",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Can't move the shared folder to the given destination.",
                    "parameter": "cant_move_shared_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Some content cannot be moved into Vault under certain circumstances, see detailed error.",
                    "parameter": "cant_move_into_vault",
                    "type": {
                        "datatype": "MoveIntoVaultError",
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
        "RelocationPath": {
            "fields": [
                {
                    "description": "Path in the user's Dropbox to be copied or moved.",
                    "parameter": "from_path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Path in the user's Dropbox that is the destination.",
                    "parameter": "to_path",
                    "type": {
                        "primitive": "String"
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
