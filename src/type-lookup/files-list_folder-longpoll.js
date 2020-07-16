export default {
    "files": {
        "ListFolderLongpollArg": {
            "fields": [
                {
                    "description": "A cursor as returned by :route:`list_folder` or :route:`list_folder/continue`. Cursors retrieved by setting :field:`ListFolderArg.include_media_info` to :val:`true` are not supported.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A timeout in seconds. The request will block for at most this length of time, plus up to 90 seconds of random jitter added to avoid the thundering herd problem. Care should be taken when using this parameter, as some network infrastructure does not support long timeouts.",
                    "parameter": "timeout",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ListFolderLongpollError": {
            "fields": [
                {
                    "description": "Indicates that the cursor has been invalidated. Call :route:`list_folder` to obtain a new cursor.",
                    "parameter": "reset",
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
        "ListFolderLongpollResult": {
            "fields": [
                {
                    "description": "Indicates whether new changes are available. If true, call :route:`list_folder/continue` to retrieve the changes.",
                    "parameter": "changes",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If present, backoff for at least this many seconds before calling :route:`list_folder/longpoll` again.",
                    "parameter": "backoff",
                    "type": {
                        "optional": {
                            "primitive": "UInt64"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
