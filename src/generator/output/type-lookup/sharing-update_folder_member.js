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
        "InsufficientPlan": {
            "fields": [
                {
                    "description": "A message to tell the user to upgrade in order to support expected action.",
                    "parameter": "message",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A URL to send the user to in order to obtain the account type they need, e.g. upgrading. Absent if there is no action the user can take to upgrade.",
                    "parameter": "upsell_url",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberAccessLevelResult": {
            "description": "Contains information about a member's access level to content after an operation.",
            "fields": [
                {
                    "description": "The member still has this level of access to the content through a parent folder.",
                    "parameter": "access_level",
                    "type": {
                        "optional": {
                            "datatype": "AccessLevel",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "A localized string with additional information about why the user has this access level to the content.",
                    "parameter": "warning",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The parent folders that a member has access to. The field is present if the user has access to the first parent folder where the member gains access.",
                    "parameter": "access_details",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "ParentFolderAccessInfo",
                                "namespace": "sharing"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberAction": {
            "description": "Actions that may be taken on members of a shared folder.",
            "fields": [
                {
                    "description": "Allow the member to keep a copy of the folder when removing.",
                    "parameter": "leave_a_copy",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Make the member an editor of the folder.",
                    "parameter": "make_editor",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Make the member an owner of the folder.",
                    "parameter": "make_owner",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Make the member a viewer of the folder.",
                    "parameter": "make_viewer",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Make the member a viewer of the folder without commenting permissions.",
                    "parameter": "make_viewer_no_comment",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Remove the member from the folder.",
                    "parameter": "remove",
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
        "MemberPermission": {
            "description": "Whether the user is allowed to take the action on the associated member.",
            "fields": [
                {
                    "description": "The action that the user may wish to take on the member.",
                    "parameter": "action",
                    "type": {
                        "datatype": "MemberAction",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "True if the user is allowed to take the action.",
                    "parameter": "allow",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The reason why the user is denied the permission. Not present if the action is allowed.",
                    "parameter": "reason",
                    "type": {
                        "optional": {
                            "datatype": "PermissionDeniedReason",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
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
        "ParentFolderAccessInfo": {
            "description": "Contains information about a parent folder that a member has access to.",
            "fields": [
                {
                    "description": "Display name for the folder.",
                    "parameter": "folder_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The identifier of the parent shared folder.",
                    "parameter": "shared_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The user's permissions for the parent shared folder.",
                    "parameter": "permissions",
                    "type": {
                        "list": {
                            "datatype": "MemberPermission",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The full path to the parent shared folder relative to the acting user's root.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PermissionDeniedReason": {
            "description": "Possible reasons the user is denied a permission.",
            "fields": [
                {
                    "description": "User is not on the same team as the folder owner.",
                    "parameter": "user_not_same_team_as_owner",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User is prohibited by the owner from taking the action.",
                    "parameter": "user_not_allowed_by_owner",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Target is indirectly a member of the folder, for example by being part of a group.",
                    "parameter": "target_is_indirect_member",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Target is the owner of the folder.",
                    "parameter": "target_is_owner",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Target is the user itself.",
                    "parameter": "target_is_self",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Target is not an active member of the team.",
                    "parameter": "target_not_active",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Folder is team folder for a limited team.",
                    "parameter": "folder_is_limited_team_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The content owner needs to be on a Dropbox team to perform this action.",
                    "parameter": "owner_not_on_team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user does not have permission to perform this action on the link.",
                    "parameter": "permission_denied",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user's team policy prevents performing this action on the link.",
                    "parameter": "restricted_by_team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user's account type does not support this action.",
                    "parameter": "user_account_type",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user needs to be on a Dropbox team to perform this action.",
                    "parameter": "user_not_on_team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Folder is inside of another shared folder.",
                    "parameter": "folder_is_inside_shared_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Policy cannot be changed due to restrictions from parent folder.",
                    "parameter": "restricted_by_parent_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "insufficient_plan",
                    "type": {
                        "datatype": "InsufficientPlan",
                        "namespace": "sharing"
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
        },
        "SharedFolderMemberError": {
            "fields": [
                {
                    "description": "The target dropbox_id is invalid.",
                    "parameter": "invalid_dropbox_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The target dropbox_id is not a member of the shared folder.",
                    "parameter": "not_a_member",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The target member only has inherited access to the shared folder.",
                    "parameter": "no_explicit_access",
                    "type": {
                        "datatype": "MemberAccessLevelResult",
                        "namespace": "sharing"
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
        "UpdateFolderMemberArg": {
            "fields": [
                {
                    "description": "The ID for the shared folder.",
                    "parameter": "shared_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The member of the shared folder to update.  Only the :field:`MemberSelector.dropbox_id` may be set at this time.",
                    "parameter": "member",
                    "type": {
                        "datatype": "MemberSelector",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The new access level for :field:`member`. :field:`AccessLevel.owner` is disallowed.",
                    "parameter": "access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UpdateFolderMemberError": {
            "fields": [
                {
                    "parameter": "access_error",
                    "type": {
                        "datatype": "SharedFolderAccessError",
                        "namespace": "sharing"
                    }
                },
                {
                    "parameter": "member_error",
                    "type": {
                        "datatype": "SharedFolderMemberError",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "If updating the access type required the member to be added to the shared folder and there was an error when adding the member.",
                    "parameter": "no_explicit_access",
                    "type": {
                        "datatype": "AddFolderMemberError",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The current user's account doesn't support this action. An example of this is when downgrading a member from editor to viewer. This action can only be performed by users that have upgraded to a Pro or Business plan.",
                    "parameter": "insufficient_plan",
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
