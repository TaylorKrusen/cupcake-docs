export default {"files": {"SyncSetting": {"stone_type": "open_union", "fields": [{"parameter": "default", "type": {"primitive": "Void"}, "description": "On first sync to members' computers, the specified folder will follow its parent folder's setting or otherwise follow default sync behavior."}, {"parameter": "not_synced", "type": {"primitive": "Void"}, "description": "On first sync to members' computers, the specified folder will be set to not sync with selective sync."}, {"parameter": "not_synced_inactive", "type": {"primitive": "Void"}, "description": "The specified folder's not_synced setting is inactive due to its location or other configuration changes. It will follow its parent folder's setting."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "ContentSyncSetting": {"stone_type": "struct", "fields": [{"parameter": "id", "type": {"primitive": "String"}, "description": "Id of the item this setting is applied to."}, {"parameter": "sync_setting", "type": {"datatype": "SyncSetting", "namespace": "files"}, "description": "Setting for this item."}]}}, "team": {"TeamFolderAccessError": {"stone_type": "open_union", "fields": [{"parameter": "invalid_team_folder_id", "type": {"primitive": "Void"}, "description": "The team folder ID is invalid."}, {"parameter": "no_access", "type": {"primitive": "Void"}, "description": "The authenticated app does not have permission to manage that team folder."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "TeamFolderInvalidStatusError": {"stone_type": "open_union", "fields": [{"parameter": "active", "type": {"primitive": "Void"}, "description": "The folder is active and the operation did not succeed."}, {"parameter": "archived", "type": {"primitive": "Void"}, "description": "The folder is archived and the operation did not succeed."}, {"parameter": "archive_in_progress", "type": {"primitive": "Void"}, "description": "The folder is being archived and the operation did not succeed."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "TeamFolderArchiveError": {"stone_type": "open_union", "fields": [{"parameter": "access_error", "type": {"datatype": "TeamFolderAccessError", "namespace": "team"}}, {"parameter": "status_error", "type": {"datatype": "TeamFolderInvalidStatusError", "namespace": "team"}}, {"parameter": "team_shared_dropbox_error", "type": {"datatype": "TeamFolderTeamSharedDropboxError", "namespace": "team"}}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": ""}, "TeamFolderArchiveArg": {"stone_type": "struct", "fields": [{"parameter": "team_folder_id", "type": {"primitive": "String"}, "description": "The ID of the team folder."}, {"parameter": "force_async_off", "type": {"primitive": "Boolean"}, "description": "Whether to force the archive to happen synchronously."}]}, "TeamFolderMetadata": {"stone_type": "struct", "fields": [{"parameter": "team_folder_id", "type": {"primitive": "String"}, "description": "The ID of the team folder."}, {"parameter": "name", "type": {"primitive": "String"}, "description": "The name of the team folder."}, {"parameter": "status", "type": {"datatype": "TeamFolderStatus", "namespace": "team"}, "description": "The status of the team folder."}, {"parameter": "is_team_shared_dropbox", "type": {"primitive": "Boolean"}, "description": "True if this team folder is a shared team root."}, {"parameter": "sync_setting", "type": {"datatype": "SyncSetting", "namespace": "files"}, "description": "The sync setting applied to this team folder."}, {"parameter": "content_sync_settings", "type": {"list": {"datatype": "ContentSyncSetting", "namespace": "files"}}, "description": "Sync settings applied to contents of this team folder."}], "description": "Properties of a team folder."}, "TeamFolderStatus": {"stone_type": "open_union", "fields": [{"parameter": "active", "type": {"primitive": "Void"}, "description": "The team folder and sub-folders are available to all members."}, {"parameter": "archived", "type": {"primitive": "Void"}, "description": "The team folder is not accessible outside of the team folder manager."}, {"parameter": "archive_in_progress", "type": {"primitive": "Void"}, "description": "The team folder is not accessible outside of the team folder manager."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "TeamFolderArchiveLaunch": {"stone_type": "union", "fields": [{"parameter": "async_job_id", "type": {"primitive": "String"}, "description": "This response indicates that the processing is asynchronous. The string is an id that can be used to obtain the status of the asynchronous job."}, {"parameter": "complete", "type": {"datatype": "TeamFolderMetadata", "namespace": "team"}}]}, "TeamFolderTeamSharedDropboxError": {"stone_type": "open_union", "fields": [{"parameter": "disallowed", "type": {"primitive": "Void"}, "description": "This action is not allowed for a shared team root."}, {"parameter": "other", "type": {"primitive": "Void"}}]}}}
