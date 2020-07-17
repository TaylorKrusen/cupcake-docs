export default {
    "files": {
        "UploadSessionAppendArg": {
            "fields": [
                {
                    "description": "Contains the upload session ID and the offset.",
                    "parameter": "cursor",
                    "type": {
                        "datatype": "UploadSessionCursor",
                        "namespace": "files"
                    }
                },
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
        "UploadSessionCursor": {
            "fields": [
                {
                    "description": "The upload session ID (returned by :route:`upload_session/start`).",
                    "parameter": "session_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The amount of data that has been uploaded so far. We use this to make sure upload data isn't lost or duplicated in the event of a network error.",
                    "parameter": "offset",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UploadSessionLookupError": {
            "fields": [
                {
                    "description": "The upload session ID was not found or has expired. Upload sessions are valid for 48 hours.",
                    "parameter": "not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The specified offset was incorrect. See the value for the correct offset. This error may occur when a previous request was received and processed successfully but the client did not receive the response, e.g. due to a network error.",
                    "parameter": "incorrect_offset",
                    "type": {
                        "datatype": "UploadSessionOffsetError",
                        "namespace": "files"
                    }
                },
                {
                    "description": "You are attempting to append data to an upload session that has already been closed (i.e. committed).",
                    "parameter": "closed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The session must be closed before calling upload_session/finish_batch.",
                    "parameter": "not_closed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "You can not append to the upload session because the size of a file should not reach the max file size limit (i.e. 350GB).",
                    "parameter": "too_large",
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
        "UploadSessionOffsetError": {
            "fields": [
                {
                    "description": "The offset up to which data has been collected.",
                    "parameter": "correct_offset",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
