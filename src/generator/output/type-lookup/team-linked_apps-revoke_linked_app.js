export default {
    "team": {
        "RevokeLinkedApiAppArg": {
            "fields": [
                {
                    "description": "The application's unique id.",
                    "parameter": "app_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The unique id of the member owning the device.",
                    "parameter": "team_member_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "This flag is not longer supported, the application dedicated folder (in case the application uses  one) will be kept.",
                    "parameter": "keep_app_folder",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RevokeLinkedAppError": {
            "description": "Error returned by :route:`linked_apps/revoke_linked_app`.",
            "fields": [
                {
                    "description": "Application not found.",
                    "parameter": "app_not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Member not found.",
                    "parameter": "member_not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "App folder removal is not supported.",
                    "parameter": "app_folder_removal_not_supported",
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
