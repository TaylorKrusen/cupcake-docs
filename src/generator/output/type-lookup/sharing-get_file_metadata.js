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
        "ExpectedSharedContentLinkMetadata": {
            "description": "The expected metadata of a shared link for a file or folder when a link is first created for the content. Absent if the link already exists.",
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
                }
            ],
            "stone_type": "struct"
        },
        "FileAction": {
            "description": "Sharing actions that may be taken on files.",
            "fields": [
                {
                    "description": "Disable viewer information on the file.",
                    "parameter": "disable_viewer_info",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Change or edit contents of the file.",
                    "parameter": "edit_contents",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Enable viewer information on the file.",
                    "parameter": "enable_viewer_info",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Add a member with view permissions.",
                    "parameter": "invite_viewer",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Add a member with view permissions but no comment permissions.",
                    "parameter": "invite_viewer_no_comment",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Add a member with edit permissions.",
                    "parameter": "invite_editor",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Stop sharing this file.",
                    "parameter": "unshare",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Relinquish one's own membership to the file.",
                    "parameter": "relinquish_membership",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Use create_view_link and create_edit_link instead.",
                    "parameter": "share_link",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Use create_view_link and create_edit_link instead.",
                    "parameter": "create_link",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Create a shared link to a file that only allows users to view the content.",
                    "parameter": "create_view_link",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Create a shared link to a file that allows users to edit the content.",
                    "parameter": "create_edit_link",
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
        "FilePermission": {
            "description": "Whether the user is allowed to take the sharing action on the file.",
            "fields": [
                {
                    "description": "The action that the user may wish to take on the file.",
                    "parameter": "action",
                    "type": {
                        "datatype": "FileAction",
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
        "GetFileMetadataArg": {
            "description": "Arguments of :route:`get_file_metadata`.",
            "fields": [
                {
                    "description": "The file to query.",
                    "parameter": "file",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A list of `FileAction`s corresponding to `FilePermission`s that should appear in the  response's :field:`SharedFileMetadata.permissions` field describing the actions the  authenticated user can perform on the file.",
                    "parameter": "actions",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "FileAction",
                                "namespace": "sharing"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GetFileMetadataError": {
            "description": "Error result for :route:`get_file_metadata`.",
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
        "SharedFileMetadata": {
            "description": "Properties of the shared file.",
            "fields": [
                {
                    "description": "The ID of the file.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of this file.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Policies governing this shared file.",
                    "parameter": "policy",
                    "type": {
                        "datatype": "FolderPolicy",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "URL for displaying a web preview of the shared file.",
                    "parameter": "preview_url",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The current user's access level for this shared file.",
                    "parameter": "access_type",
                    "type": {
                        "optional": {
                            "datatype": "AccessLevel",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The expected metadata of the link associated for the file when it is first shared. Absent if the link already exists. This is for an unreleased feature so it may not be returned yet.",
                    "parameter": "expected_link_metadata",
                    "type": {
                        "optional": {
                            "datatype": "ExpectedSharedContentLinkMetadata",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The metadata of the link associated for the file. This is for an unreleased feature so it may not be returned yet.",
                    "parameter": "link_metadata",
                    "type": {
                        "optional": {
                            "datatype": "SharedContentLinkMetadata",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The display names of the users that own the file. If the file is part of a team folder, the display names of the team admins are also included. Absent if the owner display names cannot be fetched.",
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
                    "description": "The team that owns the file. This field is not present if the file is not owned by a team.",
                    "parameter": "owner_team",
                    "type": {
                        "optional": {
                            "datatype": "Team",
                            "namespace": "users"
                        }
                    }
                },
                {
                    "description": "The ID of the parent shared folder. This field is present only if the file is contained within a shared folder.",
                    "parameter": "parent_shared_folder_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The cased path to be used for display purposes only. In rare instances the casing will not correctly match the user's filesystem, but this behavior will match the path provided in the Core API v1. Absent for unmounted files.",
                    "parameter": "path_display",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The lower-case full path of this file. Absent for unmounted files.",
                    "parameter": "path_lower",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The sharing permissions that requesting user has on this file. This corresponds to the entries given in :field:`GetFileMetadataBatchArg.actions` or :field:`GetFileMetadataArg.actions`.",
                    "parameter": "permissions",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "FilePermission",
                                "namespace": "sharing"
                            }
                        }
                    }
                },
                {
                    "description": "Timestamp indicating when the current user was invited to this shared file. If the user was not invited to the shared file, the timestamp will indicate when the user was invited to the parent shared folder. This value may be absent.",
                    "parameter": "time_invited",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
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
