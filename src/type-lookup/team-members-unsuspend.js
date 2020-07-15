export default {"team": {"UserSelectorArg": {"stone_type": "union", "fields": [{"parameter": "team_member_id", "type": {"primitive": "String"}}, {"parameter": "external_id", "type": {"primitive": "String"}}, {"parameter": "email", "type": {"primitive": "String"}}], "description": "Argument for selecting a single user, either by team_member_id, external_id or email."}, "MembersUnsuspendError": {"stone_type": "open_union", "fields": [{"parameter": "user_not_found", "type": {"primitive": "Void"}, "description": "No matching user found. The provided team_member_id, email, or external_id does not exist on this team."}, {"parameter": "user_not_in_team", "type": {"primitive": "Void"}, "description": "The user is not a member of the team."}, {"parameter": "other", "type": {"primitive": "Void"}}, {"parameter": "unsuspend_non_suspended_member", "type": {"primitive": "Void"}, "description": "The user is unsuspended, so it cannot be unsuspended again."}, {"parameter": "team_license_limit", "type": {"primitive": "Void"}, "description": "Team is full. The organization has no available licenses."}]}, "MembersUnsuspendArg": {"stone_type": "struct", "fields": [{"parameter": "user", "type": {"datatype": "UserSelectorArg", "namespace": "team"}, "description": "Identity of user to unsuspend."}], "description": "Exactly one of team_member_id, email, or external_id must be provided to identify the user account."}}}
