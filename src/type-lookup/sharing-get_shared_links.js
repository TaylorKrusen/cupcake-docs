export default {
    "sharing": {
        "GetSharedLinksArg": {
            "fields": [
                {
                    "description": "See :route:`get_shared_links` description.",
                    "parameter": "path",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GetSharedLinksError": {
            "fields": [
                {
                    "parameter": "path",
                    "type": {
                        "optional": {
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
        },
        "GetSharedLinksResult": {
            "fields": [
                {
                    "description": "Shared links applicable to the path argument.",
                    "parameter": "links",
                    "type": {
                        "list": {
                            "datatype": "LinkMetadata",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LinkMetadata": {
            "description": "Metadata for a shared link. This can be either a :type:`PathLinkMetadata` or :type:`CollectionLinkMetadata`.",
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
