export default {"team": {"ListMemberDevicesResult": {"stone_type": "struct", "fields": [{"parameter": "active_web_sessions", "type": {"optional": {"list": {"datatype": "ActiveWebSession", "namespace": "team"}}}, "description": "List of web sessions made by this team member."}, {"parameter": "desktop_client_sessions", "type": {"optional": {"list": {"datatype": "DesktopClientSession", "namespace": "team"}}}, "description": "List of desktop clients used by this team member."}, {"parameter": "mobile_client_sessions", "type": {"optional": {"list": {"datatype": "MobileClientSession", "namespace": "team"}}}, "description": "List of mobile client used by this team member."}]}, "ListMemberDevicesError": {"stone_type": "open_union", "fields": [{"parameter": "member_not_found", "type": {"primitive": "Void"}, "description": "Member not found."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "MobileClientPlatform": {"stone_type": "open_union", "fields": [{"parameter": "iphone", "type": {"primitive": "Void"}, "description": "Official Dropbox iPhone client."}, {"parameter": "ipad", "type": {"primitive": "Void"}, "description": "Official Dropbox iPad client."}, {"parameter": "android", "type": {"primitive": "Void"}, "description": "Official Dropbox Android client."}, {"parameter": "windows_phone", "type": {"primitive": "Void"}, "description": "Official Dropbox Windows phone client."}, {"parameter": "blackberry", "type": {"primitive": "Void"}, "description": "Official Dropbox Blackberry client."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "DesktopClientSession": {"stone_type": "struct", "fields": [{"parameter": "session_id", "type": {"primitive": "String"}, "description": "The session id."}, {"parameter": "host_name", "type": {"primitive": "String"}, "description": "Name of the hosting desktop."}, {"parameter": "client_type", "type": {"datatype": "DesktopPlatform", "namespace": "team"}, "description": "The Dropbox desktop client type."}, {"parameter": "client_version", "type": {"primitive": "String"}, "description": "The Dropbox client version."}, {"parameter": "platform", "type": {"primitive": "String"}, "description": "Information on the hosting platform."}, {"parameter": "is_delete_on_unlink_supported", "type": {"primitive": "Boolean"}, "description": "Whether it's possible to delete all of the account files upon unlinking."}, {"parameter": "ip_address", "type": {"optional": {"primitive": "String"}}, "description": "The IP address of the last activity from this session."}, {"parameter": "country", "type": {"optional": {"primitive": "String"}}, "description": "The country from which the last activity from this session was made."}, {"parameter": "created", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The time this session was created."}, {"parameter": "updated", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The time of the last activity from this session."}], "description": "Information about linked Dropbox desktop client sessions."}, "ListMemberDevicesArg": {"stone_type": "struct", "fields": [{"parameter": "team_member_id", "type": {"primitive": "String"}, "description": "The team's member id."}, {"parameter": "include_web_sessions", "type": {"primitive": "Boolean"}, "description": "Whether to list web sessions of the team's member."}, {"parameter": "include_desktop_clients", "type": {"primitive": "Boolean"}, "description": "Whether to list linked desktop devices of the team's member."}, {"parameter": "include_mobile_clients", "type": {"primitive": "Boolean"}, "description": "Whether to list linked mobile devices of the team's member."}]}, "ActiveWebSession": {"stone_type": "struct", "fields": [{"parameter": "session_id", "type": {"primitive": "String"}, "description": "The session id."}, {"parameter": "user_agent", "type": {"primitive": "String"}, "description": "Information on the hosting device."}, {"parameter": "os", "type": {"primitive": "String"}, "description": "Information on the hosting operating system."}, {"parameter": "browser", "type": {"primitive": "String"}, "description": "Information on the browser used for this web session."}, {"parameter": "ip_address", "type": {"optional": {"primitive": "String"}}, "description": "The IP address of the last activity from this session."}, {"parameter": "country", "type": {"optional": {"primitive": "String"}}, "description": "The country from which the last activity from this session was made."}, {"parameter": "created", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The time this session was created."}, {"parameter": "updated", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The time of the last activity from this session."}, {"parameter": "expires", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The time this session expires."}], "description": "Information on active web sessions."}, "MobileClientSession": {"stone_type": "struct", "fields": [{"parameter": "session_id", "type": {"primitive": "String"}, "description": "The session id."}, {"parameter": "device_name", "type": {"primitive": "String"}, "description": "The device name."}, {"parameter": "client_type", "type": {"datatype": "MobileClientPlatform", "namespace": "team"}, "description": "The mobile application type."}, {"parameter": "ip_address", "type": {"optional": {"primitive": "String"}}, "description": "The IP address of the last activity from this session."}, {"parameter": "country", "type": {"optional": {"primitive": "String"}}, "description": "The country from which the last activity from this session was made."}, {"parameter": "created", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The time this session was created."}, {"parameter": "updated", "type": {"optional": {"primitive": "Timestamp"}}, "description": "The time of the last activity from this session."}, {"parameter": "client_version", "type": {"optional": {"primitive": "String"}}, "description": "The dropbox client version."}, {"parameter": "os_version", "type": {"optional": {"primitive": "String"}}, "description": "The hosting OS version."}, {"parameter": "last_carrier", "type": {"optional": {"primitive": "String"}}, "description": "last carrier used by the device."}], "description": "Information about linked Dropbox mobile client sessions."}, "DesktopPlatform": {"stone_type": "open_union", "fields": [{"parameter": "windows", "type": {"primitive": "Void"}, "description": "Official Windows Dropbox desktop client."}, {"parameter": "mac", "type": {"primitive": "Void"}, "description": "Official Mac Dropbox desktop client."}, {"parameter": "linux", "type": {"primitive": "Void"}, "description": "Official Linux Dropbox desktop client."}, {"parameter": "other", "type": {"primitive": "Void"}}]}}}
