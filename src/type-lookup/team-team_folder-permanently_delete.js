export default {"team": {"TeamFolderAccessError": {"stone_type": "open_union", "fields": [{"parameter": "invalid_team_folder_id", "type": {"primitive": "Void"}, "description": "The team folder ID is invalid."}, {"parameter": "no_access", "type": {"primitive": "Void"}, "description": "The authenticated app does not have permission to manage that team folder."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "TeamFolderTeamSharedDropboxError": {"stone_type": "open_union", "fields": [{"parameter": "disallowed", "type": {"primitive": "Void"}, "description": "This action is not allowed for a shared team root."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "TeamFolderPermanentlyDeleteError": {"stone_type": "open_union", "fields": [{"parameter": "access_error", "type": {"datatype": "TeamFolderAccessError", "namespace": "team"}}, {"parameter": "status_error", "type": {"datatype": "TeamFolderInvalidStatusError", "namespace": "team"}}, {"parameter": "team_shared_dropbox_error", "type": {"datatype": "TeamFolderTeamSharedDropboxError", "namespace": "team"}}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": ""}, "TeamFolderInvalidStatusError": {"stone_type": "open_union", "fields": [{"parameter": "active", "type": {"primitive": "Void"}, "description": "The folder is active and the operation did not succeed."}, {"parameter": "archived", "type": {"primitive": "Void"}, "description": "The folder is archived and the operation did not succeed."}, {"parameter": "archive_in_progress", "type": {"primitive": "Void"}, "description": "The folder is being archived and the operation did not succeed."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "TeamFolderIdArg": {"stone_type": "struct", "fields": [{"parameter": "team_folder_id", "type": {"primitive": "String"}, "description": "The ID of the team folder."}]}}}