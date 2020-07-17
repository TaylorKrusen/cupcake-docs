export default {
    "async": {
        "PollArg": {
            "description": "Arguments for methods that poll the status of an asynchronous job.",
            "fields": [
                {
                    "description": "Id of the asynchronous job. This is the value of a response returned from the method that launched the job.",
                    "parameter": "async_job_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PollError": {
            "description": "Error returned by methods for polling the status of asynchronous job.",
            "fields": [
                {
                    "description": "The job ID is invalid.",
                    "parameter": "invalid_async_job_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Something went wrong with the job on Dropbox's end. You'll need to verify that the action you were taking succeeded, and if not, try again. This should happen very rarely.",
                    "parameter": "internal_error",
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
        "MemberAddResult": {
            "description": "Describes the result of attempting to add a single user to the team. 'success' is the only value indicating that a user was indeed added to the team - the other values explain the type of failure that occurred, and include the email of the user for which the operation has failed.",
            "fields": [
                {
                    "description": "Describes a user that was successfully added to the team.",
                    "parameter": "success",
                    "type": {
                        "datatype": "TeamMemberInfo",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Team is already full. The organization has no available licenses.",
                    "parameter": "team_license_limit",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Team is already full. The free team member limit has been reached.",
                    "parameter": "free_team_member_limit_reached",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "User is already on this team. The provided email address is associated with a user who is already a member of (including in recoverable state) or invited to the team.",
                    "parameter": "user_already_on_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "User is already on another team. The provided email address is associated with a user that is already a member or invited to another team.",
                    "parameter": "user_on_another_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "User is already paired.",
                    "parameter": "user_already_paired",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "User migration has failed.",
                    "parameter": "user_migration_failed",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A user with the given external member ID already exists on the team (including in recoverable state).",
                    "parameter": "duplicate_external_member_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A user with the given persistent ID already exists on the team (including in recoverable state).",
                    "parameter": "duplicate_member_persistent_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Persistent ID is only available to teams with persistent ID SAML configuration. Please contact Dropbox for more information.",
                    "parameter": "persistent_id_disabled",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "User creation has failed.",
                    "parameter": "user_creation_failed",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "union"
        },
        "MembersAddJobStatus": {
            "fields": [
                {
                    "description": "The asynchronous job is still in progress.",
                    "parameter": "in_progress",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The asynchronous job has finished. For each member that was specified in the parameter :type:`MembersAddArg` that was provided to :route:`members/add`, a corresponding item is returned in this list.",
                    "parameter": "complete",
                    "type": {
                        "list": {
                            "datatype": "MemberAddResult",
                            "namespace": "team"
                        }
                    }
                },
                {
                    "description": "The asynchronous job returned an error. The string contains an error message.",
                    "parameter": "failed",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "union"
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
        "TeamMemberInfo": {
            "description": "Information about a team member.",
            "fields": [
                {
                    "description": "Profile of a user as a member of a team.",
                    "parameter": "profile",
                    "type": {
                        "datatype": "TeamMemberProfile",
                        "namespace": "team"
                    }
                },
                {
                    "description": "The user's role in the team.",
                    "parameter": "role",
                    "type": {
                        "datatype": "AdminTier",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMemberProfile": {
            "description": "Profile of a user as a member of a team.",
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
                    "description": "List of group IDs of groups that the user belongs to.",
                    "parameter": "groups",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The namespace id of the user's root folder.",
                    "parameter": "member_folder_id",
                    "type": {
                        "primitive": "String"
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
