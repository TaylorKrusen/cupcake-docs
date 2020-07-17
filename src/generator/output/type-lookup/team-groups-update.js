export default {
    "secondary_emails": {
        "SecondaryEmail": {
            "fields": [
                {
                    "description": "Secondary email address.",
                    "parameter": "email",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Whether or not the secondary email address is verified to be owned by a user.",
                    "parameter": "is_verified",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        }
    },
    "team": {
        "GroupAccessType": {
            "description": "Role of a user in group.",
            "fields": [
                {
                    "description": "User is a member of the group, but has no special permissions.",
                    "parameter": "member",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User can rename the group, and add/remove members.",
                    "parameter": "owner",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "union"
        },
        "GroupFullInfo": {
            "description": "Full description of a group.",
            "fields": [
                {
                    "parameter": "group_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "parameter": "group_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Who is allowed to manage the group.",
                    "parameter": "group_management_type",
                    "type": {
                        "datatype": "GroupManagementType",
                        "namespace": "team_common"
                    }
                },
                {
                    "description": "The group creation time as a UTC timestamp in milliseconds since the Unix epoch.",
                    "parameter": "created",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "External ID of group. This is an arbitrary ID that an admin can attach to a group.",
                    "parameter": "group_external_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The number of members in the group.",
                    "parameter": "member_count",
                    "type": {
                        "optional": {
                            "primitive": "UInt32"
                        }
                    }
                },
                {
                    "description": "List of group members.",
                    "parameter": "members",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "GroupMemberInfo",
                                "namespace": "team"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupMemberInfo": {
            "description": "Profile of group member, and role in group.",
            "fields": [
                {
                    "description": "Profile of group member.",
                    "parameter": "profile",
                    "type": {
                        "datatype": "MemberProfile",
                        "namespace": "team"
                    }
                },
                {
                    "description": "The role that the user has in the group.",
                    "parameter": "access_type",
                    "type": {
                        "datatype": "GroupAccessType",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupSelector": {
            "description": "Argument for selecting a single group, either by group_id or by external group ID.",
            "fields": [
                {
                    "description": "Group ID.",
                    "parameter": "group_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "External ID of the group.",
                    "parameter": "group_external_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "union"
        },
        "GroupUpdateArgs": {
            "fields": [
                {
                    "description": "Specify a group.",
                    "parameter": "group",
                    "type": {
                        "datatype": "GroupSelector",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Whether to return the list of members in the group.  Note that the default value will cause all the group members  to be returned in the response. This may take a long time for large groups.",
                    "parameter": "return_members",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Optional argument. Set group name to this if provided.",
                    "parameter": "new_group_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Optional argument. New group external ID. If the argument is None, the group's external_id won't be updated. If the argument is empty string, the group's external id will be cleared.",
                    "parameter": "new_group_external_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Set new group management type, if provided.",
                    "parameter": "new_group_management_type",
                    "type": {
                        "optional": {
                            "datatype": "GroupManagementType",
                            "namespace": "team_common"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupUpdateError": {
            "fields": [
                {
                    "description": "No matching group found. No groups match the specified group ID.",
                    "parameter": "group_not_found",
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
                    "description": "This operation is not supported on system-managed groups.",
                    "parameter": "system_managed_group_disallowed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The requested group name is already being used by another group.",
                    "parameter": "group_name_already_used",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Group name is empty or has invalid characters.",
                    "parameter": "group_name_invalid",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The requested external ID is already being used by another group.",
                    "parameter": "external_id_already_in_use",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "MemberProfile": {
            "description": "Basic member profile.",
            "fields": [
                {
                    "description": "ID of user as a member of a team.",
                    "parameter": "team_member_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Email address of user.",
                    "parameter": "email",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Is true if the user's email is verified to be owned by the user.",
                    "parameter": "email_verified",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The user's status as a member of a specific team.",
                    "parameter": "status",
                    "type": {
                        "datatype": "TeamMemberStatus",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Representations for a person's name.",
                    "parameter": "name",
                    "type": {
                        "datatype": "Name",
                        "namespace": "users"
                    }
                },
                {
                    "description": "The user's membership type: full (normal team member) vs limited (does not use a license; no access to the team's shared quota).",
                    "parameter": "membership_type",
                    "type": {
                        "datatype": "TeamMembershipType",
                        "namespace": "team"
                    }
                },
                {
                    "description": "External ID that a team can attach to the user. An application using the API may find it easier to use their own IDs instead of Dropbox IDs like account_id or team_member_id.",
                    "parameter": "external_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "A user's account identifier.",
                    "parameter": "account_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Secondary emails of a user.",
                    "parameter": "secondary_emails",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "SecondaryEmail",
                                "namespace": "secondary_emails"
                            }
                        }
                    }
                },
                {
                    "description": "The date and time the user was invited to the team (contains value only when the member's status matches :field:`TeamMemberStatus.invited`).",
                    "parameter": "invited_on",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The date and time the user joined as a member of a specific team.",
                    "parameter": "joined_on",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The date and time the user was suspended from the team (contains value only when the member's status matches :field:`TeamMemberStatus.suspended`).",
                    "parameter": "suspended_on",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "Persistent ID that a team can attach to the user. The persistent ID is unique ID to be used for SAML authentication.",
                    "parameter": "persistent_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Whether the user is a directory restricted user.",
                    "parameter": "is_directory_restricted",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "URL for the photo representing the user, if one is set.",
                    "parameter": "profile_photo_url",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RemovedStatus": {
            "fields": [
                {
                    "description": "True if the removed team member is recoverable.",
                    "parameter": "is_recoverable",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "True if the team member's account was converted to individual account.",
                    "parameter": "is_disconnected",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMemberStatus": {
            "description": "The user's status as a member of a specific team.",
            "fields": [
                {
                    "description": "User has successfully joined the team.",
                    "parameter": "active",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User has been invited to a team, but has not joined the team yet.",
                    "parameter": "invited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User is no longer a member of the team, but the account can be un-suspended, re-establishing the user as a team member.",
                    "parameter": "suspended",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User is no longer a member of the team. Removed users are only listed when include_removed is true in members/list.",
                    "parameter": "removed",
                    "type": {
                        "datatype": "RemovedStatus",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "union"
        },
        "TeamMembershipType": {
            "fields": [
                {
                    "description": "User uses a license and has full access to team resources like the shared quota.",
                    "parameter": "full",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User does not have access to the shared quota and team admins have restricted administrative control.",
                    "parameter": "limited",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "union"
        }
    },
    "team_common": {
        "GroupManagementType": {
            "description": "The group type determines how a group is managed.",
            "fields": [
                {
                    "description": "A group which is managed by selected users.",
                    "parameter": "user_managed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A group which is managed by team admins only.",
                    "parameter": "company_managed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A group which is managed automatically by Dropbox.",
                    "parameter": "system_managed",
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
    "users": {
        "Name": {
            "description": "Representations for a person's name to assist with internationalization.",
            "fields": [
                {
                    "description": "Also known as a first name.",
                    "parameter": "given_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Also known as a last name or family name.",
                    "parameter": "surname",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Locale-dependent name. In the US, a person's familiar name is their :field:`given_name`, but elsewhere, it could be any combination of a person's :field:`given_name` and :field:`surname`.",
                    "parameter": "familiar_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A name that can be used directly to represent the name of a user's Dropbox account.",
                    "parameter": "display_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "An abbreviated form of the person's name. Their initials in most locales.",
                    "parameter": "abbreviated_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
