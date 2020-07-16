export default {
    "secondary_emails": {
        "SecondaryEmail": {
            "fields": [
                {
                    "description": "Secondary email address.",
                    "parameter": "email",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Whether or not the secondary email address is verified to be owned by a user.",
                    "parameter": "is_verified",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        }
    },
    "team": {
        "AddSecondaryEmailResult": {
            "description": "Result of trying to add a secondary email to a user. 'success' is the only value indicating that a secondary email was successfully added to a user. The other values explain the type of error that occurred, and include the email for which the error occured.",
            "fields": [
                {
                    "description": "Describes a secondary email that was successfully added to a user.",
                    "parameter": "success",
                    "type": {
                        "datatype": "SecondaryEmail",
                        "namespace": "secondary_emails"
                    }
                },
                {
                    "description": "Secondary email is not available to be claimed by the user.",
                    "parameter": "unavailable",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Secondary email is already a pending email for the user.",
                    "parameter": "already_pending",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Secondary email is already a verified email for the user.",
                    "parameter": "already_owned_by_user",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "User already has the maximum number of secondary emails allowed.",
                    "parameter": "reached_limit",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A transient error occurred. Please try again later.",
                    "parameter": "transient_error",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "An error occurred due to conflicting updates. Please try again later.",
                    "parameter": "too_many_updates",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "An unknown error occurred.",
                    "parameter": "unknown_error",
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
        "AddSecondaryEmailsArg": {
            "fields": [
                {
                    "description": "List of users and secondary emails to add.",
                    "parameter": "new_secondary_emails",
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
        "AddSecondaryEmailsError": {
            "description": "Error returned when adding secondary emails fails.",
            "fields": [
                {
                    "description": "Secondary emails are disabled for the team.",
                    "parameter": "secondary_emails_disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A maximum of 20 secondary emails can be added in a single call.",
                    "parameter": "too_many_emails",
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
        "AddSecondaryEmailsResult": {
            "fields": [
                {
                    "description": "List of users and secondary email results.",
                    "parameter": "results",
                    "type": {
                        "list": {
                            "datatype": "UserAddResult",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserAddResult": {
            "description": "Result of trying to add secondary emails to a user. 'success' is the only value indicating that a user was successfully retrieved for adding secondary emails. The other values explain the type of error that occurred, and include the user for which the error occured.",
            "fields": [
                {
                    "description": "Describes a user and the results for each attempt to add a secondary email.",
                    "parameter": "success",
                    "type": {
                        "datatype": "UserSecondaryEmailsResult",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Specified user is not a valid target for adding secondary emails.",
                    "parameter": "invalid_user",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Secondary emails can only be added to verified users.",
                    "parameter": "unverified",
                    "type": {
                        "datatype": "UserSelectorArg",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Secondary emails cannot be added to placeholder users.",
                    "parameter": "placeholder_user",
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
        "UserSecondaryEmailsResult": {
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
                            "datatype": "AddSecondaryEmailResult",
                            "namespace": "team"
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
