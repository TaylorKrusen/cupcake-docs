export default {"files": {"SyncSetting": {"stone_type": "open_union", "fields": [{"parameter": "default", "type": {"primitive": "Void"}, "description": "On first sync to members' computers, the specified folder will follow its parent folder's setting or otherwise follow default sync behavior."}, {"parameter": "not_synced", "type": {"primitive": "Void"}, "description": "On first sync to members' computers, the specified folder will be set to not sync with selective sync."}, {"parameter": "not_synced_inactive", "type": {"primitive": "Void"}, "description": "The specified folder's not_synced setting is inactive due to its location or other configuration changes. It will follow its parent folder's setting."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "ContentSyncSetting": {"stone_type": "struct", "fields": [{"parameter": "id", "type": {"primitive": "String"}, "description": "Id of the item this setting is applied to."}, {"parameter": "sync_setting", "type": {"datatype": "SyncSetting", "namespace": "files"}, "description": "Setting for this item."}]}}, "team": {"TeamFolderListResult": {"stone_type": "struct", "fields": [{"parameter": "team_folders", "type": {"list": {"datatype": "TeamFolderMetadata", "namespace": "team"}}, "description": "List of all team folders in the authenticated team."}, {"parameter": "cursor", "type": {"primitive": "String"}, "description": "Pass the cursor into :route:`team_folder/list/continue` to obtain additional team folders."}, {"parameter": "has_more", "type": {"primitive": "Boolean"}, "description": "Is true if there are additional team folders that have not been returned yet. An additional call to :route:`team_folder/list/continue` can retrieve them."}], "description": "Result for :route:`team_folder/list` and :route:`team_folder/list/continue`."}, "TeamFolderListContinueArg": {"stone_type": "struct", "fields": [{"parameter": "cursor", "type": {"primitive": "String"}, "description": "Indicates from what point to get the next set of team folders."}]}, "TeamFolderListContinueError": {"stone_type": "open_union", "fields": [{"parameter": "invalid_cursor", "type": {"primitive": "Void"}, "description": "The cursor is invalid."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "TeamFolderMetadata": {"stone_type": "struct", "fields": [{"parameter": "team_folder_id", "type": {"primitive": "String"}, "description": "The ID of the team folder."}, {"parameter": "name", "type": {"primitive": "String"}, "description": "The name of the team folder."}, {"parameter": "status", "type": {"datatype": "TeamFolderStatus", "namespace": "team"}, "description": "The status of the team folder."}, {"parameter": "is_team_shared_dropbox", "type": {"primitive": "Boolean"}, "description": "True if this team folder is a shared team root."}, {"parameter": "sync_setting", "type": {"datatype": "SyncSetting", "namespace": "files"}, "description": "The sync setting applied to this team folder."}, {"parameter": "content_sync_settings", "type": {"list": {"datatype": "ContentSyncSetting", "namespace": "files"}}, "description": "Sync settings applied to contents of this team folder."}], "description": "Properties of a team folder."}, "TeamFolderStatus": {"stone_type": "open_union", "fields": [{"parameter": "active", "type": {"primitive": "Void"}, "description": "The team folder and sub-folders are available to all members."}, {"parameter": "archived", "type": {"primitive": "Void"}, "description": "The team folder is not accessible outside of the team folder manager."}, {"parameter": "archive_in_progress", "type": {"primitive": "Void"}, "description": "The team folder is not accessible outside of the team folder manager."}, {"parameter": "other", "type": {"primitive": "Void"}}]}}}
