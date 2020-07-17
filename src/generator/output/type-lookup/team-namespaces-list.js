export default {
    "team": {
        "NamespaceMetadata": {
            "description": "Properties of a namespace.",
            "fields": [
                {
                    "description": "The name of this namespace.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The ID of this namespace.",
                    "parameter": "namespace_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The type of this namespace.",
                    "parameter": "namespace_type",
                    "type": {
                        "datatype": "NamespaceType",
                        "namespace": "team"
                    }
                },
                {
                    "description": "If this is a team member or app folder, the ID of the owning team member. Otherwise, this field is not present.",
                    "parameter": "team_member_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NamespaceType": {
            "fields": [
                {
                    "description": "App sandbox folder.",
                    "parameter": "app_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Shared folder.",
                    "parameter": "shared_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Top-level team-owned folder.",
                    "parameter": "team_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Team member's home folder.",
                    "parameter": "team_member_folder",
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
        "TeamNamespacesListArg": {
            "fields": [
                {
                    "description": "Specifying a value here has no effect.",
                    "parameter": "limit",
                    "type": {
                        "primitive": "UInt32"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamNamespacesListError": {
            "fields": [
                {
                    "description": "Argument passed in is invalid.",
                    "parameter": "invalid_arg",
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
        "TeamNamespacesListResult": {
            "description": "Result for :route:`namespaces/list`.",
            "fields": [
                {
                    "description": "List of all namespaces the team can access.",
                    "parameter": "namespaces",
                    "type": {
                        "list": {
                            "datatype": "NamespaceMetadata",
                            "namespace": "team"
                        }
                    }
                },
                {
                    "description": "Pass the cursor into :route:`namespaces/list/continue` to obtain additional namespaces. Note that duplicate namespaces may be returned.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Is true if there are additional namespaces that have not been returned yet.",
                    "parameter": "has_more",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
