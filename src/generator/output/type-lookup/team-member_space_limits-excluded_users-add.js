export default {
    "team": {
        "ExcludedUsersUpdateArg": {
            "description": "Argument of excluded users update operation. Should include a list of users to add/remove (according to endpoint), Maximum size of the list is 1000 users.",
            "fields": [
                {
                    "description": "List of users to be added/removed.",
                    "parameter": "users",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "UserSelectorArg",
                                "namespace": "team"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExcludedUsersUpdateError": {
            "description": "Excluded users update error.",
            "fields": [
                {
                    "description": "At least one of the users is not part of your team.",
                    "parameter": "users_not_in_team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A maximum of 1000 users for each of addition/removal can be supplied.",
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
        "ExcludedUsersUpdateResult": {
            "description": "Excluded users update result.",
            "fields": [
                {
                    "description": "Update status.",
                    "parameter": "status",
                    "type": {
                        "datatype": "ExcludedUsersUpdateStatus",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExcludedUsersUpdateStatus": {
            "description": "Excluded users update operation status.",
            "fields": [
                {
                    "description": "Update successful.",
                    "parameter": "success",
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
