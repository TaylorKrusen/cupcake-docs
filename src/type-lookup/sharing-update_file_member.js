export default {"sharing": {"UpdateFileMemberArgs": {"stone_type": "struct", "fields": [{"parameter": "file", "type": {"primitive": "String"}, "description": "File for which we are changing a member's access."}, {"parameter": "member", "type": {"datatype": "MemberSelector", "namespace": "sharing"}, "description": "The member whose access we are changing."}, {"parameter": "access_level", "type": {"datatype": "AccessLevel", "namespace": "sharing"}, "description": "The new access level for the member."}], "description": "Arguments for :route:`update_file_member`."}, "FileMemberActionError": {"stone_type": "open_union", "fields": [{"parameter": "invalid_member", "type": {"primitive": "Void"}, "description": "Specified member was not found."}, {"parameter": "no_permission", "type": {"primitive": "Void"}, "description": "User does not have permission to perform this action on this member."}, {"parameter": "access_error", "type": {"datatype": "SharingFileAccessError", "namespace": "sharing"}, "description": "Specified file was invalid or user does not have access."}, {"parameter": "no_explicit_access", "type": {"datatype": "MemberAccessLevelResult", "namespace": "sharing"}, "description": "The action cannot be completed because the target member does not have explicit access to the file. The return value is the access that the member has to the file from a parent folder."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "MemberSelector": {"stone_type": "open_union", "fields": [{"parameter": "dropbox_id", "type": {"primitive": "String"}, "description": "Dropbox account, team member, or group ID of member."}, {"parameter": "email", "type": {"primitive": "String"}, "description": "E-mail address of member."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "Includes different ways to identify a member of a shared folder."}, "MemberAccessLevelResult": {"stone_type": "struct", "fields": [{"parameter": "access_level", "type": {"optional": {"datatype": "AccessLevel", "namespace": "sharing"}}, "description": "The member still has this level of access to the content through a parent folder."}, {"parameter": "warning", "type": {"optional": {"primitive": "String"}}, "description": "A localized string with additional information about why the user has this access level to the content."}, {"parameter": "access_details", "type": {"optional": {"list": {"datatype": "ParentFolderAccessInfo", "namespace": "sharing"}}}, "description": "The parent folders that a member has access to. The field is present if the user has access to the first parent folder where the member gains access."}], "description": "Contains information about a member's access level to content after an operation."}, "ParentFolderAccessInfo": {"stone_type": "struct", "fields": [{"parameter": "folder_name", "type": {"primitive": "String"}, "description": "Display name for the folder."}, {"parameter": "shared_folder_id", "type": {"primitive": "String"}, "description": "The identifier of the parent shared folder."}, {"parameter": "permissions", "type": {"list": {"datatype": "MemberPermission", "namespace": "sharing"}}, "description": "The user's permissions for the parent shared folder."}, {"parameter": "path", "type": {"primitive": "String"}, "description": "The full path to the parent shared folder relative to the acting user's root."}], "description": "Contains information about a parent folder that a member has access to."}, "SharingFileAccessError": {"stone_type": "open_union", "fields": [{"parameter": "no_permission", "type": {"primitive": "Void"}, "description": "Current user does not have sufficient privileges to perform the desired action."}, {"parameter": "invalid_file", "type": {"primitive": "Void"}, "description": "File specified was not found."}, {"parameter": "is_folder", "type": {"primitive": "Void"}, "description": "A folder can't be shared this way. Use folder sharing or a shared link instead."}, {"parameter": "inside_public_folder", "type": {"primitive": "Void"}, "description": "A file inside a public folder can't be shared this way. Use a public link instead."}, {"parameter": "inside_osx_package", "type": {"primitive": "Void"}, "description": "A Mac OS X package can't be shared this way. Use a shared link instead."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "User could not access this file."}, "PermissionDeniedReason": {"stone_type": "open_union", "fields": [{"parameter": "user_not_same_team_as_owner", "type": {"primitive": "Void"}, "description": "User is not on the same team as the folder owner."}, {"parameter": "user_not_allowed_by_owner", "type": {"primitive": "Void"}, "description": "User is prohibited by the owner from taking the action."}, {"parameter": "target_is_indirect_member", "type": {"primitive": "Void"}, "description": "Target is indirectly a member of the folder, for example by being part of a group."}, {"parameter": "target_is_owner", "type": {"primitive": "Void"}, "description": "Target is the owner of the folder."}, {"parameter": "target_is_self", "type": {"primitive": "Void"}, "description": "Target is the user itself."}, {"parameter": "target_not_active", "type": {"primitive": "Void"}, "description": "Target is not an active member of the team."}, {"parameter": "folder_is_limited_team_folder", "type": {"primitive": "Void"}, "description": "Folder is team folder for a limited team."}, {"parameter": "owner_not_on_team", "type": {"primitive": "Void"}, "description": "The content owner needs to be on a Dropbox team to perform this action."}, {"parameter": "permission_denied", "type": {"primitive": "Void"}, "description": "The user does not have permission to perform this action on the link."}, {"parameter": "restricted_by_team", "type": {"primitive": "Void"}, "description": "The user's team policy prevents performing this action on the link."}, {"parameter": "user_account_type", "type": {"primitive": "Void"}, "description": "The user's account type does not support this action."}, {"parameter": "user_not_on_team", "type": {"primitive": "Void"}, "description": "The user needs to be on a Dropbox team to perform this action."}, {"parameter": "folder_is_inside_shared_folder", "type": {"primitive": "Void"}, "description": "Folder is inside of another shared folder."}, {"parameter": "restricted_by_parent_folder", "type": {"primitive": "Void"}, "description": "Policy cannot be changed due to restrictions from parent folder."}, {"parameter": "insufficient_plan", "type": {"datatype": "InsufficientPlan", "namespace": "sharing"}}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "Possible reasons the user is denied a permission."}, "MemberPermission": {"stone_type": "struct", "fields": [{"parameter": "action", "type": {"datatype": "MemberAction", "namespace": "sharing"}, "description": "The action that the user may wish to take on the member."}, {"parameter": "allow", "type": {"primitive": "Boolean"}, "description": "True if the user is allowed to take the action."}, {"parameter": "reason", "type": {"optional": {"datatype": "PermissionDeniedReason", "namespace": "sharing"}}, "description": "The reason why the user is denied the permission. Not present if the action is allowed."}], "description": "Whether the user is allowed to take the action on the associated member."}, "InsufficientPlan": {"stone_type": "struct", "fields": [{"parameter": "message", "type": {"primitive": "String"}, "description": "A message to tell the user to upgrade in order to support expected action."}, {"parameter": "upsell_url", "type": {"optional": {"primitive": "String"}}, "description": "A URL to send the user to in order to obtain the account type they need, e.g. upgrading. Absent if there is no action the user can take to upgrade."}]}, "AccessLevel": {"stone_type": "open_union", "fields": [{"parameter": "owner", "type": {"primitive": "Void"}, "description": "The collaborator is the owner of the shared folder. Owners can view and edit the shared folder as well as set the folder's policies using :route:`update_folder_policy`."}, {"parameter": "editor", "type": {"primitive": "Void"}, "description": "The collaborator can both view and edit the shared folder."}, {"parameter": "viewer", "type": {"primitive": "Void"}, "description": "The collaborator can only view the shared folder."}, {"parameter": "viewer_no_comment", "type": {"primitive": "Void"}, "description": "The collaborator can only view the shared folder and does not have any access to comments."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "Defines the access levels for collaborators."}, "MemberAction": {"stone_type": "open_union", "fields": [{"parameter": "leave_a_copy", "type": {"primitive": "Void"}, "description": "Allow the member to keep a copy of the folder when removing."}, {"parameter": "make_editor", "type": {"primitive": "Void"}, "description": "Make the member an editor of the folder."}, {"parameter": "make_owner", "type": {"primitive": "Void"}, "description": "Make the member an owner of the folder."}, {"parameter": "make_viewer", "type": {"primitive": "Void"}, "description": "Make the member a viewer of the folder."}, {"parameter": "make_viewer_no_comment", "type": {"primitive": "Void"}, "description": "Make the member a viewer of the folder without commenting permissions."}, {"parameter": "remove", "type": {"primitive": "Void"}, "description": "Remove the member from the folder."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "Actions that may be taken on members of a shared folder."}}}
