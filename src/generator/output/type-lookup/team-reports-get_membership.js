export default {
    "team": {
        "DateRange": {
            "description": "Input arguments that can be provided for most reports.",
            "fields": [
                {
                    "description": "Optional starting date (inclusive). If start_date is None or too long ago, this field will  be set to 6 months ago.",
                    "parameter": "start_date",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "Optional ending date (exclusive).",
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
        "DateRangeError": {
            "description": "Errors that can originate from problems in input arguments to reports.",
            "fields": [
                {
                    "parameter": "other",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "GetMembershipReport": {
            "description": "Membership Report Result. Each of the items in the storage report is an array of values, one value per day. If there is no data for a day, then the value will be None.",
            "fields": [
                {
                    "description": "First date present in the results as 'YYYY-MM-DD' or None.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Team size, for each day.",
                    "parameter": "team_size",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "The number of pending invites to the team, for each day.",
                    "parameter": "pending_invites",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "The number of members that joined the team, for each day.",
                    "parameter": "members_joined",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "The number of suspended team members, for each day.",
                    "parameter": "suspended_members",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "The total number of licenses the team has, for each day.",
                    "parameter": "licenses",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
