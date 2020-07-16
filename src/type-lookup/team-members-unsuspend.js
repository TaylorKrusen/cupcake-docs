export default {
    "team": {
        "MembersUnsuspendArg": {
            "description": "Exactly one of team_member_id, email, or external_id must be provided to identify the user account.",
            "fields": [
                {
                    "description": "Identity of user to unsuspend.",
                    "parameter": "user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MembersUnsuspendError": {
            "fields": [
                {
                    "description": "No matching user found. The provided team_member_id, email, or external_id does not exist on this team.",
                    "parameter": "user_not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user is not a member of the team.",
                    "parameter": "user_not_in_team",
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
                    "description": "The user is unsuspended, so it cannot be unsuspended again.",
                    "parameter": "unsuspend_non_suspended_member",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Team is full. The organization has no available licenses.",
                    "parameter": "team_license_limit",
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
