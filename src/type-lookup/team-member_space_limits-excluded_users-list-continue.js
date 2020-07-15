export default {"users": {"Name": {"stone_type": "struct", "fields": [{"parameter": "given_name", "type": {"primitive": "String"}, "description": "Also known as a first name."}, {"parameter": "surname", "type": {"primitive": "String"}, "description": "Also known as a last name or family name."}, {"parameter": "familiar_name", "type": {"primitive": "String"}, "description": "Locale-dependent name. In the US, a person's familiar name is their :field:`given_name`, but elsewhere, it could be any combination of a person's :field:`given_name` and :field:`surname`."}, {"parameter": "display_name", "type": {"primitive": "String"}, "description": "A name that can be used directly to represent the name of a user's Dropbox account."}, {"parameter": "abbreviated_name", "type": {"primitive": "String"}, "description": "An abbreviated form of the person's name. Their initials in most locales."}], "description": "Representations for a person's name to assist with internationalization."}}, "secondary_emails": {"SecondaryEmail": {"stone_type": "struct", "fields": [{"parameter": "email", "type": {"primitive": "String"}, "description": "Secondary email address."}, {"parameter": "is_verified", "type": {"primitive": "Boolean"}, "description": "Whether or not the secondary email address is verified to be owned by a user."}]}}, "team": {"ExcludedUsersListContinueArg": {"stone_type": "struct", "fields": [{"parameter": "cursor", "type": {"primitive": "String"}, "description": "Indicates from what point to get the next set of users."}], "description": "Excluded users list continue argument."}, "TeamMembershipType": {"stone_type": "union", "fields": [{"parameter": "full", "type": {"primitive": "Void"}, "description": "User uses a license and has full access to team resources like the shared quota."}, {"parameter": "limited", "type": {"primitive": "Void"}, "description": "User does not have access to the shared quota and team admins have restricted administrative control."}]}, "ExcludedUsersListContinueError": {"stone_type": "open_union", "fields": [{"parameter": "invalid_cursor", "type": {"primitive": "Void"}, "description": "The cursor is invalid."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "Excluded users list continue error."}, "MemberProfile": {"stone_type": "struct", "fields": [{"parameter": "team_member_id", "type": {"primitive": "String"}, "description": "ID of user as a member of a team."}, {"parameter": "email", "type": {"primitive": "String"}, "description": "Email address of user."}, {"parameter": "email_verified", "type": {"primitive": "Boolean"}, "description": "Is true if the user's email is verified to be owned by the user."}, {"parameter": "status", "type": {"datatype": "TeamMemberStatus", "namespace": "team"}, "description": "The user's status as a member of a specific team."}, {"parameter": "name", "type": {"datatype": "Name", "namespace": "users"}, "description": "Representations for a person's name."}, {"parameter": "membership_type", "type": {"datatype": "TeamMembershipType", "namespace": "team"}, "description": "The user's membership type: full (normal team member) vs limited (does not use a license; no access to the team's shared quota)."}, {"parameter": "external_id", "type": {"optional": {"primitive": "String"}}, "description": "External ID that a team can attach to the user. An application using the API may find it easier to use their own IDs instead of Dropbox IDs like account_id or team_member_id."}, {"parameter": "account_id", "type": {"optional": {"primitive": "String"}}, "description": "A user's account identifier."}, {"parameter": "secondary_emails", "type": {"optional": {"list": {"datatype": "SecondaryEmail", "namespace": "secondary_emails"}}}, "description": "Secondary emails of a user."}, {"parameter": "invited_on", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The date and time the user was invited to the team (contains value only when the member's status matches :field:`TeamMemberStatus.invited`)."}, {"parameter": "joined_on", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The date and time the user joined as a member of a specific team."}, {"parameter": "suspended_on", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The date and time the user was suspended from the team (contains value only when the member's status matches :field:`TeamMemberStatus.suspended`)."}, {"parameter": "persistent_id", "type": {"optional": {"primitive": "String"}}, "description": "Persistent ID that a team can attach to the user. The persistent ID is unique ID to be used for SAML authentication."}, {"parameter": "is_directory_restricted", "type": {"optional": {"primitive": "Boolean"}}, "description": "Whether the user is a directory restricted user."}, {"parameter": "profile_photo_url", "type": {"optional": {"primitive": "String"}}, "description": "URL for the photo representing the user, if one is set."}], "description": "Basic member profile."}, "ExcludedUsersListResult": {"stone_type": "struct", "fields": [{"parameter": "users", "type": {"list": {"datatype": "MemberProfile", "namespace": "team"}}}, {"parameter": "has_more", "type": {"primitive": "Boolean"}, "description": "Is true if there are additional excluded users that have not been returned yet. An additional call to :route:`member_space_limits/excluded_users/list/continue` can retrieve them."}, {"parameter": "cursor", "type": {"optional": {"primitive": "String"}}, "description": "Pass the cursor into :route:`member_space_limits/excluded_users/list/continue` to obtain additional excluded users."}], "description": "Excluded users list result."}, "RemovedStatus": {"stone_type": "struct", "fields": [{"parameter": "is_recoverable", "type": {"primitive": "Boolean"}, "description": "True if the removed team member is recoverable."}, {"parameter": "is_disconnected", "type": {"primitive": "Boolean"}, "description": "True if the team member's account was converted to individual account."}]}, "TeamMemberStatus": {"stone_type": "union", "fields": [{"parameter": "active", "type": {"primitive": "Void"}, "description": "User has successfully joined the team."}, {"parameter": "invited", "type": {"primitive": "Void"}, "description": "User has been invited to a team, but has not joined the team yet."}, {"parameter": "suspended", "type": {"primitive": "Void"}, "description": "User is no longer a member of the team, but the account can be un-suspended, re-establishing the user as a team member."}, {"parameter": "removed", "type": {"datatype": "RemovedStatus", "namespace": "team"}, "description": "User is no longer a member of the team. Removed users are only listed when include_removed is true in members/list."}], "description": "The user's status as a member of a specific team."}}}