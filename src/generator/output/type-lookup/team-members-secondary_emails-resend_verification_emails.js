export default {
    "team": {
        "ResendSecondaryEmailResult": {
            "description": "Result of trying to resend verification email to a secondary email address. 'success' is the only value indicating that a verification email was successfully sent. The other values explain the type of error that occurred, and include the email for which the error occured.",
            "fields": [
                {
                    "description": "A verification email was successfully sent to the secondary email address.",
                    "parameter": "success",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "This secondary email address is not pending for the user.",
                    "parameter": "not_pending",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Too many emails are being sent to this email address. Please try again later.",
                    "parameter": "rate_limited",
                    "type": {
                        "primitive": "String"
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
        "ResendVerificationEmailArg": {
            "fields": [
                {
                    "description": "List of users and secondary emails to resend verification emails to.",
                    "parameter": "emails_to_resend",
                    "type": {
                        "list": {
                            "datatype": "UserSecondaryEmailsArg",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ResendVerificationEmailResult": {
            "description": "List of users and resend results.",
            "fields": [
                {
                    "parameter": "results",
                    "type": {
                        "list": {
                            "datatype": "UserResendResult",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserResendEmailsResult": {
            "fields": [
                {
                    "parameter": "user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                },
                {
                    "parameter": "results",
                    "type": {
                        "list": {
                            "datatype": "ResendSecondaryEmailResult",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserResendResult": {
            "description": "Result of trying to resend verification emails to a user. 'success' is the only value indicating that a user was successfully retrieved for sending verification emails. The other values explain the type of error that occurred, and include the user for which the error occured.",
            "fields": [
                {
                    "description": "Describes a user and the results for each attempt to resend verification emails.",
                    "parameter": "success",
                    "type": {
                        "datatype": "UserResendEmailsResult",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Specified user is not a valid target for resending verification emails.",
                    "parameter": "invalid_user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
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
        "UserSecondaryEmailsArg": {
            "description": "User and a list of secondary emails.",
            "fields": [
                {
                    "parameter": "user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                },
                {
                    "parameter": "secondary_emails",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
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
