export default {
    "file_requests": {
        "CountFileRequestsError": {
            "description": "There was an error counting the file requests.",
            "fields": [
                {
                    "description": "This user's Dropbox Business team doesn't allow file requests.",
                    "parameter": "disabled_for_team",
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
        "CountFileRequestsResult": {
            "description": "Result for :route:`count`.",
            "fields": [
                {
                    "description": "The number file requests owner by this user.",
                    "parameter": "file_request_count",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
