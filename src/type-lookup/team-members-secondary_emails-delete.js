export default {
    "team": {
        "DeleteSecondaryEmailResult": {
            "description": "Result of trying to delete a secondary email address. 'success' is the only value indicating that a secondary email was successfully deleted. The other values explain the type of error that occurred, and include the email for which the error occured.",
            "fields": [
                {
                    "description": "The secondary email was successfully deleted.",
                    "parameter": "success",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The email address was not found for the user.",
                    "parameter": "not_found",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The email address is the primary email address of the user, and cannot be removed.",
                    "parameter": "cannot_remove_primary",
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
        "DeleteSecondaryEmailsArg": {
            "fields": [
                {
                    "description": "List of users and their secondary emails to delete.",
                    "parameter": "emails_to_delete",
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
        "DeleteSecondaryEmailsResult": {
            "fields": [
                {
                    "parameter": "results",
                    "type": {
                        "list": {
                            "datatype": "UserDeleteResult",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserDeleteEmailsResult": {
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
                            "datatype": "DeleteSecondaryEmailResult",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserDeleteResult": {
            "description": "Result of trying to delete a user's secondary emails. 'success' is the only value indicating that a user was successfully retrieved for deleting secondary emails. The other values explain the type of error that occurred, and include the user for which the error occured.",
            "fields": [
                {
                    "description": "Describes a user and the results for each attempt to delete a secondary email.",
                    "parameter": "success",
                    "type": {
                        "datatype": "UserDeleteEmailsResult",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Specified user is not a valid target for deleting secondary emails.",
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
