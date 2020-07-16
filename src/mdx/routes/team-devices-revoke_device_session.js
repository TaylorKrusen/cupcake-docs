export default {
    "team": {
        "DeviceSessionArg": {
            "fields": [
                {
                    "description": "The session id.",
                    "parameter": "session_id",
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
                }
            ],
            "stone_type": "struct"
        },
        "RevokeDesktopClientArg": {
            "fields": [
                {
                    "description": "The session id.",
                    "parameter": "session_id",
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
                    "description": "Whether to delete all files of the account (this is possible only if supported by the desktop client and  will be made the next time the client access the account).",
                    "parameter": "delete_on_unlink",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RevokeDeviceSessionArg": {
            "fields": [
                {
                    "description": "End an active session.",
                    "parameter": "web_session",
                    "type": {
                        "datatype": "DeviceSessionArg",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Unlink a linked desktop device.",
                    "parameter": "desktop_client",
                    "type": {
                        "datatype": "RevokeDesktopClientArg",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Unlink a linked mobile device.",
                    "parameter": "mobile_client",
                    "type": {
                        "datatype": "DeviceSessionArg",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "union"
        },
        "RevokeDeviceSessionError": {
            "fields": [
                {
                    "description": "Device session not found.",
                    "parameter": "device_session_not_found",
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
