export default {"team": {"FeaturesGetValuesBatchArg": {"stone_type": "struct", "fields": [{"parameter": "features", "type": {"list": {"datatype": "Feature", "namespace": "team"}}, "description": "A list of features in :type:`Feature`. If the list is empty, this route will return :type:`FeaturesGetValuesBatchError`."}]}, "FeaturesGetValuesBatchResult": {"stone_type": "struct", "fields": [{"parameter": "values", "type": {"list": {"datatype": "FeatureValue", "namespace": "team"}}}]}, "FeatureValue": {"stone_type": "open_union", "fields": [{"parameter": "upload_api_rate_limit", "type": {"datatype": "UploadApiRateLimitValue", "namespace": "team"}}, {"parameter": "has_team_shared_dropbox", "type": {"datatype": "HasTeamSharedDropboxValue", "namespace": "team"}}, {"parameter": "has_team_file_events", "type": {"datatype": "HasTeamFileEventsValue", "namespace": "team"}}, {"parameter": "has_team_selective_sync", "type": {"datatype": "HasTeamSelectiveSyncValue", "namespace": "team"}}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "The values correspond to entries in :type:`Feature`. You may get different value according to your Dropbox Business plan."}, "UploadApiRateLimitValue": {"stone_type": "open_union", "fields": [{"parameter": "unlimited", "type": {"primitive": "Void"}, "description": "This team has unlimited upload API quota. So far both server version account and legacy  account type have unlimited monthly upload api quota."}, {"parameter": "limit", "type": {"primitive": "UInt32"}, "description": "The number of upload API calls allowed per month."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "The value for :field:`Feature.upload_api_rate_limit`."}, "Feature": {"stone_type": "open_union", "fields": [{"parameter": "upload_api_rate_limit", "type": {"primitive": "Void"}, "description": "The number of upload API calls allowed per month."}, {"parameter": "has_team_shared_dropbox", "type": {"primitive": "Void"}, "description": "Does this team have a shared team root."}, {"parameter": "has_team_file_events", "type": {"primitive": "Void"}, "description": "Does this team have file events."}, {"parameter": "has_team_selective_sync", "type": {"primitive": "Void"}, "description": "Does this team have team selective sync enabled."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "A set of features that a Dropbox Business account may support."}, "HasTeamSelectiveSyncValue": {"stone_type": "open_union", "fields": [{"parameter": "has_team_selective_sync", "type": {"primitive": "Boolean"}, "description": "Does this team have team selective sync enabled."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "The value for :field:`Feature.has_team_selective_sync`."}, "FeaturesGetValuesBatchError": {"stone_type": "open_union", "fields": [{"parameter": "empty_features_list", "type": {"primitive": "Void"}, "description": "At least one :type:`Feature` must be included in the :type:`FeaturesGetValuesBatchArg`.features list."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "HasTeamSharedDropboxValue": {"stone_type": "open_union", "fields": [{"parameter": "has_team_shared_dropbox", "type": {"primitive": "Boolean"}, "description": "Does this team have a shared team root."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "The value for :field:`Feature.has_team_shared_dropbox`."}, "HasTeamFileEventsValue": {"stone_type": "open_union", "fields": [{"parameter": "enabled", "type": {"primitive": "Boolean"}, "description": "Does this team have file events."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "The value for :field:`Feature.has_team_file_events`."}}}
