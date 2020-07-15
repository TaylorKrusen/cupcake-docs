export default {"team": {"GetMembershipReport": {"stone_type": "struct", "fields": [{"parameter": "start_date", "type": {"primitive": "String"}, "description": "First date present in the results as 'YYYY-MM-DD' or None."}, {"parameter": "team_size", "type": {"list": {"optional": {"primitive": "UInt64"}}}, "description": "Team size, for each day."}, {"parameter": "pending_invites", "type": {"list": {"optional": {"primitive": "UInt64"}}}, "description": "The number of pending invites to the team, for each day."}, {"parameter": "members_joined", "type": {"list": {"optional": {"primitive": "UInt64"}}}, "description": "The number of members that joined the team, for each day."}, {"parameter": "suspended_members", "type": {"list": {"optional": {"primitive": "UInt64"}}}, "description": "The number of suspended team members, for each day."}, {"parameter": "licenses", "type": {"list": {"optional": {"primitive": "UInt64"}}}, "description": "The total number of licenses the team has, for each day."}], "description": "Membership Report Result. Each of the items in the storage report is an array of values, one value per day. If there is no data for a day, then the value will be None."}, "DateRange": {"stone_type": "struct", "fields": [{"parameter": "start_date", "type": {"optional": {"primitive": "Timestamp"}}, "description": "Optional starting date (inclusive). If start_date is None or too long ago, this field will  be set to 6 months ago."}, {"parameter": "end_date", "type": {"optional": {"primitive": "Timestamp"}}, "description": "Optional ending date (exclusive)."}], "description": "Input arguments that can be provided for most reports."}, "DateRangeError": {"stone_type": "open_union", "fields": [{"parameter": "other", "type": {"primitive": "Void"}}], "description": "Errors that can originate from problems in input arguments to reports."}}}