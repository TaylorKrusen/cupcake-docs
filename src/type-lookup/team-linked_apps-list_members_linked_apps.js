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
        "ListMembersAppsArg": {
            "description": "Arguments for :route:`linked_apps/list_members_linked_apps`.",
            "fields": [
                {
                    "description": "At the first call to the :route:`linked_apps/list_members_linked_apps` the cursor shouldn't be passed. Then, if the result of the call includes a cursor, the following requests should include the received cursors in order to receive the next sub list of the team applications.",
                    "parameter": "cursor",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ListMembersAppsError": {
            "description": "Error returned by :route:`linked_apps/list_members_linked_apps`.",
            "fields": [
                {
                    "description": "Indicates that the cursor has been invalidated. Call :route:`linked_apps/list_members_linked_apps` again with an empty cursor to obtain a new cursor.",
                    "parameter": "reset",
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
        "ListMembersAppsResult": {
            "description": "Information returned by :route:`linked_apps/list_members_linked_apps`.",
            "fields": [
                {
                    "description": "The linked applications of each member of the team.",
                    "parameter": "apps",
                    "type": {
                        "list": {
                            "datatype": "MemberLinkedApps",
                            "namespace": "team"
                        }
                    }
                },
                {
                    "description": "If true, then there are more apps available. Pass the cursor to :route:`linked_apps/list_members_linked_apps` to retrieve the rest.",
                    "parameter": "has_more",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Pass the cursor into :route:`linked_apps/list_members_linked_apps` to receive the next sub list of team's applications.",
                    "parameter": "cursor",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberLinkedApps": {
            "description": "Information on linked applications of a team member.",
            "fields": [
                {
                    "description": "The member unique Id.",
                    "parameter": "team_member_id",
                    "type": {
                        "primitive": "String"
                    }
                },
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
