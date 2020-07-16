export default {
    "async": {
        "PollArg": {
            "description": "Arguments for methods that poll the status of an asynchronous job.",
            "fields": [
                {
                    "description": "Id of the asynchronous job. This is the value of a response returned from the method that launched the job.",
                    "parameter": "async_job_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PollEmptyResult": {
            "description": "Result returned by methods that poll for the status of an asynchronous job. Upon completion of the job, no additional information is returned.",
            "fields": [
                {
                    "description": "The asynchronous job is still in progress.",
                    "parameter": "in_progress",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The asynchronous job has completed successfully.",
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
        "GroupsPollError": {
            "fields": [
                {
                    "description": "The job ID is invalid.",
                    "parameter": "invalid_async_job_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Something went wrong with the job on Dropbox's end. You'll need to verify that the action you were taking succeeded, and if not, try again. This should happen very rarely.",
                    "parameter": "internal_error",
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
                    "description": "You are not allowed to poll this job.",
                    "parameter": "access_denied",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        }
    }
}
