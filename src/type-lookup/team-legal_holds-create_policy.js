export default {
    "team": {
        "LegalHoldPolicy": {
            "fields": [
                {
                    "description": "The legal hold id.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Policy name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Team members IDs and number of permanetly deleted members under hold.",
                    "parameter": "members",
                    "type": {
                        "datatype": "MembersInfo",
                        "namespace": "team"
                    }
                },
                {
                    "description": "The current state of the hold.",
                    "parameter": "status",
                    "type": {
                        "datatype": "LegalHoldStatus",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Start date of the legal hold policy.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "A description of the legal hold policy.",
                    "parameter": "description",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The time at which the legal hold was activated.",
                    "parameter": "activation_time",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "End date of the legal hold policy.",
                    "parameter": "end_date",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldStatus": {
            "fields": [
                {
                    "description": "The legal hold policy is active.",
                    "parameter": "active",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The legal hold policy was released.",
                    "parameter": "released",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The legal hold policy is activating.",
                    "parameter": "activating",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The legal hold policy is updating.",
                    "parameter": "updating",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The legal hold policy is exporting.",
                    "parameter": "exporting",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The legal hold policy is releasing.",
                    "parameter": "releasing",
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
        "LegalHoldsPolicyCreateArg": {
            "fields": [
                {
                    "description": "Policy name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "List of team member IDs added to the hold.",
                    "parameter": "members",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "A description of the legal hold policy.",
                    "parameter": "description",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "start date of the legal hold policy.",
                    "parameter": "start_date",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "end date of the legal hold policy.",
                    "parameter": "end_date",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsPolicyCreateError": {
            "fields": [
                {
                    "description": "There has been an unknown legal hold error.",
                    "parameter": "unknown_legal_hold_error",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "You don't have permissions to perform this action.",
                    "parameter": "insufficient_permissions",
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
                    "description": "Start date must be earlier than end date.",
                    "parameter": "start_date_is_later_than_end_date",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The users list must have at least one user.",
                    "parameter": "empty_members_list",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Some members in the members list are not valid to be placed under legal hold.",
                    "parameter": "invalid_members",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "You cannot add more than 5 users in a legal hold.",
                    "parameter": "number_of_users_on_hold_is_greater_than_hold_limitation",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Temporary infrastructure failure, please retry.",
                    "parameter": "transient_error",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The name provided is already in use by another legal hold.",
                    "parameter": "name_must_be_unique",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Team exceeded legal hold quota.",
                    "parameter": "team_exceeded_legal_hold_quota",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "MembersInfo": {
            "fields": [
                {
                    "description": "Team member IDs of the users under this hold.",
                    "parameter": "team_member_ids",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The number of permanently deleted users that were under this hold.",
                    "parameter": "permanently_deleted_users",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
