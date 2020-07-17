export default {
    "team_common": {
        "MemberSpaceLimitType": {
            "description": "The type of the space limit imposed on a team member.",
            "fields": [
                {
                    "description": "The team member does not have imposed space limit.",
                    "parameter": "off",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The team member has soft imposed space limit - the limit is used for display and for notifications.",
                    "parameter": "alert_only",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The team member has hard imposed space limit - Dropbox file sync will stop after the limit is reached.",
                    "parameter": "stop_sync",
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
        }
    },
    "users": {
        "IndividualSpaceAllocation": {
            "fields": [
                {
                    "description": "The total space allocated to the user's account (bytes).",
                    "parameter": "allocated",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SpaceAllocation": {
            "description": "Space is allocated differently based on the type of account.",
            "fields": [
                {
                    "description": "The user's space allocation applies only to their individual account.",
                    "parameter": "individual",
                    "type": {
                        "datatype": "IndividualSpaceAllocation",
                        "namespace": "users"
                    }
                },
                {
                    "description": "The user shares space with other members of their team.",
                    "parameter": "team",
                    "type": {
                        "datatype": "TeamSpaceAllocation",
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
        "SpaceUsage": {
            "description": "Information about a user's space usage and quota.",
            "fields": [
                {
                    "description": "The user's total space usage (bytes).",
                    "parameter": "used",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "The user's space allocation.",
                    "parameter": "allocation",
                    "type": {
                        "datatype": "SpaceAllocation",
                        "namespace": "users"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamSpaceAllocation": {
            "fields": [
                {
                    "description": "The total space currently used by the user's team (bytes).",
                    "parameter": "used",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "The total space allocated to the user's team (bytes).",
                    "parameter": "allocated",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "The total space allocated to the user within its team allocated space (0 means that no restriction is imposed on the user's quota within its team).",
                    "parameter": "user_within_team_space_allocated",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "The type of the space limit imposed on the team member (off, alert_only, stop_sync).",
                    "parameter": "user_within_team_space_limit_type",
                    "type": {
                        "datatype": "MemberSpaceLimitType",
                        "namespace": "team_common"
                    }
                },
                {
                    "description": "An accurate cached calculation of a team member's total space usage (bytes).",
                    "parameter": "user_within_team_space_used_cached",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
