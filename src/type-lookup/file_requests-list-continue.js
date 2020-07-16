export default {
    "file_requests": {
        "FileRequest": {
            "description": "A :link:`file request https://www.dropbox.com/help/9090` for receiving files into the user's Dropbox account.",
            "fields": [
                {
                    "description": "The ID of the file request.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The URL of the file request.",
                    "parameter": "url",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The title of the file request.",
                    "parameter": "title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "When this file request was created.",
                    "parameter": "created",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "Whether or not the file request is open. If the file request is closed, it will not accept any more file submissions.",
                    "parameter": "is_open",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The number of files this file request has received.",
                    "parameter": "file_count",
                    "type": {
                        "primitive": "Int64"
                    }
                },
                {
                    "description": "The path of the folder in the Dropbox where uploaded files will be sent. This can be :val:`null` if the destination was removed. For apps with the app folder permission, this will be relative to the app folder.",
                    "parameter": "destination",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The deadline for this file request. Only set if the request has a deadline.",
                    "parameter": "deadline",
                    "type": {
                        "optional": {
                            "datatype": "FileRequestDeadline",
                            "namespace": "file_requests"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestDeadline": {
            "fields": [
                {
                    "description": "The deadline for this file request.",
                    "parameter": "deadline",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "If set, allow uploads after the deadline has passed. These     uploads will be marked overdue.",
                    "parameter": "allow_late_uploads",
                    "type": {
                        "optional": {
                            "datatype": "GracePeriod",
                            "namespace": "file_requests"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GracePeriod": {
            "fields": [
                {
                    "parameter": "one_day",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "two_days",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "seven_days",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "thirty_days",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "always",
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
        "ListFileRequestsContinueArg": {
            "fields": [
                {
                    "description": "The cursor returned by the previous API call specified in the endpoint description.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ListFileRequestsContinueError": {
            "description": "There was an error retrieving the file requests.",
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
                },
                {
                    "description": "The cursor is invalid.",
                    "parameter": "invalid_cursor",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "ListFileRequestsV2Result": {
            "description": "Result for :route:`list:2` and :route:`list/continue`.",
            "fields": [
                {
                    "description": "The file requests owned by this user. Apps with the app folder permission will only see file requests in their app folder.",
                    "parameter": "file_requests",
                    "type": {
                        "list": {
                            "datatype": "FileRequest",
                            "namespace": "file_requests"
                        }
                    }
                },
                {
                    "description": "Pass the cursor into :route:`list/continue` to obtain additional file requests.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Is true if there are additional file requests that have not been returned yet. An additional call to :route:list/continue` can retrieve them.",
                    "parameter": "has_more",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
