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
        "TeamFolderGetInfoItem": {
            "fields": [
                {
                    "description": "An ID that was provided as a parameter to :route:`team_folder/get_info` did not match any of the team's team folders.",
                    "parameter": "id_not_found",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Properties of a team folder.",
                    "parameter": "team_folder_metadata",
                    "type": {
                        "datatype": "TeamFolderMetadata",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "union"
        },
        "TeamFolderIdListArg": {
            "fields": [
                {
                    "description": "The list of team folder IDs.",
                    "parameter": "team_folder_ids",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
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
