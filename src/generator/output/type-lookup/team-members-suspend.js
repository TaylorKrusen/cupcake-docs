export default {
    "team": {
        "MembersDeactivateArg": {
            "fields": [
                {
                    "description": "Identity of user to remove/suspend/have their files moved.",
                    "parameter": "user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                },
                {
                    "description": "If provided, controls if the user's data will be deleted on their linked devices.",
                    "parameter": "wipe_data",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MembersSuspendError": {
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
                    "description": "The user is not active, so it cannot be suspended.",
                    "parameter": "suspend_inactive_user",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user is the last admin of the team, so it cannot be suspended.",
                    "parameter": "suspend_last_admin",
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
