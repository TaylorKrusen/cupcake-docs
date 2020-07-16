export default {
    "team": {
        "ApiApp": {
            "description": "Information on linked third party applications.",
            "fields": [
                {
                    "description": "The application unique id.",
                    "parameter": "app_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The application name.",
                    "parameter": "app_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Whether the linked application uses a dedicated folder.",
                    "parameter": "is_app_folder",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The application publisher name.",
                    "parameter": "publisher",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The publisher's URL.",
                    "parameter": "publisher_url",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The time this application was linked.",
                    "parameter": "linked",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ListMemberAppsArg": {
            "fields": [
                {
                    "description": "The team member id.",
                    "parameter": "team_member_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ListMemberAppsError": {
            "description": "Error returned by :route:`linked_apps/list_member_linked_apps`.",
            "fields": [
                {
                    "description": "Member not found.",
                    "parameter": "member_not_found",
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
        "ListMemberAppsResult": {
            "fields": [
                {
                    "description": "List of third party applications linked by this team member.",
                    "parameter": "linked_api_apps",
                    "type": {
                        "list": {
                            "datatype": "ApiApp",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
