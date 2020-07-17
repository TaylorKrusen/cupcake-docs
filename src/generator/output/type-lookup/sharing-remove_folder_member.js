export default {
    "async": {
        "LaunchResultBase": {
            "description": "Result returned by methods that launch an asynchronous job.\nA method who may either launch an asynchronous job, or complete the request synchronously, can use this union by extending it, and adding a 'complete' field with the type of the synchronous response.\nSee :type:`LaunchEmptyResult` for an example.",
            "fields": [
                {
                    "description": "This response indicates that the processing is asynchronous. The string is an id that can be used to obtain the status of the asynchronous job.",
                    "parameter": "async_job_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "union"
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
        "RemoveFolderMemberArg": {
            "fields": [
                {
                    "description": "The ID for the shared folder.",
                    "parameter": "shared_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The member to remove from the folder.",
                    "parameter": "member",
                    "type": {
                        "datatype": "MemberSelector",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "If true, the removed user will keep their copy of the folder after it's unshared, assuming it was mounted. Otherwise, it will be removed from their Dropbox. Also, this must be set to false when kicking a group.",
                    "parameter": "leave_a_copy",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RemoveFolderMemberError": {
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
                    "description": "The target user is the owner of the shared folder. You can't remove this user until ownership has been transferred to another member.",
                    "parameter": "folder_owner",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The target user has access to the shared folder via a group.",
                    "parameter": "group_access",
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
                    "description": "This shared folder has too many files for leaving a copy. You can still remove this user without leaving a copy.",
                    "parameter": "too_many_files",
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
        }
    }
}
