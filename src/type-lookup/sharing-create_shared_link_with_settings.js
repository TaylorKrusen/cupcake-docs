export default {"files": {"LookupError": {"stone_type": "open_union", "fields": [{"parameter": "malformed_path", "type": {"optional": {"primitive": "String"}}, "description": "The given path does not satisfy the required path format. Please refer to the :link:`Path formats documentation https://www.dropbox.com/developers/documentation/http/documentation#path-formats` for more information."}, {"parameter": "not_found", "type": {"primitive": "Void"}, "description": "There is nothing at the given path."}, {"parameter": "not_file", "type": {"primitive": "Void"}, "description": "We were expecting a file, but the given path refers to something that isn't a file."}, {"parameter": "not_folder", "type": {"primitive": "Void"}, "description": "We were expecting a folder, but the given path refers to something that isn't a folder."}, {"parameter": "restricted_content", "type": {"primitive": "Void"}, "description": "The file cannot be transferred because the content is restricted.  For example, sometimes there are legal restrictions due to copyright claims."}, {"parameter": "unsupported_content_type", "type": {"primitive": "Void"}, "description": "This operation is not supported for this content type."}, {"parameter": "locked", "type": {"primitive": "Void"}, "description": "The given path is locked."}, {"parameter": "other", "type": {"primitive": "Void"}}]}}, "sharing": {"RequestedLinkAccessLevel": {"stone_type": "open_union", "fields": [{"parameter": "viewer", "type": {"primitive": "Void"}, "description": "Users who use the link can view and comment on the content."}, {"parameter": "editor", "type": {"primitive": "Void"}, "description": "Users who use the link can edit, view and comment on the content. Note not all file types support edit links yet."}, {"parameter": "max", "type": {"primitive": "Void"}, "description": "Request for the maximum access level you can set the link to."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "LinkAudience": {"stone_type": "open_union", "fields": [{"parameter": "public", "type": {"primitive": "Void"}, "description": "Link is accessible by anyone."}, {"parameter": "team", "type": {"primitive": "Void"}, "description": "Link is accessible only by team members."}, {"parameter": "no_one", "type": {"primitive": "Void"}, "description": "The link can be used by no one. The link merely points the user to the content, and does not grant additional rights to the user. Members of the content who use this link can only access the content with their pre-existing access rights."}, {"parameter": "password", "type": {"primitive": "Void"}, "description": "A link-specific password is required to access the link. Login is not required."}, {"parameter": "members", "type": {"primitive": "Void"}, "description": "Link is accessible only by members of the content."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "CreateSharedLinkWithSettingsError": {"stone_type": "union", "fields": [{"parameter": "path", "type": {"datatype": "LookupError", "namespace": "files"}}, {"parameter": "email_not_verified", "type": {"primitive": "Void"}, "description": "User's email should be verified."}, {"parameter": "shared_link_already_exists", "type": {"optional": {"datatype": "SharedLinkAlreadyExistsMetadata", "namespace": "sharing"}}, "description": "The shared link already exists. You can call :route:`list_shared_links` to get the  existing link, or use the provided metadata if it is returned."}, {"parameter": "settings_error", "type": {"datatype": "SharedLinkSettingsError", "namespace": "sharing"}, "description": "There is an error with the given settings."}, {"parameter": "access_denied", "type": {"primitive": "Void"}, "description": "Access to the requested path is forbidden."}]}, "LinkPermissions": {"stone_type": "struct", "fields": [{"parameter": "can_revoke", "type": {"primitive": "Boolean"}, "description": "Whether the caller can revoke the shared link."}, {"parameter": "resolved_visibility", "type": {"optional": {"datatype": "ResolvedVisibility", "namespace": "sharing"}}, "description": "The current visibility of the link after considering the shared links policies of the the team (in case the link's owner is part of a team) and the shared folder (in case the linked file is part of a shared folder). This field is shown only if the caller has access to this info (the link's owner always has access to this data). For some links, an effective_audience value is returned instead."}, {"parameter": "requested_visibility", "type": {"optional": {"datatype": "RequestedVisibility", "namespace": "sharing"}}, "description": "The shared link's requested visibility. This can be overridden by the team and shared folder policies. The final visibility, after considering these policies, can be found in :field:`resolved_visibility`. This is shown only if the caller is the link's owner and resolved_visibility is returned instead of effective_audience."}, {"parameter": "revoke_failure_reason", "type": {"optional": {"datatype": "SharedLinkAccessFailureReason", "namespace": "sharing"}}, "description": "The failure reason for revoking the link. This field will only be present if the :field:`can_revoke` is :val:`false`."}, {"parameter": "effective_audience", "type": {"optional": {"datatype": "LinkAudience", "namespace": "sharing"}}, "description": "The type of audience who can benefit from the access level specified by the `link_access_level` field."}, {"parameter": "link_access_level", "type": {"optional": {"datatype": "LinkAccessLevel", "namespace": "sharing"}}, "description": "The access level that the link will grant to its users. A link can grant additional rights to a user beyond their current access level. For example, if a user was invited as a viewer to a file, and then opens a link with `link_access_level` set to `editor`, then they will gain editor privileges. The `link_access_level` is a property of the link, and does not depend on who is calling this API. In particular, `link_access_level` does not take into account the API caller's current permissions to the content."}]}, "SharedLinkAccessFailureReason": {"stone_type": "open_union", "fields": [{"parameter": "login_required", "type": {"primitive": "Void"}, "description": "User is not logged in."}, {"parameter": "email_verify_required", "type": {"primitive": "Void"}, "description": "User's email is not verified."}, {"parameter": "password_required", "type": {"primitive": "Void"}, "description": "The link is password protected."}, {"parameter": "team_only", "type": {"primitive": "Void"}, "description": "Access is allowed for team members only."}, {"parameter": "owner_only", "type": {"primitive": "Void"}, "description": "Access is allowed for the shared link's owner only."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "SharedLinkMetadata": {"stone_type": "struct", "fields": [{"parameter": "url", "type": {"primitive": "String"}, "description": "URL of the shared link."}, {"parameter": "name", "type": {"primitive": "String"}, "description": "The linked file name (including extension). This never contains a slash."}, {"parameter": "link_permissions", "type": {"datatype": "LinkPermissions", "namespace": "sharing"}, "description": "The link's access permissions."}, {"parameter": "id", "type": {"optional": {"primitive": "String"}}, "description": "A unique identifier for the linked file."}, {"parameter": "expires", "type": {"optional": {"primitive": "Timestamp"}}, "description": "Expiration time, if set. By default the link won't expire."}, {"parameter": "path_lower", "type": {"optional": {"primitive": "String"}}, "description": "The lowercased full path in the user's Dropbox. This always starts with a slash. This field will only be present only if the linked file is in the authenticated user's  dropbox."}, {"parameter": "team_member_info", "type": {"optional": {"datatype": "TeamMemberInfo", "namespace": "sharing"}}, "description": "The team membership information of the link's owner.  This field will only be present  if the link's owner is a team member."}, {"parameter": "content_owner_team_info", "type": {"optional": {"datatype": "Team", "namespace": "users"}}, "description": "The team information of the content's owner. This field will only be present if the content's owner is a team member and the content's owner team is different from the link's owner team."}], "todo": true, "description": "The metadata of a shared link."}, "LinkAccessLevel": {"stone_type": "open_union", "fields": [{"parameter": "viewer", "type": {"primitive": "Void"}, "description": "Users who use the link can view and comment on the content."}, {"parameter": "editor", "type": {"primitive": "Void"}, "description": "Users who use the link can edit, view and comment on the content."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "TeamMemberInfo": {"stone_type": "struct", "fields": [{"parameter": "team_info", "type": {"datatype": "Team", "namespace": "users"}, "description": "Information about the member's team."}, {"parameter": "display_name", "type": {"primitive": "String"}, "description": "The display name of the user."}, {"parameter": "member_id", "type": {"optional": {"primitive": "String"}}, "description": "ID of user as a member of a team. This field will only be present if the member is in the same team as current user."}], "description": "Information about a team member."}, "SharedLinkAlreadyExistsMetadata": {"stone_type": "open_union", "fields": [{"parameter": "metadata", "type": {"datatype": "SharedLinkMetadata", "namespace": "sharing"}, "description": "Metadata of the shared link that already exists."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "SharedLinkSettings": {"stone_type": "struct", "fields": [{"parameter": "requested_visibility", "type": {"optional": {"datatype": "RequestedVisibility", "namespace": "sharing"}}, "description": "The requested access for this shared link."}, {"parameter": "link_password", "type": {"optional": {"primitive": "String"}}, "description": "If :field:`requested_visibility` is :field:`RequestedVisibility.password` this is needed to specify the password to access the link."}, {"parameter": "expires", "type": {"optional": {"primitive": "Timestamp"}}, "description": "Expiration time of the shared link. By default the link won't expire."}, {"parameter": "audience", "type": {"optional": {"datatype": "LinkAudience", "namespace": "sharing"}}, "description": "The new audience who can benefit from the access level specified by the link's access level specified in the `link_access_level` field of `LinkPermissions`. This is used in conjunction with team policies and shared folder policies to determine the final effective audience type in the `effective_audience` field of `LinkPermissions."}, {"parameter": "access", "type": {"optional": {"datatype": "RequestedLinkAccessLevel", "namespace": "sharing"}}, "description": "Requested access level you want the audience to gain from this link. Note, modifying access level for an existing link is not supported."}]}, "SharedLinkSettingsError": {"stone_type": "union", "fields": [{"parameter": "invalid_settings", "type": {"primitive": "Void"}, "description": "The given settings are invalid (for example, all attributes of the :type:`SharedLinkSettings` are empty, the requested visibility is :field:`RequestedVisibility.password` but the :field:`SharedLinkSettings.link_password` is missing, :field:`SharedLinkSettings.expires` is set to the past, etc.)."}, {"parameter": "not_authorized", "type": {"primitive": "Void"}, "description": "User is not allowed to modify the settings of this link. Note that basic users can only set :field:`RequestedVisibility.public` as the :field:`SharedLinkSettings.requested_visibility` and cannot set :field:`SharedLinkSettings.expires`."}]}, "CreateSharedLinkWithSettingsArg": {"stone_type": "struct", "fields": [{"parameter": "path", "type": {"primitive": "String"}, "description": "The path to be shared by the shared link."}, {"parameter": "settings", "type": {"optional": {"datatype": "SharedLinkSettings", "namespace": "sharing"}}, "description": "The requested settings for the newly created shared link."}]}, "ResolvedVisibility": {"stone_type": "open_union", "fields": [{"parameter": "public", "type": {"primitive": "Void"}, "description": "Anyone who has received the link can access it. No login required."}, {"parameter": "team_only", "type": {"primitive": "Void"}, "description": "Only members of the same team can access the link. Login is required."}, {"parameter": "password", "type": {"primitive": "Void"}, "description": "A link-specific password is required to access the link. Login is not required."}, {"parameter": "team_and_password", "type": {"primitive": "Void"}, "description": "Only members of the same team who have the link-specific password can access the link. Login is required."}, {"parameter": "shared_folder_only", "type": {"primitive": "Void"}, "description": "Only members of the shared folder containing the linked file can access the link. Login is required."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "The actual access permissions values of shared links after taking into account user preferences and the team and shared folder settings. Check the :type:`RequestedVisibility` for more info on the possible visibility values that can be set by the shared link's owner."}, "RequestedVisibility": {"stone_type": "union", "fields": [{"parameter": "public", "type": {"primitive": "Void"}, "description": "Anyone who has received the link can access it. No login required."}, {"parameter": "team_only", "type": {"primitive": "Void"}, "description": "Only members of the same team can access the link. Login is required."}, {"parameter": "password", "type": {"primitive": "Void"}, "description": "A link-specific password is required to access the link. Login is not required."}], "description": "The access permission that can be requested by the caller for the shared link. Note that the final resolved visibility of the shared link takes into account other aspects, such as team and shared folder settings. Check the :type:`ResolvedVisibility` for more info on the possible resolved visibility values of shared links."}}, "users": {"Team": {"stone_type": "struct", "fields": [{"parameter": "id", "type": {"primitive": "String"}, "description": "The team's unique ID."}, {"parameter": "name", "type": {"primitive": "String"}, "description": "The name of the team."}], "description": "Information about a team."}}}