export default {
    "cloud_docs": {
        "GenericErrorTag": {
            "fields": [
                {
                    "description": "Invalid argument supplied.",
                    "parameter": "invalid_argument",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User is unauthenticated.",
                    "parameter": "unauthenticated",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User does not have access to the specified doc.",
                    "parameter": "permission_denied",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Doc could not be found based on the supplied doc ID.",
                    "parameter": "doc_not_found",
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
        "LockingErrorTag": {
            "fields": [
                {
                    "description": "A lock on the doc is held by another editor",
                    "parameter": "conflict",
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
        "RenameArg": {
            "fields": [
                {
                    "description": "The API ID (\"id:...\") associated with the Cloud Doc",
                    "parameter": "file_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The new title of the doc, excluding extension",
                    "parameter": "title",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RenameError": {
            "fields": [
                {
                    "parameter": "rename_error_tag",
                    "type": {
                        "optional": {
                            "datatype": "rename_error_tag_union",
                            "namespace": "cloud_docs"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RenameErrorTag": {
            "fields": [
                {
                    "description": "The supplied title is invalid, e.g. the length of the title is longer than max length (255 characters); the title contains illegal characters.",
                    "parameter": "invalid_title",
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
        "RenameResult": {
            "fields": [
                {
                    "description": "The updated title of the doc without extension, which could be different from the supplied title in the request because Dropbox may remove/replace charaters that are not supported in Dropbox Filesystem.",
                    "parameter": "title",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "rename_error_tag_union": {
            "fields": [
                {
                    "parameter": "rename_error",
                    "type": {
                        "datatype": "RenameErrorTag",
                        "namespace": "cloud_docs"
                    }
                },
                {
                    "parameter": "generic_error",
                    "type": {
                        "datatype": "GenericErrorTag",
                        "namespace": "cloud_docs"
                    }
                },
                {
                    "parameter": "locking_error",
                    "type": {
                        "datatype": "LockingErrorTag",
                        "namespace": "cloud_docs"
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
