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
        "GetStorageReport": {
            "description": "Storage Report Result. Each of the items in the storage report is an array of values, one value per day. If there is no data for a day, then the value will be None.",
            "fields": [
                {
                    "description": "First date present in the results as 'YYYY-MM-DD' or None.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Sum of the shared, unshared, and datastore usages, for each day.",
                    "parameter": "total_usage",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the combined size (bytes) of team members' shared folders, for each day.",
                    "parameter": "shared_usage",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the combined size (bytes) of team members' root namespaces, for each day.",
                    "parameter": "unshared_usage",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of the number of shared folders owned by team members, for each day.",
                    "parameter": "shared_folders",
                    "type": {
                        "list": {
                            "optional": {
                                "primitive": "UInt64"
                            }
                        }
                    }
                },
                {
                    "description": "Array of storage summaries of team members' account sizes. Each storage summary is an array of key, value pairs, where each pair describes a storage bucket. The key indicates the upper bound of the bucket and the value is the number of users in that bucket. There is one such summary per day. If there is no data for a day, the storage summary will be empty.",
                    "parameter": "member_storage_map",
                    "type": {
                        "list": {
                            "list": {
                                "datatype": "StorageBucket",
                                "namespace": "team"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "StorageBucket": {
            "description": "Describes the number of users in a specific storage bucket.",
            "fields": [
                {
                    "description": "The name of the storage bucket. For example, '1G' is a bucket of users with storage size up to 1 Giga.",
                    "parameter": "bucket",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The number of people whose storage is in the range of this storage bucket.",
                    "parameter": "users",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
