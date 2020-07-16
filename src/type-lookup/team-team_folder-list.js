export default {
    "files": {
        "ContentSyncSetting": {
            "fields": [
                {
                    "description": "Id of the item this setting is applied to.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Setting for this item.",
                    "parameter": "sync_setting",
                    "type": {
                        "datatype": "SyncSetting",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SyncSetting": {
            "fields": [
                {
                    "description": "On first sync to members' computers, the specified folder will follow its parent folder's setting or otherwise follow default sync behavior.",
                    "parameter": "default",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "On first sync to members' computers, the specified folder will be set to not sync with selective sync.",
                    "parameter": "not_synced",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The specified folder's not_synced setting is inactive due to its location or other configuration changes. It will follow its parent folder's setting.",
                    "parameter": "not_synced_inactive",
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
    "team": {
        "TeamFolderAccessError": {
            "fields": [
                {
                    "description": "The team folder ID is invalid.",
                    "parameter": "invalid_team_folder_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The authenticated app does not have permission to manage that team folder.",
                    "parameter": "no_access",
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
        "TeamFolderListArg": {
            "fields": [
                {
                    "description": "The maximum number of results to return per request.",
                    "parameter": "limit",
                    "type": {
                        "primitive": "UInt32"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderListError": {
            "fields": [
                {
                    "parameter": "access_error",
                    "type": {
                        "datatype": "TeamFolderAccessError",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderListResult": {
            "description": "Result for :route:`team_folder/list` and :route:`team_folder/list/continue`.",
            "fields": [
                {
                    "description": "List of all team folders in the authenticated team.",
                    "parameter": "team_folders",
                    "type": {
                        "list": {
                            "datatype": "TeamFolderMetadata",
                            "namespace": "team"
                        }
                    }
                },
                {
                    "description": "Pass the cursor into :route:`team_folder/list/continue` to obtain additional team folders.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Is true if there are additional team folders that have not been returned yet. An additional call to :route:`team_folder/list/continue` can retrieve them.",
                    "parameter": "has_more",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderMetadata": {
            "description": "Properties of a team folder.",
            "fields": [
                {
                    "description": "The ID of the team folder.",
                    "parameter": "team_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the team folder.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The status of the team folder.",
                    "parameter": "status",
                    "type": {
                        "datatype": "TeamFolderStatus",
                        "namespace": "team"
                    }
                },
                {
                    "description": "True if this team folder is a shared team root.",
                    "parameter": "is_team_shared_dropbox",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The sync setting applied to this team folder.",
                    "parameter": "sync_setting",
                    "type": {
                        "datatype": "SyncSetting",
                        "namespace": "files"
                    }
                },
                {
                    "description": "Sync settings applied to contents of this team folder.",
                    "parameter": "content_sync_settings",
                    "type": {
                        "list": {
                            "datatype": "ContentSyncSetting",
                            "namespace": "files"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderStatus": {
            "fields": [
                {
                    "description": "The team folder and sub-folders are available to all members.",
                    "parameter": "active",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The team folder is not accessible outside of the team folder manager.",
                    "parameter": "archived",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The team folder is not accessible outside of the team folder manager.",
                    "parameter": "archive_in_progress",
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
    }
}
