export default {
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
        "TeamFolderIdArg": {
            "fields": [
                {
                    "description": "The ID of the team folder.",
                    "parameter": "team_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderInvalidStatusError": {
            "fields": [
                {
                    "description": "The folder is active and the operation did not succeed.",
                    "parameter": "active",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The folder is archived and the operation did not succeed.",
                    "parameter": "archived",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The folder is being archived and the operation did not succeed.",
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
        },
        "TeamFolderPermanentlyDeleteError": {
            "description": "",
            "fields": [
                {
                    "parameter": "access_error",
                    "type": {
                        "datatype": "TeamFolderAccessError",
                        "namespace": "team"
                    }
                },
                {
                    "parameter": "status_error",
                    "type": {
                        "datatype": "TeamFolderInvalidStatusError",
                        "namespace": "team"
                    }
                },
                {
                    "parameter": "team_shared_dropbox_error",
                    "type": {
                        "datatype": "TeamFolderTeamSharedDropboxError",
                        "namespace": "team"
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
        "TeamFolderTeamSharedDropboxError": {
            "fields": [
                {
                    "description": "This action is not allowed for a shared team root.",
                    "parameter": "disallowed",
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
