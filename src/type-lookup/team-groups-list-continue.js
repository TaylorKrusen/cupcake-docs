export default {"team_common": {"GroupManagementType": {"stone_type": "open_union", "fields": [{"parameter": "user_managed", "type": {"primitive": "Void"}, "description": "A group which is managed by selected users."}, {"parameter": "company_managed", "type": {"primitive": "Void"}, "description": "A group which is managed by team admins only."}, {"parameter": "system_managed", "type": {"primitive": "Void"}, "description": "A group which is managed automatically by Dropbox."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "The group type determines how a group is managed."}, "GroupSummary": {"stone_type": "struct", "fields": [{"parameter": "group_name", "type": {"primitive": "String"}}, {"parameter": "group_id", "type": {"primitive": "String"}}, {"parameter": "group_management_type", "type": {"datatype": "GroupManagementType", "namespace": "team_common"}, "description": "Who is allowed to manage the group."}, {"parameter": "group_external_id", "type": {"optional": {"primitive": "String"}}, "description": "External ID of group. This is an arbitrary ID that an admin can attach to a group."}, {"parameter": "member_count", "type": {"optional": {"primitive": "UInt32"}}, "description": "The number of members in the group."}], "description": "Information about a group."}}, "team": {"GroupsListContinueError": {"stone_type": "open_union", "fields": [{"parameter": "invalid_cursor", "type": {"primitive": "Void"}, "description": "The cursor is invalid."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "GroupsListResult": {"stone_type": "struct", "fields": [{"parameter": "groups", "type": {"list": {"datatype": "GroupSummary", "namespace": "team_common"}}}, {"parameter": "cursor", "type": {"primitive": "String"}, "description": "Pass the cursor into :route:`groups/list/continue` to obtain the additional groups."}, {"parameter": "has_more", "type": {"primitive": "Boolean"}, "description": "Is true if there are additional groups that have not been returned yet. An additional call to :route:`groups/list/continue` can retrieve them."}]}, "GroupsListContinueArg": {"stone_type": "struct", "fields": [{"parameter": "cursor", "type": {"primitive": "String"}, "description": "Indicates from what point to get the next set of groups."}]}}}
