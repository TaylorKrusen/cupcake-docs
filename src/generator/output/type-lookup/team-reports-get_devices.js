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
        "DevicesActive": {
            "description": "Each of the items is an array of values, one value per day. The value is the number of devices active within a time window, ending with that day.\nIf there is no data for a day, then the value will be None.",
            "fields": [
                {
                    "description": "Array of number of linked windows (desktop) clients with activity.",
                    "parameter": "windows",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of number of linked mac (desktop) clients with activity.",
                    "parameter": "macos",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of number of linked linus (desktop) clients with activity.",
                    "parameter": "linux",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of number of linked ios devices with activity.",
                    "parameter": "ios",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of number of linked android devices with activity.",
                    "parameter": "android",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of number of other linked devices (blackberry, windows phone, etc)  with activity.",
                    "parameter": "other",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of total number of linked clients with activity.",
                    "parameter": "total",
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
        },
        "GetDevicesReport": {
            "description": "Devices Report Result. Contains subsections for different time ranges of activity. Each of the items in each subsection of the storage report is an array of values, one value per day. If there is no data for a day, then the value will be None.",
            "fields": [
                {
                    "description": "First date present in the results as 'YYYY-MM-DD' or None.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Report of the number of devices active in the last day.",
                    "parameter": "active_1_day",
                    "type": {
                        "datatype": "DevicesActive",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Report of the number of devices active in the last 7 days.",
                    "parameter": "active_7_day",
                    "type": {
                        "datatype": "DevicesActive",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Report of the number of devices active in the last 28 days.",
                    "parameter": "active_28_day",
                    "type": {
                        "datatype": "DevicesActive",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
