export default {
    "files": {
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
        "RelocationBatchArg": {
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
                },
                {
                    "description": "If true, :route:`copy_batch` will copy contents in shared folder, otherwise :field:`RelocationError.cant_copy_shared_folder` will be returned if :field:`RelocationPath.from_path` contains shared folder. This field is always true for :route:`move_batch`.",
                    "parameter": "allow_shared_folder",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Allow moves by owner even if it would result in an ownership transfer for the content being moved. This does not apply to copies.",
                    "parameter": "allow_ownership_transfer",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RelocationBatchLaunch": {
            "description": "Result returned by :route:`copy_batch` or :route:`move_batch` that may either launch an asynchronous job or complete synchronously.",
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
                        "datatype": "RelocationBatchResult",
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
        "RelocationBatchResult": {
            "fields": [
                {
                    "parameter": "entries",
                    "type": {
                        "list": {
                            "datatype": "RelocationBatchResultData",
                            "namespace": "files"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RelocationBatchResultData": {
            "fields": [
                {
                    "description": "Metadata of the relocated object.",
                    "parameter": "metadata",
                    "type": {
                        "datatype": "Metadata",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "struct"
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
        }
    }
}
