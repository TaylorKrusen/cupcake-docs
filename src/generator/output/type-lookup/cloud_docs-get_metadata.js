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
        "GetMetadataArg": {
            "fields": [
                {
                    "description": "API ID (\"id:...\") associated with the Cloud Doc.",
                    "parameter": "file_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GetMetadataError": {
            "fields": [
                {
                    "parameter": "get_metadata_error_tag",
                    "type": {
                        "optional": {
                            "datatype": "get_metadata_error_tag_union",
                            "namespace": "cloud_docs"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GetMetadataResult": {
            "fields": [
                {
                    "parameter": "file_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Title of the Cloud Doc without extension.",
                    "parameter": "title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "MIME type of the Cloud Doc.",
                    "parameter": "mime_type",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Opaque string representing the version of the document stored in Dropbox (only set for Dropbox-stored Documents).",
                    "parameter": "version",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Application specific string representing the revision of a document (only set for App-stored Documents).",
                    "parameter": "provider_version",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "User identified by the auth token.",
                    "parameter": "user",
                    "type": {
                        "optional": {
                            "datatype": "UserInfo",
                            "namespace": "cloud_docs"
                        }
                    }
                },
                {
                    "description": "true if the document is deleted or purged.",
                    "parameter": "is_deleted",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Actions that the user identified by the auth token can performn. This message will not be populated for deleted documents.",
                    "parameter": "user_permissions",
                    "type": {
                        "optional": {
                            "datatype": "UserPermissions",
                            "namespace": "cloud_docs"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserInfo": {
            "fields": [
                {
                    "description": "ID associated with the user.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Email associated with the user.",
                    "parameter": "email",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserPermissions": {
            "fields": [
                {
                    "description": "true if the user can edit the content of this document",
                    "parameter": "can_edit",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "true if the user can edit the title of this document",
                    "parameter": "can_rename",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "true if the user can comment on this document",
                    "parameter": "can_comment",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "true if the user can download the contents of this document. currently always true if the user has view access to the document.",
                    "parameter": "can_download",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "get_metadata_error_tag_union": {
            "fields": [
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
