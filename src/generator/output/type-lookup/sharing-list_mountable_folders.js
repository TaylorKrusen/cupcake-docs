export default {
    "sharing": {
        "AccessInheritance": {
            "description": "Information about the inheritance policy of a shared folder.",
            "fields": [
                {
                    "description": "The shared folder inherits its members from the parent folder.",
                    "parameter": "inherit",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The shared folder does not inherit its members from the parent folder.",
                    "parameter": "no_inherit",
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
        "AclUpdatePolicy": {
            "description": "Who can change a shared folder's access control list (ACL). In other words, who can add, remove, or change the privileges of members.",
            "fields": [
                {
                    "description": "Only the owner can update the ACL.",
                    "parameter": "owner",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Any editor can update the ACL. This may be further restricted to editors on the same team.",
                    "parameter": "editors",
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
        "AudienceExceptionContentInfo": {
            "description": "Information about the content that has a link audience different than that of this folder.",
            "fields": [
                {
                    "description": "The name of the content, which is either a file or a folder.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AudienceExceptions": {
            "description": "The total count and truncated list of information of content inside this folder that has a different audience than the link on this folder. This is only returned for folders.",
            "fields": [
                {
                    "parameter": "count",
                    "type": {
                        "primitive": "UInt32"
                    }
                },
                {
                    "description": "A truncated list of some of the content that is an exception. The length of this list could be smaller than the count since it is only a sample but will not be empty as long as count is not 0.",
                    "parameter": "exceptions",
                    "type": {
                        "list": {
                            "datatype": "AudienceExceptionContentInfo",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AudienceRestrictingSharedFolder": {
            "description": "Information about the shared folder that prevents the link audience for this link from being more restrictive.",
            "fields": [
                {
                    "description": "The ID of the shared folder.",
                    "parameter": "shared_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the shared folder.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The link audience of the shared folder.",
                    "parameter": "audience",
                    "type": {
                        "datatype": "LinkAudience",
                        "namespace": "sharing"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FolderAction": {
            "description": "Actions that may be taken on shared folders.",
            "fields": [
                {
                    "description": "Change folder options, such as who can be invited to join the folder.",
                    "parameter": "change_options",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Disable viewer information for this folder.",
                    "parameter": "disable_viewer_info",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Change or edit contents of the folder.",
                    "parameter": "edit_contents",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Enable viewer information on the folder.",
                    "parameter": "enable_viewer_info",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Invite a user or group to join the folder with read and write permission.",
                    "parameter": "invite_editor",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Invite a user or group to join the folder with read permission.",
                    "parameter": "invite_viewer",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Invite a user or group to join the folder with read permission but no comment permissions.",
                    "parameter": "invite_viewer_no_comment",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Relinquish one's own membership in the folder.",
                    "parameter": "relinquish_membership",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Unmount the folder.",
                    "parameter": "unmount",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Stop sharing this folder.",
                    "parameter": "unshare",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Keep a copy of the contents upon leaving or being kicked from the folder.",
                    "parameter": "leave_a_copy",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Use create_link instead.",
                    "parameter": "share_link",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Create a shared link for folder.",
                    "parameter": "create_link",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Set whether the folder inherits permissions from its parent.",
                    "parameter": "set_access_inheritance",
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
        "FolderPermission": {
            "description": "Whether the user is allowed to take the action on the shared folder.",
            "fields": [
                {
                    "description": "The action that the user may wish to take on the folder.",
                    "parameter": "action",
                    "type": {
                        "datatype": "FolderAction",
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
                    "description": "The reason why the user is denied the permission. Not present if the action is allowed, or if no reason is available.",
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
        "FolderPolicy": {
            "description": "A set of policies governing membership and privileges for a shared folder.",
            "fields": [
                {
                    "description": "Who can add and remove members from this shared folder.",
                    "parameter": "acl_update_policy",
                    "type": {
                        "datatype": "AclUpdatePolicy",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Who links can be shared with.",
                    "parameter": "shared_link_policy",
                    "type": {
                        "datatype": "SharedLinkPolicy",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Who can be a member of this shared folder, as set on the folder itself. The effective policy may differ from this value if the team-wide policy is more restrictive. Present only if the folder is owned by a team.",
                    "parameter": "member_policy",
                    "type": {
                        "optional": {
                            "datatype": "MemberPolicy",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "Who can be a member of this shared folder, taking into account both the folder and the team-wide policy. This value may differ from that of member_policy if the team-wide policy is more restrictive than the folder policy. Present only if the folder is owned by a team.",
                    "parameter": "resolved_member_policy",
                    "type": {
                        "optional": {
                            "datatype": "MemberPolicy",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "Who can enable/disable viewer info for this shared folder.",
                    "parameter": "viewer_info_policy",
                    "type": {
                        "optional": {
                            "datatype": "ViewerInfoPolicy",
                            "namespace": "sharing"
                        }
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
        "LinkAction": {
            "description": "Actions that can be performed on a link.",
            "fields": [
                {
                    "description": "Change the access level of the link.",
                    "parameter": "change_access_level",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Change the audience of the link.",
                    "parameter": "change_audience",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Remove the expiry date of the link.",
                    "parameter": "remove_expiry",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Remove the password of the link.",
                    "parameter": "remove_password",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Create or modify the expiry date of the link.",
                    "parameter": "set_expiry",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Create or modify the password of the link.",
                    "parameter": "set_password",
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
        "LinkAudience": {
            "fields": [
                {
                    "description": "Link is accessible by anyone.",
                    "parameter": "public",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Link is accessible only by team members.",
                    "parameter": "team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The link can be used by no one. The link merely points the user to the content, and does not grant additional rights to the user. Members of the content who use this link can only access the content with their pre-existing access rights.",
                    "parameter": "no_one",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A link-specific password is required to access the link. Login is not required.",
                    "parameter": "password",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Link is accessible only by members of the content.",
                    "parameter": "members",
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
        "LinkPermission": {
            "description": "Permissions for actions that can be performed on a link.",
            "fields": [
                {
                    "parameter": "action",
                    "type": {
                        "datatype": "LinkAction",
                        "namespace": "sharing"
                    }
                },
                {
                    "parameter": "allow",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
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
        "ListFoldersArgs": {
            "fields": [
                {
                    "description": "The maximum number of results to return per request.",
                    "parameter": "limit",
                    "type": {
                        "primitive": "UInt32"
                    }
                },
                {
                    "description": "A list of `FolderAction`s corresponding to `FolderPermission`s that should appear in the  response's :field:`SharedFolderMetadata.permissions` field describing the actions the  authenticated user can perform on the folder.",
                    "parameter": "actions",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "FolderAction",
                                "namespace": "sharing"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ListFoldersResult": {
            "description": "Result for :route:`list_folders` or :route:`list_mountable_folders`, depending on which endpoint was requested.\nUnmounted shared folders can be identified by the absence of :field:`SharedFolderMetadata.path_lower`.",
            "fields": [
                {
                    "description": "List of all shared folders the authenticated user has access to.",
                    "parameter": "entries",
                    "type": {
                        "list": {
                            "datatype": "SharedFolderMetadata",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "Present if there are additional shared folders that have not been returned yet. Pass the cursor into the corresponding continue endpoint (either :route:`list_folders/continue` or :route:`list_mountable_folders/continue`) to list additional folders.",
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
        "MemberPolicy": {
            "description": "Policy governing who can be a member of a shared folder. Only applicable to folders owned by a user on a team.",
            "fields": [
                {
                    "description": "Only a teammate can become a member.",
                    "parameter": "team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Anyone can become a member.",
                    "parameter": "anyone",
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
        "SharedContentLinkMetadata": {
            "description": "Metadata of a shared link for a file or folder.",
            "fields": [
                {
                    "description": "The audience options that are available for the content. Some audience options may be unavailable. For example, team_only may be unavailable if the content is not owned by a user on a team. The 'default' audience option is always available if the user can modify link settings.",
                    "parameter": "audience_options",
                    "type": {
                        "list": {
                            "datatype": "LinkAudience",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The current audience of the link.",
                    "parameter": "current_audience",
                    "type": {
                        "datatype": "LinkAudience",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "A list of permissions for actions you can perform on the link.",
                    "parameter": "link_permissions",
                    "type": {
                        "list": {
                            "datatype": "LinkPermission",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "Whether the link is protected by a password.",
                    "parameter": "password_protected",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The URL of the link.",
                    "parameter": "url",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The access level on the link for this file.",
                    "parameter": "access_level",
                    "type": {
                        "optional": {
                            "datatype": "AccessLevel",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The shared folder that prevents the link audience for this link from being more restrictive.",
                    "parameter": "audience_restricting_shared_folder",
                    "type": {
                        "optional": {
                            "datatype": "AudienceRestrictingSharedFolder",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "Whether the link has an expiry set on it. A link with an expiry will have its  audience changed to members when the expiry is reached.",
                    "parameter": "expiry",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The content inside this folder with link audience different than this folder's. This is only returned when an endpoint that returns metadata for a single shared folder is called, e.g. /get_folder_metadata.",
                    "parameter": "audience_exceptions",
                    "type": {
                        "optional": {
                            "datatype": "AudienceExceptions",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderMetadata": {
            "description": "The metadata which includes basic information about the shared folder.",
            "fields": [
                {
                    "description": "The current user's access level for this shared folder.",
                    "parameter": "access_type",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Whether this folder is inside of a team folder.",
                    "parameter": "is_inside_team_folder",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Whether this folder is a :link:`team folder https://www.dropbox.com/en/help/986`.",
                    "parameter": "is_team_folder",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The name of the this shared folder.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Policies governing this shared folder.",
                    "parameter": "policy",
                    "type": {
                        "datatype": "FolderPolicy",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "URL for displaying a web preview of the shared folder.",
                    "parameter": "preview_url",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The ID of the shared folder.",
                    "parameter": "shared_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Timestamp indicating when the current user was invited to this shared folder.",
                    "parameter": "time_invited",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "The display names of the users that own the folder. If the folder is part of a team folder, the display names of the team admins are also included. Absent if the owner display names cannot be fetched.",
                    "parameter": "owner_display_names",
                    "type": {
                        "optional": {
                            "list": {
                                "primitive": "String"
                            }
                        }
                    }
                },
                {
                    "description": "The team that owns the folder. This field is not present if the folder is not owned by a team.",
                    "parameter": "owner_team",
                    "type": {
                        "optional": {
                            "datatype": "Team",
                            "namespace": "users"
                        }
                    }
                },
                {
                    "description": "The ID of the parent shared folder. This field is present only if the folder is contained within another shared folder.",
                    "parameter": "parent_shared_folder_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The lower-cased full path of this shared folder. Absent for unmounted folders.",
                    "parameter": "path_lower",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Display name for the parent folder.",
                    "parameter": "parent_folder_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The metadata of the shared content link to this shared folder. Absent if there is no link on the folder. This is for an unreleased feature so it may not be returned yet.",
                    "parameter": "link_metadata",
                    "type": {
                        "optional": {
                            "datatype": "SharedContentLinkMetadata",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "Actions the current user may perform on the folder and its contents. The set of permissions corresponds to the FolderActions in the request.",
                    "parameter": "permissions",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "FolderPermission",
                                "namespace": "sharing"
                            }
                        }
                    }
                },
                {
                    "description": "Whether the folder inherits its members from its parent.",
                    "parameter": "access_inheritance",
                    "type": {
                        "datatype": "AccessInheritance",
                        "namespace": "sharing"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkPolicy": {
            "description": "Who can view shared links in this folder.",
            "fields": [
                {
                    "description": "Links can be shared with anyone.",
                    "parameter": "anyone",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Links can be shared with anyone on the same team as the owner.",
                    "parameter": "team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Links can only be shared among members of the shared folder.",
                    "parameter": "members",
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
        "ViewerInfoPolicy": {
            "fields": [
                {
                    "description": "Viewer information is available on this file.",
                    "parameter": "enabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Viewer information is disabled on this file.",
                    "parameter": "disabled",
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
        "Team": {
            "description": "Information about a team.",
            "fields": [
                {
                    "description": "The team's unique ID.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the team.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
