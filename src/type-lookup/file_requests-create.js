export default {
    "file_requests": {
        "CreateFileRequestArgs": {
            "description": "Arguments for :route:`create`.",
            "fields": [
                {
                    "description": "The title of the file request. Must not be empty.",
                    "parameter": "title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The path of the folder in the Dropbox where uploaded files will be sent. For apps with the app folder permission, this will be relative to the app folder.",
                    "parameter": "destination",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The deadline for the file request. Deadlines can only be set by Professional and Business accounts.",
                    "parameter": "deadline",
                    "type": {
                        "optional": {
                            "datatype": "FileRequestDeadline",
                            "namespace": "file_requests"
                        }
                    }
                },
                {
                    "description": "Whether or not the file request should be open. If the file request is closed, it will not accept any file submissions, but it can be opened later.",
                    "parameter": "open",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "CreateFileRequestError": {
            "description": "There was an error creating the file request.",
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
                    "description": "This file request ID was not found.",
                    "parameter": "not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The specified path is not a folder.",
                    "parameter": "not_a_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This file request is not accessible to this app. Apps with the app folder permission can only access file requests in their app folder.",
                    "parameter": "app_lacks_access",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This user doesn't have permission to access or modify this file request.",
                    "parameter": "no_permission",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This user's email address is not verified. File requests are only available on accounts with a verified email address. Users can verify their email address :link:`here https://www.dropbox.com/help/317`.",
                    "parameter": "email_unverified",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There was an error validating the request. For example, the title was invalid, or there were disallowed characters in the destination path.",
                    "parameter": "validation_error",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "File requests are not available on the specified folder.",
                    "parameter": "invalid_location",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user has reached the rate limit for creating file requests. The limit is currently 4000 file requests total.",
                    "parameter": "rate_limit",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
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
        }
    }
}
