export default {
    "team": {
        "ActiveWebSession": {
            "description": "Information on active web sessions.",
            "fields": [
                {
                    "description": "The session id.",
                    "parameter": "session_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Information on the hosting device.",
                    "parameter": "user_agent",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Information on the hosting operating system.",
                    "parameter": "os",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Information on the browser used for this web session.",
                    "parameter": "browser",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The IP address of the last activity from this session.",
                    "parameter": "ip_address",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The country from which the last activity from this session was made.",
                    "parameter": "country",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The time this session was created.",
                    "parameter": "created",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The time of the last activity from this session.",
                    "parameter": "updated",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The time this session expires.",
                    "parameter": "expires",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DesktopClientSession": {
            "description": "Information about linked Dropbox desktop client sessions.",
            "fields": [
                {
                    "description": "The session id.",
                    "parameter": "session_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Name of the hosting desktop.",
                    "parameter": "host_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The Dropbox desktop client type.",
                    "parameter": "client_type",
                    "type": {
                        "datatype": "DesktopPlatform",
                        "namespace": "team"
                    }
                },
                {
                    "description": "The Dropbox client version.",
                    "parameter": "client_version",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Information on the hosting platform.",
                    "parameter": "platform",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Whether it's possible to delete all of the account files upon unlinking.",
                    "parameter": "is_delete_on_unlink_supported",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The IP address of the last activity from this session.",
                    "parameter": "ip_address",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The country from which the last activity from this session was made.",
                    "parameter": "country",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The time this session was created.",
                    "parameter": "created",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The time of the last activity from this session.",
                    "parameter": "updated",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DesktopPlatform": {
            "fields": [
                {
                    "description": "Official Windows Dropbox desktop client.",
                    "parameter": "windows",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Official Mac Dropbox desktop client.",
                    "parameter": "mac",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Official Linux Dropbox desktop client.",
                    "parameter": "linux",
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
        "ListTeamDevicesArg": {
            "fields": [
                {
                    "description": "At the first call to the :route:`devices/list_team_devices` the cursor shouldn't be passed. Then, if the result of the call includes a cursor, the following requests should include the received cursors in order to receive the next sub list of team devices.",
                    "parameter": "cursor",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Whether to list web sessions of the team members.",
                    "parameter": "include_web_sessions",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Whether to list desktop clients of the team members.",
                    "parameter": "include_desktop_clients",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Whether to list mobile clients of the team members.",
                    "parameter": "include_mobile_clients",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ListTeamDevicesError": {
            "fields": [
                {
                    "description": "Indicates that the cursor has been invalidated. Call :route:`devices/list_team_devices` again with an empty cursor to obtain a new cursor.",
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
        "ListTeamDevicesResult": {
            "fields": [
                {
                    "description": "The devices of each member of the team.",
                    "parameter": "devices",
                    "type": {
                        "list": {
                            "datatype": "MemberDevices",
                            "namespace": "team"
                        }
                    }
                },
                {
                    "description": "If true, then there are more devices available. Pass the cursor to :route:`devices/list_team_devices` to retrieve the rest.",
                    "parameter": "has_more",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Pass the cursor into :route:`devices/list_team_devices` to receive the next sub list of team's devices.",
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
        "MemberDevices": {
            "description": "Information on devices of a team's member.",
            "fields": [
                {
                    "description": "The member unique Id.",
                    "parameter": "team_member_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "List of web sessions made by this team member.",
                    "parameter": "web_sessions",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "ActiveWebSession",
                                "namespace": "team"
                            }
                        }
                    }
                },
                {
                    "description": "List of desktop clients by this team member.",
                    "parameter": "desktop_clients",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "DesktopClientSession",
                                "namespace": "team"
                            }
                        }
                    }
                },
                {
                    "description": "List of mobile clients by this team member.",
                    "parameter": "mobile_clients",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "MobileClientSession",
                                "namespace": "team"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MobileClientPlatform": {
            "fields": [
                {
                    "description": "Official Dropbox iPhone client.",
                    "parameter": "iphone",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Official Dropbox iPad client.",
                    "parameter": "ipad",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Official Dropbox Android client.",
                    "parameter": "android",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Official Dropbox Windows phone client.",
                    "parameter": "windows_phone",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Official Dropbox Blackberry client.",
                    "parameter": "blackberry",
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
        "MobileClientSession": {
            "description": "Information about linked Dropbox mobile client sessions.",
            "fields": [
                {
                    "description": "The session id.",
                    "parameter": "session_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The device name.",
                    "parameter": "device_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The mobile application type.",
                    "parameter": "client_type",
                    "type": {
                        "datatype": "MobileClientPlatform",
                        "namespace": "team"
                    }
                },
                {
                    "description": "The IP address of the last activity from this session.",
                    "parameter": "ip_address",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The country from which the last activity from this session was made.",
                    "parameter": "country",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The time this session was created.",
                    "parameter": "created",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The time of the last activity from this session.",
                    "parameter": "updated",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The dropbox client version.",
                    "parameter": "client_version",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The hosting OS version.",
                    "parameter": "os_version",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "last carrier used by the device.",
                    "parameter": "last_carrier",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
