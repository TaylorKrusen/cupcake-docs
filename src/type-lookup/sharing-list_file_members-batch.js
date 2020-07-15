export default {"sharing": {"ListFileMembersBatchArg": {"stone_type": "struct", "fields": [{"parameter": "files", "type": {"list": {"primitive": "String"}}, "description": "Files for which to return members."}, {"parameter": "limit", "type": {"primitive": "UInt32"}, "description": "Number of members to return max per query. Defaults to 10 if no limit is specified."}], "description": "Arguments for :route:`list_file_members/batch`."}, "SharingUserError": {"stone_type": "open_union", "fields": [{"parameter": "email_unverified", "type": {"primitive": "Void"}, "description": "The current user must verify the account e-mail address before performing this action."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "User account had a problem preventing this action."}}}
