export default {"users": {"UserFeaturesGetValuesBatchResult": {"stone_type": "struct", "fields": [{"parameter": "values", "type": {"list": {"datatype": "UserFeatureValue", "namespace": "users"}}}]}, "UserFeaturesGetValuesBatchError": {"stone_type": "open_union", "fields": [{"parameter": "empty_features_list", "type": {"primitive": "Void"}, "description": "At least one :type:`UserFeature` must be included in the :type:`UserFeaturesGetValuesBatchArg`.features list."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "UserFeaturesGetValuesBatchArg": {"stone_type": "struct", "fields": [{"parameter": "features", "type": {"list": {"datatype": "UserFeature", "namespace": "users"}}, "description": "A list of features in :type:`UserFeature`. If the list is empty, this route will return :type:`UserFeaturesGetValuesBatchError`."}]}, "UserFeatureValue": {"stone_type": "open_union", "fields": [{"parameter": "paper_as_files", "type": {"datatype": "PaperAsFilesValue", "namespace": "users"}}, {"parameter": "file_locking", "type": {"datatype": "FileLockingValue", "namespace": "users"}}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "Values that correspond to entries in :type:`UserFeature`."}, "UserFeature": {"stone_type": "open_union", "fields": [{"parameter": "paper_as_files", "type": {"primitive": "Void"}, "description": "This feature contains information about how the user's Paper files are stored."}, {"parameter": "file_locking", "type": {"primitive": "Void"}, "description": "This feature allows users to lock files in order to restrict other users from editing them."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "A set of features that a Dropbox User account may have configured."}, "PaperAsFilesValue": {"stone_type": "open_union", "fields": [{"parameter": "enabled", "type": {"primitive": "Boolean"}, "description": "When this value is true, the user's Paper docs are accessible in Dropbox with the .paper extension and must be accessed via the /files endpoints.  When this value is false, the user's Paper docs are stored separate from Dropbox files and folders and should be accessed via the /paper endpoints."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "The value for :field:`UserFeature.paper_as_files`."}, "FileLockingValue": {"stone_type": "open_union", "fields": [{"parameter": "enabled", "type": {"primitive": "Boolean"}, "description": "When this value is True, the user can lock files in shared directories. When the value is False the user can unlock the files they have locked or request to unlock files locked by others."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "The value for :field:`UserFeature.file_locking`."}}}
