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
        "GetActivityReport": {
            "description": "Activity Report Result. Each of the items in the storage report is an array of values, one value per day. If there is no data for a day, then the value will be None.",
            "fields": [
                {
                    "description": "First date present in the results as 'YYYY-MM-DD' or None.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Array of total number of adds by team members.",
                    "parameter": "adds",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of number of edits by team members. If the same user edits the same file multiple times this is counted as a single edit.",
                    "parameter": "edits",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of total number of deletes by team members.",
                    "parameter": "deletes",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of users who have been active in the last 28 days.",
                    "parameter": "active_users_28_day",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of users who have been active in the last week.",
                    "parameter": "active_users_7_day",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of users who have been active in the last day.",
                    "parameter": "active_users_1_day",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of shared folders with some activity in the last 28 days.",
                    "parameter": "active_shared_folders_28_day",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of shared folders with some activity in the last week.",
                    "parameter": "active_shared_folders_7_day",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of shared folders with some activity in the last day.",
                    "parameter": "active_shared_folders_1_day",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of shared links created.",
                    "parameter": "shared_links_created",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of views by team users to shared links created by the team.",
                    "parameter": "shared_links_viewed_by_team",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of views by users outside of the team to shared links created by the team.",
                    "parameter": "shared_links_viewed_by_outside_user",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of views by non-logged-in users to shared links created by the team.",
                    "parameter": "shared_links_viewed_by_not_logged_in",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the total number of views to shared links created by the team.",
                    "parameter": "shared_links_viewed_total",
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
