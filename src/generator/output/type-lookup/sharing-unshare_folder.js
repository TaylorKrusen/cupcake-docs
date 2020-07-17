export default {
    "async": {
        "LaunchEmptyResult": {
            "description": "Result returned by methods that may either launch an asynchronous job or complete synchronously. Upon synchronous completion of the job, no additional information is returned.",
            "fields": [
                {
                    "description": "This response indicates that the processing is asynchronous. The string is an id that can be used to obtain the status of the asynchronous job.",
                    "parameter": "async_job_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The job finished synchronously and successfully.",
                    "parameter": "complete",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "union"
        }
    },
    "sharing": {
        "SharedFolderAccessError": {
            "description": "There is an error accessing the shared folder.",
            "fields": [
                {
                    "description": "This shared folder ID is invalid.",
                    "parameter": "invalid_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user is not a member of the shared folder thus cannot access it.",
                    "parameter": "not_a_member",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Never set.",
                    "parameter": "email_unverified",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The shared folder is unmounted.",
                    "parameter": "unmounted",
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
        "UnshareFolderArg": {
            "fields": [
                {
                    "description": "The ID for the shared folder.",
                    "parameter": "shared_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "If true, members of this shared folder will get a copy of this folder after it's unshared. Otherwise, it will be removed from their Dropbox. The current user, who is an owner, will always retain their copy.",
                    "parameter": "leave_a_copy",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UnshareFolderError": {
            "fields": [
                {
                    "parameter": "access_error",
                    "type": {
                        "datatype": "SharedFolderAccessError",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "This action cannot be performed on a team shared folder.",
                    "parameter": "team_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The current user does not have permission to perform this action.",
                    "parameter": "no_permission",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This shared folder has too many files to be unshared.",
                    "parameter": "too_many_files",
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
