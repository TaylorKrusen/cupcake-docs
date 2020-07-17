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
        "LockingError": {
            "fields": [
                {
                    "parameter": "locking_error_tag",
                    "type": {
                        "optional": {
                            "datatype": "locking_error_tag_union",
                            "namespace": "cloud_docs"
                        }
                    }
                }
            ],
            "stone_type": "struct"
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
        "UnlockArg": {
            "fields": [
                {
                    "description": "The API ID (\"id:...\") associated with the Cloud Doc",
                    "parameter": "file_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UnlockResult": {
            "description": "Empty message for unlock",
            "fields": [],
            "stone_type": "struct"
        },
        "locking_error_tag_union": {
            "fields": [
                {
                    "parameter": "locking_error",
                    "type": {
                        "datatype": "LockingErrorTag",
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