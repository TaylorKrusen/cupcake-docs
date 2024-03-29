export default {
    "seen_state": {
        "PlatformType": {
            "description": "Possible platforms on which a user may view content.",
            "fields": [
                {
                    "description": "The content was viewed on the web.",
                    "parameter": "web",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The content was viewed on a desktop client.",
                    "parameter": "desktop",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The content was viewed on a mobile iOS client.",
                    "parameter": "mobile_ios",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The content was viewed on a mobile android client.",
                    "parameter": "mobile_android",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The content was viewed from an API client.",
                    "parameter": "api",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The content was viewed on an unknown platform.",
                    "parameter": "unknown",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The content was viewed on a mobile client. DEPRECATED: Use mobile_ios or mobile_android instead.",
                    "parameter": "mobile",
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
        "GroupInfo": {
            "description": "The information about a group. Groups is a way to manage a list of users  who need same access permission to the shared folder.",
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
                    "description": "The type of group.",
                    "parameter": "group_type",
                    "type": {
                        "datatype": "GroupType",
                        "namespace": "team_common"
                    }
                },
                {
                    "description": "If the current user is a member of the group.",
                    "parameter": "is_member",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If the current user is an owner of the group.",
                    "parameter": "is_owner",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If the group is owned by the current user's team.",
                    "parameter": "same_team",
                    "type": {
                        "primitive": "Boolean"
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
                }
            ],
            "stone_type": "struct"
        },
        "GroupMembershipInfo": {
            "description": "The information about a group member of the shared content.",
            "fields": [
                {
                    "description": "The access type for this member. It contains inherited access type from parent folder, and acquired access type from this folder.",
                    "parameter": "access_type",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The information about the membership group.",
                    "parameter": "group",
                    "type": {
                        "datatype": "GroupInfo",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The permissions that requesting user has on this member. The set of permissions corresponds to the MemberActions in the request.",
                    "parameter": "permissions",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "MemberPermission",
                                "namespace": "sharing"
                            }
                        }
                    }
                },
                {
                    "description": "Never set.",
                    "parameter": "initials",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "True if the member has access from a parent folder.",
                    "parameter": "is_inherited",
                    "type": {
                        "primitive": "Boolean"
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
        "InviteeInfo": {
            "description": "Information about the recipient of a shared content invitation.",
            "fields": [
                {
                    "description": "E-mail address of invited user.",
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
        "InviteeMembershipInfo": {
            "description": "Information about an invited member of a shared content.",
            "fields": [
                {
                    "description": "The access type for this member. It contains inherited access type from parent folder, and acquired access type from this folder.",
                    "parameter": "access_type",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Recipient of the invitation.",
                    "parameter": "invitee",
                    "type": {
                        "datatype": "InviteeInfo",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The permissions that requesting user has on this member. The set of permissions corresponds to the MemberActions in the request.",
                    "parameter": "permissions",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "MemberPermission",
                                "namespace": "sharing"
                            }
                        }
                    }
                },
                {
                    "description": "Never set.",
                    "parameter": "initials",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "True if the member has access from a parent folder.",
                    "parameter": "is_inherited",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The user this invitation is tied to, if available.",
                    "parameter": "user",
                    "type": {
                        "optional": {
                            "datatype": "UserInfo",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ListFileMembersArg": {
            "description": "Arguments for :route:`list_file_members`.",
            "fields": [
                {
                    "description": "The file for which you want to see members.",
                    "parameter": "file",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The actions for which to return permissions on a member.",
                    "parameter": "actions",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "MemberAction",
                                "namespace": "sharing"
                            }
                        }
                    }
                },
                {
                    "description": "Whether to include members who only have access from a parent shared folder.",
                    "parameter": "include_inherited",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Number of members to return max per query. Defaults to 100 if no limit is specified.",
                    "parameter": "limit",
                    "type": {
                        "primitive": "UInt32"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ListFileMembersError": {
            "description": "Error for :route:`list_file_members`.",
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
                    "parameter": "other",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
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
        "SharedFileMembers": {
            "description": "Shared file user, group, and invitee membership.\nUsed for the results of :route:`list_file_members` and :route:`list_file_members/continue`, and used as part of the results for :route:`list_file_members/batch`.",
            "fields": [
                {
                    "description": "The list of user members of the shared file.",
                    "parameter": "users",
                    "type": {
                        "list": {
                            "datatype": "UserFileMembershipInfo",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The list of group members of the shared file.",
                    "parameter": "groups",
                    "type": {
                        "list": {
                            "datatype": "GroupMembershipInfo",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The list of invited members of a file, but have not logged in and claimed this.",
                    "parameter": "invitees",
                    "type": {
                        "list": {
                            "datatype": "InviteeMembershipInfo",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "Present if there are additional shared file members that have not been returned yet. Pass the cursor into :route:`list_file_members/continue` to list additional members.",
                    "parameter": "cursor",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
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
        },
        "UserFileMembershipInfo": {
            "description": "The information about a user member of the shared content with an appended last seen timestamp.",
            "fields": [
                {
                    "description": "The access type for this member. It contains inherited access type from parent folder, and acquired access type from this folder.",
                    "parameter": "access_type",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The account information for the membership user.",
                    "parameter": "user",
                    "type": {
                        "datatype": "UserInfo",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The permissions that requesting user has on this member. The set of permissions corresponds to the MemberActions in the request.",
                    "parameter": "permissions",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "MemberPermission",
                                "namespace": "sharing"
                            }
                        }
                    }
                },
                {
                    "description": "Never set.",
                    "parameter": "initials",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "True if the member has access from a parent folder.",
                    "parameter": "is_inherited",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The UTC timestamp of when the user has last seen the content, if they have.",
                    "parameter": "time_last_seen",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The platform on which the user has last seen the content, or unknown.",
                    "parameter": "platform_type",
                    "type": {
                        "optional": {
                            "datatype": "PlatformType",
                            "namespace": "seen_state"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserInfo": {
            "description": "Basic information about a user. Use :route:`users.get_account` and :route:`users.get_account_batch` to obtain more detailed information.",
            "fields": [
                {
                    "description": "The account ID of the user.",
                    "parameter": "account_id",
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
                    "description": "The display name of the user.",
                    "parameter": "display_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "If the user is in the same team as current user.",
                    "parameter": "same_team",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The team member ID of the shared folder member. Only present if :field:`same_team` is true.",
                    "parameter": "team_member_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
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
        },
        "GroupType": {
            "description": "The group type determines how a group is created and managed.",
            "fields": [
                {
                    "description": "A group to which team members are automatically added. Applicable to :link:`team folders https://www.dropbox.com/help/986` only.",
                    "parameter": "team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A group is created and managed by a user.",
                    "parameter": "user_managed",
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
