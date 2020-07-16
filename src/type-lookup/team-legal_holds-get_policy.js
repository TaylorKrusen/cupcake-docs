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
        "LegalHoldsGetPolicyArg": {
            "fields": [
                {
                    "description": "The legal hold Id.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsGetPolicyError": {
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
                    "description": "Legal hold policy does not exist for :field:`LegalHoldsGetPolicyArg.id`.",
                    "parameter": "legal_hold_policy_not_found",
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
