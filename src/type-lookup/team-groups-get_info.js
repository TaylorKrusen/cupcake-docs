export default {"team": {"GroupsGetInfoError": {"stone_type": "open_union", "fields": [{"parameter": "group_not_on_team", "type": {"primitive": "Void"}, "description": "The group is not on your team."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "GroupsSelector": {"stone_type": "union", "fields": [{"parameter": "group_ids", "type": {"list": {"primitive": "String"}}, "description": "List of group IDs."}, {"parameter": "group_external_ids", "type": {"list": {"primitive": "String"}}, "description": "List of external IDs of groups."}], "description": "Argument for selecting a list of groups, either by group_ids, or external group IDs."}}}
