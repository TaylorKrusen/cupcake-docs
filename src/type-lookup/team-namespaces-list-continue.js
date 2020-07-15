export default {"team": {"TeamNamespacesListResult": {"stone_type": "struct", "fields": [{"parameter": "namespaces", "type": {"list": {"datatype": "NamespaceMetadata", "namespace": "team"}}, "description": "List of all namespaces the team can access."}, {"parameter": "cursor", "type": {"primitive": "String"}, "description": "Pass the cursor into :route:`namespaces/list/continue` to obtain additional namespaces. Note that duplicate namespaces may be returned."}, {"parameter": "has_more", "type": {"primitive": "Boolean"}, "description": "Is true if there are additional namespaces that have not been returned yet."}], "description": "Result for :route:`namespaces/list`."}, "TeamNamespacesListContinueArg": {"stone_type": "struct", "fields": [{"parameter": "cursor", "type": {"primitive": "String"}, "description": "Indicates from what point to get the next set of team-accessible namespaces."}]}, "NamespaceType": {"stone_type": "open_union", "fields": [{"parameter": "app_folder", "type": {"primitive": "Void"}, "description": "App sandbox folder."}, {"parameter": "shared_folder", "type": {"primitive": "Void"}, "description": "Shared folder."}, {"parameter": "team_folder", "type": {"primitive": "Void"}, "description": "Top-level team-owned folder."}, {"parameter": "team_member_folder", "type": {"primitive": "Void"}, "description": "Team member's home folder."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "TeamNamespacesListContinueError": {"stone_type": "open_union", "fields": [{"parameter": "invalid_arg", "type": {"primitive": "Void"}, "description": "Argument passed in is invalid."}, {"parameter": "other", "type": {"primitive": "Void"}}, {"parameter": "invalid_cursor", "type": {"primitive": "Void"}, "description": "The cursor is invalid."}]}, "NamespaceMetadata": {"stone_type": "struct", "fields": [{"parameter": "name", "type": {"primitive": "String"}, "description": "The name of this namespace."}, {"parameter": "namespace_id", "type": {"primitive": "String"}, "description": "The ID of this namespace."}, {"parameter": "namespace_type", "type": {"datatype": "NamespaceType", "namespace": "team"}, "description": "The type of this namespace."}, {"parameter": "team_member_id", "type": {"optional": {"primitive": "String"}}, "description": "If this is a team member or app folder, the ID of the owning team member. Otherwise, this field is not present."}], "description": "Properties of a namespace."}}}
