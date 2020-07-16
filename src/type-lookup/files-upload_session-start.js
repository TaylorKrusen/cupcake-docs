export default {
    "files": {
        "UploadSessionStartArg": {
            "fields": [
                {
                    "description": "If true, the current session will be closed, at which point you won't be able to call :route:`upload_session/append:2` anymore with the current session.",
                    "parameter": "close",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UploadSessionStartResult": {
            "fields": [
                {
                    "description": "A unique identifier for the upload session. Pass this to :route:`upload_session/append:2` and :route:`upload_session/finish`.",
                    "parameter": "session_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
