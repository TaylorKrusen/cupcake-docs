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
        "AddFileMemberArgs": {
            "description": "Arguments for :route:`add_file_member`.",
            "fields": [
                {
                    "description": "File to which to add members.",
                    "parameter": "file",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Members to add. Note that even an email address is given, this may result in a user being directy added to the membership if that email is the user's main account email.",
                    "parameter": "members",
                    "type": {
                        "list": {
                            "datatype": "MemberSelector",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "Message to send to added members in their invitation.",
                    "parameter": "custom_message",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Whether added members should be notified via device notifications of their invitation.",
                    "parameter": "quiet",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "AccessLevel union object, describing what access level we want to give new members.",
                    "parameter": "access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "If the custom message should be added as a comment on the file.",
                    "parameter": "add_message_as_comment",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AddFileMemberError": {
            "description": "Errors for :route:`add_file_member`.",
            "fields": [
                {
                    "parameter": "user_error",
                    "type": {
                        "datatype": "SharingUserError",
                        "namespace": "sharing"
                    }
                },
                {
                    "parameter": "access_error",
                    "type": {
                        "datatype": "SharingFileAccessError",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The user has reached the rate limit for invitations.",
                    "parameter": "rate_limit",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The custom message did not pass comment permissions checks.",
                    "parameter": "invalid_comment",
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
        "FileMemberActionError": {
            "fields": [
                {
                    "description": "Specified member was not found.",
                    "parameter": "invalid_member",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User does not have permission to perform this action on this member.",
                    "parameter": "no_permission",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Specified file was invalid or user does not have access.",
                    "parameter": "access_error",
                    "type": {
                        "datatype": "SharingFileAccessError",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The action cannot be completed because the target member does not have explicit access to the file. The return value is the access that the member has to the file from a parent folder.",
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
        "FileMemberActionIndividualResult": {
            "fields": [
                {
                    "description": "Member was successfully removed from this file. If AccessLevel is given, the member still has access via a parent shared folder.",
                    "parameter": "success",
                    "type": {
                        "optional": {
                            "datatype": "AccessLevel",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "User was not able to perform this action.",
                    "parameter": "member_error",
                    "type": {
                        "datatype": "FileMemberActionError",
                        "namespace": "sharing"
                    }
                }
            ],
            "stone_type": "union"
        },
        "FileMemberActionResult": {
            "description": "Per-member result for :route:`add_file_member` or :route:`change_file_member_access`.",
            "fields": [
                {
                    "description": "One of specified input members.",
                    "parameter": "member",
                    "type": {
                        "datatype": "MemberSelector",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The outcome of the action on this member.",
                    "parameter": "result",
                    "type": {
                        "datatype": "FileMemberActionIndividualResult",
                        "namespace": "sharing"
                    }
                }
            ],
            "stone_type": "struct"
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
        "SharingFileAccessError": {
            "description": "User could not access this file.",
            "fields": [
                {
                    "description": "Current user does not have sufficient privileges to perform the desired action.",
                    "parameter": "no_permission",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "File specified was not found.",
                    "parameter": "invalid_file",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A folder can't be shared this way. Use folder sharing or a shared link instead.",
                    "parameter": "is_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A file inside a public folder can't be shared this way. Use a public link instead.",
                    "parameter": "inside_public_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A Mac OS X package can't be shared this way. Use a shared link instead.",
                    "parameter": "inside_osx_package",
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
        "SharingUserError": {
            "description": "User account had a problem preventing this action.",
            "fields": [
                {
                    "description": "The current user must verify the account e-mail address before performing this action.",
                    "parameter": "email_unverified",
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
