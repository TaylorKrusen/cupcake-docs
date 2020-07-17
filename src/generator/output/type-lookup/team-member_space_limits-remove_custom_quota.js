export default {
    "team": {
        "CustomQuotaError": {
            "description": "Error returned when getting member custom quota.",
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
                }
            ],
            "stone_type": "open_union"
        },
        "CustomQuotaUsersArg": {
            "fields": [
                {
                    "description": "List of users.",
                    "parameter": "users",
                    "type": {
                        "list": {
                            "datatype": "UserSelectorArg",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RemoveCustomQuotaResult": {
            "description": "User result for setting member custom quota.",
            "fields": [
                {
                    "description": "Successfully removed user.",
                    "parameter": "success",
                    "type": {
                        "datatype": "UserSelectorArg",
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
