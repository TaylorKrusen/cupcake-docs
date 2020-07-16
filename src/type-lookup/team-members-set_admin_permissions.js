export default {
    "team": {
        "AdminTier": {
            "description": "Describes which team-related admin permissions a user has.",
            "fields": [
                {
                    "description": "User is an administrator of the team - has all permissions.",
                    "parameter": "team_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User can do most user provisioning, de-provisioning and management.",
                    "parameter": "user_management_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User can do a limited set of common support tasks for existing users.",
                    "parameter": "support_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User is not an admin of the team.",
                    "parameter": "member_only",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "union"
        },
        "MembersSetPermissionsArg": {
            "description": "Exactly one of team_member_id, email, or external_id must be provided to identify the user account.",
            "fields": [
                {
                    "description": "Identity of user whose role will be set.",
                    "parameter": "user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                },
                {
                    "description": "The new role of the member.",
                    "parameter": "new_role",
                    "type": {
                        "datatype": "AdminTier",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MembersSetPermissionsError": {
            "fields": [
                {
                    "description": "No matching user found. The provided team_member_id, email, or external_id does not exist on this team.",
                    "parameter": "user_not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Cannot remove the admin setting of the last admin.",
                    "parameter": "last_admin",
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
                    "description": "Cannot remove/grant permissions.",
                    "parameter": "cannot_set_permissions",
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
        "MembersSetPermissionsResult": {
            "fields": [
                {
                    "description": "The member ID of the user to which the change was applied.",
                    "parameter": "team_member_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The role after the change.",
                    "parameter": "role",
                    "type": {
                        "datatype": "AdminTier",
                        "namespace": "team"
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
