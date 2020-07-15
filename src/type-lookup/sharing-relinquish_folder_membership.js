export default {"sharing": {"RelinquishFolderMembershipArg": {"stone_type": "struct", "fields": [{"parameter": "shared_folder_id", "type": {"primitive": "String"}, "description": "The ID for the shared folder."}, {"parameter": "leave_a_copy", "type": {"primitive": "Boolean"}, "description": "Keep a copy of the folder's contents upon relinquishing membership."}]}, "RelinquishFolderMembershipError": {"stone_type": "open_union", "fields": [{"parameter": "access_error", "type": {"datatype": "SharedFolderAccessError", "namespace": "sharing"}}, {"parameter": "folder_owner", "type": {"primitive": "Void"}, "description": "The current user is the owner of the shared folder. Owners cannot relinquish membership to their own folders. Try unsharing or transferring ownership first."}, {"parameter": "mounted", "type": {"primitive": "Void"}, "description": "The shared folder is currently mounted.  Unmount the shared folder before relinquishing membership."}, {"parameter": "group_access", "type": {"primitive": "Void"}, "description": "The current user has access to the shared folder via a group.  You can't relinquish membership to folders shared via groups."}, {"parameter": "team_folder", "type": {"primitive": "Void"}, "description": "This action cannot be performed on a team shared folder."}, {"parameter": "no_permission", "type": {"primitive": "Void"}, "description": "The current user does not have permission to perform this action."}, {"parameter": "no_explicit_access", "type": {"primitive": "Void"}, "description": "The current user only has inherited access to the shared folder.  You can't relinquish inherited membership to folders."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "SharedFolderAccessError": {"stone_type": "open_union", "fields": [{"parameter": "invalid_id", "type": {"primitive": "Void"}, "description": "This shared folder ID is invalid."}, {"parameter": "not_a_member", "type": {"primitive": "Void"}, "description": "The user is not a member of the shared folder thus cannot access it."}, {"parameter": "email_unverified", "type": {"primitive": "Void"}, "description": "Never set."}, {"parameter": "unmounted", "type": {"primitive": "Void"}, "description": "The shared folder is unmounted."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "There is an error accessing the shared folder."}}}