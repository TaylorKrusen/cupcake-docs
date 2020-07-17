export default {
    "sharing": {
        "GetSharedLinkFileError": {
            "fields": [
                {
                    "description": "The shared link wasn't found.",
                    "parameter": "shared_link_not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The caller is not allowed to access this shared link.",
                    "parameter": "shared_link_access_denied",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This type of link is not supported; use :route:`files.export` instead.",
                    "parameter": "unsupported_link_type",
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
                    "description": "Directories cannot be retrieved by this endpoint.",
                    "parameter": "shared_link_is_directory",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "GetSharedLinkMetadataArg": {
            "fields": [
                {
                    "description": "URL of the shared link.",
                    "parameter": "url",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "If the shared link is to a folder, this parameter can be used to retrieve the metadata for a specific file or sub-folder in this folder. A relative path should be used.",
                    "parameter": "path",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "If the shared link has a password, this parameter can be used.",
                    "parameter": "link_password",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LinkAccessLevel": {
            "fields": [
                {
                    "description": "Users who use the link can view and comment on the content.",
                    "parameter": "viewer",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Users who use the link can edit, view and comment on the content.",
                    "parameter": "editor",
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
        "LinkPermissions": {
            "fields": [
                {
                    "description": "Whether the caller can revoke the shared link.",
                    "parameter": "can_revoke",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The current visibility of the link after considering the shared links policies of the the team (in case the link's owner is part of a team) and the shared folder (in case the linked file is part of a shared folder). This field is shown only if the caller has access to this info (the link's owner always has access to this data). For some links, an effective_audience value is returned instead.",
                    "parameter": "resolved_visibility",
                    "type": {
                        "optional": {
                            "datatype": "ResolvedVisibility",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The shared link's requested visibility. This can be overridden by the team and shared folder policies. The final visibility, after considering these policies, can be found in :field:`resolved_visibility`. This is shown only if the caller is the link's owner and resolved_visibility is returned instead of effective_audience.",
                    "parameter": "requested_visibility",
                    "type": {
                        "optional": {
                            "datatype": "RequestedVisibility",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The failure reason for revoking the link. This field will only be present if the :field:`can_revoke` is :val:`false`.",
                    "parameter": "revoke_failure_reason",
                    "type": {
                        "optional": {
                            "datatype": "SharedLinkAccessFailureReason",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The type of audience who can benefit from the access level specified by the `link_access_level` field.",
                    "parameter": "effective_audience",
                    "type": {
                        "optional": {
                            "datatype": "LinkAudience",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The access level that the link will grant to its users. A link can grant additional rights to a user beyond their current access level. For example, if a user was invited as a viewer to a file, and then opens a link with `link_access_level` set to `editor`, then they will gain editor privileges. The `link_access_level` is a property of the link, and does not depend on who is calling this API. In particular, `link_access_level` does not take into account the API caller's current permissions to the content.",
                    "parameter": "link_access_level",
                    "type": {
                        "optional": {
                            "datatype": "LinkAccessLevel",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RequestedVisibility": {
            "description": "The access permission that can be requested by the caller for the shared link. Note that the final resolved visibility of the shared link takes into account other aspects, such as team and shared folder settings. Check the :type:`ResolvedVisibility` for more info on the possible resolved visibility values of shared links.",
            "fields": [
                {
                    "description": "Anyone who has received the link can access it. No login required.",
                    "parameter": "public",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Only members of the same team can access the link. Login is required.",
                    "parameter": "team_only",
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
                }
            ],
            "stone_type": "union"
        },
        "ResolvedVisibility": {
            "description": "The actual access permissions values of shared links after taking into account user preferences and the team and shared folder settings. Check the :type:`RequestedVisibility` for more info on the possible visibility values that can be set by the shared link's owner.",
            "fields": [
                {
                    "description": "Anyone who has received the link can access it. No login required.",
                    "parameter": "public",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Only members of the same team can access the link. Login is required.",
                    "parameter": "team_only",
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
                    "description": "Only members of the same team who have the link-specific password can access the link. Login is required.",
                    "parameter": "team_and_password",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Only members of the shared folder containing the linked file can access the link. Login is required.",
                    "parameter": "shared_folder_only",
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
        "SharedLinkAccessFailureReason": {
            "fields": [
                {
                    "description": "User is not logged in.",
                    "parameter": "login_required",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User's email is not verified.",
                    "parameter": "email_verify_required",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The link is password protected.",
                    "parameter": "password_required",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Access is allowed for team members only.",
                    "parameter": "team_only",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Access is allowed for the shared link's owner only.",
                    "parameter": "owner_only",
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
        "SharedLinkMetadata": {
            "description": "The metadata of a shared link.",
            "fields": [
                {
                    "description": "URL of the shared link.",
                    "parameter": "url",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The linked file name (including extension). This never contains a slash.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The link's access permissions.",
                    "parameter": "link_permissions",
                    "type": {
                        "datatype": "LinkPermissions",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "A unique identifier for the linked file.",
                    "parameter": "id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Expiration time, if set. By default the link won't expire.",
                    "parameter": "expires",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The lowercased full path in the user's Dropbox. This always starts with a slash. This field will only be present only if the linked file is in the authenticated user's  dropbox.",
                    "parameter": "path_lower",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The team membership information of the link's owner.  This field will only be present  if the link's owner is a team member.",
                    "parameter": "team_member_info",
                    "type": {
                        "optional": {
                            "datatype": "TeamMemberInfo",
                            "namespace": "sharing"
                        }
                    }
                },
                {
                    "description": "The team information of the content's owner. This field will only be present if the content's owner is a team member and the content's owner team is different from the link's owner team.",
                    "parameter": "content_owner_team_info",
                    "type": {
                        "optional": {
                            "datatype": "Team",
                            "namespace": "users"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "TeamMemberInfo": {
            "description": "Information about a team member.",
            "fields": [
                {
                    "description": "Information about the member's team.",
                    "parameter": "team_info",
                    "type": {
                        "datatype": "Team",
                        "namespace": "users"
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
                    "description": "ID of user as a member of a team. This field will only be present if the member is in the same team as current user.",
                    "parameter": "member_id",
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
