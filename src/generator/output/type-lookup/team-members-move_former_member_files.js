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
        "MembersDataTransferArg": {
            "fields": [
                {
                    "description": "Identity of user to remove/suspend/have their files moved.",
                    "parameter": "user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Files from the deleted member account will be transferred to this user.",
                    "parameter": "transfer_dest_id",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Errors during the transfer process will be sent via email to this user.",
                    "parameter": "transfer_admin_id",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MembersTransferFormerMembersFilesError": {
            "fields": [
                {
                    "description": "No matching user found. The provided team_member_id, email, or external_id does not exist on this team.",
                    "parameter": "user_not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user is not a member of the team.",
                    "parameter": "user_not_in_team",
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
                    "description": "Expected removed user and transfer_dest user to be different.",
                    "parameter": "removed_and_transfer_dest_should_differ",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Expected removed user and transfer_admin user to be different.",
                    "parameter": "removed_and_transfer_admin_should_differ",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "No matching user found for the argument transfer_dest_id.",
                    "parameter": "transfer_dest_user_not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The provided transfer_dest_id does not exist on this team.",
                    "parameter": "transfer_dest_user_not_in_team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The provided transfer_admin_id does not exist on this team.",
                    "parameter": "transfer_admin_user_not_in_team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "No matching user found for the argument transfer_admin_id.",
                    "parameter": "transfer_admin_user_not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The transfer_admin_id argument must be provided when file transfer is requested.",
                    "parameter": "unspecified_transfer_admin_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Specified transfer_admin user is not a team admin.",
                    "parameter": "transfer_admin_is_not_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The recipient user's email is not verified.",
                    "parameter": "recipient_not_verified",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user's data is being transferred. Please wait some time before retrying.",
                    "parameter": "user_data_is_being_transferred",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "No matching removed user found for the argument user.",
                    "parameter": "user_not_removed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User files aren't transferable anymore.",
                    "parameter": "user_data_cannot_be_transferred",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User's data has already been transferred to another user.",
                    "parameter": "user_data_already_transferred",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "UserSelectorArg": {
            "description": "Argument for selecting a single user, either by team_member_id, external_id or email.",
            "fields": [
                {
                    "parameter": "team_member_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "parameter": "external_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "parameter": "email",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "union"
        }
    }
}
