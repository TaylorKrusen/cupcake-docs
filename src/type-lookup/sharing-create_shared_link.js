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
        }
    },
    "sharing": {
        "CreateSharedLinkArg": {
            "fields": [
                {
                    "description": "The path to share.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Whether to return a shortened URL.",
                    "parameter": "short_url",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If it's okay to share a path that does not yet exist, set this to either :field:`PendingUploadMode.file` or :field:`PendingUploadMode.folder` to indicate whether to assume it's a file or folder.",
                    "parameter": "pending_upload",
                    "type": {
                        "optional": {
                            "datatype": "PendingUploadMode",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "CreateSharedLinkError": {
            "fields": [
                {
                    "parameter": "path",
                    "type": {
                        "datatype": "LookupError",
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
        "PathLinkMetadata": {
            "description": "Metadata for a path-based shared link.",
            "fields": [
                {
                    "description": "URL of the shared link.",
                    "parameter": "url",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Who can access the link.",
                    "parameter": "visibility",
                    "type": {
                        "datatype": "Visibility",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Path in user's Dropbox.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Expiration time, if set. By default the link won't expire.",
                    "parameter": "expires",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "PendingUploadMode": {
            "description": "Flag to indicate pending upload default (for linking to not-yet-existing paths).",
            "fields": [
                {
                    "description": "Assume pending uploads are files.",
                    "parameter": "file",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Assume pending uploads are folders.",
                    "parameter": "folder",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "union"
        },
        "Visibility": {
            "description": "Who can access a shared link. The most open visibility is :field:`public`. The default depends on many aspects, such as team and user preferences and shared folder settings.",
            "fields": [
                {
                    "description": "Anyone who has received the link can access it. No login required.",
                    "parameter": "public",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Only members of the same team can access the link. Login is required.",
                    "parameter": "team_only",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A link-specific password is required to access the link. Login is not required.",
                    "parameter": "password",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Only members of the same team who have the link-specific password can access the link.",
                    "parameter": "team_and_password",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Only members of the shared folder containing the linked file can access the link. Login is required.",
                    "parameter": "shared_folder_only",
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
