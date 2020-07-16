export default {
    "cloud_docs": {
        "Content": {
            "fields": [
                {
                    "parameter": "purpose",
                    "type": {
                        "datatype": "ContentPurpose",
                        "namespace": "cloud_docs"
                    }
                },
                {
                    "description": "The key returned from an upload_additional_content response.",
                    "parameter": "content_key",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ContentPurpose": {
            "fields": [
                {
                    "parameter": "search",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "preview",
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
        "UpdateContentArg": {
            "fields": [
                {
                    "parameter": "file_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A list of auth_tokens, one for each editor who made changes to the document since the last call to update_content.",
                    "parameter": "actor_tokens",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Currently, this will always be empty until we implement upload_additional_content.",
                    "parameter": "additional_contents",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "Content",
                                "namespace": "cloud_docs"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UpdateContentError": {
            "fields": [
                {
                    "description": "The Cloud Doc ID is invalid.",
                    "parameter": "invalid_doc_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A Cloud Doc could not be found for the given ID.",
                    "parameter": "not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Permission denied for the Cloud Doc with the given ID.",
                    "parameter": "permission_denied",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "other",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Upload payload exceeds maximum allowed size of 150MB.",
                    "parameter": "upload_size_too_large",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A lock on the document identified by path_or_id is held by another editor.",
                    "parameter": "conflict",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A lock is not held on the document identified by path_or_id. Acquire lock before uploading content for the document.",
                    "parameter": "unlocked",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "UpdateContentResult": {
            "fields": [
                {
                    "description": "Version of the document stored in Dropbox.",
                    "parameter": "version",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
