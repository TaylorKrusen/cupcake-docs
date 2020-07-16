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
    "team": {
        "GroupDeleteError": {
            "fields": [
                {
                    "description": "No matching group found. No groups match the specified group ID.",
                    "parameter": "group_not_found",
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
                    "description": "This operation is not supported on system-managed groups.",
                    "parameter": "system_managed_group_disallowed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This group has already been deleted.",
                    "parameter": "group_already_deleted",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "GroupSelector": {
            "description": "Argument for selecting a single group, either by group_id or by external group ID.",
            "fields": [
                {
                    "description": "Group ID.",
                    "parameter": "group_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "External ID of the group.",
                    "parameter": "group_external_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "union"
        }
    }
}
