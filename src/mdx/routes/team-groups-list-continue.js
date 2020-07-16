export default {
    "team": {
        "GroupsListContinueArg": {
            "fields": [
                {
                    "description": "Indicates from what point to get the next set of groups.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupsListContinueError": {
            "fields": [
                {
                    "description": "The cursor is invalid.",
                    "parameter": "invalid_cursor",
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
        "GroupsListResult": {
            "fields": [
                {
                    "parameter": "groups",
                    "type": {
                        "list": {
                            "datatype": "GroupSummary",
                            "namespace": "team_common"
                        }
                    }
                },
                {
                    "description": "Pass the cursor into :route:`groups/list/continue` to obtain the additional groups.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Is true if there are additional groups that have not been returned yet. An additional call to :route:`groups/list/continue` can retrieve them.",
                    "parameter": "has_more",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        }
    },
    "team_common": {
        "GroupManagementType": {
            "description": "The group type determines how a group is managed.",
            "fields": [
                {
                    "description": "A group which is managed by selected users.",
                    "parameter": "user_managed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A group which is managed by team admins only.",
                    "parameter": "company_managed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A group which is managed automatically by Dropbox.",
                    "parameter": "system_managed",
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
        "GroupSummary": {
            "description": "Information about a group.",
            "fields": [
                {
                    "parameter": "group_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "parameter": "group_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Who is allowed to manage the group.",
                    "parameter": "group_management_type",
                    "type": {
                        "datatype": "GroupManagementType",
                        "namespace": "team_common"
                    }
                },
                {
                    "description": "External ID of group. This is an arbitrary ID that an admin can attach to a group.",
                    "parameter": "group_external_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The number of members in the group.",
                    "parameter": "member_count",
                    "type": {
                        "optional": {
                            "primitive": "UInt32"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
