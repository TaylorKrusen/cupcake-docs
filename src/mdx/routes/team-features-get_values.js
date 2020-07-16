export default {
    "team": {
        "Feature": {
            "description": "A set of features that a Dropbox Business account may support.",
            "fields": [
                {
                    "description": "The number of upload API calls allowed per month.",
                    "parameter": "upload_api_rate_limit",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Does this team have a shared team root.",
                    "parameter": "has_team_shared_dropbox",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Does this team have file events.",
                    "parameter": "has_team_file_events",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Does this team have team selective sync enabled.",
                    "parameter": "has_team_selective_sync",
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
        "FeatureValue": {
            "description": "The values correspond to entries in :type:`Feature`. You may get different value according to your Dropbox Business plan.",
            "fields": [
                {
                    "parameter": "upload_api_rate_limit",
                    "type": {
                        "datatype": "UploadApiRateLimitValue",
                        "namespace": "team"
                    }
                },
                {
                    "parameter": "has_team_shared_dropbox",
                    "type": {
                        "datatype": "HasTeamSharedDropboxValue",
                        "namespace": "team"
                    }
                },
                {
                    "parameter": "has_team_file_events",
                    "type": {
                        "datatype": "HasTeamFileEventsValue",
                        "namespace": "team"
                    }
                },
                {
                    "parameter": "has_team_selective_sync",
                    "type": {
                        "datatype": "HasTeamSelectiveSyncValue",
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
        "FeaturesGetValuesBatchArg": {
            "fields": [
                {
                    "description": "A list of features in :type:`Feature`. If the list is empty, this route will return :type:`FeaturesGetValuesBatchError`.",
                    "parameter": "features",
                    "type": {
                        "list": {
                            "datatype": "Feature",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FeaturesGetValuesBatchError": {
            "fields": [
                {
                    "description": "At least one :type:`Feature` must be included in the :type:`FeaturesGetValuesBatchArg`.features list.",
                    "parameter": "empty_features_list",
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
        "FeaturesGetValuesBatchResult": {
            "fields": [
                {
                    "parameter": "values",
                    "type": {
                        "list": {
                            "datatype": "FeatureValue",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "HasTeamFileEventsValue": {
            "description": "The value for :field:`Feature.has_team_file_events`.",
            "fields": [
                {
                    "description": "Does this team have file events.",
                    "parameter": "enabled",
                    "type": {
                        "primitive": "Boolean"
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
        "HasTeamSelectiveSyncValue": {
            "description": "The value for :field:`Feature.has_team_selective_sync`.",
            "fields": [
                {
                    "description": "Does this team have team selective sync enabled.",
                    "parameter": "has_team_selective_sync",
                    "type": {
                        "primitive": "Boolean"
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
        "HasTeamSharedDropboxValue": {
            "description": "The value for :field:`Feature.has_team_shared_dropbox`.",
            "fields": [
                {
                    "description": "Does this team have a shared team root.",
                    "parameter": "has_team_shared_dropbox",
                    "type": {
                        "primitive": "Boolean"
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
        "UploadApiRateLimitValue": {
            "description": "The value for :field:`Feature.upload_api_rate_limit`.",
            "fields": [
                {
                    "description": "This team has unlimited upload API quota. So far both server version account and legacy  account type have unlimited monthly upload api quota.",
                    "parameter": "unlimited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The number of upload API calls allowed per month.",
                    "parameter": "limit",
                    "type": {
                        "primitive": "UInt32"
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
        }
    }
}
