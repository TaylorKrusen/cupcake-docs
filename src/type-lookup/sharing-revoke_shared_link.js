export default {
    "sharing": {
        "RevokeSharedLinkArg": {
            "fields": [
                {
                    "description": "URL of the shared link.",
                    "parameter": "url",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RevokeSharedLinkError": {
            "fields": [
                {
                    "description": "The shared link wasn't found.",
                    "parameter": "shared_link_not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The caller is not allowed to access this shared link.",
                    "parameter": "shared_link_access_denied",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This type of link is not supported; use :route:`files.export` instead.",
                    "parameter": "unsupported_link_type",
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
                    "description": "Shared link is malformed.",
                    "parameter": "shared_link_malformed",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        }
    }
}
