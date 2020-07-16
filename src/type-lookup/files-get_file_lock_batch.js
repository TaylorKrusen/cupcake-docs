export default {
    "files": {
        "FileLock": {
            "fields": [
                {
                    "description": "The lock description.",
                    "parameter": "content",
                    "type": {
                        "datatype": "FileLockContent",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileLockContent": {
            "fields": [
                {
                    "description": "Empty type to indicate no lock.",
                    "parameter": "unlocked",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A lock held by a single user.",
                    "parameter": "single_user",
                    "type": {
                        "datatype": "SingleUserLock",
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
        "LockConflictError": {
            "fields": [
                {
                    "description": "The lock that caused the conflict.",
                    "parameter": "lock",
                    "type": {
                        "datatype": "FileLock",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LockFileArg": {
            "fields": [
                {
                    "description": "Path in the user's Dropbox to a file.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LockFileBatchArg": {
            "fields": [
                {
                    "description": "List of 'entries'. Each 'entry' contains a path of the file which will be locked or queried. Duplicate path arguments in the batch are considered only once.",
                    "parameter": "entries",
                    "type": {
                        "list": {
                            "datatype": "LockFileArg",
                            "namespace": "files"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LockFileBatchResult": {
            "fields": [
                {
                    "description": "Each Entry in the 'entries' will have '.tag' with the operation status (e.g. success), the metadata for the file and the lock state after the operation.",
                    "parameter": "entries",
                    "type": {
                        "list": {
                            "datatype": "LockFileResultEntry",
                            "namespace": "files"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LockFileError": {
            "fields": [
                {
                    "description": "Could not find the specified resource.",
                    "parameter": "path_lookup",
                    "type": {
                        "datatype": "LookupError",
                        "namespace": "files"
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
                    "description": "There are too many files in one request. Please retry with fewer files.",
                    "parameter": "too_many_files",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user does not have permissions to change the lock state or access the file.",
                    "parameter": "no_write_permission",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Item is a type that cannot be locked.",
                    "parameter": "cannot_be_locked",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Requested file is not currently shared.",
                    "parameter": "file_not_shared",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user action conflicts with an existing lock on the file.",
                    "parameter": "lock_conflict",
                    "type": {
                        "datatype": "LockConflictError",
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
                    "parameter": "other",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "LockFileResult": {
            "fields": [
                {
                    "description": "Metadata of the file.",
                    "parameter": "metadata",
                    "type": {
                        "datatype": "Metadata",
                        "namespace": "files"
                    }
                },
                {
                    "description": "The file lock state after the operation.",
                    "parameter": "lock",
                    "type": {
                        "datatype": "FileLock",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LockFileResultEntry": {
            "fields": [
                {
                    "parameter": "success",
                    "type": {
                        "datatype": "LockFileResult",
                        "namespace": "files"
                    }
                },
                {
                    "parameter": "failure",
                    "type": {
                        "datatype": "LockFileError",
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
        },
        "SingleUserLock": {
            "fields": [
                {
                    "description": "The time the lock was created.",
                    "parameter": "created",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "The account ID of the lock holder if known.",
                    "parameter": "lock_holder_account_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The id of the team of the account holder if it exists.",
                    "parameter": "lock_holder_team_id",
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
