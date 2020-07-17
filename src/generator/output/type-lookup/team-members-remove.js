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
        "MembersRemoveArg": {
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
                    "description": "If provided, controls if the user's data will be deleted on their linked devices.",
                    "parameter": "wipe_data",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If provided, files from the deleted member account will be transferred to this user.",
                    "parameter": "transfer_dest_id",
                    "type": {
                        "optional": {
                            "datatype": "UserSelectorArg",
                            "namespace": "team"
                        }
                    }
                },
                {
                    "description": "If provided, errors during the transfer process will be sent via email to this user. If the transfer_dest_id argument was provided, then this argument must be provided as well.",
                    "parameter": "transfer_admin_id",
                    "type": {
                        "optional": {
                            "datatype": "UserSelectorArg",
                            "namespace": "team"
                        }
                    }
                },
                {
                    "description": "Downgrade the member to a Basic account. The user will retain the email address associated with their Dropbox  account and data in their account that is not restricted to team members. In order to keep the account the argument :field:`wipe_data` should be set to :val:`false`.",
                    "parameter": "keep_account",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "If provided, allows removed users to keep access to Dropbox folders (not Dropbox Paper folders) already explicitly shared with them (not via a group) when they are downgraded to a Basic account. Users will not retain access to folders that do not allow external sharing. In order to keep the sharing relationships, the arguments :field:`wipe_data` should be set to :val:`false` and :field:`keep_account` should be set to :val:`true`.",
                    "parameter": "retain_team_shares",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MembersRemoveError": {
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
                    "description": "The user is the last admin of the team, so it cannot be removed from it.",
                    "parameter": "remove_last_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Cannot keep account and transfer the data to another user at the same time.",
                    "parameter": "cannot_keep_account_and_transfer",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Cannot keep account and delete the data at the same time. To keep the account the argument wipe_data should be set to :val:`false`.",
                    "parameter": "cannot_keep_account_and_delete_data",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The email address of the user is too long to be disabled.",
                    "parameter": "email_address_too_long_to_be_disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Cannot keep account of an invited user.",
                    "parameter": "cannot_keep_invited_user_account",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Cannot retain team shares when the user's data is marked for deletion on their linked devices. The argument wipe_data should be set to :val:`false`.",
                    "parameter": "cannot_retain_shares_when_data_wiped",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user's account must be kept in order to retain team shares. The argument keep_account should be set to :val:`true`.",
                    "parameter": "cannot_retain_shares_when_no_account_kept",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Externally sharing files, folders, and links must be enabled in team settings in order to retain team shares for the user.",
                    "parameter": "cannot_retain_shares_when_team_external_sharing_off",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Only a team admin, can convert this account to a Basic account.",
                    "parameter": "cannot_keep_account",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This user content is currently being held. To convert this member's account to a Basic account, you'll first need to remove them from the hold.",
                    "parameter": "cannot_keep_account_under_legal_hold",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "To convert this member to a Basic account, they'll first need to sign in to Dropbox and agree to the terms of service.",
                    "parameter": "cannot_keep_account_required_to_sign_tos",
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
