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
        "GroupsMembersListContinueArg": {
            "fields": [
                {
                    "description": "Indicates from what point to get the next set of groups.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupsMembersListContinueError": {
            "fields": [
                {
                    "description": "The cursor is invalid.",
                    "parameter": "invalid_cursor",
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
        "GroupsMembersListResult": {
            "fields": [
                {
                    "parameter": "members",
                    "type": {
                        "list": {
                            "datatype": "GroupMemberInfo",
                            "namespace": "team"
                        }
                    }
                },
                {
                    "description": "Pass the cursor into :route:`groups/members/list/continue` to obtain additional group members.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Is true if there are additional group members that have not been returned yet. An additional call to :route:`groups/members/list/continue` can retrieve them.",
                    "parameter": "has_more",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
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
