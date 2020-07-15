export default {"team_common": {"GroupManagementType": {"stone_type": "open_union", "fields": [{"parameter": "user_managed", "type": {"primitive": "Void"}, "description": "A group which is managed by selected users."}, {"parameter": "company_managed", "type": {"primitive": "Void"}, "description": "A group which is managed by team admins only."}, {"parameter": "system_managed", "type": {"primitive": "Void"}, "description": "A group which is managed automatically by Dropbox."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "The group type determines how a group is managed."}}, "users": {"Name": {"stone_type": "struct", "fields": [{"parameter": "given_name", "type": {"primitive": "String"}, "description": "Also known as a first name."}, {"parameter": "surname", "type": {"primitive": "String"}, "description": "Also known as a last name or family name."}, {"parameter": "familiar_name", "type": {"primitive": "String"}, "description": "Locale-dependent name. In the US, a person's familiar name is their :field:`given_name`, but elsewhere, it could be any combination of a person's :field:`given_name` and :field:`surname`."}, {"parameter": "display_name", "type": {"primitive": "String"}, "description": "A name that can be used directly to represent the name of a user's Dropbox account."}, {"parameter": "abbreviated_name", "type": {"primitive": "String"}, "description": "An abbreviated form of the person's name. Their initials in most locales."}], "description": "Representations for a person's name to assist with internationalization."}}, "secondary_emails": {"SecondaryEmail": {"stone_type": "struct", "fields": [{"parameter": "email", "type": {"primitive": "String"}, "description": "Secondary email address."}, {"parameter": "is_verified", "type": {"primitive": "Boolean"}, "description": "Whether or not the secondary email address is verified to be owned by a user."}]}}, "team": {"RemovedStatus": {"stone_type": "struct", "fields": [{"parameter": "is_recoverable", "type": {"primitive": "Boolean"}, "description": "True if the removed team member is recoverable."}, {"parameter": "is_disconnected", "type": {"primitive": "Boolean"}, "description": "True if the team member's account was converted to individual account."}]}, "GroupAccessType": {"stone_type": "union", "fields": [{"parameter": "member", "type": {"primitive": "Void"}, "description": "User is a member of the group, but has no special permissions."}, {"parameter": "owner", "type": {"primitive": "Void"}, "description": "User can rename the group, and add/remove members."}], "description": "Role of a user in group."}, "TeamMembershipType": {"stone_type": "union", "fields": [{"parameter": "full", "type": {"primitive": "Void"}, "description": "User uses a license and has full access to team resources like the shared quota."}, {"parameter": "limited", "type": {"primitive": "Void"}, "description": "User does not have access to the shared quota and team admins have restricted administrative control."}]}, "MemberProfile": {"stone_type": "struct", "fields": [{"parameter": "team_member_id", "type": {"primitive": "String"}, "description": "ID of user as a member of a team."}, {"parameter": "email", "type": {"primitive": "String"}, "description": "Email address of user."}, {"parameter": "email_verified", "type": {"primitive": "Boolean"}, "description": "Is true if the user's email is verified to be owned by the user."}, {"parameter": "status", "type": {"datatype": "TeamMemberStatus", "namespace": "team"}, "description": "The user's status as a member of a specific team."}, {"parameter": "name", "type": {"datatype": "Name", "namespace": "users"}, "description": "Representations for a person's name."}, {"parameter": "membership_type", "type": {"datatype": "TeamMembershipType", "namespace": "team"}, "description": "The user's membership type: full (normal team member) vs limited (does not use a license; no access to the team's shared quota)."}, {"parameter": "external_id", "type": {"optional": {"primitive": "String"}}, "description": "External ID that a team can attach to the user. An application using the API may find it easier to use their own IDs instead of Dropbox IDs like account_id or team_member_id."}, {"parameter": "account_id", "type": {"optional": {"primitive": "String"}}, "description": "A user's account identifier."}, {"parameter": "secondary_emails", "type": {"optional": {"list": {"datatype": "SecondaryEmail", "namespace": "secondary_emails"}}}, "description": "Secondary emails of a user."}, {"parameter": "invited_on", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The date and time the user was invited to the team (contains value only when the member's status matches :field:`TeamMemberStatus.invited`)."}, {"parameter": "joined_on", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The date and time the user joined as a member of a specific team."}, {"parameter": "suspended_on", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The date and time the user was suspended from the team (contains value only when the member's status matches :field:`TeamMemberStatus.suspended`)."}, {"parameter": "persistent_id", "type": {"optional": {"primitive": "String"}}, "description": "Persistent ID that a team can attach to the user. The persistent ID is unique ID to be used for SAML authentication."}, {"parameter": "is_directory_restricted", "type": {"optional": {"primitive": "Boolean"}}, "description": "Whether the user is a directory restricted user."}, {"parameter": "profile_photo_url", "type": {"optional": {"primitive": "String"}}, "description": "URL for the photo representing the user, if one is set."}], "description": "Basic member profile."}, "GroupSelector": {"stone_type": "union", "fields": [{"parameter": "group_id", "type": {"primitive": "String"}, "description": "Group ID."}, {"parameter": "group_external_id", "type": {"primitive": "String"}, "description": "External ID of the group."}], "description": "Argument for selecting a single group, either by group_id or by external group ID."}, "GroupUpdateError": {"stone_type": "open_union", "fields": [{"parameter": "group_not_found", "type": {"primitive": "Void"}, "description": "No matching group found. No groups match the specified group ID."}, {"parameter": "other", "type": {"primitive": "Void"}}, {"parameter": "system_managed_group_disallowed", "type": {"primitive": "Void"}, "description": "This operation is not supported on system-managed groups."}, {"parameter": "group_name_already_used", "type": {"primitive": "Void"}, "description": "The requested group name is already being used by another group."}, {"parameter": "group_name_invalid", "type": {"primitive": "Void"}, "description": "Group name is empty or has invalid characters."}, {"parameter": "external_id_already_in_use", "type": {"primitive": "Void"}, "description": "The requested external ID is already being used by another group."}]}, "GroupFullInfo": {"stone_type": "struct", "fields": [{"parameter": "group_name", "type": {"primitive": "String"}}, {"parameter": "group_id", "type": {"primitive": "String"}}, {"parameter": "group_management_type", "type": {"datatype": "GroupManagementType", "namespace": "team_common"}, "description": "Who is allowed to manage the group."}, {"parameter": "created", "type": {"primitive": "UInt64"}, "description": "The group creation time as a UTC timestamp in milliseconds since the Unix epoch."}, {"parameter": "group_external_id", "type": {"optional": {"primitive": "String"}}, "description": "External ID of group. This is an arbitrary ID that an admin can attach to a group."}, {"parameter": "member_count", "type": {"optional": {"primitive": "UInt32"}}, "description": "The number of members in the group."}, {"parameter": "members", "type": {"optional": {"list": {"datatype": "GroupMemberInfo", "namespace": "team"}}}, "description": "List of group members."}], "description": "Full description of a group."}, "TeamMemberStatus": {"stone_type": "union", "fields": [{"parameter": "active", "type": {"primitive": "Void"}, "description": "User has successfully joined the team."}, {"parameter": "invited", "type": {"primitive": "Void"}, "description": "User has been invited to a team, but has not joined the team yet."}, {"parameter": "suspended", "type": {"primitive": "Void"}, "description": "User is no longer a member of the team, but the account can be un-suspended, re-establishing the user as a team member."}, {"parameter": "removed", "type": {"datatype": "RemovedStatus", "namespace": "team"}, "description": "User is no longer a member of the team. Removed users are only listed when include_removed is true in members/list."}], "description": "The user's status as a member of a specific team."}, "GroupMemberInfo": {"stone_type": "struct", "fields": [{"parameter": "profile", "type": {"datatype": "MemberProfile", "namespace": "team"}, "description": "Profile of group member."}, {"parameter": "access_type", "type": {"datatype": "GroupAccessType", "namespace": "team"}, "description": "The role that the user has in the group."}], "description": "Profile of group member, and role in group."}, "GroupUpdateArgs": {"stone_type": "struct", "fields": [{"parameter": "group", "type": {"datatype": "GroupSelector", "namespace": "team"}, "description": "Specify a group."}, {"parameter": "return_members", "type": {"primitive": "Boolean"}, "description": "Whether to return the list of members in the group.  Note that the default value will cause all the group members  to be returned in the response. This may take a long time for large groups."}, {"parameter": "new_group_name", "type": {"optional": {"primitive": "String"}}, "description": "Optional argument. Set group name to this if provided."}, {"parameter": "new_group_external_id", "type": {"optional": {"primitive": "String"}}, "description": "Optional argument. New group external ID. If the argument is None, the group's external_id won't be updated. If the argument is empty string, the group's external id will be cleared."}, {"parameter": "new_group_management_type", "type": {"optional": {"datatype": "GroupManagementType", "namespace": "team_common"}}, "description": "Set new group management type, if provided."}]}}}