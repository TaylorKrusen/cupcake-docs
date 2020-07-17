export default {
    "sharing": {
        "AccessLevel": {
            "description": "Defines the access levels for collaborators.",
            "fields": [
                {
                    "description": "The collaborator is the owner of the shared folder. Owners can view and edit the shared folder as well as set the folder's policies using :route:`update_folder_policy`.",
                    "parameter": "owner",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The collaborator can both view and edit the shared folder.",
                    "parameter": "editor",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The collaborator can only view the shared folder.",
                    "parameter": "viewer",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The collaborator can only view the shared folder and does not have any access to comments.",
                    "parameter": "viewer_no_comment",
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
        "AddFolderMemberArg": {
            "fields": [
                {
                    "description": "The ID for the shared folder.",
                    "parameter": "shared_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The intended list of members to add.  Added members will receive invites to join the shared folder.",
                    "parameter": "members",
                    "type": {
                        "list": {
                            "datatype": "AddMember",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "Whether added members should be notified via email and device notifications of their invite.",
                    "parameter": "quiet",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Optional message to display to added members in their invitation.",
                    "parameter": "custom_message",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AddFolderMemberError": {
            "fields": [
                {
                    "description": "Unable to access shared folder.",
                    "parameter": "access_error",
                    "type": {
                        "datatype": "SharedFolderAccessError",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The current user's e-mail address is unverified.",
                    "parameter": "email_unverified",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The current user has been banned.",
                    "parameter": "banned_member",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": ":field:`AddFolderMemberArg.members` contains a bad invitation recipient.",
                    "parameter": "bad_member",
                    "type": {
                        "datatype": "AddMemberSelectorError",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Your team policy does not allow sharing outside of the team.",
                    "parameter": "cant_share_outside_team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The value is the member limit that was reached.",
                    "parameter": "too_many_members",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "The value is the pending invite limit that was reached.",
                    "parameter": "too_many_pending_invites",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "The current user has hit the limit of invites they can send per day. Try again in 24 hours.",
                    "parameter": "rate_limit",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The current user is trying to share with too many people at once.",
                    "parameter": "too_many_invitees",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The current user's account doesn't support this action. An example of this is when adding a read-only member. This action can only be performed by users that have upgraded to a Pro or Business plan.",
                    "parameter": "insufficient_plan",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This action cannot be performed on a team shared folder.",
                    "parameter": "team_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The current user does not have permission to perform this action.",
                    "parameter": "no_permission",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Invalid shared folder error will be returned as an access_error.",
                    "parameter": "invalid_shared_folder",
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
        "AddMember": {
            "description": "The member and type of access the member should have when added to a shared folder.",
            "fields": [
                {
                    "description": "The member to add to the shared folder.",
                    "parameter": "member",
                    "type": {
                        "datatype": "MemberSelector",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The access level to grant :field:`member` to the shared folder.  :field:`AccessLevel.owner` is disallowed.",
                    "parameter": "access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AddMemberSelectorError": {
            "fields": [
                {
                    "description": "Automatically created groups can only be added to team folders.",
                    "parameter": "automatic_group",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The value is the ID that could not be identified.",
                    "parameter": "invalid_dropbox_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The value is the e-email address that is malformed.",
                    "parameter": "invalid_email",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The value is the ID of the Dropbox user with an unverified e-mail address.  Invite unverified users by e-mail address instead of by their Dropbox ID.",
                    "parameter": "unverified_dropbox_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "At least one of the specified groups in :field:`AddFolderMemberArg.members` is deleted.",
                    "parameter": "group_deleted",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Sharing to a group that is not on the current user's team.",
                    "parameter": "group_not_on_team",
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
        "MemberSelector": {
            "description": "Includes different ways to identify a member of a shared folder.",
            "fields": [
                {
                    "description": "Dropbox account, team member, or group ID of member.",
                    "parameter": "dropbox_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "E-mail address of member.",
                    "parameter": "email",
                    "type": {
                        "primitive": "String"
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
        "SharedFolderAccessError": {
            "description": "There is an error accessing the shared folder.",
            "fields": [
                {
                    "description": "This shared folder ID is invalid.",
                    "parameter": "invalid_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user is not a member of the shared folder thus cannot access it.",
                    "parameter": "not_a_member",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Never set.",
                    "parameter": "email_unverified",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The shared folder is unmounted.",
                    "parameter": "unmounted",
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
    }
}
