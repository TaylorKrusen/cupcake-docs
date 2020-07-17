export default {
    "team": {
        "CustomQuotaResult": {
            "description": "User custom quota.",
            "fields": [
                {
                    "description": "User's custom quota.",
                    "parameter": "success",
                    "type": {
                        "datatype": "UserCustomQuotaResult",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Invalid user (not in team).",
                    "parameter": "invalid_user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
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
        "SetCustomQuotaArg": {
            "fields": [
                {
                    "description": "List of users and their custom quotas.",
                    "parameter": "users_and_quotas",
                    "type": {
                        "list": {
                            "datatype": "UserCustomQuotaArg",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SetCustomQuotaError": {
            "description": "Error returned when setting member custom quota.",
            "fields": [
                {
                    "description": "A maximum of 1000 users can be set for a single call.",
                    "parameter": "too_many_users",
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
                    "description": "Some of the users are on the excluded users list and can't have custom quota set.",
                    "parameter": "some_users_are_excluded",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "UserCustomQuotaArg": {
            "description": "User and their required custom quota in GB (1 TB = 1024 GB).",
            "fields": [
                {
                    "parameter": "user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                },
                {
                    "parameter": "quota_gb",
                    "type": {
                        "primitive": "UInt32"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserCustomQuotaResult": {
            "description": "User and their custom quota in GB (1 TB = 1024 GB).  No quota returns if the user has no custom quota set.",
            "fields": [
                {
                    "parameter": "user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                },
                {
                    "parameter": "quota_gb",
                    "type": {
                        "optional": {
                            "primitive": "UInt32"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserSelectorArg": {
            "description": "Argument for selecting a single user, either by team_member_id, external_id or email.",
            "fields": [
                {
                    "parameter": "team_member_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "parameter": "external_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "parameter": "email",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "union"
        }
    }
}
