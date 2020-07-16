export default {
    "users": {
        "FileLockingValue": {
            "description": "The value for :field:`UserFeature.file_locking`.",
            "fields": [
                {
                    "description": "When this value is True, the user can lock files in shared directories. When the value is False the user can unlock the files they have locked or request to unlock files locked by others.",
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
        "PaperAsFilesValue": {
            "description": "The value for :field:`UserFeature.paper_as_files`.",
            "fields": [
                {
                    "description": "When this value is true, the user's Paper docs are accessible in Dropbox with the .paper extension and must be accessed via the /files endpoints.  When this value is false, the user's Paper docs are stored separate from Dropbox files and folders and should be accessed via the /paper endpoints.",
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
        "UserFeature": {
            "description": "A set of features that a Dropbox User account may have configured.",
            "fields": [
                {
                    "description": "This feature contains information about how the user's Paper files are stored.",
                    "parameter": "paper_as_files",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This feature allows users to lock files in order to restrict other users from editing them.",
                    "parameter": "file_locking",
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
        "UserFeatureValue": {
            "description": "Values that correspond to entries in :type:`UserFeature`.",
            "fields": [
                {
                    "parameter": "paper_as_files",
                    "type": {
                        "datatype": "PaperAsFilesValue",
                        "namespace": "users"
                    }
                },
                {
                    "parameter": "file_locking",
                    "type": {
                        "datatype": "FileLockingValue",
                        "namespace": "users"
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
        "UserFeaturesGetValuesBatchArg": {
            "fields": [
                {
                    "description": "A list of features in :type:`UserFeature`. If the list is empty, this route will return :type:`UserFeaturesGetValuesBatchError`.",
                    "parameter": "features",
                    "type": {
                        "list": {
                            "datatype": "UserFeature",
                            "namespace": "users"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UserFeaturesGetValuesBatchError": {
            "fields": [
                {
                    "description": "At least one :type:`UserFeature` must be included in the :type:`UserFeaturesGetValuesBatchArg`.features list.",
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
        "UserFeaturesGetValuesBatchResult": {
            "fields": [
                {
                    "parameter": "values",
                    "type": {
                        "list": {
                            "datatype": "UserFeatureValue",
                            "namespace": "users"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
