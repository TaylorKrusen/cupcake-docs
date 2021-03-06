export default {
    "files": {
        "SyncSetting": {
            "fields": [
                {
                    "description": "On first sync to members' computers, the specified folder will follow its parent folder's setting or otherwise follow default sync behavior.",
                    "parameter": "default",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "On first sync to members' computers, the specified folder will be set to not sync with selective sync.",
                    "parameter": "not_synced",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The specified folder's not_synced setting is inactive due to its location or other configuration changes. It will follow its parent folder's setting.",
                    "parameter": "not_synced_inactive",
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
        }
    },
    "sharing": {
        "AccessLevel": {
            "description": "Defines the access levels for collaborators.",
            "fields": [
                {
                    "description": "The collaborator is the owner of the shared folder. Owners can view and edit the shared folder as well as set the folder's policies using :route:`update_folder_policy`.",
                    "parameter": "owner",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The collaborator can both view and edit the shared folder.",
                    "parameter": "editor",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The collaborator can only view the shared folder.",
                    "parameter": "viewer",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The collaborator can only view the shared folder and does not have any access to comments.",
                    "parameter": "viewer_no_comment",
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
        "AclUpdatePolicy": {
            "description": "Who can change a shared folder's access control list (ACL). In other words, who can add, remove, or change the privileges of members.",
            "fields": [
                {
                    "description": "Only the owner can update the ACL.",
                    "parameter": "owner",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Any editor can update the ACL. This may be further restricted to editors on the same team.",
                    "parameter": "editors",
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
        "LinkAudience": {
            "fields": [
                {
                    "description": "Link is accessible by anyone.",
                    "parameter": "public",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Link is accessible only by team members.",
                    "parameter": "team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The link can be used by no one. The link merely points the user to the content, and does not grant additional rights to the user. Members of the content who use this link can only access the content with their pre-existing access rights.",
                    "parameter": "no_one",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A link-specific password is required to access the link. Login is not required.",
                    "parameter": "password",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Link is accessible only by members of the content.",
                    "parameter": "members",
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
        "MemberPolicy": {
            "description": "Policy governing who can be a member of a shared folder. Only applicable to folders owned by a user on a team.",
            "fields": [
                {
                    "description": "Only a teammate can become a member.",
                    "parameter": "team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Anyone can become a member.",
                    "parameter": "anyone",
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
        "SharedLinkPolicy": {
            "description": "Who can view shared links in this folder.",
            "fields": [
                {
                    "description": "Links can be shared with anyone.",
                    "parameter": "anyone",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Links can be shared with anyone on the same team as the owner.",
                    "parameter": "team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Links can only be shared among members of the shared folder.",
                    "parameter": "members",
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
        "ViewerInfoPolicy": {
            "fields": [
                {
                    "description": "Viewer information is available on this file.",
                    "parameter": "enabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Viewer information is disabled on this file.",
                    "parameter": "disabled",
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
        }
    },
    "team": {
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
        "TeamFolderStatus": {
            "fields": [
                {
                    "description": "The team folder and sub-folders are available to all members.",
                    "parameter": "active",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The team folder is not accessible outside of the team folder manager.",
                    "parameter": "archived",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The team folder is not accessible outside of the team folder manager.",
                    "parameter": "archive_in_progress",
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
        "TeamReportFailureReason": {
            "fields": [
                {
                    "description": "We couldn't create the report, but we think this was a fluke. Everything should work if you try it again.",
                    "parameter": "temporary_error",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Too many other reports are being created right now. Try creating this report again once the others finish.",
                    "parameter": "many_reports_at_once",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "We couldn't create the report. Try creating the report again with less data.",
                    "parameter": "too_much_data",
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
        }
    },
    "team_common": {
        "GroupManagementType": {
            "description": "The group type determines how a group is managed.",
            "fields": [
                {
                    "description": "A group which is managed by selected users.",
                    "parameter": "user_managed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A group which is managed by team admins only.",
                    "parameter": "company_managed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A group which is managed automatically by Dropbox.",
                    "parameter": "system_managed",
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
        }
    },
    "team_log": {
        "AccessMethodLogInfo": {
            "description": "Indicates the method in which the action was performed.",
            "fields": [
                {
                    "description": "End user session details.",
                    "parameter": "end_user",
                    "type": {
                        "datatype": "SessionLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Sign in as session details.",
                    "parameter": "sign_in_as",
                    "type": {
                        "datatype": "WebSessionLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Content manager session details.",
                    "parameter": "content_manager",
                    "type": {
                        "datatype": "WebSessionLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Admin console session details.",
                    "parameter": "admin_console",
                    "type": {
                        "datatype": "WebSessionLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Enterprise console session details.",
                    "parameter": "enterprise_console",
                    "type": {
                        "datatype": "WebSessionLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Api session details.",
                    "parameter": "api",
                    "type": {
                        "datatype": "ApiSessionLogInfo",
                        "namespace": "team_log"
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
        "AccountCaptureAvailability": {
            "fields": [
                {
                    "parameter": "unavailable",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "available",
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
        "AccountCaptureChangeAvailabilityDetails": {
            "description": "Granted/revoked option to enable account capture on team domains.",
            "fields": [
                {
                    "description": "New account capture availabilty value.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "AccountCaptureAvailability",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous account capture availabilty value. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "AccountCaptureAvailability",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountCaptureChangeAvailabilityType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountCaptureChangePolicyDetails": {
            "description": "Changed account capture setting on team domain.",
            "fields": [
                {
                    "description": "New account capture policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "AccountCapturePolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous account capture policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "AccountCapturePolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountCaptureChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountCaptureMigrateAccountDetails": {
            "description": "Account-captured user migrated account to team.",
            "fields": [
                {
                    "description": "Domain name.",
                    "parameter": "domain_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountCaptureMigrateAccountType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountCaptureNotificationEmailsSentDetails": {
            "description": "Sent account capture email to all unmanaged members.",
            "fields": [
                {
                    "description": "Domain name.",
                    "parameter": "domain_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Account-capture email notification type.",
                    "parameter": "notification_type",
                    "type": {
                        "optional": {
                            "datatype": "AccountCaptureNotificationType",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountCaptureNotificationEmailsSentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountCaptureNotificationType": {
            "fields": [
                {
                    "parameter": "proactive_warning_notification",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "actionable_notification",
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
        "AccountCapturePolicy": {
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "invited_users",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "all_users",
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
        "AccountCaptureRelinquishAccountDetails": {
            "description": "Account-captured user changed account email to personal email.",
            "fields": [
                {
                    "description": "Domain name.",
                    "parameter": "domain_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountCaptureRelinquishAccountType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountLockOrUnlockedDetails": {
            "description": "Unlocked/locked account after failed sign in attempts.",
            "fields": [
                {
                    "description": "The previous account status.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "AccountState",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The new account status.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "AccountState",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountLockOrUnlockedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AccountState": {
            "fields": [
                {
                    "parameter": "locked",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "unlocked",
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
        "ActionDetails": {
            "description": "Additional information indicating the action taken that caused status change.",
            "fields": [
                {
                    "description": "Additional information relevant when a new member joins the team.",
                    "parameter": "team_join_details",
                    "type": {
                        "datatype": "JoinTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Define how the user was removed from the team.",
                    "parameter": "remove_action",
                    "type": {
                        "datatype": "MemberRemoveActionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Additional information relevant when someone is invited to the team.",
                    "parameter": "team_invite_details",
                    "type": {
                        "datatype": "TeamInviteDetails",
                        "namespace": "team_log"
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
        "ActorLogInfo": {
            "description": "The entity who performed the action.",
            "fields": [
                {
                    "description": "The user who did the action.",
                    "parameter": "user",
                    "type": {
                        "datatype": "UserLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The admin who did the action.",
                    "parameter": "admin",
                    "type": {
                        "datatype": "UserLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The application who did the action.",
                    "parameter": "app",
                    "type": {
                        "datatype": "AppLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Action done by reseller.",
                    "parameter": "reseller",
                    "type": {
                        "datatype": "ResellerLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Action done by Dropbox.",
                    "parameter": "dropbox",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Anonymous actor.",
                    "parameter": "anonymous",
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
        "AdminRole": {
            "fields": [
                {
                    "parameter": "team_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "user_management_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "support_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "limited_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "member_only",
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
        "AllowDownloadDisabledDetails": {
            "description": "Disabled downloads.",
            "fields": [],
            "stone_type": "struct"
        },
        "AllowDownloadDisabledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AllowDownloadEnabledDetails": {
            "description": "Enabled downloads.",
            "fields": [],
            "stone_type": "struct"
        },
        "AllowDownloadEnabledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ApiSessionLogInfo": {
            "description": "Api session.",
            "fields": [
                {
                    "description": "Api request ID.",
                    "parameter": "request_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AppLinkTeamDetails": {
            "description": "Linked app for team.",
            "fields": [
                {
                    "description": "Relevant application details.",
                    "parameter": "app_info",
                    "type": {
                        "datatype": "AppLogInfo",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AppLinkTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AppLinkUserDetails": {
            "description": "Linked app for member.",
            "fields": [
                {
                    "description": "Relevant application details.",
                    "parameter": "app_info",
                    "type": {
                        "datatype": "AppLogInfo",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AppLinkUserType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AppLogInfo": {
            "description": "App's logged information.",
            "fields": [
                {
                    "description": "App unique ID. Might be missing due to historical data gap.",
                    "parameter": "app_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "App display name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "AppUnlinkTeamDetails": {
            "description": "Unlinked app for team.",
            "fields": [
                {
                    "description": "Relevant application details.",
                    "parameter": "app_info",
                    "type": {
                        "datatype": "AppLogInfo",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AppUnlinkTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AppUnlinkUserDetails": {
            "description": "Unlinked app for member.",
            "fields": [
                {
                    "description": "Relevant application details.",
                    "parameter": "app_info",
                    "type": {
                        "datatype": "AppLogInfo",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AppUnlinkUserType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "AssetLogInfo": {
            "description": "Asset details.",
            "fields": [
                {
                    "description": "File's details.",
                    "parameter": "file",
                    "type": {
                        "datatype": "FileLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Folder's details.",
                    "parameter": "folder",
                    "type": {
                        "datatype": "FolderLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Paper document's details.",
                    "parameter": "paper_document",
                    "type": {
                        "datatype": "PaperDocumentLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Paper folder's details.",
                    "parameter": "paper_folder",
                    "type": {
                        "datatype": "PaperFolderLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Showcase document's details.",
                    "parameter": "showcase_document",
                    "type": {
                        "datatype": "ShowcaseDocumentLogInfo",
                        "namespace": "team_log"
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
        "BinderAddPageDetails": {
            "description": "Added Binder page.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Title of the Binder doc.",
                    "parameter": "doc_title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Name of the Binder page/section.",
                    "parameter": "binder_item_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderAddPageType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderAddSectionDetails": {
            "description": "Added Binder section.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Title of the Binder doc.",
                    "parameter": "doc_title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Name of the Binder page/section.",
                    "parameter": "binder_item_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderAddSectionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderRemovePageDetails": {
            "description": "Removed Binder page.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Title of the Binder doc.",
                    "parameter": "doc_title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Name of the Binder page/section.",
                    "parameter": "binder_item_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderRemovePageType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderRemoveSectionDetails": {
            "description": "Removed Binder section.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Title of the Binder doc.",
                    "parameter": "doc_title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Name of the Binder page/section.",
                    "parameter": "binder_item_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderRemoveSectionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderRenamePageDetails": {
            "description": "Renamed Binder page.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Title of the Binder doc.",
                    "parameter": "doc_title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Name of the Binder page/section.",
                    "parameter": "binder_item_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous name of the Binder page/section.",
                    "parameter": "previous_binder_item_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderRenamePageType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderRenameSectionDetails": {
            "description": "Renamed Binder section.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Title of the Binder doc.",
                    "parameter": "doc_title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Name of the Binder page/section.",
                    "parameter": "binder_item_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous name of the Binder page/section.",
                    "parameter": "previous_binder_item_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderRenameSectionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderReorderPageDetails": {
            "description": "Reordered Binder page.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Title of the Binder doc.",
                    "parameter": "doc_title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Name of the Binder page/section.",
                    "parameter": "binder_item_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderReorderPageType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderReorderSectionDetails": {
            "description": "Reordered Binder section.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Title of the Binder doc.",
                    "parameter": "doc_title",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Name of the Binder page/section.",
                    "parameter": "binder_item_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "BinderReorderSectionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "CameraUploadsPolicy": {
            "description": "Policy for controlling if team members can activate camera uploads",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "CameraUploadsPolicyChangedDetails": {
            "description": "Changed camera uploads setting for team.",
            "fields": [
                {
                    "description": "New camera uploads setting.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "CameraUploadsPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous camera uploads setting.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "CameraUploadsPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "CameraUploadsPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "Certificate": {
            "description": "Certificate details.",
            "fields": [
                {
                    "description": "Certificate subject.",
                    "parameter": "subject",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Certificate issuer.",
                    "parameter": "issuer",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Certificate issue date.",
                    "parameter": "issue_date",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Certificate expiration date.",
                    "parameter": "expiration_date",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Certificate serial number.",
                    "parameter": "serial_number",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Certificate sha1 fingerprint.",
                    "parameter": "sha1_fingerprint",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Certificate common name.",
                    "parameter": "common_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ChangedEnterpriseAdminRoleDetails": {
            "description": "Changed enterprise admin role.",
            "fields": [
                {
                    "description": "The member&#x2019s previous enterprise admin role.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "FedAdminRole",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The member&#x2019s new enterprise admin role.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "FedAdminRole",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The name of the member&#x2019s team.",
                    "parameter": "team_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ChangedEnterpriseAdminRoleType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ChangedEnterpriseConnectedTeamStatusDetails": {
            "description": "Changed enterprise-connected team status.",
            "fields": [
                {
                    "description": "The preformed change in the team&#x2019s connection status.",
                    "parameter": "action",
                    "type": {
                        "datatype": "FedHandshakeAction",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Additional information about the organization or team.",
                    "parameter": "additional_info",
                    "type": {
                        "datatype": "FederationStatusChangeAdditionalInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous request state.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "TrustedTeamsRequestState",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New request state.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "TrustedTeamsRequestState",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ChangedEnterpriseConnectedTeamStatusType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "CollectionShareDetails": {
            "description": "Shared album.",
            "fields": [
                {
                    "description": "Album name.",
                    "parameter": "album_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "CollectionShareType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ConnectedTeamName": {
            "description": "The name of the team",
            "fields": [
                {
                    "description": "The name of the team.",
                    "parameter": "team",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ContentAdministrationPolicyChangedDetails": {
            "description": "Changed content management setting.",
            "fields": [
                {
                    "description": "New content administration policy.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous content administration policy.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ContentAdministrationPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ContentPermanentDeletePolicy": {
            "description": "Policy for pemanent content deletion",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "ContextLogInfo": {
            "description": "The primary entity on which the action was done.",
            "fields": [
                {
                    "description": "Action was done on behalf of a team member.",
                    "parameter": "team_member",
                    "type": {
                        "datatype": "TeamMemberLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Action was done on behalf of a non team member.",
                    "parameter": "non_team_member",
                    "type": {
                        "datatype": "NonTeamMemberLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Anonymous context.",
                    "parameter": "anonymous",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Action was done on behalf of the team.",
                    "parameter": "team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Action was done on behalf of a team that's part of an organization.",
                    "parameter": "organization_team",
                    "type": {
                        "datatype": "TeamLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Action was done on behalf of a trusted non team member.",
                    "parameter": "trusted_non_team_member",
                    "type": {
                        "datatype": "TrustedNonTeamMemberLogInfo",
                        "namespace": "team_log"
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
        "CreateFolderDetails": {
            "description": "Created folders.",
            "fields": [],
            "stone_type": "struct"
        },
        "CreateFolderType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "CreateTeamInviteLinkDetails": {
            "description": "Created team invite link.",
            "fields": [
                {
                    "description": "The invite link url that was created.",
                    "parameter": "link_url",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The expiration date of the invite link.",
                    "parameter": "expiry_date",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "CreateTeamInviteLinkType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DataPlacementRestrictionChangePolicyDetails": {
            "description": "Set restrictions on data center locations where team data resides.",
            "fields": [
                {
                    "description": "Previous placement restriction.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "PlacementRestriction",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New placement restriction.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "PlacementRestriction",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DataPlacementRestrictionChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DataPlacementRestrictionSatisfyPolicyDetails": {
            "description": "Completed restrictions on data center locations where team data resides.",
            "fields": [
                {
                    "description": "Placement restriction.",
                    "parameter": "placement_restriction",
                    "type": {
                        "datatype": "PlacementRestriction",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DataPlacementRestrictionSatisfyPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeleteTeamInviteLinkDetails": {
            "description": "Deleted team invite link.",
            "fields": [
                {
                    "description": "The invite link url that was deleted.",
                    "parameter": "link_url",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeleteTeamInviteLinkType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DesktopDeviceSessionLogInfo": {
            "description": "Information about linked Dropbox desktop client sessions",
            "fields": [
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
                    "description": "Information on the hosting platform.",
                    "parameter": "platform",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Whether itu2019s possible to delete all of the account files upon unlinking.",
                    "parameter": "is_delete_on_unlink_supported",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The IP address of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "ip_address",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The time this session was created. Might be missing due to historical data gap.",
                    "parameter": "created",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The time of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "updated",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "Desktop session unique id. Might be missing due to historical data gap.",
                    "parameter": "session_info",
                    "type": {
                        "optional": {
                            "datatype": "DesktopSessionLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "The Dropbox client version.",
                    "parameter": "client_version",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "DesktopSessionLogInfo": {
            "description": "Desktop session.",
            "fields": [
                {
                    "description": "Session ID. Might be missing due to historical data gap.",
                    "parameter": "session_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "DeviceApprovalsAddExceptionDetails": {
            "description": "Added members to device approvals exception list.",
            "fields": [],
            "stone_type": "struct"
        },
        "DeviceApprovalsAddExceptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceApprovalsChangeDesktopPolicyDetails": {
            "description": "Set/removed limit on number of computers member can link to team Dropbox account.",
            "fields": [
                {
                    "description": "New desktop device approvals policy. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "datatype": "DeviceApprovalsPolicy",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Previous desktop device approvals policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "DeviceApprovalsPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceApprovalsChangeDesktopPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceApprovalsChangeMobilePolicyDetails": {
            "description": "Set/removed limit on number of mobile devices member can link to team Dropbox account.",
            "fields": [
                {
                    "description": "New mobile device approvals policy. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "datatype": "DeviceApprovalsPolicy",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Previous mobile device approvals policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "DeviceApprovalsPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceApprovalsChangeMobilePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceApprovalsChangeOverageActionDetails": {
            "description": "Changed device approvals setting when member is over limit.",
            "fields": [
                {
                    "description": "New over the limits policy. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "datatype": "RolloutMethod",
                            "namespace": "team_policies"
                        }
                    }
                },
                {
                    "description": "Previous over the limit policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "RolloutMethod",
                            "namespace": "team_policies"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceApprovalsChangeOverageActionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceApprovalsChangeUnlinkActionDetails": {
            "description": "Changed device approvals setting when member unlinks approved device.",
            "fields": [
                {
                    "description": "New device unlink policy. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "datatype": "DeviceUnlinkPolicy",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Previous device unlink policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "DeviceUnlinkPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceApprovalsChangeUnlinkActionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceApprovalsPolicy": {
            "fields": [
                {
                    "parameter": "unlimited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "limited",
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
        "DeviceApprovalsRemoveExceptionDetails": {
            "description": "Removed members from device approvals exception list.",
            "fields": [],
            "stone_type": "struct"
        },
        "DeviceApprovalsRemoveExceptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceChangeIpDesktopDetails": {
            "description": "Changed IP address associated with active desktop session.",
            "fields": [
                {
                    "description": "Device's session logged information.",
                    "parameter": "device_session_info",
                    "type": {
                        "datatype": "DeviceSessionLogInfo",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceChangeIpDesktopType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceChangeIpMobileDetails": {
            "description": "Changed IP address associated with active mobile session.",
            "fields": [
                {
                    "description": "Device's session logged information.",
                    "parameter": "device_session_info",
                    "type": {
                        "optional": {
                            "datatype": "DeviceSessionLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceChangeIpMobileType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceChangeIpWebDetails": {
            "description": "Changed IP address associated with active web session.",
            "fields": [
                {
                    "description": "Web browser name.",
                    "parameter": "user_agent",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceChangeIpWebType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceDeleteOnUnlinkFailDetails": {
            "description": "Failed to delete all files from unlinked device.",
            "fields": [
                {
                    "description": "The number of times that remote file deletion failed.",
                    "parameter": "num_failures",
                    "type": {
                        "primitive": "Int64"
                    }
                },
                {
                    "description": "Session unique id. Might be missing due to historical data gap.",
                    "parameter": "session_info",
                    "type": {
                        "optional": {
                            "datatype": "SessionLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "The device name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceDeleteOnUnlinkFailType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceDeleteOnUnlinkSuccessDetails": {
            "description": "Deleted all files from unlinked device.",
            "fields": [
                {
                    "description": "Session unique id. Might be missing due to historical data gap.",
                    "parameter": "session_info",
                    "type": {
                        "optional": {
                            "datatype": "SessionLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "The device name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceDeleteOnUnlinkSuccessType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceLinkFailDetails": {
            "description": "Failed to link device.",
            "fields": [
                {
                    "description": "A description of the device used while user approval blocked.",
                    "parameter": "device_type",
                    "type": {
                        "datatype": "DeviceType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "IP address. Might be missing due to historical data gap.",
                    "parameter": "ip_address",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceLinkFailType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceLinkSuccessDetails": {
            "description": "Linked device.",
            "fields": [
                {
                    "description": "Device's session logged information.",
                    "parameter": "device_session_info",
                    "type": {
                        "optional": {
                            "datatype": "DeviceSessionLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceLinkSuccessType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceManagementDisabledDetails": {
            "description": "Disabled device management.",
            "fields": [],
            "stone_type": "struct"
        },
        "DeviceManagementDisabledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceManagementEnabledDetails": {
            "description": "Enabled device management.",
            "fields": [],
            "stone_type": "struct"
        },
        "DeviceManagementEnabledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceSessionLogInfo": {
            "description": "Device's session logged information.",
            "fields": [
                {
                    "description": "The IP address of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "ip_address",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The time this session was created. Might be missing due to historical data gap.",
                    "parameter": "created",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The time of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "updated",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "DeviceType": {
            "fields": [
                {
                    "parameter": "desktop",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "mobile",
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
        "DeviceUnlinkDetails": {
            "description": "Disconnected device.",
            "fields": [
                {
                    "description": "True if the user requested to delete data after device unlink, false otherwise.",
                    "parameter": "delete_data",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Session unique id.",
                    "parameter": "session_info",
                    "type": {
                        "optional": {
                            "datatype": "SessionLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "The device name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeviceUnlinkPolicy": {
            "fields": [
                {
                    "parameter": "remove",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "keep",
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
        "DeviceUnlinkType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DirectoryRestrictionsAddMembersDetails": {
            "description": "Added members to directory restrictions list.",
            "fields": [],
            "stone_type": "struct"
        },
        "DirectoryRestrictionsAddMembersType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DirectoryRestrictionsRemoveMembersDetails": {
            "description": "Removed members from directory restrictions list.",
            "fields": [],
            "stone_type": "struct"
        },
        "DirectoryRestrictionsRemoveMembersType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DisabledDomainInvitesDetails": {
            "description": "Disabled domain invites.",
            "fields": [],
            "stone_type": "struct"
        },
        "DisabledDomainInvitesType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainInvitesApproveRequestToJoinTeamDetails": {
            "description": "Approved user's request to join team.",
            "fields": [],
            "stone_type": "struct"
        },
        "DomainInvitesApproveRequestToJoinTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainInvitesDeclineRequestToJoinTeamDetails": {
            "description": "Declined user's request to join team.",
            "fields": [],
            "stone_type": "struct"
        },
        "DomainInvitesDeclineRequestToJoinTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainInvitesEmailExistingUsersDetails": {
            "description": "Sent domain invites to existing domain accounts.",
            "fields": [
                {
                    "description": "Domain names.",
                    "parameter": "domain_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Number of recipients.",
                    "parameter": "num_recipients",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainInvitesEmailExistingUsersType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainInvitesRequestToJoinTeamDetails": {
            "description": "Requested to join team.",
            "fields": [],
            "stone_type": "struct"
        },
        "DomainInvitesRequestToJoinTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainInvitesSetInviteNewUserPrefToNoDetails": {
            "description": "Disabled \"Automatically invite new users\".",
            "fields": [],
            "stone_type": "struct"
        },
        "DomainInvitesSetInviteNewUserPrefToNoType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainInvitesSetInviteNewUserPrefToYesDetails": {
            "description": "Enabled \"Automatically invite new users\".",
            "fields": [],
            "stone_type": "struct"
        },
        "DomainInvitesSetInviteNewUserPrefToYesType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainVerificationAddDomainFailDetails": {
            "description": "Failed to verify team domain.",
            "fields": [
                {
                    "description": "Domain name.",
                    "parameter": "domain_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Domain name verification method. Might be missing due to historical data gap.",
                    "parameter": "verification_method",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainVerificationAddDomainFailType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainVerificationAddDomainSuccessDetails": {
            "description": "Verified team domain.",
            "fields": [
                {
                    "description": "Domain names.",
                    "parameter": "domain_names",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Domain name verification method. Might be missing due to historical data gap.",
                    "parameter": "verification_method",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainVerificationAddDomainSuccessType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainVerificationRemoveDomainDetails": {
            "description": "Removed domain from list of verified team domains.",
            "fields": [
                {
                    "description": "Domain names.",
                    "parameter": "domain_names",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DomainVerificationRemoveDomainType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DownloadPolicyType": {
            "description": "Shared content downloads policy",
            "fields": [
                {
                    "parameter": "allow",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "disallow",
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
        "DurationLogInfo": {
            "description": "Represents a time duration: unit and amount",
            "fields": [
                {
                    "description": "Time unit.",
                    "parameter": "unit",
                    "type": {
                        "datatype": "TimeUnit",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Amount of time.",
                    "parameter": "amount",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EmmAddExceptionDetails": {
            "description": "Added members to EMM exception list.",
            "fields": [],
            "stone_type": "struct"
        },
        "EmmAddExceptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EmmChangePolicyDetails": {
            "description": "Enabled/disabled enterprise mobility management for members.",
            "fields": [
                {
                    "description": "New enterprise mobility management policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "EmmState",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "Previous enterprise mobility management policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "EmmState",
                            "namespace": "team_policies"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EmmChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EmmCreateExceptionsReportDetails": {
            "description": "Created EMM-excluded users report.",
            "fields": [],
            "stone_type": "struct"
        },
        "EmmCreateExceptionsReportType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EmmCreateUsageReportDetails": {
            "description": "Created EMM mobile app usage report.",
            "fields": [],
            "stone_type": "struct"
        },
        "EmmCreateUsageReportType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EmmErrorDetails": {
            "description": "Failed to sign in via EMM.",
            "fields": [
                {
                    "description": "Error details.",
                    "parameter": "error_details",
                    "type": {
                        "datatype": "FailureDetailsLogInfo",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EmmErrorType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EmmRefreshAuthTokenDetails": {
            "description": "Refreshed auth token used for setting up EMM.",
            "fields": [],
            "stone_type": "struct"
        },
        "EmmRefreshAuthTokenType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EmmRemoveExceptionDetails": {
            "description": "Removed members from EMM exception list.",
            "fields": [],
            "stone_type": "struct"
        },
        "EmmRemoveExceptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EnabledDomainInvitesDetails": {
            "description": "Enabled domain invites.",
            "fields": [],
            "stone_type": "struct"
        },
        "EnabledDomainInvitesType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EndedEnterpriseAdminSessionDeprecatedDetails": {
            "description": "Ended enterprise admin session.",
            "fields": [
                {
                    "description": "More information about the organization or team.",
                    "parameter": "federation_extra_details",
                    "type": {
                        "datatype": "FedExtraDetails",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EndedEnterpriseAdminSessionDeprecatedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EndedEnterpriseAdminSessionDetails": {
            "description": "Ended enterprise admin session.",
            "fields": [],
            "stone_type": "struct"
        },
        "EndedEnterpriseAdminSessionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EnterpriseSettingsLockingDetails": {
            "description": "Changed who can update a setting.",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "team_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Settings page name.",
                    "parameter": "settings_page_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous locked settings page state.",
                    "parameter": "previous_settings_page_locking_state",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New locked settings page state.",
                    "parameter": "new_settings_page_locking_state",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EnterpriseSettingsLockingType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "EventCategory": {
            "description": "Category of events in event audit log.",
            "fields": [
                {
                    "description": "Events that apply to management of linked apps.",
                    "parameter": "apps",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that have to do with comments on files and Paper documents.",
                    "parameter": "comments",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that apply to linked devices on mobile, desktop and Web platforms.",
                    "parameter": "devices",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve domain management feature: domain verification, invite enforcement and account capture.",
                    "parameter": "domains",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that have to do with filesystem operations on files and folders: copy, move, delete, etc.",
                    "parameter": "file_operations",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that apply to the file requests feature.",
                    "parameter": "file_requests",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve group management.",
                    "parameter": "groups",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve placing holds on content for litigation reasons",
                    "parameter": "legal_holds",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve users signing in to or out of Dropbox.",
                    "parameter": "logins",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve team member management.",
                    "parameter": "members",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that apply to Dropbox Paper.",
                    "parameter": "paper",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve using, changing or resetting passwords.",
                    "parameter": "passwords",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that concern generation of admin reports, including team activity and device usage.",
                    "parameter": "reports",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that apply to all types of sharing and collaboration.",
                    "parameter": "sharing",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that apply to Dropbox Showcase.",
                    "parameter": "showcase",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve using or configuring single sign-on as well as administrative policies concerning single sign-on.",
                    "parameter": "sso",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve team folder management.",
                    "parameter": "team_folders",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve a change in team-wide policies.",
                    "parameter": "team_policies",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve a change in the team profile.",
                    "parameter": "team_profile",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that involve using or configuring two factor authentication as well as administrative policies concerning two factor authentication.",
                    "parameter": "tfa",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Events that apply to cross-team trust establishment.",
                    "parameter": "trusted_teams",
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
        "EventDetails": {
            "description": "Additional fields depending on the event type.",
            "fields": [
                {
                    "parameter": "app_link_team_details",
                    "type": {
                        "datatype": "AppLinkTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "app_link_user_details",
                    "type": {
                        "datatype": "AppLinkUserDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "app_unlink_team_details",
                    "type": {
                        "datatype": "AppUnlinkTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "app_unlink_user_details",
                    "type": {
                        "datatype": "AppUnlinkUserDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "integration_connected_details",
                    "type": {
                        "datatype": "IntegrationConnectedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "integration_disconnected_details",
                    "type": {
                        "datatype": "IntegrationDisconnectedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_add_comment_details",
                    "type": {
                        "datatype": "FileAddCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_change_comment_subscription_details",
                    "type": {
                        "datatype": "FileChangeCommentSubscriptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_delete_comment_details",
                    "type": {
                        "datatype": "FileDeleteCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_edit_comment_details",
                    "type": {
                        "datatype": "FileEditCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_like_comment_details",
                    "type": {
                        "datatype": "FileLikeCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_resolve_comment_details",
                    "type": {
                        "datatype": "FileResolveCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_unlike_comment_details",
                    "type": {
                        "datatype": "FileUnlikeCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_unresolve_comment_details",
                    "type": {
                        "datatype": "FileUnresolveCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_change_ip_desktop_details",
                    "type": {
                        "datatype": "DeviceChangeIpDesktopDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_change_ip_mobile_details",
                    "type": {
                        "datatype": "DeviceChangeIpMobileDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_change_ip_web_details",
                    "type": {
                        "datatype": "DeviceChangeIpWebDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_delete_on_unlink_fail_details",
                    "type": {
                        "datatype": "DeviceDeleteOnUnlinkFailDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_delete_on_unlink_success_details",
                    "type": {
                        "datatype": "DeviceDeleteOnUnlinkSuccessDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_link_fail_details",
                    "type": {
                        "datatype": "DeviceLinkFailDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_link_success_details",
                    "type": {
                        "datatype": "DeviceLinkSuccessDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_management_disabled_details",
                    "type": {
                        "datatype": "DeviceManagementDisabledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_management_enabled_details",
                    "type": {
                        "datatype": "DeviceManagementEnabledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_unlink_details",
                    "type": {
                        "datatype": "DeviceUnlinkDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "emm_refresh_auth_token_details",
                    "type": {
                        "datatype": "EmmRefreshAuthTokenDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "account_capture_change_availability_details",
                    "type": {
                        "datatype": "AccountCaptureChangeAvailabilityDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "account_capture_migrate_account_details",
                    "type": {
                        "datatype": "AccountCaptureMigrateAccountDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "account_capture_notification_emails_sent_details",
                    "type": {
                        "datatype": "AccountCaptureNotificationEmailsSentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "account_capture_relinquish_account_details",
                    "type": {
                        "datatype": "AccountCaptureRelinquishAccountDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "disabled_domain_invites_details",
                    "type": {
                        "datatype": "DisabledDomainInvitesDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "domain_invites_approve_request_to_join_team_details",
                    "type": {
                        "datatype": "DomainInvitesApproveRequestToJoinTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "domain_invites_decline_request_to_join_team_details",
                    "type": {
                        "datatype": "DomainInvitesDeclineRequestToJoinTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "domain_invites_email_existing_users_details",
                    "type": {
                        "datatype": "DomainInvitesEmailExistingUsersDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "domain_invites_request_to_join_team_details",
                    "type": {
                        "datatype": "DomainInvitesRequestToJoinTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "domain_invites_set_invite_new_user_pref_to_no_details",
                    "type": {
                        "datatype": "DomainInvitesSetInviteNewUserPrefToNoDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "domain_invites_set_invite_new_user_pref_to_yes_details",
                    "type": {
                        "datatype": "DomainInvitesSetInviteNewUserPrefToYesDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "domain_verification_add_domain_fail_details",
                    "type": {
                        "datatype": "DomainVerificationAddDomainFailDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "domain_verification_add_domain_success_details",
                    "type": {
                        "datatype": "DomainVerificationAddDomainSuccessDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "domain_verification_remove_domain_details",
                    "type": {
                        "datatype": "DomainVerificationRemoveDomainDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "enabled_domain_invites_details",
                    "type": {
                        "datatype": "EnabledDomainInvitesDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "create_folder_details",
                    "type": {
                        "datatype": "CreateFolderDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_add_details",
                    "type": {
                        "datatype": "FileAddDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_copy_details",
                    "type": {
                        "datatype": "FileCopyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_delete_details",
                    "type": {
                        "datatype": "FileDeleteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_download_details",
                    "type": {
                        "datatype": "FileDownloadDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_edit_details",
                    "type": {
                        "datatype": "FileEditDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_get_copy_reference_details",
                    "type": {
                        "datatype": "FileGetCopyReferenceDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_locking_lock_status_changed_details",
                    "type": {
                        "datatype": "FileLockingLockStatusChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_move_details",
                    "type": {
                        "datatype": "FileMoveDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_permanently_delete_details",
                    "type": {
                        "datatype": "FilePermanentlyDeleteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_preview_details",
                    "type": {
                        "datatype": "FilePreviewDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_rename_details",
                    "type": {
                        "datatype": "FileRenameDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_restore_details",
                    "type": {
                        "datatype": "FileRestoreDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_revert_details",
                    "type": {
                        "datatype": "FileRevertDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_rollback_changes_details",
                    "type": {
                        "datatype": "FileRollbackChangesDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_save_copy_reference_details",
                    "type": {
                        "datatype": "FileSaveCopyReferenceDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "folder_overview_description_changed_details",
                    "type": {
                        "datatype": "FolderOverviewDescriptionChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "folder_overview_item_pinned_details",
                    "type": {
                        "datatype": "FolderOverviewItemPinnedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "folder_overview_item_unpinned_details",
                    "type": {
                        "datatype": "FolderOverviewItemUnpinnedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "rewind_folder_details",
                    "type": {
                        "datatype": "RewindFolderDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_request_change_details",
                    "type": {
                        "datatype": "FileRequestChangeDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_request_close_details",
                    "type": {
                        "datatype": "FileRequestCloseDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_request_create_details",
                    "type": {
                        "datatype": "FileRequestCreateDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_request_delete_details",
                    "type": {
                        "datatype": "FileRequestDeleteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_request_receive_file_details",
                    "type": {
                        "datatype": "FileRequestReceiveFileDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_add_external_id_details",
                    "type": {
                        "datatype": "GroupAddExternalIdDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_add_member_details",
                    "type": {
                        "datatype": "GroupAddMemberDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_change_external_id_details",
                    "type": {
                        "datatype": "GroupChangeExternalIdDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_change_management_type_details",
                    "type": {
                        "datatype": "GroupChangeManagementTypeDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_change_member_role_details",
                    "type": {
                        "datatype": "GroupChangeMemberRoleDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_create_details",
                    "type": {
                        "datatype": "GroupCreateDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_delete_details",
                    "type": {
                        "datatype": "GroupDeleteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_description_updated_details",
                    "type": {
                        "datatype": "GroupDescriptionUpdatedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_join_policy_updated_details",
                    "type": {
                        "datatype": "GroupJoinPolicyUpdatedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_moved_details",
                    "type": {
                        "datatype": "GroupMovedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_remove_external_id_details",
                    "type": {
                        "datatype": "GroupRemoveExternalIdDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_remove_member_details",
                    "type": {
                        "datatype": "GroupRemoveMemberDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_rename_details",
                    "type": {
                        "datatype": "GroupRenameDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_activate_a_hold_details",
                    "type": {
                        "datatype": "LegalHoldsActivateAHoldDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_add_members_details",
                    "type": {
                        "datatype": "LegalHoldsAddMembersDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_change_hold_details_details",
                    "type": {
                        "datatype": "LegalHoldsChangeHoldDetailsDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_change_hold_name_details",
                    "type": {
                        "datatype": "LegalHoldsChangeHoldNameDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_export_a_hold_details",
                    "type": {
                        "datatype": "LegalHoldsExportAHoldDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_export_cancelled_details",
                    "type": {
                        "datatype": "LegalHoldsExportCancelledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_export_downloaded_details",
                    "type": {
                        "datatype": "LegalHoldsExportDownloadedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_export_removed_details",
                    "type": {
                        "datatype": "LegalHoldsExportRemovedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_release_a_hold_details",
                    "type": {
                        "datatype": "LegalHoldsReleaseAHoldDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_remove_members_details",
                    "type": {
                        "datatype": "LegalHoldsRemoveMembersDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "legal_holds_report_a_hold_details",
                    "type": {
                        "datatype": "LegalHoldsReportAHoldDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "account_lock_or_unlocked_details",
                    "type": {
                        "datatype": "AccountLockOrUnlockedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "emm_error_details",
                    "type": {
                        "datatype": "EmmErrorDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "guest_admin_signed_in_via_trusted_teams_details",
                    "type": {
                        "datatype": "GuestAdminSignedInViaTrustedTeamsDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "guest_admin_signed_out_via_trusted_teams_details",
                    "type": {
                        "datatype": "GuestAdminSignedOutViaTrustedTeamsDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "login_fail_details",
                    "type": {
                        "datatype": "LoginFailDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "login_success_details",
                    "type": {
                        "datatype": "LoginSuccessDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "logout_details",
                    "type": {
                        "datatype": "LogoutDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "reseller_support_session_end_details",
                    "type": {
                        "datatype": "ResellerSupportSessionEndDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "reseller_support_session_start_details",
                    "type": {
                        "datatype": "ResellerSupportSessionStartDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sign_in_as_session_end_details",
                    "type": {
                        "datatype": "SignInAsSessionEndDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sign_in_as_session_start_details",
                    "type": {
                        "datatype": "SignInAsSessionStartDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_error_details",
                    "type": {
                        "datatype": "SsoErrorDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "create_team_invite_link_details",
                    "type": {
                        "datatype": "CreateTeamInviteLinkDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "delete_team_invite_link_details",
                    "type": {
                        "datatype": "DeleteTeamInviteLinkDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_add_external_id_details",
                    "type": {
                        "datatype": "MemberAddExternalIdDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_add_name_details",
                    "type": {
                        "datatype": "MemberAddNameDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_change_admin_role_details",
                    "type": {
                        "datatype": "MemberChangeAdminRoleDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_change_email_details",
                    "type": {
                        "datatype": "MemberChangeEmailDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_change_external_id_details",
                    "type": {
                        "datatype": "MemberChangeExternalIdDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_change_membership_type_details",
                    "type": {
                        "datatype": "MemberChangeMembershipTypeDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_change_name_details",
                    "type": {
                        "datatype": "MemberChangeNameDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_change_status_details",
                    "type": {
                        "datatype": "MemberChangeStatusDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_delete_manual_contacts_details",
                    "type": {
                        "datatype": "MemberDeleteManualContactsDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_delete_profile_photo_details",
                    "type": {
                        "datatype": "MemberDeleteProfilePhotoDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_permanently_delete_account_contents_details",
                    "type": {
                        "datatype": "MemberPermanentlyDeleteAccountContentsDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_remove_external_id_details",
                    "type": {
                        "datatype": "MemberRemoveExternalIdDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_set_profile_photo_details",
                    "type": {
                        "datatype": "MemberSetProfilePhotoDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_space_limits_add_custom_quota_details",
                    "type": {
                        "datatype": "MemberSpaceLimitsAddCustomQuotaDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_space_limits_change_custom_quota_details",
                    "type": {
                        "datatype": "MemberSpaceLimitsChangeCustomQuotaDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_space_limits_change_status_details",
                    "type": {
                        "datatype": "MemberSpaceLimitsChangeStatusDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_space_limits_remove_custom_quota_details",
                    "type": {
                        "datatype": "MemberSpaceLimitsRemoveCustomQuotaDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_suggest_details",
                    "type": {
                        "datatype": "MemberSuggestDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_transfer_account_contents_details",
                    "type": {
                        "datatype": "MemberTransferAccountContentsDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "pending_secondary_email_added_details",
                    "type": {
                        "datatype": "PendingSecondaryEmailAddedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "secondary_email_deleted_details",
                    "type": {
                        "datatype": "SecondaryEmailDeletedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "secondary_email_verified_details",
                    "type": {
                        "datatype": "SecondaryEmailVerifiedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "secondary_mails_policy_changed_details",
                    "type": {
                        "datatype": "SecondaryMailsPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "binder_add_page_details",
                    "type": {
                        "datatype": "BinderAddPageDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "binder_add_section_details",
                    "type": {
                        "datatype": "BinderAddSectionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "binder_remove_page_details",
                    "type": {
                        "datatype": "BinderRemovePageDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "binder_remove_section_details",
                    "type": {
                        "datatype": "BinderRemoveSectionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "binder_rename_page_details",
                    "type": {
                        "datatype": "BinderRenamePageDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "binder_rename_section_details",
                    "type": {
                        "datatype": "BinderRenameSectionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "binder_reorder_page_details",
                    "type": {
                        "datatype": "BinderReorderPageDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "binder_reorder_section_details",
                    "type": {
                        "datatype": "BinderReorderSectionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_content_add_member_details",
                    "type": {
                        "datatype": "PaperContentAddMemberDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_content_add_to_folder_details",
                    "type": {
                        "datatype": "PaperContentAddToFolderDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_content_archive_details",
                    "type": {
                        "datatype": "PaperContentArchiveDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_content_create_details",
                    "type": {
                        "datatype": "PaperContentCreateDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_content_permanently_delete_details",
                    "type": {
                        "datatype": "PaperContentPermanentlyDeleteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_content_remove_from_folder_details",
                    "type": {
                        "datatype": "PaperContentRemoveFromFolderDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_content_remove_member_details",
                    "type": {
                        "datatype": "PaperContentRemoveMemberDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_content_rename_details",
                    "type": {
                        "datatype": "PaperContentRenameDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_content_restore_details",
                    "type": {
                        "datatype": "PaperContentRestoreDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_add_comment_details",
                    "type": {
                        "datatype": "PaperDocAddCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_change_member_role_details",
                    "type": {
                        "datatype": "PaperDocChangeMemberRoleDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_change_sharing_policy_details",
                    "type": {
                        "datatype": "PaperDocChangeSharingPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_change_subscription_details",
                    "type": {
                        "datatype": "PaperDocChangeSubscriptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_deleted_details",
                    "type": {
                        "datatype": "PaperDocDeletedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_delete_comment_details",
                    "type": {
                        "datatype": "PaperDocDeleteCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_download_details",
                    "type": {
                        "datatype": "PaperDocDownloadDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_edit_details",
                    "type": {
                        "datatype": "PaperDocEditDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_edit_comment_details",
                    "type": {
                        "datatype": "PaperDocEditCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_followed_details",
                    "type": {
                        "datatype": "PaperDocFollowedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_mention_details",
                    "type": {
                        "datatype": "PaperDocMentionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_ownership_changed_details",
                    "type": {
                        "datatype": "PaperDocOwnershipChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_request_access_details",
                    "type": {
                        "datatype": "PaperDocRequestAccessDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_resolve_comment_details",
                    "type": {
                        "datatype": "PaperDocResolveCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_revert_details",
                    "type": {
                        "datatype": "PaperDocRevertDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_slack_share_details",
                    "type": {
                        "datatype": "PaperDocSlackShareDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_team_invite_details",
                    "type": {
                        "datatype": "PaperDocTeamInviteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_trashed_details",
                    "type": {
                        "datatype": "PaperDocTrashedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_unresolve_comment_details",
                    "type": {
                        "datatype": "PaperDocUnresolveCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_untrashed_details",
                    "type": {
                        "datatype": "PaperDocUntrashedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_doc_view_details",
                    "type": {
                        "datatype": "PaperDocViewDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_external_view_allow_details",
                    "type": {
                        "datatype": "PaperExternalViewAllowDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_external_view_default_team_details",
                    "type": {
                        "datatype": "PaperExternalViewDefaultTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_external_view_forbid_details",
                    "type": {
                        "datatype": "PaperExternalViewForbidDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_folder_change_subscription_details",
                    "type": {
                        "datatype": "PaperFolderChangeSubscriptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_folder_deleted_details",
                    "type": {
                        "datatype": "PaperFolderDeletedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_folder_followed_details",
                    "type": {
                        "datatype": "PaperFolderFollowedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_folder_team_invite_details",
                    "type": {
                        "datatype": "PaperFolderTeamInviteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_published_link_change_permission_details",
                    "type": {
                        "datatype": "PaperPublishedLinkChangePermissionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_published_link_create_details",
                    "type": {
                        "datatype": "PaperPublishedLinkCreateDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_published_link_disabled_details",
                    "type": {
                        "datatype": "PaperPublishedLinkDisabledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_published_link_view_details",
                    "type": {
                        "datatype": "PaperPublishedLinkViewDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "password_change_details",
                    "type": {
                        "datatype": "PasswordChangeDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "password_reset_details",
                    "type": {
                        "datatype": "PasswordResetDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "password_reset_all_details",
                    "type": {
                        "datatype": "PasswordResetAllDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "emm_create_exceptions_report_details",
                    "type": {
                        "datatype": "EmmCreateExceptionsReportDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "emm_create_usage_report_details",
                    "type": {
                        "datatype": "EmmCreateUsageReportDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "export_members_report_details",
                    "type": {
                        "datatype": "ExportMembersReportDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "export_members_report_fail_details",
                    "type": {
                        "datatype": "ExportMembersReportFailDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "external_sharing_create_report_details",
                    "type": {
                        "datatype": "ExternalSharingCreateReportDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "external_sharing_report_failed_details",
                    "type": {
                        "datatype": "ExternalSharingReportFailedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "no_expiration_link_gen_create_report_details",
                    "type": {
                        "datatype": "NoExpirationLinkGenCreateReportDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "no_expiration_link_gen_report_failed_details",
                    "type": {
                        "datatype": "NoExpirationLinkGenReportFailedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "no_password_link_gen_create_report_details",
                    "type": {
                        "datatype": "NoPasswordLinkGenCreateReportDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "no_password_link_gen_report_failed_details",
                    "type": {
                        "datatype": "NoPasswordLinkGenReportFailedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "no_password_link_view_create_report_details",
                    "type": {
                        "datatype": "NoPasswordLinkViewCreateReportDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "no_password_link_view_report_failed_details",
                    "type": {
                        "datatype": "NoPasswordLinkViewReportFailedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "outdated_link_view_create_report_details",
                    "type": {
                        "datatype": "OutdatedLinkViewCreateReportDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "outdated_link_view_report_failed_details",
                    "type": {
                        "datatype": "OutdatedLinkViewReportFailedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_admin_export_start_details",
                    "type": {
                        "datatype": "PaperAdminExportStartDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "smart_sync_create_admin_privilege_report_details",
                    "type": {
                        "datatype": "SmartSyncCreateAdminPrivilegeReportDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_activity_create_report_details",
                    "type": {
                        "datatype": "TeamActivityCreateReportDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_activity_create_report_fail_details",
                    "type": {
                        "datatype": "TeamActivityCreateReportFailDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "collection_share_details",
                    "type": {
                        "datatype": "CollectionShareDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_transfers_file_add_details",
                    "type": {
                        "datatype": "FileTransfersFileAddDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_transfers_transfer_delete_details",
                    "type": {
                        "datatype": "FileTransfersTransferDeleteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_transfers_transfer_download_details",
                    "type": {
                        "datatype": "FileTransfersTransferDownloadDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_transfers_transfer_send_details",
                    "type": {
                        "datatype": "FileTransfersTransferSendDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_transfers_transfer_view_details",
                    "type": {
                        "datatype": "FileTransfersTransferViewDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "note_acl_invite_only_details",
                    "type": {
                        "datatype": "NoteAclInviteOnlyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "note_acl_link_details",
                    "type": {
                        "datatype": "NoteAclLinkDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "note_acl_team_link_details",
                    "type": {
                        "datatype": "NoteAclTeamLinkDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "note_shared_details",
                    "type": {
                        "datatype": "NoteSharedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "note_share_receive_details",
                    "type": {
                        "datatype": "NoteShareReceiveDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "open_note_shared_details",
                    "type": {
                        "datatype": "OpenNoteSharedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_add_group_details",
                    "type": {
                        "datatype": "SfAddGroupDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_allow_non_members_to_view_shared_links_details",
                    "type": {
                        "datatype": "SfAllowNonMembersToViewSharedLinksDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_external_invite_warn_details",
                    "type": {
                        "datatype": "SfExternalInviteWarnDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_fb_invite_details",
                    "type": {
                        "datatype": "SfFbInviteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_fb_invite_change_role_details",
                    "type": {
                        "datatype": "SfFbInviteChangeRoleDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_fb_uninvite_details",
                    "type": {
                        "datatype": "SfFbUninviteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_invite_group_details",
                    "type": {
                        "datatype": "SfInviteGroupDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_team_grant_access_details",
                    "type": {
                        "datatype": "SfTeamGrantAccessDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_team_invite_details",
                    "type": {
                        "datatype": "SfTeamInviteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_team_invite_change_role_details",
                    "type": {
                        "datatype": "SfTeamInviteChangeRoleDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_team_join_details",
                    "type": {
                        "datatype": "SfTeamJoinDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_team_join_from_oob_link_details",
                    "type": {
                        "datatype": "SfTeamJoinFromOobLinkDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sf_team_uninvite_details",
                    "type": {
                        "datatype": "SfTeamUninviteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_add_invitees_details",
                    "type": {
                        "datatype": "SharedContentAddInviteesDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_add_link_expiry_details",
                    "type": {
                        "datatype": "SharedContentAddLinkExpiryDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_add_link_password_details",
                    "type": {
                        "datatype": "SharedContentAddLinkPasswordDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_add_member_details",
                    "type": {
                        "datatype": "SharedContentAddMemberDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_change_downloads_policy_details",
                    "type": {
                        "datatype": "SharedContentChangeDownloadsPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_change_invitee_role_details",
                    "type": {
                        "datatype": "SharedContentChangeInviteeRoleDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_change_link_audience_details",
                    "type": {
                        "datatype": "SharedContentChangeLinkAudienceDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_change_link_expiry_details",
                    "type": {
                        "datatype": "SharedContentChangeLinkExpiryDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_change_link_password_details",
                    "type": {
                        "datatype": "SharedContentChangeLinkPasswordDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_change_member_role_details",
                    "type": {
                        "datatype": "SharedContentChangeMemberRoleDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_change_viewer_info_policy_details",
                    "type": {
                        "datatype": "SharedContentChangeViewerInfoPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_claim_invitation_details",
                    "type": {
                        "datatype": "SharedContentClaimInvitationDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_copy_details",
                    "type": {
                        "datatype": "SharedContentCopyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_download_details",
                    "type": {
                        "datatype": "SharedContentDownloadDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_relinquish_membership_details",
                    "type": {
                        "datatype": "SharedContentRelinquishMembershipDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_remove_invitees_details",
                    "type": {
                        "datatype": "SharedContentRemoveInviteesDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_remove_link_expiry_details",
                    "type": {
                        "datatype": "SharedContentRemoveLinkExpiryDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_remove_link_password_details",
                    "type": {
                        "datatype": "SharedContentRemoveLinkPasswordDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_remove_member_details",
                    "type": {
                        "datatype": "SharedContentRemoveMemberDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_request_access_details",
                    "type": {
                        "datatype": "SharedContentRequestAccessDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_restore_invitees_details",
                    "type": {
                        "datatype": "SharedContentRestoreInviteesDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_restore_member_details",
                    "type": {
                        "datatype": "SharedContentRestoreMemberDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_unshare_details",
                    "type": {
                        "datatype": "SharedContentUnshareDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_content_view_details",
                    "type": {
                        "datatype": "SharedContentViewDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_folder_change_link_policy_details",
                    "type": {
                        "datatype": "SharedFolderChangeLinkPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_folder_change_members_inheritance_policy_details",
                    "type": {
                        "datatype": "SharedFolderChangeMembersInheritancePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_folder_change_members_management_policy_details",
                    "type": {
                        "datatype": "SharedFolderChangeMembersManagementPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_folder_change_members_policy_details",
                    "type": {
                        "datatype": "SharedFolderChangeMembersPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_folder_create_details",
                    "type": {
                        "datatype": "SharedFolderCreateDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_folder_decline_invitation_details",
                    "type": {
                        "datatype": "SharedFolderDeclineInvitationDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_folder_mount_details",
                    "type": {
                        "datatype": "SharedFolderMountDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_folder_nest_details",
                    "type": {
                        "datatype": "SharedFolderNestDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_folder_transfer_ownership_details",
                    "type": {
                        "datatype": "SharedFolderTransferOwnershipDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_folder_unmount_details",
                    "type": {
                        "datatype": "SharedFolderUnmountDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_add_expiry_details",
                    "type": {
                        "datatype": "SharedLinkAddExpiryDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_change_expiry_details",
                    "type": {
                        "datatype": "SharedLinkChangeExpiryDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_change_visibility_details",
                    "type": {
                        "datatype": "SharedLinkChangeVisibilityDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_copy_details",
                    "type": {
                        "datatype": "SharedLinkCopyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_create_details",
                    "type": {
                        "datatype": "SharedLinkCreateDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_disable_details",
                    "type": {
                        "datatype": "SharedLinkDisableDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_download_details",
                    "type": {
                        "datatype": "SharedLinkDownloadDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_remove_expiry_details",
                    "type": {
                        "datatype": "SharedLinkRemoveExpiryDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_settings_add_expiration_details",
                    "type": {
                        "datatype": "SharedLinkSettingsAddExpirationDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_settings_add_password_details",
                    "type": {
                        "datatype": "SharedLinkSettingsAddPasswordDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_settings_allow_download_disabled_details",
                    "type": {
                        "datatype": "SharedLinkSettingsAllowDownloadDisabledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_settings_allow_download_enabled_details",
                    "type": {
                        "datatype": "SharedLinkSettingsAllowDownloadEnabledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_settings_change_audience_details",
                    "type": {
                        "datatype": "SharedLinkSettingsChangeAudienceDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_settings_change_expiration_details",
                    "type": {
                        "datatype": "SharedLinkSettingsChangeExpirationDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_settings_change_password_details",
                    "type": {
                        "datatype": "SharedLinkSettingsChangePasswordDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_settings_remove_expiration_details",
                    "type": {
                        "datatype": "SharedLinkSettingsRemoveExpirationDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_settings_remove_password_details",
                    "type": {
                        "datatype": "SharedLinkSettingsRemovePasswordDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_share_details",
                    "type": {
                        "datatype": "SharedLinkShareDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_link_view_details",
                    "type": {
                        "datatype": "SharedLinkViewDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shared_note_opened_details",
                    "type": {
                        "datatype": "SharedNoteOpenedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "shmodel_group_share_details",
                    "type": {
                        "datatype": "ShmodelGroupShareDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_access_granted_details",
                    "type": {
                        "datatype": "ShowcaseAccessGrantedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_add_member_details",
                    "type": {
                        "datatype": "ShowcaseAddMemberDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_archived_details",
                    "type": {
                        "datatype": "ShowcaseArchivedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_created_details",
                    "type": {
                        "datatype": "ShowcaseCreatedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_delete_comment_details",
                    "type": {
                        "datatype": "ShowcaseDeleteCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_edited_details",
                    "type": {
                        "datatype": "ShowcaseEditedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_edit_comment_details",
                    "type": {
                        "datatype": "ShowcaseEditCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_file_added_details",
                    "type": {
                        "datatype": "ShowcaseFileAddedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_file_download_details",
                    "type": {
                        "datatype": "ShowcaseFileDownloadDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_file_removed_details",
                    "type": {
                        "datatype": "ShowcaseFileRemovedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_file_view_details",
                    "type": {
                        "datatype": "ShowcaseFileViewDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_permanently_deleted_details",
                    "type": {
                        "datatype": "ShowcasePermanentlyDeletedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_post_comment_details",
                    "type": {
                        "datatype": "ShowcasePostCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_remove_member_details",
                    "type": {
                        "datatype": "ShowcaseRemoveMemberDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_renamed_details",
                    "type": {
                        "datatype": "ShowcaseRenamedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_request_access_details",
                    "type": {
                        "datatype": "ShowcaseRequestAccessDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_resolve_comment_details",
                    "type": {
                        "datatype": "ShowcaseResolveCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_restored_details",
                    "type": {
                        "datatype": "ShowcaseRestoredDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_trashed_details",
                    "type": {
                        "datatype": "ShowcaseTrashedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_trashed_deprecated_details",
                    "type": {
                        "datatype": "ShowcaseTrashedDeprecatedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_unresolve_comment_details",
                    "type": {
                        "datatype": "ShowcaseUnresolveCommentDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_untrashed_details",
                    "type": {
                        "datatype": "ShowcaseUntrashedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_untrashed_deprecated_details",
                    "type": {
                        "datatype": "ShowcaseUntrashedDeprecatedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_view_details",
                    "type": {
                        "datatype": "ShowcaseViewDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_add_cert_details",
                    "type": {
                        "datatype": "SsoAddCertDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_add_login_url_details",
                    "type": {
                        "datatype": "SsoAddLoginUrlDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_add_logout_url_details",
                    "type": {
                        "datatype": "SsoAddLogoutUrlDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_change_cert_details",
                    "type": {
                        "datatype": "SsoChangeCertDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_change_login_url_details",
                    "type": {
                        "datatype": "SsoChangeLoginUrlDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_change_logout_url_details",
                    "type": {
                        "datatype": "SsoChangeLogoutUrlDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_change_saml_identity_mode_details",
                    "type": {
                        "datatype": "SsoChangeSamlIdentityModeDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_remove_cert_details",
                    "type": {
                        "datatype": "SsoRemoveCertDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_remove_login_url_details",
                    "type": {
                        "datatype": "SsoRemoveLoginUrlDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_remove_logout_url_details",
                    "type": {
                        "datatype": "SsoRemoveLogoutUrlDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_folder_change_status_details",
                    "type": {
                        "datatype": "TeamFolderChangeStatusDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_folder_create_details",
                    "type": {
                        "datatype": "TeamFolderCreateDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_folder_downgrade_details",
                    "type": {
                        "datatype": "TeamFolderDowngradeDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_folder_permanently_delete_details",
                    "type": {
                        "datatype": "TeamFolderPermanentlyDeleteDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_folder_rename_details",
                    "type": {
                        "datatype": "TeamFolderRenameDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_selective_sync_settings_changed_details",
                    "type": {
                        "datatype": "TeamSelectiveSyncSettingsChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "account_capture_change_policy_details",
                    "type": {
                        "datatype": "AccountCaptureChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "allow_download_disabled_details",
                    "type": {
                        "datatype": "AllowDownloadDisabledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "allow_download_enabled_details",
                    "type": {
                        "datatype": "AllowDownloadEnabledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "camera_uploads_policy_changed_details",
                    "type": {
                        "datatype": "CameraUploadsPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "content_administration_policy_changed_details",
                    "type": {
                        "datatype": "ContentAdministrationPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "data_placement_restriction_change_policy_details",
                    "type": {
                        "datatype": "DataPlacementRestrictionChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "data_placement_restriction_satisfy_policy_details",
                    "type": {
                        "datatype": "DataPlacementRestrictionSatisfyPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_approvals_add_exception_details",
                    "type": {
                        "datatype": "DeviceApprovalsAddExceptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_approvals_change_desktop_policy_details",
                    "type": {
                        "datatype": "DeviceApprovalsChangeDesktopPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_approvals_change_mobile_policy_details",
                    "type": {
                        "datatype": "DeviceApprovalsChangeMobilePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_approvals_change_overage_action_details",
                    "type": {
                        "datatype": "DeviceApprovalsChangeOverageActionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_approvals_change_unlink_action_details",
                    "type": {
                        "datatype": "DeviceApprovalsChangeUnlinkActionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "device_approvals_remove_exception_details",
                    "type": {
                        "datatype": "DeviceApprovalsRemoveExceptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "directory_restrictions_add_members_details",
                    "type": {
                        "datatype": "DirectoryRestrictionsAddMembersDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "directory_restrictions_remove_members_details",
                    "type": {
                        "datatype": "DirectoryRestrictionsRemoveMembersDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "emm_add_exception_details",
                    "type": {
                        "datatype": "EmmAddExceptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "emm_change_policy_details",
                    "type": {
                        "datatype": "EmmChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "emm_remove_exception_details",
                    "type": {
                        "datatype": "EmmRemoveExceptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "extended_version_history_change_policy_details",
                    "type": {
                        "datatype": "ExtendedVersionHistoryChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_comments_change_policy_details",
                    "type": {
                        "datatype": "FileCommentsChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_locking_policy_changed_details",
                    "type": {
                        "datatype": "FileLockingPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_requests_change_policy_details",
                    "type": {
                        "datatype": "FileRequestsChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_requests_emails_enabled_details",
                    "type": {
                        "datatype": "FileRequestsEmailsEnabledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_requests_emails_restricted_to_team_only_details",
                    "type": {
                        "datatype": "FileRequestsEmailsRestrictedToTeamOnlyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "file_transfers_policy_changed_details",
                    "type": {
                        "datatype": "FileTransfersPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "google_sso_change_policy_details",
                    "type": {
                        "datatype": "GoogleSsoChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "group_user_management_change_policy_details",
                    "type": {
                        "datatype": "GroupUserManagementChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "integration_policy_changed_details",
                    "type": {
                        "datatype": "IntegrationPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_requests_change_policy_details",
                    "type": {
                        "datatype": "MemberRequestsChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_send_invite_policy_changed_details",
                    "type": {
                        "datatype": "MemberSendInvitePolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_space_limits_add_exception_details",
                    "type": {
                        "datatype": "MemberSpaceLimitsAddExceptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_space_limits_change_caps_type_policy_details",
                    "type": {
                        "datatype": "MemberSpaceLimitsChangeCapsTypePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_space_limits_change_policy_details",
                    "type": {
                        "datatype": "MemberSpaceLimitsChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_space_limits_remove_exception_details",
                    "type": {
                        "datatype": "MemberSpaceLimitsRemoveExceptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "member_suggestions_change_policy_details",
                    "type": {
                        "datatype": "MemberSuggestionsChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "microsoft_office_addin_change_policy_details",
                    "type": {
                        "datatype": "MicrosoftOfficeAddinChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "network_control_change_policy_details",
                    "type": {
                        "datatype": "NetworkControlChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_change_deployment_policy_details",
                    "type": {
                        "datatype": "PaperChangeDeploymentPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_change_member_link_policy_details",
                    "type": {
                        "datatype": "PaperChangeMemberLinkPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_change_member_policy_details",
                    "type": {
                        "datatype": "PaperChangeMemberPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_change_policy_details",
                    "type": {
                        "datatype": "PaperChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_default_folder_policy_changed_details",
                    "type": {
                        "datatype": "PaperDefaultFolderPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_desktop_policy_changed_details",
                    "type": {
                        "datatype": "PaperDesktopPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_enabled_users_group_addition_details",
                    "type": {
                        "datatype": "PaperEnabledUsersGroupAdditionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "paper_enabled_users_group_removal_details",
                    "type": {
                        "datatype": "PaperEnabledUsersGroupRemovalDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "password_strength_requirements_change_policy_details",
                    "type": {
                        "datatype": "PasswordStrengthRequirementsChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "permanent_delete_change_policy_details",
                    "type": {
                        "datatype": "PermanentDeleteChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "reseller_support_change_policy_details",
                    "type": {
                        "datatype": "ResellerSupportChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "rewind_policy_changed_details",
                    "type": {
                        "datatype": "RewindPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "send_for_signature_policy_changed_details",
                    "type": {
                        "datatype": "SendForSignaturePolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sharing_change_folder_join_policy_details",
                    "type": {
                        "datatype": "SharingChangeFolderJoinPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sharing_change_link_policy_details",
                    "type": {
                        "datatype": "SharingChangeLinkPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sharing_change_member_policy_details",
                    "type": {
                        "datatype": "SharingChangeMemberPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_change_download_policy_details",
                    "type": {
                        "datatype": "ShowcaseChangeDownloadPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_change_enabled_policy_details",
                    "type": {
                        "datatype": "ShowcaseChangeEnabledPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "showcase_change_external_sharing_policy_details",
                    "type": {
                        "datatype": "ShowcaseChangeExternalSharingPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "smarter_smart_sync_policy_changed_details",
                    "type": {
                        "datatype": "SmarterSmartSyncPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "smart_sync_change_policy_details",
                    "type": {
                        "datatype": "SmartSyncChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "smart_sync_not_opt_out_details",
                    "type": {
                        "datatype": "SmartSyncNotOptOutDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "smart_sync_opt_out_details",
                    "type": {
                        "datatype": "SmartSyncOptOutDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "sso_change_policy_details",
                    "type": {
                        "datatype": "SsoChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_extensions_policy_changed_details",
                    "type": {
                        "datatype": "TeamExtensionsPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_selective_sync_policy_changed_details",
                    "type": {
                        "datatype": "TeamSelectiveSyncPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_sharing_whitelist_subjects_changed_details",
                    "type": {
                        "datatype": "TeamSharingWhitelistSubjectsChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "tfa_add_exception_details",
                    "type": {
                        "datatype": "TfaAddExceptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "tfa_change_policy_details",
                    "type": {
                        "datatype": "TfaChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "tfa_remove_exception_details",
                    "type": {
                        "datatype": "TfaRemoveExceptionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "two_account_change_policy_details",
                    "type": {
                        "datatype": "TwoAccountChangePolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "viewer_info_policy_changed_details",
                    "type": {
                        "datatype": "ViewerInfoPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "watermarking_policy_changed_details",
                    "type": {
                        "datatype": "WatermarkingPolicyChangedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "web_sessions_change_active_session_limit_details",
                    "type": {
                        "datatype": "WebSessionsChangeActiveSessionLimitDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "web_sessions_change_fixed_length_policy_details",
                    "type": {
                        "datatype": "WebSessionsChangeFixedLengthPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "web_sessions_change_idle_length_policy_details",
                    "type": {
                        "datatype": "WebSessionsChangeIdleLengthPolicyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_from_details",
                    "type": {
                        "datatype": "TeamMergeFromDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_to_details",
                    "type": {
                        "datatype": "TeamMergeToDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_profile_add_logo_details",
                    "type": {
                        "datatype": "TeamProfileAddLogoDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_profile_change_default_language_details",
                    "type": {
                        "datatype": "TeamProfileChangeDefaultLanguageDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_profile_change_logo_details",
                    "type": {
                        "datatype": "TeamProfileChangeLogoDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_profile_change_name_details",
                    "type": {
                        "datatype": "TeamProfileChangeNameDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_profile_remove_logo_details",
                    "type": {
                        "datatype": "TeamProfileRemoveLogoDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "tfa_add_backup_phone_details",
                    "type": {
                        "datatype": "TfaAddBackupPhoneDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "tfa_add_security_key_details",
                    "type": {
                        "datatype": "TfaAddSecurityKeyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "tfa_change_backup_phone_details",
                    "type": {
                        "datatype": "TfaChangeBackupPhoneDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "tfa_change_status_details",
                    "type": {
                        "datatype": "TfaChangeStatusDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "tfa_remove_backup_phone_details",
                    "type": {
                        "datatype": "TfaRemoveBackupPhoneDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "tfa_remove_security_key_details",
                    "type": {
                        "datatype": "TfaRemoveSecurityKeyDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "tfa_reset_details",
                    "type": {
                        "datatype": "TfaResetDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "changed_enterprise_admin_role_details",
                    "type": {
                        "datatype": "ChangedEnterpriseAdminRoleDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "changed_enterprise_connected_team_status_details",
                    "type": {
                        "datatype": "ChangedEnterpriseConnectedTeamStatusDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "ended_enterprise_admin_session_details",
                    "type": {
                        "datatype": "EndedEnterpriseAdminSessionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "ended_enterprise_admin_session_deprecated_details",
                    "type": {
                        "datatype": "EndedEnterpriseAdminSessionDeprecatedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "enterprise_settings_locking_details",
                    "type": {
                        "datatype": "EnterpriseSettingsLockingDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "guest_admin_change_status_details",
                    "type": {
                        "datatype": "GuestAdminChangeStatusDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "started_enterprise_admin_session_details",
                    "type": {
                        "datatype": "StartedEnterpriseAdminSessionDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_accepted_details",
                    "type": {
                        "datatype": "TeamMergeRequestAcceptedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_accepted_shown_to_primary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestAcceptedShownToPrimaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_accepted_shown_to_secondary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestAcceptedShownToSecondaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_auto_canceled_details",
                    "type": {
                        "datatype": "TeamMergeRequestAutoCanceledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_canceled_details",
                    "type": {
                        "datatype": "TeamMergeRequestCanceledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_canceled_shown_to_primary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestCanceledShownToPrimaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_canceled_shown_to_secondary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestCanceledShownToSecondaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_expired_details",
                    "type": {
                        "datatype": "TeamMergeRequestExpiredDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_expired_shown_to_primary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestExpiredShownToPrimaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_expired_shown_to_secondary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestExpiredShownToSecondaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_rejected_shown_to_primary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestRejectedShownToPrimaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_rejected_shown_to_secondary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestRejectedShownToSecondaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_reminder_details",
                    "type": {
                        "datatype": "TeamMergeRequestReminderDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_reminder_shown_to_primary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestReminderShownToPrimaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_reminder_shown_to_secondary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestReminderShownToSecondaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_revoked_details",
                    "type": {
                        "datatype": "TeamMergeRequestRevokedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_sent_shown_to_primary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestSentShownToPrimaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "parameter": "team_merge_request_sent_shown_to_secondary_team_details",
                    "type": {
                        "datatype": "TeamMergeRequestSentShownToSecondaryTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Hints that this event was returned with missing details due to an internal error.",
                    "parameter": "missing_details",
                    "type": {
                        "datatype": "MissingDetails",
                        "namespace": "team_log"
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
        "EventType": {
            "description": "The type of the event with description.",
            "fields": [
                {
                    "description": "(apps) Linked app for team",
                    "parameter": "app_link_team",
                    "type": {
                        "datatype": "AppLinkTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(apps) Linked app for member",
                    "parameter": "app_link_user",
                    "type": {
                        "datatype": "AppLinkUserType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(apps) Unlinked app for team",
                    "parameter": "app_unlink_team",
                    "type": {
                        "datatype": "AppUnlinkTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(apps) Unlinked app for member",
                    "parameter": "app_unlink_user",
                    "type": {
                        "datatype": "AppUnlinkUserType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(apps) Connected integration for member",
                    "parameter": "integration_connected",
                    "type": {
                        "datatype": "IntegrationConnectedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(apps) Disconnected integration for member",
                    "parameter": "integration_disconnected",
                    "type": {
                        "datatype": "IntegrationDisconnectedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(comments) Added file comment",
                    "parameter": "file_add_comment",
                    "type": {
                        "datatype": "FileAddCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(comments) Subscribed to or unsubscribed from comment notifications for file",
                    "parameter": "file_change_comment_subscription",
                    "type": {
                        "datatype": "FileChangeCommentSubscriptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(comments) Deleted file comment",
                    "parameter": "file_delete_comment",
                    "type": {
                        "datatype": "FileDeleteCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(comments) Edited file comment",
                    "parameter": "file_edit_comment",
                    "type": {
                        "datatype": "FileEditCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(comments) Liked file comment (deprecated, no longer logged)",
                    "parameter": "file_like_comment",
                    "type": {
                        "datatype": "FileLikeCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(comments) Resolved file comment",
                    "parameter": "file_resolve_comment",
                    "type": {
                        "datatype": "FileResolveCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(comments) Unliked file comment (deprecated, no longer logged)",
                    "parameter": "file_unlike_comment",
                    "type": {
                        "datatype": "FileUnlikeCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(comments) Unresolved file comment",
                    "parameter": "file_unresolve_comment",
                    "type": {
                        "datatype": "FileUnresolveCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Changed IP address associated with active desktop session",
                    "parameter": "device_change_ip_desktop",
                    "type": {
                        "datatype": "DeviceChangeIpDesktopType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Changed IP address associated with active mobile session",
                    "parameter": "device_change_ip_mobile",
                    "type": {
                        "datatype": "DeviceChangeIpMobileType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Changed IP address associated with active web session",
                    "parameter": "device_change_ip_web",
                    "type": {
                        "datatype": "DeviceChangeIpWebType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Failed to delete all files from unlinked device",
                    "parameter": "device_delete_on_unlink_fail",
                    "type": {
                        "datatype": "DeviceDeleteOnUnlinkFailType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Deleted all files from unlinked device",
                    "parameter": "device_delete_on_unlink_success",
                    "type": {
                        "datatype": "DeviceDeleteOnUnlinkSuccessType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Failed to link device",
                    "parameter": "device_link_fail",
                    "type": {
                        "datatype": "DeviceLinkFailType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Linked device",
                    "parameter": "device_link_success",
                    "type": {
                        "datatype": "DeviceLinkSuccessType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Disabled device management (deprecated, no longer logged)",
                    "parameter": "device_management_disabled",
                    "type": {
                        "datatype": "DeviceManagementDisabledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Enabled device management (deprecated, no longer logged)",
                    "parameter": "device_management_enabled",
                    "type": {
                        "datatype": "DeviceManagementEnabledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Disconnected device",
                    "parameter": "device_unlink",
                    "type": {
                        "datatype": "DeviceUnlinkType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(devices) Refreshed auth token used for setting up EMM",
                    "parameter": "emm_refresh_auth_token",
                    "type": {
                        "datatype": "EmmRefreshAuthTokenType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Granted/revoked option to enable account capture on team domains",
                    "parameter": "account_capture_change_availability",
                    "type": {
                        "datatype": "AccountCaptureChangeAvailabilityType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Account-captured user migrated account to team",
                    "parameter": "account_capture_migrate_account",
                    "type": {
                        "datatype": "AccountCaptureMigrateAccountType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Sent account capture email to all unmanaged members",
                    "parameter": "account_capture_notification_emails_sent",
                    "type": {
                        "datatype": "AccountCaptureNotificationEmailsSentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Account-captured user changed account email to personal email",
                    "parameter": "account_capture_relinquish_account",
                    "type": {
                        "datatype": "AccountCaptureRelinquishAccountType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Disabled domain invites (deprecated, no longer logged)",
                    "parameter": "disabled_domain_invites",
                    "type": {
                        "datatype": "DisabledDomainInvitesType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Approved user's request to join team",
                    "parameter": "domain_invites_approve_request_to_join_team",
                    "type": {
                        "datatype": "DomainInvitesApproveRequestToJoinTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Declined user's request to join team",
                    "parameter": "domain_invites_decline_request_to_join_team",
                    "type": {
                        "datatype": "DomainInvitesDeclineRequestToJoinTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Sent domain invites to existing domain accounts (deprecated, no longer logged)",
                    "parameter": "domain_invites_email_existing_users",
                    "type": {
                        "datatype": "DomainInvitesEmailExistingUsersType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Requested to join team",
                    "parameter": "domain_invites_request_to_join_team",
                    "type": {
                        "datatype": "DomainInvitesRequestToJoinTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Disabled \"Automatically invite new users\" (deprecated, no longer logged)",
                    "parameter": "domain_invites_set_invite_new_user_pref_to_no",
                    "type": {
                        "datatype": "DomainInvitesSetInviteNewUserPrefToNoType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Enabled \"Automatically invite new users\" (deprecated, no longer logged)",
                    "parameter": "domain_invites_set_invite_new_user_pref_to_yes",
                    "type": {
                        "datatype": "DomainInvitesSetInviteNewUserPrefToYesType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Failed to verify team domain",
                    "parameter": "domain_verification_add_domain_fail",
                    "type": {
                        "datatype": "DomainVerificationAddDomainFailType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Verified team domain",
                    "parameter": "domain_verification_add_domain_success",
                    "type": {
                        "datatype": "DomainVerificationAddDomainSuccessType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Removed domain from list of verified team domains",
                    "parameter": "domain_verification_remove_domain",
                    "type": {
                        "datatype": "DomainVerificationRemoveDomainType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(domains) Enabled domain invites (deprecated, no longer logged)",
                    "parameter": "enabled_domain_invites",
                    "type": {
                        "datatype": "EnabledDomainInvitesType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Created folders (deprecated, no longer logged)",
                    "parameter": "create_folder",
                    "type": {
                        "datatype": "CreateFolderType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Added files and/or folders",
                    "parameter": "file_add",
                    "type": {
                        "datatype": "FileAddType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Copied files and/or folders",
                    "parameter": "file_copy",
                    "type": {
                        "datatype": "FileCopyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Deleted files and/or folders",
                    "parameter": "file_delete",
                    "type": {
                        "datatype": "FileDeleteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Downloaded files and/or folders",
                    "parameter": "file_download",
                    "type": {
                        "datatype": "FileDownloadType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Edited files",
                    "parameter": "file_edit",
                    "type": {
                        "datatype": "FileEditType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Created copy reference to file/folder",
                    "parameter": "file_get_copy_reference",
                    "type": {
                        "datatype": "FileGetCopyReferenceType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Locked/unlocked editing for a file",
                    "parameter": "file_locking_lock_status_changed",
                    "type": {
                        "datatype": "FileLockingLockStatusChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Moved files and/or folders",
                    "parameter": "file_move",
                    "type": {
                        "datatype": "FileMoveType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Permanently deleted files and/or folders",
                    "parameter": "file_permanently_delete",
                    "type": {
                        "datatype": "FilePermanentlyDeleteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Previewed files and/or folders",
                    "parameter": "file_preview",
                    "type": {
                        "datatype": "FilePreviewType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Renamed files and/or folders",
                    "parameter": "file_rename",
                    "type": {
                        "datatype": "FileRenameType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Restored deleted files and/or folders",
                    "parameter": "file_restore",
                    "type": {
                        "datatype": "FileRestoreType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Reverted files to previous version",
                    "parameter": "file_revert",
                    "type": {
                        "datatype": "FileRevertType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Rolled back file actions",
                    "parameter": "file_rollback_changes",
                    "type": {
                        "datatype": "FileRollbackChangesType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Saved file/folder using copy reference",
                    "parameter": "file_save_copy_reference",
                    "type": {
                        "datatype": "FileSaveCopyReferenceType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Updated folder overview",
                    "parameter": "folder_overview_description_changed",
                    "type": {
                        "datatype": "FolderOverviewDescriptionChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Pinned item to folder overview",
                    "parameter": "folder_overview_item_pinned",
                    "type": {
                        "datatype": "FolderOverviewItemPinnedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Unpinned item from folder overview",
                    "parameter": "folder_overview_item_unpinned",
                    "type": {
                        "datatype": "FolderOverviewItemUnpinnedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_operations) Rewound a folder",
                    "parameter": "rewind_folder",
                    "type": {
                        "datatype": "RewindFolderType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_requests) Changed file request",
                    "parameter": "file_request_change",
                    "type": {
                        "datatype": "FileRequestChangeType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_requests) Closed file request",
                    "parameter": "file_request_close",
                    "type": {
                        "datatype": "FileRequestCloseType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_requests) Created file request",
                    "parameter": "file_request_create",
                    "type": {
                        "datatype": "FileRequestCreateType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_requests) Delete file request",
                    "parameter": "file_request_delete",
                    "type": {
                        "datatype": "FileRequestDeleteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(file_requests) Received files for file request",
                    "parameter": "file_request_receive_file",
                    "type": {
                        "datatype": "FileRequestReceiveFileType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Added external ID for group",
                    "parameter": "group_add_external_id",
                    "type": {
                        "datatype": "GroupAddExternalIdType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Added team members to group",
                    "parameter": "group_add_member",
                    "type": {
                        "datatype": "GroupAddMemberType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Changed external ID for group",
                    "parameter": "group_change_external_id",
                    "type": {
                        "datatype": "GroupChangeExternalIdType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Changed group management type",
                    "parameter": "group_change_management_type",
                    "type": {
                        "datatype": "GroupChangeManagementTypeType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Changed manager permissions of group member",
                    "parameter": "group_change_member_role",
                    "type": {
                        "datatype": "GroupChangeMemberRoleType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Created group",
                    "parameter": "group_create",
                    "type": {
                        "datatype": "GroupCreateType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Deleted group",
                    "parameter": "group_delete",
                    "type": {
                        "datatype": "GroupDeleteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Updated group (deprecated, no longer logged)",
                    "parameter": "group_description_updated",
                    "type": {
                        "datatype": "GroupDescriptionUpdatedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Updated group join policy (deprecated, no longer logged)",
                    "parameter": "group_join_policy_updated",
                    "type": {
                        "datatype": "GroupJoinPolicyUpdatedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Moved group (deprecated, no longer logged)",
                    "parameter": "group_moved",
                    "type": {
                        "datatype": "GroupMovedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Removed external ID for group",
                    "parameter": "group_remove_external_id",
                    "type": {
                        "datatype": "GroupRemoveExternalIdType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Removed team members from group",
                    "parameter": "group_remove_member",
                    "type": {
                        "datatype": "GroupRemoveMemberType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(groups) Renamed group",
                    "parameter": "group_rename",
                    "type": {
                        "datatype": "GroupRenameType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Activated a hold",
                    "parameter": "legal_holds_activate_a_hold",
                    "type": {
                        "datatype": "LegalHoldsActivateAHoldType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Added members to a hold",
                    "parameter": "legal_holds_add_members",
                    "type": {
                        "datatype": "LegalHoldsAddMembersType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Edited details for a hold",
                    "parameter": "legal_holds_change_hold_details",
                    "type": {
                        "datatype": "LegalHoldsChangeHoldDetailsType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Renamed a hold",
                    "parameter": "legal_holds_change_hold_name",
                    "type": {
                        "datatype": "LegalHoldsChangeHoldNameType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Exported hold",
                    "parameter": "legal_holds_export_a_hold",
                    "type": {
                        "datatype": "LegalHoldsExportAHoldType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Canceled export for a hold",
                    "parameter": "legal_holds_export_cancelled",
                    "type": {
                        "datatype": "LegalHoldsExportCancelledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Downloaded export for a hold",
                    "parameter": "legal_holds_export_downloaded",
                    "type": {
                        "datatype": "LegalHoldsExportDownloadedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Removed export for a hold",
                    "parameter": "legal_holds_export_removed",
                    "type": {
                        "datatype": "LegalHoldsExportRemovedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Released a hold",
                    "parameter": "legal_holds_release_a_hold",
                    "type": {
                        "datatype": "LegalHoldsReleaseAHoldType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Removed members from a hold",
                    "parameter": "legal_holds_remove_members",
                    "type": {
                        "datatype": "LegalHoldsRemoveMembersType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(legal_holds) Created a summary report for a hold",
                    "parameter": "legal_holds_report_a_hold",
                    "type": {
                        "datatype": "LegalHoldsReportAHoldType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Unlocked/locked account after failed sign in attempts",
                    "parameter": "account_lock_or_unlocked",
                    "type": {
                        "datatype": "AccountLockOrUnlockedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Failed to sign in via EMM (deprecated, replaced by 'Failed to sign in')",
                    "parameter": "emm_error",
                    "type": {
                        "datatype": "EmmErrorType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Started trusted team admin session",
                    "parameter": "guest_admin_signed_in_via_trusted_teams",
                    "type": {
                        "datatype": "GuestAdminSignedInViaTrustedTeamsType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Ended trusted team admin session",
                    "parameter": "guest_admin_signed_out_via_trusted_teams",
                    "type": {
                        "datatype": "GuestAdminSignedOutViaTrustedTeamsType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Failed to sign in",
                    "parameter": "login_fail",
                    "type": {
                        "datatype": "LoginFailType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Signed in",
                    "parameter": "login_success",
                    "type": {
                        "datatype": "LoginSuccessType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Signed out",
                    "parameter": "logout",
                    "type": {
                        "datatype": "LogoutType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Ended reseller support session",
                    "parameter": "reseller_support_session_end",
                    "type": {
                        "datatype": "ResellerSupportSessionEndType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Started reseller support session",
                    "parameter": "reseller_support_session_start",
                    "type": {
                        "datatype": "ResellerSupportSessionStartType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Ended admin sign-in-as session",
                    "parameter": "sign_in_as_session_end",
                    "type": {
                        "datatype": "SignInAsSessionEndType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Started admin sign-in-as session",
                    "parameter": "sign_in_as_session_start",
                    "type": {
                        "datatype": "SignInAsSessionStartType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(logins) Failed to sign in via SSO (deprecated, replaced by 'Failed to sign in')",
                    "parameter": "sso_error",
                    "type": {
                        "datatype": "SsoErrorType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Created team invite link",
                    "parameter": "create_team_invite_link",
                    "type": {
                        "datatype": "CreateTeamInviteLinkType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Deleted team invite link",
                    "parameter": "delete_team_invite_link",
                    "type": {
                        "datatype": "DeleteTeamInviteLinkType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Added an external ID for team member",
                    "parameter": "member_add_external_id",
                    "type": {
                        "datatype": "MemberAddExternalIdType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Added team member name",
                    "parameter": "member_add_name",
                    "type": {
                        "datatype": "MemberAddNameType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Changed team member admin role",
                    "parameter": "member_change_admin_role",
                    "type": {
                        "datatype": "MemberChangeAdminRoleType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Changed team member email",
                    "parameter": "member_change_email",
                    "type": {
                        "datatype": "MemberChangeEmailType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Changed the external ID for team member",
                    "parameter": "member_change_external_id",
                    "type": {
                        "datatype": "MemberChangeExternalIdType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Changed membership type (limited/full) of member (deprecated, no longer logged)",
                    "parameter": "member_change_membership_type",
                    "type": {
                        "datatype": "MemberChangeMembershipTypeType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Changed team member name",
                    "parameter": "member_change_name",
                    "type": {
                        "datatype": "MemberChangeNameType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Changed member status (invited, joined, suspended, etc.)",
                    "parameter": "member_change_status",
                    "type": {
                        "datatype": "MemberChangeStatusType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Cleared manually added contacts",
                    "parameter": "member_delete_manual_contacts",
                    "type": {
                        "datatype": "MemberDeleteManualContactsType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Deleted team member profile photo",
                    "parameter": "member_delete_profile_photo",
                    "type": {
                        "datatype": "MemberDeleteProfilePhotoType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Permanently deleted contents of deleted team member account",
                    "parameter": "member_permanently_delete_account_contents",
                    "type": {
                        "datatype": "MemberPermanentlyDeleteAccountContentsType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Removed the external ID for team member",
                    "parameter": "member_remove_external_id",
                    "type": {
                        "datatype": "MemberRemoveExternalIdType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Set team member profile photo",
                    "parameter": "member_set_profile_photo",
                    "type": {
                        "datatype": "MemberSetProfilePhotoType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Set custom member space limit",
                    "parameter": "member_space_limits_add_custom_quota",
                    "type": {
                        "datatype": "MemberSpaceLimitsAddCustomQuotaType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Changed custom member space limit",
                    "parameter": "member_space_limits_change_custom_quota",
                    "type": {
                        "datatype": "MemberSpaceLimitsChangeCustomQuotaType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Changed space limit status",
                    "parameter": "member_space_limits_change_status",
                    "type": {
                        "datatype": "MemberSpaceLimitsChangeStatusType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Removed custom member space limit",
                    "parameter": "member_space_limits_remove_custom_quota",
                    "type": {
                        "datatype": "MemberSpaceLimitsRemoveCustomQuotaType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Suggested person to add to team",
                    "parameter": "member_suggest",
                    "type": {
                        "datatype": "MemberSuggestType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Transferred contents of deleted member account to another member",
                    "parameter": "member_transfer_account_contents",
                    "type": {
                        "datatype": "MemberTransferAccountContentsType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Added pending secondary email",
                    "parameter": "pending_secondary_email_added",
                    "type": {
                        "datatype": "PendingSecondaryEmailAddedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Deleted secondary email",
                    "parameter": "secondary_email_deleted",
                    "type": {
                        "datatype": "SecondaryEmailDeletedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Verified secondary email",
                    "parameter": "secondary_email_verified",
                    "type": {
                        "datatype": "SecondaryEmailVerifiedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(members) Secondary mails policy changed",
                    "parameter": "secondary_mails_policy_changed",
                    "type": {
                        "datatype": "SecondaryMailsPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Added Binder page (deprecated, replaced by 'Edited files')",
                    "parameter": "binder_add_page",
                    "type": {
                        "datatype": "BinderAddPageType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Added Binder section (deprecated, replaced by 'Edited files')",
                    "parameter": "binder_add_section",
                    "type": {
                        "datatype": "BinderAddSectionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Removed Binder page (deprecated, replaced by 'Edited files')",
                    "parameter": "binder_remove_page",
                    "type": {
                        "datatype": "BinderRemovePageType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Removed Binder section (deprecated, replaced by 'Edited files')",
                    "parameter": "binder_remove_section",
                    "type": {
                        "datatype": "BinderRemoveSectionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Renamed Binder page (deprecated, replaced by 'Edited files')",
                    "parameter": "binder_rename_page",
                    "type": {
                        "datatype": "BinderRenamePageType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Renamed Binder section (deprecated, replaced by 'Edited files')",
                    "parameter": "binder_rename_section",
                    "type": {
                        "datatype": "BinderRenameSectionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Reordered Binder page (deprecated, replaced by 'Edited files')",
                    "parameter": "binder_reorder_page",
                    "type": {
                        "datatype": "BinderReorderPageType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Reordered Binder section (deprecated, replaced by 'Edited files')",
                    "parameter": "binder_reorder_section",
                    "type": {
                        "datatype": "BinderReorderSectionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Added users and/or groups to Paper doc/folder",
                    "parameter": "paper_content_add_member",
                    "type": {
                        "datatype": "PaperContentAddMemberType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Added Paper doc/folder to folder",
                    "parameter": "paper_content_add_to_folder",
                    "type": {
                        "datatype": "PaperContentAddToFolderType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Archived Paper doc/folder",
                    "parameter": "paper_content_archive",
                    "type": {
                        "datatype": "PaperContentArchiveType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Created Paper doc/folder",
                    "parameter": "paper_content_create",
                    "type": {
                        "datatype": "PaperContentCreateType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Permanently deleted Paper doc/folder",
                    "parameter": "paper_content_permanently_delete",
                    "type": {
                        "datatype": "PaperContentPermanentlyDeleteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Removed Paper doc/folder from folder",
                    "parameter": "paper_content_remove_from_folder",
                    "type": {
                        "datatype": "PaperContentRemoveFromFolderType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Removed users and/or groups from Paper doc/folder",
                    "parameter": "paper_content_remove_member",
                    "type": {
                        "datatype": "PaperContentRemoveMemberType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Renamed Paper doc/folder",
                    "parameter": "paper_content_rename",
                    "type": {
                        "datatype": "PaperContentRenameType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Restored archived Paper doc/folder",
                    "parameter": "paper_content_restore",
                    "type": {
                        "datatype": "PaperContentRestoreType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Added Paper doc comment",
                    "parameter": "paper_doc_add_comment",
                    "type": {
                        "datatype": "PaperDocAddCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Changed member permissions for Paper doc",
                    "parameter": "paper_doc_change_member_role",
                    "type": {
                        "datatype": "PaperDocChangeMemberRoleType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Changed sharing setting for Paper doc",
                    "parameter": "paper_doc_change_sharing_policy",
                    "type": {
                        "datatype": "PaperDocChangeSharingPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Followed/unfollowed Paper doc",
                    "parameter": "paper_doc_change_subscription",
                    "type": {
                        "datatype": "PaperDocChangeSubscriptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Archived Paper doc (deprecated, no longer logged)",
                    "parameter": "paper_doc_deleted",
                    "type": {
                        "datatype": "PaperDocDeletedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Deleted Paper doc comment",
                    "parameter": "paper_doc_delete_comment",
                    "type": {
                        "datatype": "PaperDocDeleteCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Downloaded Paper doc in specific format",
                    "parameter": "paper_doc_download",
                    "type": {
                        "datatype": "PaperDocDownloadType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Edited Paper doc",
                    "parameter": "paper_doc_edit",
                    "type": {
                        "datatype": "PaperDocEditType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Edited Paper doc comment",
                    "parameter": "paper_doc_edit_comment",
                    "type": {
                        "datatype": "PaperDocEditCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Followed Paper doc (deprecated, replaced by 'Followed/unfollowed Paper doc')",
                    "parameter": "paper_doc_followed",
                    "type": {
                        "datatype": "PaperDocFollowedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Mentioned user in Paper doc",
                    "parameter": "paper_doc_mention",
                    "type": {
                        "datatype": "PaperDocMentionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Transferred ownership of Paper doc",
                    "parameter": "paper_doc_ownership_changed",
                    "type": {
                        "datatype": "PaperDocOwnershipChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Requested access to Paper doc",
                    "parameter": "paper_doc_request_access",
                    "type": {
                        "datatype": "PaperDocRequestAccessType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Resolved Paper doc comment",
                    "parameter": "paper_doc_resolve_comment",
                    "type": {
                        "datatype": "PaperDocResolveCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Restored Paper doc to previous version",
                    "parameter": "paper_doc_revert",
                    "type": {
                        "datatype": "PaperDocRevertType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Shared Paper doc via Slack",
                    "parameter": "paper_doc_slack_share",
                    "type": {
                        "datatype": "PaperDocSlackShareType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Shared Paper doc with users and/or groups (deprecated, no longer logged)",
                    "parameter": "paper_doc_team_invite",
                    "type": {
                        "datatype": "PaperDocTeamInviteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Deleted Paper doc",
                    "parameter": "paper_doc_trashed",
                    "type": {
                        "datatype": "PaperDocTrashedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Unresolved Paper doc comment",
                    "parameter": "paper_doc_unresolve_comment",
                    "type": {
                        "datatype": "PaperDocUnresolveCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Restored Paper doc",
                    "parameter": "paper_doc_untrashed",
                    "type": {
                        "datatype": "PaperDocUntrashedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Viewed Paper doc",
                    "parameter": "paper_doc_view",
                    "type": {
                        "datatype": "PaperDocViewType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Changed Paper external sharing setting to anyone (deprecated, no longer logged)",
                    "parameter": "paper_external_view_allow",
                    "type": {
                        "datatype": "PaperExternalViewAllowType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Changed Paper external sharing setting to default team (deprecated, no longer logged)",
                    "parameter": "paper_external_view_default_team",
                    "type": {
                        "datatype": "PaperExternalViewDefaultTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Changed Paper external sharing setting to team-only (deprecated, no longer logged)",
                    "parameter": "paper_external_view_forbid",
                    "type": {
                        "datatype": "PaperExternalViewForbidType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Followed/unfollowed Paper folder",
                    "parameter": "paper_folder_change_subscription",
                    "type": {
                        "datatype": "PaperFolderChangeSubscriptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Archived Paper folder (deprecated, no longer logged)",
                    "parameter": "paper_folder_deleted",
                    "type": {
                        "datatype": "PaperFolderDeletedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Followed Paper folder (deprecated, replaced by 'Followed/unfollowed Paper folder')",
                    "parameter": "paper_folder_followed",
                    "type": {
                        "datatype": "PaperFolderFollowedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Shared Paper folder with users and/or groups (deprecated, no longer logged)",
                    "parameter": "paper_folder_team_invite",
                    "type": {
                        "datatype": "PaperFolderTeamInviteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Changed permissions for published doc",
                    "parameter": "paper_published_link_change_permission",
                    "type": {
                        "datatype": "PaperPublishedLinkChangePermissionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Published doc",
                    "parameter": "paper_published_link_create",
                    "type": {
                        "datatype": "PaperPublishedLinkCreateType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Unpublished doc",
                    "parameter": "paper_published_link_disabled",
                    "type": {
                        "datatype": "PaperPublishedLinkDisabledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(paper) Viewed published doc",
                    "parameter": "paper_published_link_view",
                    "type": {
                        "datatype": "PaperPublishedLinkViewType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(passwords) Changed password",
                    "parameter": "password_change",
                    "type": {
                        "datatype": "PasswordChangeType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(passwords) Reset password",
                    "parameter": "password_reset",
                    "type": {
                        "datatype": "PasswordResetType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(passwords) Reset all team member passwords",
                    "parameter": "password_reset_all",
                    "type": {
                        "datatype": "PasswordResetAllType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Created EMM-excluded users report",
                    "parameter": "emm_create_exceptions_report",
                    "type": {
                        "datatype": "EmmCreateExceptionsReportType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Created EMM mobile app usage report",
                    "parameter": "emm_create_usage_report",
                    "type": {
                        "datatype": "EmmCreateUsageReportType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Created member data report",
                    "parameter": "export_members_report",
                    "type": {
                        "datatype": "ExportMembersReportType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Failed to create members data report",
                    "parameter": "export_members_report_fail",
                    "type": {
                        "datatype": "ExportMembersReportFailType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Report created: Data shared outside the team",
                    "parameter": "external_sharing_create_report",
                    "type": {
                        "datatype": "ExternalSharingCreateReportType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Couldn't create report: Data shared outside the team",
                    "parameter": "external_sharing_report_failed",
                    "type": {
                        "datatype": "ExternalSharingReportFailedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Report created: Links created with no expiration",
                    "parameter": "no_expiration_link_gen_create_report",
                    "type": {
                        "datatype": "NoExpirationLinkGenCreateReportType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Couldn't create report: Links created with no expiration",
                    "parameter": "no_expiration_link_gen_report_failed",
                    "type": {
                        "datatype": "NoExpirationLinkGenReportFailedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Report created: Links created without passwords",
                    "parameter": "no_password_link_gen_create_report",
                    "type": {
                        "datatype": "NoPasswordLinkGenCreateReportType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Couldn't create report: Links created without passwords",
                    "parameter": "no_password_link_gen_report_failed",
                    "type": {
                        "datatype": "NoPasswordLinkGenReportFailedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Report created: Views of links without passwords",
                    "parameter": "no_password_link_view_create_report",
                    "type": {
                        "datatype": "NoPasswordLinkViewCreateReportType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Couldn't create report: Views of links without passwords",
                    "parameter": "no_password_link_view_report_failed",
                    "type": {
                        "datatype": "NoPasswordLinkViewReportFailedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Report created: Views of old links",
                    "parameter": "outdated_link_view_create_report",
                    "type": {
                        "datatype": "OutdatedLinkViewCreateReportType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Couldn't create report: Views of old links",
                    "parameter": "outdated_link_view_report_failed",
                    "type": {
                        "datatype": "OutdatedLinkViewReportFailedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Exported all team Paper docs",
                    "parameter": "paper_admin_export_start",
                    "type": {
                        "datatype": "PaperAdminExportStartType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Created Smart Sync non-admin devices report",
                    "parameter": "smart_sync_create_admin_privilege_report",
                    "type": {
                        "datatype": "SmartSyncCreateAdminPrivilegeReportType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Created team activity report",
                    "parameter": "team_activity_create_report",
                    "type": {
                        "datatype": "TeamActivityCreateReportType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(reports) Couldn't generate team activity report",
                    "parameter": "team_activity_create_report_fail",
                    "type": {
                        "datatype": "TeamActivityCreateReportFailType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Shared album",
                    "parameter": "collection_share",
                    "type": {
                        "datatype": "CollectionShareType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Transfer files added",
                    "parameter": "file_transfers_file_add",
                    "type": {
                        "datatype": "FileTransfersFileAddType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Deleted transfer",
                    "parameter": "file_transfers_transfer_delete",
                    "type": {
                        "datatype": "FileTransfersTransferDeleteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Transfer downloaded",
                    "parameter": "file_transfers_transfer_download",
                    "type": {
                        "datatype": "FileTransfersTransferDownloadType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Sent transfer",
                    "parameter": "file_transfers_transfer_send",
                    "type": {
                        "datatype": "FileTransfersTransferSendType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Viewed transfer",
                    "parameter": "file_transfers_transfer_view",
                    "type": {
                        "datatype": "FileTransfersTransferViewType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed Paper doc to invite-only (deprecated, no longer logged)",
                    "parameter": "note_acl_invite_only",
                    "type": {
                        "datatype": "NoteAclInviteOnlyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed Paper doc to link-accessible (deprecated, no longer logged)",
                    "parameter": "note_acl_link",
                    "type": {
                        "datatype": "NoteAclLinkType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed Paper doc to link-accessible for team (deprecated, no longer logged)",
                    "parameter": "note_acl_team_link",
                    "type": {
                        "datatype": "NoteAclTeamLinkType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Shared Paper doc (deprecated, no longer logged)",
                    "parameter": "note_shared",
                    "type": {
                        "datatype": "NoteSharedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Shared received Paper doc (deprecated, no longer logged)",
                    "parameter": "note_share_receive",
                    "type": {
                        "datatype": "NoteShareReceiveType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Opened shared Paper doc (deprecated, no longer logged)",
                    "parameter": "open_note_shared",
                    "type": {
                        "datatype": "OpenNoteSharedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Added team to shared folder (deprecated, no longer logged)",
                    "parameter": "sf_add_group",
                    "type": {
                        "datatype": "SfAddGroupType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Allowed non-collaborators to view links to files in shared folder (deprecated, no longer logged)",
                    "parameter": "sf_allow_non_members_to_view_shared_links",
                    "type": {
                        "datatype": "SfAllowNonMembersToViewSharedLinksType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Set team members to see warning before sharing folders outside team (deprecated, no longer logged)",
                    "parameter": "sf_external_invite_warn",
                    "type": {
                        "datatype": "SfExternalInviteWarnType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Invited Facebook users to shared folder (deprecated, no longer logged)",
                    "parameter": "sf_fb_invite",
                    "type": {
                        "datatype": "SfFbInviteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed Facebook user's role in shared folder (deprecated, no longer logged)",
                    "parameter": "sf_fb_invite_change_role",
                    "type": {
                        "datatype": "SfFbInviteChangeRoleType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Uninvited Facebook user from shared folder (deprecated, no longer logged)",
                    "parameter": "sf_fb_uninvite",
                    "type": {
                        "datatype": "SfFbUninviteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Invited group to shared folder (deprecated, no longer logged)",
                    "parameter": "sf_invite_group",
                    "type": {
                        "datatype": "SfInviteGroupType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Granted access to shared folder (deprecated, no longer logged)",
                    "parameter": "sf_team_grant_access",
                    "type": {
                        "datatype": "SfTeamGrantAccessType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Invited team members to shared folder (deprecated, replaced by 'Invited user to Dropbox and added them to shared file/folder')",
                    "parameter": "sf_team_invite",
                    "type": {
                        "datatype": "SfTeamInviteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed team member's role in shared folder (deprecated, no longer logged)",
                    "parameter": "sf_team_invite_change_role",
                    "type": {
                        "datatype": "SfTeamInviteChangeRoleType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Joined team member's shared folder (deprecated, no longer logged)",
                    "parameter": "sf_team_join",
                    "type": {
                        "datatype": "SfTeamJoinType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Joined team member's shared folder from link (deprecated, no longer logged)",
                    "parameter": "sf_team_join_from_oob_link",
                    "type": {
                        "datatype": "SfTeamJoinFromOobLinkType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Unshared folder with team member (deprecated, replaced by 'Removed invitee from shared file/folder before invite was accepted')",
                    "parameter": "sf_team_uninvite",
                    "type": {
                        "datatype": "SfTeamUninviteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Invited user to Dropbox and added them to shared file/folder",
                    "parameter": "shared_content_add_invitees",
                    "type": {
                        "datatype": "SharedContentAddInviteesType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Added expiration date to link for shared file/folder (deprecated, no longer logged)",
                    "parameter": "shared_content_add_link_expiry",
                    "type": {
                        "datatype": "SharedContentAddLinkExpiryType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Added password to link for shared file/folder (deprecated, no longer logged)",
                    "parameter": "shared_content_add_link_password",
                    "type": {
                        "datatype": "SharedContentAddLinkPasswordType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Added users and/or groups to shared file/folder",
                    "parameter": "shared_content_add_member",
                    "type": {
                        "datatype": "SharedContentAddMemberType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed whether members can download shared file/folder (deprecated, no longer logged)",
                    "parameter": "shared_content_change_downloads_policy",
                    "type": {
                        "datatype": "SharedContentChangeDownloadsPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed access type of invitee to shared file/folder before invite was accepted",
                    "parameter": "shared_content_change_invitee_role",
                    "type": {
                        "datatype": "SharedContentChangeInviteeRoleType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed link audience of shared file/folder (deprecated, no longer logged)",
                    "parameter": "shared_content_change_link_audience",
                    "type": {
                        "datatype": "SharedContentChangeLinkAudienceType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed link expiration of shared file/folder (deprecated, no longer logged)",
                    "parameter": "shared_content_change_link_expiry",
                    "type": {
                        "datatype": "SharedContentChangeLinkExpiryType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed link password of shared file/folder (deprecated, no longer logged)",
                    "parameter": "shared_content_change_link_password",
                    "type": {
                        "datatype": "SharedContentChangeLinkPasswordType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed access type of shared file/folder member",
                    "parameter": "shared_content_change_member_role",
                    "type": {
                        "datatype": "SharedContentChangeMemberRoleType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed whether members can see who viewed shared file/folder",
                    "parameter": "shared_content_change_viewer_info_policy",
                    "type": {
                        "datatype": "SharedContentChangeViewerInfoPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Acquired membership of shared file/folder by accepting invite",
                    "parameter": "shared_content_claim_invitation",
                    "type": {
                        "datatype": "SharedContentClaimInvitationType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Copied shared file/folder to own Dropbox",
                    "parameter": "shared_content_copy",
                    "type": {
                        "datatype": "SharedContentCopyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Downloaded shared file/folder",
                    "parameter": "shared_content_download",
                    "type": {
                        "datatype": "SharedContentDownloadType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Left shared file/folder",
                    "parameter": "shared_content_relinquish_membership",
                    "type": {
                        "datatype": "SharedContentRelinquishMembershipType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Removed invitee from shared file/folder before invite was accepted",
                    "parameter": "shared_content_remove_invitees",
                    "type": {
                        "datatype": "SharedContentRemoveInviteesType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Removed link expiration date of shared file/folder (deprecated, no longer logged)",
                    "parameter": "shared_content_remove_link_expiry",
                    "type": {
                        "datatype": "SharedContentRemoveLinkExpiryType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Removed link password of shared file/folder (deprecated, no longer logged)",
                    "parameter": "shared_content_remove_link_password",
                    "type": {
                        "datatype": "SharedContentRemoveLinkPasswordType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Removed user/group from shared file/folder",
                    "parameter": "shared_content_remove_member",
                    "type": {
                        "datatype": "SharedContentRemoveMemberType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Requested access to shared file/folder",
                    "parameter": "shared_content_request_access",
                    "type": {
                        "datatype": "SharedContentRequestAccessType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Restored shared file/folder invitees",
                    "parameter": "shared_content_restore_invitees",
                    "type": {
                        "datatype": "SharedContentRestoreInviteesType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Restored users and/or groups to membership of shared file/folder",
                    "parameter": "shared_content_restore_member",
                    "type": {
                        "datatype": "SharedContentRestoreMemberType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Unshared file/folder by clearing membership",
                    "parameter": "shared_content_unshare",
                    "type": {
                        "datatype": "SharedContentUnshareType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Previewed shared file/folder",
                    "parameter": "shared_content_view",
                    "type": {
                        "datatype": "SharedContentViewType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed who can access shared folder via link",
                    "parameter": "shared_folder_change_link_policy",
                    "type": {
                        "datatype": "SharedFolderChangeLinkPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed whether shared folder inherits members from parent folder",
                    "parameter": "shared_folder_change_members_inheritance_policy",
                    "type": {
                        "datatype": "SharedFolderChangeMembersInheritancePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed who can add/remove members of shared folder",
                    "parameter": "shared_folder_change_members_management_policy",
                    "type": {
                        "datatype": "SharedFolderChangeMembersManagementPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed who can become member of shared folder",
                    "parameter": "shared_folder_change_members_policy",
                    "type": {
                        "datatype": "SharedFolderChangeMembersPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Created shared folder",
                    "parameter": "shared_folder_create",
                    "type": {
                        "datatype": "SharedFolderCreateType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Declined team member's invite to shared folder",
                    "parameter": "shared_folder_decline_invitation",
                    "type": {
                        "datatype": "SharedFolderDeclineInvitationType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Added shared folder to own Dropbox",
                    "parameter": "shared_folder_mount",
                    "type": {
                        "datatype": "SharedFolderMountType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed parent of shared folder",
                    "parameter": "shared_folder_nest",
                    "type": {
                        "datatype": "SharedFolderNestType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Transferred ownership of shared folder to another member",
                    "parameter": "shared_folder_transfer_ownership",
                    "type": {
                        "datatype": "SharedFolderTransferOwnershipType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Deleted shared folder from Dropbox",
                    "parameter": "shared_folder_unmount",
                    "type": {
                        "datatype": "SharedFolderUnmountType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Added shared link expiration date",
                    "parameter": "shared_link_add_expiry",
                    "type": {
                        "datatype": "SharedLinkAddExpiryType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed shared link expiration date",
                    "parameter": "shared_link_change_expiry",
                    "type": {
                        "datatype": "SharedLinkChangeExpiryType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed visibility of shared link",
                    "parameter": "shared_link_change_visibility",
                    "type": {
                        "datatype": "SharedLinkChangeVisibilityType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Added file/folder to Dropbox from shared link",
                    "parameter": "shared_link_copy",
                    "type": {
                        "datatype": "SharedLinkCopyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Created shared link",
                    "parameter": "shared_link_create",
                    "type": {
                        "datatype": "SharedLinkCreateType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Removed shared link",
                    "parameter": "shared_link_disable",
                    "type": {
                        "datatype": "SharedLinkDisableType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Downloaded file/folder from shared link",
                    "parameter": "shared_link_download",
                    "type": {
                        "datatype": "SharedLinkDownloadType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Removed shared link expiration date",
                    "parameter": "shared_link_remove_expiry",
                    "type": {
                        "datatype": "SharedLinkRemoveExpiryType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Added an expiration date to the shared link",
                    "parameter": "shared_link_settings_add_expiration",
                    "type": {
                        "datatype": "SharedLinkSettingsAddExpirationType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Added a password to the shared link",
                    "parameter": "shared_link_settings_add_password",
                    "type": {
                        "datatype": "SharedLinkSettingsAddPasswordType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Disabled downloads",
                    "parameter": "shared_link_settings_allow_download_disabled",
                    "type": {
                        "datatype": "SharedLinkSettingsAllowDownloadDisabledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Enabled downloads",
                    "parameter": "shared_link_settings_allow_download_enabled",
                    "type": {
                        "datatype": "SharedLinkSettingsAllowDownloadEnabledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed the audience of the shared link",
                    "parameter": "shared_link_settings_change_audience",
                    "type": {
                        "datatype": "SharedLinkSettingsChangeAudienceType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed the expiration date of the shared link",
                    "parameter": "shared_link_settings_change_expiration",
                    "type": {
                        "datatype": "SharedLinkSettingsChangeExpirationType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Changed the password of the shared link",
                    "parameter": "shared_link_settings_change_password",
                    "type": {
                        "datatype": "SharedLinkSettingsChangePasswordType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Removed the expiration date from the shared link",
                    "parameter": "shared_link_settings_remove_expiration",
                    "type": {
                        "datatype": "SharedLinkSettingsRemoveExpirationType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Removed the password from the shared link",
                    "parameter": "shared_link_settings_remove_password",
                    "type": {
                        "datatype": "SharedLinkSettingsRemovePasswordType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Added members as audience of shared link",
                    "parameter": "shared_link_share",
                    "type": {
                        "datatype": "SharedLinkShareType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Opened shared link",
                    "parameter": "shared_link_view",
                    "type": {
                        "datatype": "SharedLinkViewType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Opened shared Paper doc (deprecated, no longer logged)",
                    "parameter": "shared_note_opened",
                    "type": {
                        "datatype": "SharedNoteOpenedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sharing) Shared link with group (deprecated, no longer logged)",
                    "parameter": "shmodel_group_share",
                    "type": {
                        "datatype": "ShmodelGroupShareType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Granted access to showcase",
                    "parameter": "showcase_access_granted",
                    "type": {
                        "datatype": "ShowcaseAccessGrantedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Added member to showcase",
                    "parameter": "showcase_add_member",
                    "type": {
                        "datatype": "ShowcaseAddMemberType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Archived showcase",
                    "parameter": "showcase_archived",
                    "type": {
                        "datatype": "ShowcaseArchivedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Created showcase",
                    "parameter": "showcase_created",
                    "type": {
                        "datatype": "ShowcaseCreatedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Deleted showcase comment",
                    "parameter": "showcase_delete_comment",
                    "type": {
                        "datatype": "ShowcaseDeleteCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Edited showcase",
                    "parameter": "showcase_edited",
                    "type": {
                        "datatype": "ShowcaseEditedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Edited showcase comment",
                    "parameter": "showcase_edit_comment",
                    "type": {
                        "datatype": "ShowcaseEditCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Added file to showcase",
                    "parameter": "showcase_file_added",
                    "type": {
                        "datatype": "ShowcaseFileAddedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Downloaded file from showcase",
                    "parameter": "showcase_file_download",
                    "type": {
                        "datatype": "ShowcaseFileDownloadType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Removed file from showcase",
                    "parameter": "showcase_file_removed",
                    "type": {
                        "datatype": "ShowcaseFileRemovedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Viewed file in showcase",
                    "parameter": "showcase_file_view",
                    "type": {
                        "datatype": "ShowcaseFileViewType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Permanently deleted showcase",
                    "parameter": "showcase_permanently_deleted",
                    "type": {
                        "datatype": "ShowcasePermanentlyDeletedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Added showcase comment",
                    "parameter": "showcase_post_comment",
                    "type": {
                        "datatype": "ShowcasePostCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Removed member from showcase",
                    "parameter": "showcase_remove_member",
                    "type": {
                        "datatype": "ShowcaseRemoveMemberType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Renamed showcase",
                    "parameter": "showcase_renamed",
                    "type": {
                        "datatype": "ShowcaseRenamedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Requested access to showcase",
                    "parameter": "showcase_request_access",
                    "type": {
                        "datatype": "ShowcaseRequestAccessType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Resolved showcase comment",
                    "parameter": "showcase_resolve_comment",
                    "type": {
                        "datatype": "ShowcaseResolveCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Unarchived showcase",
                    "parameter": "showcase_restored",
                    "type": {
                        "datatype": "ShowcaseRestoredType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Deleted showcase",
                    "parameter": "showcase_trashed",
                    "type": {
                        "datatype": "ShowcaseTrashedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Deleted showcase (old version) (deprecated, replaced by 'Deleted showcase')",
                    "parameter": "showcase_trashed_deprecated",
                    "type": {
                        "datatype": "ShowcaseTrashedDeprecatedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Unresolved showcase comment",
                    "parameter": "showcase_unresolve_comment",
                    "type": {
                        "datatype": "ShowcaseUnresolveCommentType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Restored showcase",
                    "parameter": "showcase_untrashed",
                    "type": {
                        "datatype": "ShowcaseUntrashedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Restored showcase (old version) (deprecated, replaced by 'Restored showcase')",
                    "parameter": "showcase_untrashed_deprecated",
                    "type": {
                        "datatype": "ShowcaseUntrashedDeprecatedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(showcase) Viewed showcase",
                    "parameter": "showcase_view",
                    "type": {
                        "datatype": "ShowcaseViewType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sso) Added X.509 certificate for SSO",
                    "parameter": "sso_add_cert",
                    "type": {
                        "datatype": "SsoAddCertType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sso) Added sign-in URL for SSO",
                    "parameter": "sso_add_login_url",
                    "type": {
                        "datatype": "SsoAddLoginUrlType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sso) Added sign-out URL for SSO",
                    "parameter": "sso_add_logout_url",
                    "type": {
                        "datatype": "SsoAddLogoutUrlType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sso) Changed X.509 certificate for SSO",
                    "parameter": "sso_change_cert",
                    "type": {
                        "datatype": "SsoChangeCertType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sso) Changed sign-in URL for SSO",
                    "parameter": "sso_change_login_url",
                    "type": {
                        "datatype": "SsoChangeLoginUrlType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sso) Changed sign-out URL for SSO",
                    "parameter": "sso_change_logout_url",
                    "type": {
                        "datatype": "SsoChangeLogoutUrlType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sso) Changed SAML identity mode for SSO",
                    "parameter": "sso_change_saml_identity_mode",
                    "type": {
                        "datatype": "SsoChangeSamlIdentityModeType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sso) Removed X.509 certificate for SSO",
                    "parameter": "sso_remove_cert",
                    "type": {
                        "datatype": "SsoRemoveCertType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sso) Removed sign-in URL for SSO",
                    "parameter": "sso_remove_login_url",
                    "type": {
                        "datatype": "SsoRemoveLoginUrlType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(sso) Removed sign-out URL for SSO",
                    "parameter": "sso_remove_logout_url",
                    "type": {
                        "datatype": "SsoRemoveLogoutUrlType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_folders) Changed archival status of team folder",
                    "parameter": "team_folder_change_status",
                    "type": {
                        "datatype": "TeamFolderChangeStatusType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_folders) Created team folder in active status",
                    "parameter": "team_folder_create",
                    "type": {
                        "datatype": "TeamFolderCreateType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_folders) Downgraded team folder to regular shared folder",
                    "parameter": "team_folder_downgrade",
                    "type": {
                        "datatype": "TeamFolderDowngradeType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_folders) Permanently deleted archived team folder",
                    "parameter": "team_folder_permanently_delete",
                    "type": {
                        "datatype": "TeamFolderPermanentlyDeleteType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_folders) Renamed active/archived team folder",
                    "parameter": "team_folder_rename",
                    "type": {
                        "datatype": "TeamFolderRenameType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_folders) Changed sync default",
                    "parameter": "team_selective_sync_settings_changed",
                    "type": {
                        "datatype": "TeamSelectiveSyncSettingsChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed account capture setting on team domain",
                    "parameter": "account_capture_change_policy",
                    "type": {
                        "datatype": "AccountCaptureChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Disabled downloads (deprecated, no longer logged)",
                    "parameter": "allow_download_disabled",
                    "type": {
                        "datatype": "AllowDownloadDisabledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled downloads (deprecated, no longer logged)",
                    "parameter": "allow_download_enabled",
                    "type": {
                        "datatype": "AllowDownloadEnabledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed camera uploads setting for team",
                    "parameter": "camera_uploads_policy_changed",
                    "type": {
                        "datatype": "CameraUploadsPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed content management setting",
                    "parameter": "content_administration_policy_changed",
                    "type": {
                        "datatype": "ContentAdministrationPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Set restrictions on data center locations where team data resides",
                    "parameter": "data_placement_restriction_change_policy",
                    "type": {
                        "datatype": "DataPlacementRestrictionChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Completed restrictions on data center locations where team data resides",
                    "parameter": "data_placement_restriction_satisfy_policy",
                    "type": {
                        "datatype": "DataPlacementRestrictionSatisfyPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Added members to device approvals exception list",
                    "parameter": "device_approvals_add_exception",
                    "type": {
                        "datatype": "DeviceApprovalsAddExceptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Set/removed limit on number of computers member can link to team Dropbox account",
                    "parameter": "device_approvals_change_desktop_policy",
                    "type": {
                        "datatype": "DeviceApprovalsChangeDesktopPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Set/removed limit on number of mobile devices member can link to team Dropbox account",
                    "parameter": "device_approvals_change_mobile_policy",
                    "type": {
                        "datatype": "DeviceApprovalsChangeMobilePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed device approvals setting when member is over limit",
                    "parameter": "device_approvals_change_overage_action",
                    "type": {
                        "datatype": "DeviceApprovalsChangeOverageActionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed device approvals setting when member unlinks approved device",
                    "parameter": "device_approvals_change_unlink_action",
                    "type": {
                        "datatype": "DeviceApprovalsChangeUnlinkActionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Removed members from device approvals exception list",
                    "parameter": "device_approvals_remove_exception",
                    "type": {
                        "datatype": "DeviceApprovalsRemoveExceptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Added members to directory restrictions list",
                    "parameter": "directory_restrictions_add_members",
                    "type": {
                        "datatype": "DirectoryRestrictionsAddMembersType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Removed members from directory restrictions list",
                    "parameter": "directory_restrictions_remove_members",
                    "type": {
                        "datatype": "DirectoryRestrictionsRemoveMembersType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Added members to EMM exception list",
                    "parameter": "emm_add_exception",
                    "type": {
                        "datatype": "EmmAddExceptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled enterprise mobility management for members",
                    "parameter": "emm_change_policy",
                    "type": {
                        "datatype": "EmmChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Removed members from EMM exception list",
                    "parameter": "emm_remove_exception",
                    "type": {
                        "datatype": "EmmRemoveExceptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Accepted/opted out of extended version history",
                    "parameter": "extended_version_history_change_policy",
                    "type": {
                        "datatype": "ExtendedVersionHistoryChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled commenting on team files",
                    "parameter": "file_comments_change_policy",
                    "type": {
                        "datatype": "FileCommentsChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed file locking policy for team",
                    "parameter": "file_locking_policy_changed",
                    "type": {
                        "datatype": "FileLockingPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled file requests",
                    "parameter": "file_requests_change_policy",
                    "type": {
                        "datatype": "FileRequestsChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled file request emails for everyone (deprecated, no longer logged)",
                    "parameter": "file_requests_emails_enabled",
                    "type": {
                        "datatype": "FileRequestsEmailsEnabledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled file request emails for team (deprecated, no longer logged)",
                    "parameter": "file_requests_emails_restricted_to_team_only",
                    "type": {
                        "datatype": "FileRequestsEmailsRestrictedToTeamOnlyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed file transfers policy for team",
                    "parameter": "file_transfers_policy_changed",
                    "type": {
                        "datatype": "FileTransfersPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled Google single sign-on for team",
                    "parameter": "google_sso_change_policy",
                    "type": {
                        "datatype": "GoogleSsoChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed who can create groups",
                    "parameter": "group_user_management_change_policy",
                    "type": {
                        "datatype": "GroupUserManagementChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed integration policy for team",
                    "parameter": "integration_policy_changed",
                    "type": {
                        "datatype": "IntegrationPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed whether users can find team when not invited",
                    "parameter": "member_requests_change_policy",
                    "type": {
                        "datatype": "MemberRequestsChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed member send invite policy for team",
                    "parameter": "member_send_invite_policy_changed",
                    "type": {
                        "datatype": "MemberSendInvitePolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Added members to member space limit exception list",
                    "parameter": "member_space_limits_add_exception",
                    "type": {
                        "datatype": "MemberSpaceLimitsAddExceptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed member space limit type for team",
                    "parameter": "member_space_limits_change_caps_type_policy",
                    "type": {
                        "datatype": "MemberSpaceLimitsChangeCapsTypePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed team default member space limit",
                    "parameter": "member_space_limits_change_policy",
                    "type": {
                        "datatype": "MemberSpaceLimitsChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Removed members from member space limit exception list",
                    "parameter": "member_space_limits_remove_exception",
                    "type": {
                        "datatype": "MemberSpaceLimitsRemoveExceptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled option for team members to suggest people to add to team",
                    "parameter": "member_suggestions_change_policy",
                    "type": {
                        "datatype": "MemberSuggestionsChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled Microsoft Office add-in",
                    "parameter": "microsoft_office_addin_change_policy",
                    "type": {
                        "datatype": "MicrosoftOfficeAddinChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled network control",
                    "parameter": "network_control_change_policy",
                    "type": {
                        "datatype": "NetworkControlChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed whether Dropbox Paper, when enabled, is deployed to all members or to specific members",
                    "parameter": "paper_change_deployment_policy",
                    "type": {
                        "datatype": "PaperChangeDeploymentPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed whether non-members can view Paper docs with link (deprecated, no longer logged)",
                    "parameter": "paper_change_member_link_policy",
                    "type": {
                        "datatype": "PaperChangeMemberLinkPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed whether members can share Paper docs outside team, and if docs are accessible only by team members or anyone by default",
                    "parameter": "paper_change_member_policy",
                    "type": {
                        "datatype": "PaperChangeMemberPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled Dropbox Paper for team",
                    "parameter": "paper_change_policy",
                    "type": {
                        "datatype": "PaperChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed Paper Default Folder Policy setting for team",
                    "parameter": "paper_default_folder_policy_changed",
                    "type": {
                        "datatype": "PaperDefaultFolderPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled Paper Desktop for team",
                    "parameter": "paper_desktop_policy_changed",
                    "type": {
                        "datatype": "PaperDesktopPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Added users to Paper-enabled users list",
                    "parameter": "paper_enabled_users_group_addition",
                    "type": {
                        "datatype": "PaperEnabledUsersGroupAdditionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Removed users from Paper-enabled users list",
                    "parameter": "paper_enabled_users_group_removal",
                    "type": {
                        "datatype": "PaperEnabledUsersGroupRemovalType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed team password strength requirements",
                    "parameter": "password_strength_requirements_change_policy",
                    "type": {
                        "datatype": "PasswordStrengthRequirementsChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled ability of team members to permanently delete content",
                    "parameter": "permanent_delete_change_policy",
                    "type": {
                        "datatype": "PermanentDeleteChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled reseller support",
                    "parameter": "reseller_support_change_policy",
                    "type": {
                        "datatype": "ResellerSupportChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed Rewind policy for team",
                    "parameter": "rewind_policy_changed",
                    "type": {
                        "datatype": "RewindPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed send for signature policy for team",
                    "parameter": "send_for_signature_policy_changed",
                    "type": {
                        "datatype": "SendForSignaturePolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed whether team members can join shared folders owned outside team",
                    "parameter": "sharing_change_folder_join_policy",
                    "type": {
                        "datatype": "SharingChangeFolderJoinPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed whether members can share links outside team, and if links are accessible only by team members or anyone by default",
                    "parameter": "sharing_change_link_policy",
                    "type": {
                        "datatype": "SharingChangeLinkPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed whether members can share files/folders outside team",
                    "parameter": "sharing_change_member_policy",
                    "type": {
                        "datatype": "SharingChangeMemberPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled downloading files from Dropbox Showcase for team",
                    "parameter": "showcase_change_download_policy",
                    "type": {
                        "datatype": "ShowcaseChangeDownloadPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled Dropbox Showcase for team",
                    "parameter": "showcase_change_enabled_policy",
                    "type": {
                        "datatype": "ShowcaseChangeEnabledPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled sharing Dropbox Showcase externally for team",
                    "parameter": "showcase_change_external_sharing_policy",
                    "type": {
                        "datatype": "ShowcaseChangeExternalSharingPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed automatic Smart Sync setting for team",
                    "parameter": "smarter_smart_sync_policy_changed",
                    "type": {
                        "datatype": "SmarterSmartSyncPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed default Smart Sync setting for team members",
                    "parameter": "smart_sync_change_policy",
                    "type": {
                        "datatype": "SmartSyncChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Opted team into Smart Sync",
                    "parameter": "smart_sync_not_opt_out",
                    "type": {
                        "datatype": "SmartSyncNotOptOutType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Opted team out of Smart Sync",
                    "parameter": "smart_sync_opt_out",
                    "type": {
                        "datatype": "SmartSyncOptOutType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed single sign-on setting for team",
                    "parameter": "sso_change_policy",
                    "type": {
                        "datatype": "SsoChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed App Integrations setting for team",
                    "parameter": "team_extensions_policy_changed",
                    "type": {
                        "datatype": "TeamExtensionsPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled Team Selective Sync for team",
                    "parameter": "team_selective_sync_policy_changed",
                    "type": {
                        "datatype": "TeamSelectiveSyncPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Edited the approved list for sharing externally",
                    "parameter": "team_sharing_whitelist_subjects_changed",
                    "type": {
                        "datatype": "TeamSharingWhitelistSubjectsChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Added members to two factor authentication exception list",
                    "parameter": "tfa_add_exception",
                    "type": {
                        "datatype": "TfaAddExceptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed two-step verification setting for team",
                    "parameter": "tfa_change_policy",
                    "type": {
                        "datatype": "TfaChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Removed members from two factor authentication exception list",
                    "parameter": "tfa_remove_exception",
                    "type": {
                        "datatype": "TfaRemoveExceptionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Enabled/disabled option for members to link personal Dropbox account and team account to same computer",
                    "parameter": "two_account_change_policy",
                    "type": {
                        "datatype": "TwoAccountChangePolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed team policy for viewer info",
                    "parameter": "viewer_info_policy_changed",
                    "type": {
                        "datatype": "ViewerInfoPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed watermarking policy for team",
                    "parameter": "watermarking_policy_changed",
                    "type": {
                        "datatype": "WatermarkingPolicyChangedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed limit on active sessions per member",
                    "parameter": "web_sessions_change_active_session_limit",
                    "type": {
                        "datatype": "WebSessionsChangeActiveSessionLimitType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed how long members can stay signed in to Dropbox.com",
                    "parameter": "web_sessions_change_fixed_length_policy",
                    "type": {
                        "datatype": "WebSessionsChangeFixedLengthPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_policies) Changed how long team members can be idle while signed in to Dropbox.com",
                    "parameter": "web_sessions_change_idle_length_policy",
                    "type": {
                        "datatype": "WebSessionsChangeIdleLengthPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_profile) Merged another team into this team",
                    "parameter": "team_merge_from",
                    "type": {
                        "datatype": "TeamMergeFromType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_profile) Merged this team into another team",
                    "parameter": "team_merge_to",
                    "type": {
                        "datatype": "TeamMergeToType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_profile) Added team logo to display on shared link headers",
                    "parameter": "team_profile_add_logo",
                    "type": {
                        "datatype": "TeamProfileAddLogoType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_profile) Changed default language for team",
                    "parameter": "team_profile_change_default_language",
                    "type": {
                        "datatype": "TeamProfileChangeDefaultLanguageType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_profile) Changed team logo displayed on shared link headers",
                    "parameter": "team_profile_change_logo",
                    "type": {
                        "datatype": "TeamProfileChangeLogoType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_profile) Changed team name",
                    "parameter": "team_profile_change_name",
                    "type": {
                        "datatype": "TeamProfileChangeNameType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(team_profile) Removed team logo displayed on shared link headers",
                    "parameter": "team_profile_remove_logo",
                    "type": {
                        "datatype": "TeamProfileRemoveLogoType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(tfa) Added backup phone for two-step verification",
                    "parameter": "tfa_add_backup_phone",
                    "type": {
                        "datatype": "TfaAddBackupPhoneType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(tfa) Added security key for two-step verification",
                    "parameter": "tfa_add_security_key",
                    "type": {
                        "datatype": "TfaAddSecurityKeyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(tfa) Changed backup phone for two-step verification",
                    "parameter": "tfa_change_backup_phone",
                    "type": {
                        "datatype": "TfaChangeBackupPhoneType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(tfa) Enabled/disabled/changed two-step verification setting",
                    "parameter": "tfa_change_status",
                    "type": {
                        "datatype": "TfaChangeStatusType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(tfa) Removed backup phone for two-step verification",
                    "parameter": "tfa_remove_backup_phone",
                    "type": {
                        "datatype": "TfaRemoveBackupPhoneType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(tfa) Removed security key for two-step verification",
                    "parameter": "tfa_remove_security_key",
                    "type": {
                        "datatype": "TfaRemoveSecurityKeyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(tfa) Reset two-step verification for team member",
                    "parameter": "tfa_reset",
                    "type": {
                        "datatype": "TfaResetType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Changed enterprise admin role",
                    "parameter": "changed_enterprise_admin_role",
                    "type": {
                        "datatype": "ChangedEnterpriseAdminRoleType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Changed enterprise-connected team status",
                    "parameter": "changed_enterprise_connected_team_status",
                    "type": {
                        "datatype": "ChangedEnterpriseConnectedTeamStatusType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Ended enterprise admin session",
                    "parameter": "ended_enterprise_admin_session",
                    "type": {
                        "datatype": "EndedEnterpriseAdminSessionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Ended enterprise admin session (deprecated, replaced by 'Ended enterprise admin session')",
                    "parameter": "ended_enterprise_admin_session_deprecated",
                    "type": {
                        "datatype": "EndedEnterpriseAdminSessionDeprecatedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Changed who can update a setting",
                    "parameter": "enterprise_settings_locking",
                    "type": {
                        "datatype": "EnterpriseSettingsLockingType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Changed guest team admin status",
                    "parameter": "guest_admin_change_status",
                    "type": {
                        "datatype": "GuestAdminChangeStatusType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Started enterprise admin session",
                    "parameter": "started_enterprise_admin_session",
                    "type": {
                        "datatype": "StartedEnterpriseAdminSessionType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Accepted a team merge request",
                    "parameter": "team_merge_request_accepted",
                    "type": {
                        "datatype": "TeamMergeRequestAcceptedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Accepted a team merge request (deprecated, replaced by 'Accepted a team merge request')",
                    "parameter": "team_merge_request_accepted_shown_to_primary_team",
                    "type": {
                        "datatype": "TeamMergeRequestAcceptedShownToPrimaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Accepted a team merge request (deprecated, replaced by 'Accepted a team merge request')",
                    "parameter": "team_merge_request_accepted_shown_to_secondary_team",
                    "type": {
                        "datatype": "TeamMergeRequestAcceptedShownToSecondaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Automatically canceled team merge request",
                    "parameter": "team_merge_request_auto_canceled",
                    "type": {
                        "datatype": "TeamMergeRequestAutoCanceledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Canceled a team merge request",
                    "parameter": "team_merge_request_canceled",
                    "type": {
                        "datatype": "TeamMergeRequestCanceledType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Canceled a team merge request (deprecated, replaced by 'Canceled a team merge request')",
                    "parameter": "team_merge_request_canceled_shown_to_primary_team",
                    "type": {
                        "datatype": "TeamMergeRequestCanceledShownToPrimaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Canceled a team merge request (deprecated, replaced by 'Canceled a team merge request')",
                    "parameter": "team_merge_request_canceled_shown_to_secondary_team",
                    "type": {
                        "datatype": "TeamMergeRequestCanceledShownToSecondaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Team merge request expired",
                    "parameter": "team_merge_request_expired",
                    "type": {
                        "datatype": "TeamMergeRequestExpiredType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Team merge request expired (deprecated, replaced by 'Team merge request expired')",
                    "parameter": "team_merge_request_expired_shown_to_primary_team",
                    "type": {
                        "datatype": "TeamMergeRequestExpiredShownToPrimaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Team merge request expired (deprecated, replaced by 'Team merge request expired')",
                    "parameter": "team_merge_request_expired_shown_to_secondary_team",
                    "type": {
                        "datatype": "TeamMergeRequestExpiredShownToSecondaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Rejected a team merge request (deprecated, no longer logged)",
                    "parameter": "team_merge_request_rejected_shown_to_primary_team",
                    "type": {
                        "datatype": "TeamMergeRequestRejectedShownToPrimaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Rejected a team merge request (deprecated, no longer logged)",
                    "parameter": "team_merge_request_rejected_shown_to_secondary_team",
                    "type": {
                        "datatype": "TeamMergeRequestRejectedShownToSecondaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Sent a team merge request reminder",
                    "parameter": "team_merge_request_reminder",
                    "type": {
                        "datatype": "TeamMergeRequestReminderType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Sent a team merge request reminder (deprecated, replaced by 'Sent a team merge request reminder')",
                    "parameter": "team_merge_request_reminder_shown_to_primary_team",
                    "type": {
                        "datatype": "TeamMergeRequestReminderShownToPrimaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Sent a team merge request reminder (deprecated, replaced by 'Sent a team merge request reminder')",
                    "parameter": "team_merge_request_reminder_shown_to_secondary_team",
                    "type": {
                        "datatype": "TeamMergeRequestReminderShownToSecondaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Canceled the team merge",
                    "parameter": "team_merge_request_revoked",
                    "type": {
                        "datatype": "TeamMergeRequestRevokedType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Requested to merge their Dropbox team into yours",
                    "parameter": "team_merge_request_sent_shown_to_primary_team",
                    "type": {
                        "datatype": "TeamMergeRequestSentShownToPrimaryTeamType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "(trusted_teams) Requested to merge your team into another Dropbox team",
                    "parameter": "team_merge_request_sent_shown_to_secondary_team",
                    "type": {
                        "datatype": "TeamMergeRequestSentShownToSecondaryTeamType",
                        "namespace": "team_log"
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
        "ExportMembersReportDetails": {
            "description": "Created member data report.",
            "fields": [],
            "stone_type": "struct"
        },
        "ExportMembersReportFailDetails": {
            "description": "Failed to create members data report.",
            "fields": [
                {
                    "description": "Failure reason.",
                    "parameter": "failure_reason",
                    "type": {
                        "datatype": "TeamReportFailureReason",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExportMembersReportFailType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExportMembersReportType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExtendedVersionHistoryChangePolicyDetails": {
            "description": "Accepted/opted out of extended version history.",
            "fields": [
                {
                    "description": "New extended version history policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "ExtendedVersionHistoryPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous extended version history policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "ExtendedVersionHistoryPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExtendedVersionHistoryChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExtendedVersionHistoryPolicy": {
            "fields": [
                {
                    "parameter": "explicitly_limited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "explicitly_unlimited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "implicitly_limited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "implicitly_unlimited",
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
        "ExternalSharingCreateReportDetails": {
            "description": "Report created: Data shared outside the team.",
            "fields": [],
            "stone_type": "struct"
        },
        "ExternalSharingCreateReportType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExternalSharingReportFailedDetails": {
            "description": "Couldn't create report: Data shared outside the team.",
            "fields": [
                {
                    "description": "Failure reason.",
                    "parameter": "failure_reason",
                    "type": {
                        "datatype": "TeamReportFailureReason",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExternalSharingReportFailedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExternalUserLogInfo": {
            "description": "A user without a Dropbox account.",
            "fields": [
                {
                    "description": "An external user identifier.",
                    "parameter": "user_identifier",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Identifier type.",
                    "parameter": "identifier_type",
                    "type": {
                        "datatype": "IdentifierType",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FailureDetailsLogInfo": {
            "description": "Provides details about a failure",
            "fields": [
                {
                    "description": "A user friendly explanation of the error. Might be missing due to historical data gap.",
                    "parameter": "user_friendly_message",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "A technical explanation of the error. This is relevant for some errors.",
                    "parameter": "technical_error_message",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FedAdminRole": {
            "fields": [
                {
                    "parameter": "not_enterprise_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enterprise_admin",
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
        "FedExtraDetails": {
            "description": "More details about the organization or team.",
            "fields": [
                {
                    "description": "More details about the team.",
                    "parameter": "team",
                    "type": {
                        "datatype": "TeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "More details about the organization.",
                    "parameter": "organization",
                    "type": {
                        "datatype": "OrganizationDetails",
                        "namespace": "team_log"
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
        "FedHandshakeAction": {
            "fields": [
                {
                    "parameter": "invited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "accepted_invite",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "rejected_invite",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "canceled_invite",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "removed_team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "invite_expired",
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
        "FederationStatusChangeAdditionalInfo": {
            "description": "Additional information about the organization or connected team",
            "fields": [
                {
                    "description": "The name of the team.",
                    "parameter": "connected_team_name",
                    "type": {
                        "datatype": "ConnectedTeamName",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The email to which the request was sent.",
                    "parameter": "non_trusted_team_details",
                    "type": {
                        "datatype": "NonTrustedTeamDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The name of the organization.",
                    "parameter": "organization_name",
                    "type": {
                        "datatype": "OrganizationName",
                        "namespace": "team_log"
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
        "FileAddCommentDetails": {
            "description": "Added file comment.",
            "fields": [
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileAddCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileAddDetails": {
            "description": "Added files and/or folders.",
            "fields": [],
            "stone_type": "struct"
        },
        "FileAddType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileChangeCommentSubscriptionDetails": {
            "description": "Subscribed to or unsubscribed from comment notifications for file.",
            "fields": [
                {
                    "description": "New file comment subscription.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "FileCommentNotificationPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous file comment subscription. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "FileCommentNotificationPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileChangeCommentSubscriptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileCommentNotificationPolicy": {
            "description": "Enable or disable file comments notifications",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "FileCommentsChangePolicyDetails": {
            "description": "Enabled/disabled commenting on team files.",
            "fields": [
                {
                    "description": "New commenting on team files policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "FileCommentsPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous commenting on team files policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "FileCommentsPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileCommentsChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileCommentsPolicy": {
            "description": "File comments policy",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "FileCopyDetails": {
            "description": "Copied files and/or folders.",
            "fields": [
                {
                    "description": "Relocate action details.",
                    "parameter": "relocate_action_details",
                    "type": {
                        "list": {
                            "datatype": "RelocateAssetReferencesLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileCopyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileDeleteCommentDetails": {
            "description": "Deleted file comment.",
            "fields": [
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileDeleteCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileDeleteDetails": {
            "description": "Deleted files and/or folders.",
            "fields": [],
            "stone_type": "struct"
        },
        "FileDeleteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileDownloadDetails": {
            "description": "Downloaded files and/or folders.",
            "fields": [],
            "stone_type": "struct"
        },
        "FileDownloadType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileEditCommentDetails": {
            "description": "Edited file comment.",
            "fields": [
                {
                    "description": "Previous comment text.",
                    "parameter": "previous_comment_text",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileEditCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileEditDetails": {
            "description": "Edited files.",
            "fields": [],
            "stone_type": "struct"
        },
        "FileEditType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileGetCopyReferenceDetails": {
            "description": "Created copy reference to file/folder.",
            "fields": [],
            "stone_type": "struct"
        },
        "FileGetCopyReferenceType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileLikeCommentDetails": {
            "description": "Liked file comment.",
            "fields": [
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileLikeCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileLockingLockStatusChangedDetails": {
            "description": "Locked/unlocked editing for a file.",
            "fields": [
                {
                    "description": "Previous lock status of the file.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "LockStatus",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New lock status of the file.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "LockStatus",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileLockingLockStatusChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileLockingPolicyChangedDetails": {
            "description": "Changed file locking policy for team.",
            "fields": [
                {
                    "description": "New file locking policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "FileLockingPolicyState",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "Previous file locking policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "FileLockingPolicyState",
                        "namespace": "team_policies"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileLockingPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileLogInfo": {
            "description": "File's logged information.",
            "fields": [
                {
                    "description": "Path relative to event context.",
                    "parameter": "path",
                    "type": {
                        "datatype": "PathLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Display name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Unique ID. Might be missing due to historical data gap.",
                    "parameter": "file_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "File or folder size in bytes.",
                    "parameter": "file_size",
                    "type": {
                        "optional": {
                            "primitive": "UInt64"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileMoveDetails": {
            "description": "Moved files and/or folders.",
            "fields": [
                {
                    "description": "Relocate action details.",
                    "parameter": "relocate_action_details",
                    "type": {
                        "list": {
                            "datatype": "RelocateAssetReferencesLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileMoveType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FilePermanentlyDeleteDetails": {
            "description": "Permanently deleted files and/or folders.",
            "fields": [],
            "stone_type": "struct"
        },
        "FilePermanentlyDeleteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FilePreviewDetails": {
            "description": "Previewed files and/or folders.",
            "fields": [],
            "stone_type": "struct"
        },
        "FilePreviewType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRenameDetails": {
            "description": "Renamed files and/or folders.",
            "fields": [
                {
                    "description": "Relocate action details.",
                    "parameter": "relocate_action_details",
                    "type": {
                        "list": {
                            "datatype": "RelocateAssetReferencesLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRenameType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestChangeDetails": {
            "description": "Changed file request.",
            "fields": [
                {
                    "description": "New file request details.",
                    "parameter": "new_details",
                    "type": {
                        "datatype": "FileRequestDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "File request id. Might be missing due to historical data gap.",
                    "parameter": "file_request_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Previous file request details. Might be missing due to historical data gap.",
                    "parameter": "previous_details",
                    "type": {
                        "optional": {
                            "datatype": "FileRequestDetails",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestChangeType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestCloseDetails": {
            "description": "Closed file request.",
            "fields": [
                {
                    "description": "File request id. Might be missing due to historical data gap.",
                    "parameter": "file_request_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Previous file request details. Might be missing due to historical data gap.",
                    "parameter": "previous_details",
                    "type": {
                        "optional": {
                            "datatype": "FileRequestDetails",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestCloseType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestCreateDetails": {
            "description": "Created file request.",
            "fields": [
                {
                    "description": "File request id. Might be missing due to historical data gap.",
                    "parameter": "file_request_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "File request details. Might be missing due to historical data gap.",
                    "parameter": "request_details",
                    "type": {
                        "optional": {
                            "datatype": "FileRequestDetails",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestCreateType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestDeadline": {
            "description": "File request deadline",
            "fields": [
                {
                    "description": "The deadline for this file request. Might be missing due to historical data gap.",
                    "parameter": "deadline",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "If set, allow uploads after the deadline has passed. Might be missing due to historical data gap.",
                    "parameter": "allow_late_uploads",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestDeleteDetails": {
            "description": "Delete file request.",
            "fields": [
                {
                    "description": "File request id. Might be missing due to historical data gap.",
                    "parameter": "file_request_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Previous file request details. Might be missing due to historical data gap.",
                    "parameter": "previous_details",
                    "type": {
                        "optional": {
                            "datatype": "FileRequestDetails",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestDeleteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestDetails": {
            "description": "File request details",
            "fields": [
                {
                    "description": "Asset position in the Assets list.",
                    "parameter": "asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "File request deadline. Might be missing due to historical data gap.",
                    "parameter": "deadline",
                    "type": {
                        "optional": {
                            "datatype": "FileRequestDeadline",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestReceiveFileDetails": {
            "description": "Received files for file request.",
            "fields": [
                {
                    "description": "Submitted file names.",
                    "parameter": "submitted_file_names",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "File request id. Might be missing due to historical data gap.",
                    "parameter": "file_request_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "File request details. Might be missing due to historical data gap.",
                    "parameter": "file_request_details",
                    "type": {
                        "optional": {
                            "datatype": "FileRequestDetails",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "The name as provided by the submitter. Might be missing due to historical data gap.",
                    "parameter": "submitter_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The email as provided by the submitter. Might be missing due to historical data gap.",
                    "parameter": "submitter_email",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestReceiveFileType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestsChangePolicyDetails": {
            "description": "Enabled/disabled file requests.",
            "fields": [
                {
                    "description": "New file requests policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "FileRequestsPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous file requests policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "FileRequestsPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestsChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestsEmailsEnabledDetails": {
            "description": "Enabled file request emails for everyone.",
            "fields": [],
            "stone_type": "struct"
        },
        "FileRequestsEmailsEnabledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestsEmailsRestrictedToTeamOnlyDetails": {
            "description": "Enabled file request emails for team.",
            "fields": [],
            "stone_type": "struct"
        },
        "FileRequestsEmailsRestrictedToTeamOnlyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRequestsPolicy": {
            "description": "File requests policy",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "FileResolveCommentDetails": {
            "description": "Resolved file comment.",
            "fields": [
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileResolveCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRestoreDetails": {
            "description": "Restored deleted files and/or folders.",
            "fields": [],
            "stone_type": "struct"
        },
        "FileRestoreType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRevertDetails": {
            "description": "Reverted files to previous version.",
            "fields": [],
            "stone_type": "struct"
        },
        "FileRevertType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileRollbackChangesDetails": {
            "description": "Rolled back file actions.",
            "fields": [],
            "stone_type": "struct"
        },
        "FileRollbackChangesType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileSaveCopyReferenceDetails": {
            "description": "Saved file/folder using copy reference.",
            "fields": [
                {
                    "description": "Relocate action details.",
                    "parameter": "relocate_action_details",
                    "type": {
                        "list": {
                            "datatype": "RelocateAssetReferencesLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileSaveCopyReferenceType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersFileAddDetails": {
            "description": "Transfer files added.",
            "fields": [
                {
                    "description": "Transfer id.",
                    "parameter": "file_transfer_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersFileAddType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersPolicy": {
            "description": "File transfers policy",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "FileTransfersPolicyChangedDetails": {
            "description": "Changed file transfers policy for team.",
            "fields": [
                {
                    "description": "New file transfers policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "FileTransfersPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous file transfers policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "FileTransfersPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersTransferDeleteDetails": {
            "description": "Deleted transfer.",
            "fields": [
                {
                    "description": "Transfer id.",
                    "parameter": "file_transfer_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersTransferDeleteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersTransferDownloadDetails": {
            "description": "Transfer downloaded.",
            "fields": [
                {
                    "description": "Transfer id.",
                    "parameter": "file_transfer_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersTransferDownloadType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersTransferSendDetails": {
            "description": "Sent transfer.",
            "fields": [
                {
                    "description": "Transfer id.",
                    "parameter": "file_transfer_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersTransferSendType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersTransferViewDetails": {
            "description": "Viewed transfer.",
            "fields": [
                {
                    "description": "Transfer id.",
                    "parameter": "file_transfer_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileTransfersTransferViewType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileUnlikeCommentDetails": {
            "description": "Unliked file comment.",
            "fields": [
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileUnlikeCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileUnresolveCommentDetails": {
            "description": "Unresolved file comment.",
            "fields": [
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileUnresolveCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FolderLogInfo": {
            "description": "Folder's logged information.",
            "fields": [
                {
                    "description": "Path relative to event context.",
                    "parameter": "path",
                    "type": {
                        "datatype": "PathLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Display name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Unique ID. Might be missing due to historical data gap.",
                    "parameter": "file_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "File or folder size in bytes.",
                    "parameter": "file_size",
                    "type": {
                        "optional": {
                            "primitive": "UInt64"
                        }
                    }
                },
                {
                    "description": "Number of files within the folder.",
                    "parameter": "file_count",
                    "type": {
                        "optional": {
                            "primitive": "UInt64"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FolderOverviewDescriptionChangedDetails": {
            "description": "Updated folder overview.",
            "fields": [
                {
                    "description": "Folder Overview location position in the Assets list.",
                    "parameter": "folder_overview_location_asset",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FolderOverviewDescriptionChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FolderOverviewItemPinnedDetails": {
            "description": "Pinned item to folder overview.",
            "fields": [
                {
                    "description": "Folder Overview location position in the Assets list.",
                    "parameter": "folder_overview_location_asset",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Pinned items positions in the Assets list.",
                    "parameter": "pinned_items_asset_indices",
                    "type": {
                        "list": {
                            "primitive": "UInt64"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FolderOverviewItemPinnedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FolderOverviewItemUnpinnedDetails": {
            "description": "Unpinned item from folder overview.",
            "fields": [
                {
                    "description": "Folder Overview location position in the Assets list.",
                    "parameter": "folder_overview_location_asset",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Pinned items positions in the Assets list.",
                    "parameter": "pinned_items_asset_indices",
                    "type": {
                        "list": {
                            "primitive": "UInt64"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FolderOverviewItemUnpinnedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GeoLocationLogInfo": {
            "description": "Geographic location details.",
            "fields": [
                {
                    "description": "IP address.",
                    "parameter": "ip_address",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "City name.",
                    "parameter": "city",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Region name.",
                    "parameter": "region",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Country code.",
                    "parameter": "country",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GetTeamEventsContinueArg": {
            "fields": [
                {
                    "description": "Indicates from what point to get the next set of events.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GetTeamEventsContinueError": {
            "description": "Errors that can be raised when calling :route:`get_events/continue`.",
            "fields": [
                {
                    "description": "Bad cursor.",
                    "parameter": "bad_cursor",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Cursors are intended to be used quickly. Individual cursor values are normally valid for days, but in rare cases may be reset sooner.\nCursor reset errors should be handled by fetching a new cursor from :route:`get_events`.\nThe associated value is the approximate timestamp of the most recent event returned by the cursor. This should be used as a resumption point when calling :route:`get_events` to obtain a new cursor.",
                    "parameter": "reset",
                    "type": {
                        "primitive": "Timestamp"
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
        "GetTeamEventsResult": {
            "fields": [
                {
                    "description": "List of events. Note that events are not guaranteed to be sorted by their timestamp value.",
                    "parameter": "events",
                    "type": {
                        "list": {
                            "datatype": "TeamEvent",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Pass the cursor into :route:`get_events/continue` to obtain additional events.\nThe value of :field:`cursor` may change for each response from :route:`get_events/continue`, regardless of the value of :field:`has_more`; older cursor strings may expire.\nThus, callers should ensure that they update their cursor based on the latest value of :field:`cursor` after each call, and poll regularly if they wish to poll for new events.\nCallers should handle reset exceptions for expired cursors.",
                    "parameter": "cursor",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Is true if there may be additional events that have not been returned yet. An additional call to :route:`get_events/continue` can retrieve them. Note that :field:`has_more` may be :val:`true`, even if :field:`events` is empty.",
                    "parameter": "has_more",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GoogleSsoChangePolicyDetails": {
            "description": "Enabled/disabled Google single sign-on for team.",
            "fields": [
                {
                    "description": "New Google single sign-on policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "GoogleSsoPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Google single sign-on policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "GoogleSsoPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GoogleSsoChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GoogleSsoPolicy": {
            "description": "Google SSO policy",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "GroupAddExternalIdDetails": {
            "description": "Added external ID for group.",
            "fields": [
                {
                    "description": "Current external id.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupAddExternalIdType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupAddMemberDetails": {
            "description": "Added team members to group.",
            "fields": [
                {
                    "description": "Is group owner.",
                    "parameter": "is_group_owner",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupAddMemberType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupChangeExternalIdDetails": {
            "description": "Changed external ID for group.",
            "fields": [
                {
                    "description": "Current external id.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Old external id.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupChangeExternalIdType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupChangeManagementTypeDetails": {
            "description": "Changed group management type.",
            "fields": [
                {
                    "description": "New group management type.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "GroupManagementType",
                        "namespace": "team_common"
                    }
                },
                {
                    "description": "Previous group management type. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "GroupManagementType",
                            "namespace": "team_common"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupChangeManagementTypeType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupChangeMemberRoleDetails": {
            "description": "Changed manager permissions of group member.",
            "fields": [
                {
                    "description": "Is group owner.",
                    "parameter": "is_group_owner",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupChangeMemberRoleType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupCreateDetails": {
            "description": "Created group.",
            "fields": [
                {
                    "description": "Is company managed group. Might be missing due to historical data gap.",
                    "parameter": "is_company_managed",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "Group join policy.",
                    "parameter": "join_policy",
                    "type": {
                        "optional": {
                            "datatype": "GroupJoinPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupCreateType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupDeleteDetails": {
            "description": "Deleted group.",
            "fields": [
                {
                    "description": "Is company managed group. Might be missing due to historical data gap.",
                    "parameter": "is_company_managed",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupDeleteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupDescriptionUpdatedDetails": {
            "description": "Updated group.",
            "fields": [],
            "stone_type": "struct"
        },
        "GroupDescriptionUpdatedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupJoinPolicy": {
            "fields": [
                {
                    "parameter": "open",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "request_to_join",
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
        "GroupJoinPolicyUpdatedDetails": {
            "description": "Updated group join policy.",
            "fields": [
                {
                    "description": "Is company managed group. Might be missing due to historical data gap.",
                    "parameter": "is_company_managed",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "Group join policy.",
                    "parameter": "join_policy",
                    "type": {
                        "optional": {
                            "datatype": "GroupJoinPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupJoinPolicyUpdatedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupLogInfo": {
            "description": "Group's logged information.",
            "fields": [
                {
                    "description": "The name of this group.",
                    "parameter": "display_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The unique id of this group. Might be missing due to historical data gap.",
                    "parameter": "group_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "External group ID. Might be missing due to historical data gap.",
                    "parameter": "external_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupMovedDetails": {
            "description": "Moved group.",
            "fields": [],
            "stone_type": "struct"
        },
        "GroupMovedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupRemoveExternalIdDetails": {
            "description": "Removed external ID for group.",
            "fields": [
                {
                    "description": "Old external id.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupRemoveExternalIdType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupRemoveMemberDetails": {
            "description": "Removed team members from group.",
            "fields": [],
            "stone_type": "struct"
        },
        "GroupRemoveMemberType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupRenameDetails": {
            "description": "Renamed group.",
            "fields": [
                {
                    "description": "Previous display name.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New display name.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupRenameType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupUserManagementChangePolicyDetails": {
            "description": "Changed who can create groups.",
            "fields": [
                {
                    "description": "New group users management policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "GroupCreation",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "Previous group users management policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "GroupCreation",
                            "namespace": "team_policies"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GroupUserManagementChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GuestAdminChangeStatusDetails": {
            "description": "Changed guest team admin status.",
            "fields": [
                {
                    "description": "True for guest, false for host.",
                    "parameter": "is_guest",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Previous request state.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "TrustedTeamsRequestState",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New request state.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "TrustedTeamsRequestState",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Action details.",
                    "parameter": "action_details",
                    "type": {
                        "datatype": "TrustedTeamsRequestAction",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The name of the guest team.",
                    "parameter": "guest_team_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The name of the host team.",
                    "parameter": "host_team_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GuestAdminChangeStatusType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GuestAdminSignedInViaTrustedTeamsDetails": {
            "description": "Started trusted team admin session.",
            "fields": [
                {
                    "description": "Host team name.",
                    "parameter": "team_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Trusted team name.",
                    "parameter": "trusted_team_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GuestAdminSignedInViaTrustedTeamsType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GuestAdminSignedOutViaTrustedTeamsDetails": {
            "description": "Ended trusted team admin session.",
            "fields": [
                {
                    "description": "Host team name.",
                    "parameter": "team_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Trusted team name.",
                    "parameter": "trusted_team_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GuestAdminSignedOutViaTrustedTeamsType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "IdentifierType": {
            "fields": [
                {
                    "parameter": "email",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "facebook_profile_name",
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
        "IntegrationConnectedDetails": {
            "description": "Connected integration for member.",
            "fields": [
                {
                    "description": "Name of the third-party integration.",
                    "parameter": "integration_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "IntegrationConnectedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "IntegrationDisconnectedDetails": {
            "description": "Disconnected integration for member.",
            "fields": [
                {
                    "description": "Name of the third-party integration.",
                    "parameter": "integration_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "IntegrationDisconnectedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "IntegrationPolicy": {
            "description": "Policy for controlling whether a service integration is enabled for the team.",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "IntegrationPolicyChangedDetails": {
            "description": "Changed integration policy for team.",
            "fields": [
                {
                    "description": "Name of the third-party integration.",
                    "parameter": "integration_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New integration policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "IntegrationPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous integration policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "IntegrationPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "IntegrationPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "InviteMethod": {
            "fields": [
                {
                    "parameter": "invite_link",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "auto_approve",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "moved_from_another_team",
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
        "JoinTeamDetails": {
            "description": "Additional information relevant when a new member joins the team.",
            "fields": [
                {
                    "description": "Linked applications. (Deprecated) Please use has_linked_apps boolean field instead.",
                    "parameter": "linked_apps",
                    "type": {
                        "list": {
                            "datatype": "UserLinkedAppLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Linked devices. (Deprecated) Please use has_linked_devices boolean field instead.",
                    "parameter": "linked_devices",
                    "type": {
                        "list": {
                            "datatype": "LinkedDeviceLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Linked shared folders. (Deprecated) Please use has_linked_shared_folders boolean field instead.",
                    "parameter": "linked_shared_folders",
                    "type": {
                        "list": {
                            "datatype": "FolderLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "(Deprecated) True if the linked_apps list was truncated to the maximum supported length (50).",
                    "parameter": "was_linked_apps_truncated",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "(Deprecated) True if the linked_devices list was truncated to the maximum supported length (50).",
                    "parameter": "was_linked_devices_truncated",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "(Deprecated) True if the linked_shared_folders list was truncated to the maximum supported length (50).",
                    "parameter": "was_linked_shared_folders_truncated",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "True if the user had linked apps at event time.",
                    "parameter": "has_linked_apps",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "True if the user had linked apps at event time.",
                    "parameter": "has_linked_devices",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "True if the user had linked shared folders at event time.",
                    "parameter": "has_linked_shared_folders",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegacyDeviceSessionLogInfo": {
            "description": "Information on sessions, in legacy format",
            "fields": [
                {
                    "description": "The IP address of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "ip_address",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The time this session was created. Might be missing due to historical data gap.",
                    "parameter": "created",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The time of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "updated",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "Session unique id. Might be missing due to historical data gap.",
                    "parameter": "session_info",
                    "type": {
                        "optional": {
                            "datatype": "SessionLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "The device name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Is device managed by emm. Might be missing due to historical data gap.",
                    "parameter": "is_emm_managed",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "Information on the hosting platform. Might be missing due to historical data gap.",
                    "parameter": "platform",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The mac address of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "mac_address",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The hosting OS version. Might be missing due to historical data gap.",
                    "parameter": "os_version",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Information on the hosting device type. Might be missing due to historical data gap.",
                    "parameter": "device_type",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The Dropbox client version. Might be missing due to historical data gap.",
                    "parameter": "client_version",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Alternative unique device session id, instead of session id field. Might be missing due to historical data gap.",
                    "parameter": "legacy_uniq_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "LegalHoldsActivateAHoldDetails": {
            "description": "Activated a hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold start date.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "Hold end date.",
                    "parameter": "end_date",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsActivateAHoldType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsAddMembersDetails": {
            "description": "Added members to a hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsAddMembersType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsChangeHoldDetailsDetails": {
            "description": "Edited details for a hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous details.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New details.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsChangeHoldDetailsType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsChangeHoldNameDetails": {
            "description": "Renamed a hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous Name.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New Name.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsChangeHoldNameType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsExportAHoldDetails": {
            "description": "Exported hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Export name.",
                    "parameter": "export_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsExportAHoldType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsExportCancelledDetails": {
            "description": "Canceled export for a hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Export name.",
                    "parameter": "export_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsExportCancelledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsExportDownloadedDetails": {
            "description": "Downloaded export for a hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Export name.",
                    "parameter": "export_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Part.",
                    "parameter": "part",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Filename.",
                    "parameter": "file_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsExportDownloadedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsExportRemovedDetails": {
            "description": "Removed export for a hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Export name.",
                    "parameter": "export_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsExportRemovedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsReleaseAHoldDetails": {
            "description": "Released a hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsReleaseAHoldType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsRemoveMembersDetails": {
            "description": "Removed members from a hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsRemoveMembersType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsReportAHoldDetails": {
            "description": "Created a summary report for a hold.",
            "fields": [
                {
                    "description": "Hold ID.",
                    "parameter": "legal_hold_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Hold name.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsReportAHoldType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LinkedDeviceLogInfo": {
            "description": "The device sessions that user is linked to.",
            "fields": [
                {
                    "description": "mobile device session's details.",
                    "parameter": "mobile_device_session",
                    "type": {
                        "datatype": "MobileDeviceSessionLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "desktop device session's details.",
                    "parameter": "desktop_device_session",
                    "type": {
                        "datatype": "DesktopDeviceSessionLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "web device session's details.",
                    "parameter": "web_device_session",
                    "type": {
                        "datatype": "WebDeviceSessionLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "legacy device session's details.",
                    "parameter": "legacy_device_session",
                    "type": {
                        "datatype": "LegacyDeviceSessionLogInfo",
                        "namespace": "team_log"
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
        "LockStatus": {
            "description": "File lock status",
            "fields": [
                {
                    "parameter": "locked",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "unlocked",
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
        "LoginFailDetails": {
            "description": "Failed to sign in.",
            "fields": [
                {
                    "description": "Login method.",
                    "parameter": "login_method",
                    "type": {
                        "datatype": "LoginMethod",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Error details.",
                    "parameter": "error_details",
                    "type": {
                        "datatype": "FailureDetailsLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Tells if the login device is EMM managed. Might be missing due to historical data gap.",
                    "parameter": "is_emm_managed",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LoginFailType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LoginMethod": {
            "fields": [
                {
                    "parameter": "password",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "two_factor_authentication",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "saml",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "google_oauth",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "web_session",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "qr_code",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "apple_oauth",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "first_party_token_exchange",
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
        "LoginSuccessDetails": {
            "description": "Signed in.",
            "fields": [
                {
                    "description": "Login method.",
                    "parameter": "login_method",
                    "type": {
                        "datatype": "LoginMethod",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Tells if the login device is EMM managed. Might be missing due to historical data gap.",
                    "parameter": "is_emm_managed",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LoginSuccessType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LogoutDetails": {
            "description": "Signed out.",
            "fields": [],
            "stone_type": "struct"
        },
        "LogoutType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberAddExternalIdDetails": {
            "description": "Added an external ID for team member.",
            "fields": [
                {
                    "description": "Current external id.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberAddExternalIdType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberAddNameDetails": {
            "description": "Added team member name.",
            "fields": [
                {
                    "description": "New user's name.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "UserNameLogInfo",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberAddNameType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeAdminRoleDetails": {
            "description": "Changed team member admin role.",
            "fields": [
                {
                    "description": "New admin role. This field is relevant when the admin role is changed or whenthe user role changes from no admin rights to with admin rights.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "datatype": "AdminRole",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Previous admin role. This field is relevant when the admin role is changed or when the admin role is removed.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "AdminRole",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeAdminRoleType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeEmailDetails": {
            "description": "Changed team member email.",
            "fields": [
                {
                    "description": "New email.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous email. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeEmailType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeExternalIdDetails": {
            "description": "Changed the external ID for team member.",
            "fields": [
                {
                    "description": "Current external id.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Old external id.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeExternalIdType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeMembershipTypeDetails": {
            "description": "Changed membership type (limited/full) of member.",
            "fields": [
                {
                    "description": "Previous membership type.",
                    "parameter": "prev_value",
                    "type": {
                        "datatype": "TeamMembershipType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New membership type.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "TeamMembershipType",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeMembershipTypeType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeNameDetails": {
            "description": "Changed team member name.",
            "fields": [
                {
                    "description": "New user's name.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "UserNameLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous user's name. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "UserNameLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeNameType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeStatusDetails": {
            "description": "Changed member status (invited, joined, suspended, etc.).",
            "fields": [
                {
                    "description": "New member status.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "MemberStatus",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous member status. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "MemberStatus",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Additional information indicating the action taken that caused status change.",
                    "parameter": "action",
                    "type": {
                        "optional": {
                            "datatype": "ActionDetails",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "The user's new team name. This field is relevant when the user is transferred off the team.",
                    "parameter": "new_team",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The user's previous team name. This field is relevant when the user is transferred onto the team.",
                    "parameter": "previous_team",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberChangeStatusType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberDeleteManualContactsDetails": {
            "description": "Cleared manually added contacts.",
            "fields": [],
            "stone_type": "struct"
        },
        "MemberDeleteManualContactsType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberDeleteProfilePhotoDetails": {
            "description": "Deleted team member profile photo.",
            "fields": [],
            "stone_type": "struct"
        },
        "MemberDeleteProfilePhotoType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberPermanentlyDeleteAccountContentsDetails": {
            "description": "Permanently deleted contents of deleted team member account.",
            "fields": [],
            "stone_type": "struct"
        },
        "MemberPermanentlyDeleteAccountContentsType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberRemoveActionType": {
            "fields": [
                {
                    "parameter": "delete",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "offboard",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "leave",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "offboard_and_retain_team_folders",
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
        "MemberRemoveExternalIdDetails": {
            "description": "Removed the external ID for team member.",
            "fields": [
                {
                    "description": "Old external id.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberRemoveExternalIdType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberRequestsChangePolicyDetails": {
            "description": "Changed whether users can find team when not invited.",
            "fields": [
                {
                    "description": "New member change requests policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "MemberRequestsPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous member change requests policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "MemberRequestsPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberRequestsChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberRequestsPolicy": {
            "fields": [
                {
                    "parameter": "auto_accept",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "require_approval",
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
        "MemberSendInvitePolicy": {
            "description": "Policy for controlling whether team members can send team invites",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "specific_members",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "everyone",
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
        "MemberSendInvitePolicyChangedDetails": {
            "description": "Changed member send invite policy for team.",
            "fields": [
                {
                    "description": "New team member send invite policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "MemberSendInvitePolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous team member send invite policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "MemberSendInvitePolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSendInvitePolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSetProfilePhotoDetails": {
            "description": "Set team member profile photo.",
            "fields": [],
            "stone_type": "struct"
        },
        "MemberSetProfilePhotoType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsAddCustomQuotaDetails": {
            "description": "Set custom member space limit.",
            "fields": [
                {
                    "description": "New custom quota value in bytes.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsAddCustomQuotaType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsAddExceptionDetails": {
            "description": "Added members to member space limit exception list.",
            "fields": [],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsAddExceptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsChangeCapsTypePolicyDetails": {
            "description": "Changed member space limit type for team.",
            "fields": [
                {
                    "description": "Previous space limit type.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "SpaceCapsType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New space limit type.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SpaceCapsType",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsChangeCapsTypePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsChangeCustomQuotaDetails": {
            "description": "Changed custom member space limit.",
            "fields": [
                {
                    "description": "Previous custom quota value in bytes.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "New custom quota value in bytes.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsChangeCustomQuotaType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsChangePolicyDetails": {
            "description": "Changed team default member space limit.",
            "fields": [
                {
                    "description": "Previous team default limit value in bytes. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "primitive": "UInt64"
                        }
                    }
                },
                {
                    "description": "New team default limit value in bytes. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "primitive": "UInt64"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsChangeStatusDetails": {
            "description": "Changed space limit status.",
            "fields": [
                {
                    "description": "Previous storage quota status.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "SpaceLimitsStatus",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New storage quota status.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SpaceLimitsStatus",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsChangeStatusType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsRemoveCustomQuotaDetails": {
            "description": "Removed custom member space limit.",
            "fields": [],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsRemoveCustomQuotaType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsRemoveExceptionDetails": {
            "description": "Removed members from member space limit exception list.",
            "fields": [],
            "stone_type": "struct"
        },
        "MemberSpaceLimitsRemoveExceptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberStatus": {
            "fields": [
                {
                    "parameter": "not_joined",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "invited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "active",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "suspended",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "removed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "moved_to_another_team",
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
        "MemberSuggestDetails": {
            "description": "Suggested person to add to team.",
            "fields": [
                {
                    "description": "suggested users emails.",
                    "parameter": "suggested_members",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSuggestType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSuggestionsChangePolicyDetails": {
            "description": "Enabled/disabled option for team members to suggest people to add to team.",
            "fields": [
                {
                    "description": "New team member suggestions policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "MemberSuggestionsPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous team member suggestions policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "MemberSuggestionsPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSuggestionsChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MemberSuggestionsPolicy": {
            "description": "Member suggestions policy",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "MemberTransferAccountContentsDetails": {
            "description": "Transferred contents of deleted member account to another member.",
            "fields": [],
            "stone_type": "struct"
        },
        "MemberTransferAccountContentsType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MicrosoftOfficeAddinChangePolicyDetails": {
            "description": "Enabled/disabled Microsoft Office add-in.",
            "fields": [
                {
                    "description": "New Microsoft Office addin policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "MicrosoftOfficeAddinPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Microsoft Office addin policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "MicrosoftOfficeAddinPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MicrosoftOfficeAddinChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MicrosoftOfficeAddinPolicy": {
            "description": "Microsoft Office addin policy",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "MissingDetails": {
            "description": "An indication that an error occurred while retrieving the event. Some attributes of the event may be omitted as a result.",
            "fields": [
                {
                    "description": "All the data that could be retrieved and converted from the source event.",
                    "parameter": "source_event_fields",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MobileDeviceSessionLogInfo": {
            "description": "Information about linked Dropbox mobile client sessions",
            "fields": [
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
                    "description": "The IP address of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "ip_address",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The time this session was created. Might be missing due to historical data gap.",
                    "parameter": "created",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The time of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "updated",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "Mobile session unique id. Might be missing due to historical data gap.",
                    "parameter": "session_info",
                    "type": {
                        "optional": {
                            "datatype": "MobileSessionLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "The Dropbox client version.",
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
            "stone_type": "struct",
            "todo": true
        },
        "MobileSessionLogInfo": {
            "description": "Mobile session.",
            "fields": [
                {
                    "description": "Session ID. Might be missing due to historical data gap.",
                    "parameter": "session_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "NamespaceRelativePathLogInfo": {
            "description": "Namespace relative path details.",
            "fields": [
                {
                    "description": "Namespace ID. Might be missing due to historical data gap.",
                    "parameter": "ns_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "A path relative to the specified namespace ID. Might be missing due to historical data gap.",
                    "parameter": "relative_path",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "True if the namespace is shared. Might be missing due to historical data gap.",
                    "parameter": "is_shared_namespace",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NetworkControlChangePolicyDetails": {
            "description": "Enabled/disabled network control.",
            "fields": [
                {
                    "description": "New network control policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "NetworkControlPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous network control policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "NetworkControlPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NetworkControlChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NetworkControlPolicy": {
            "description": "Network control policy",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "NoExpirationLinkGenCreateReportDetails": {
            "description": "Report created: Links created with no expiration.",
            "fields": [
                {
                    "description": "Report start date.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "Report end date.",
                    "parameter": "end_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoExpirationLinkGenCreateReportType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoExpirationLinkGenReportFailedDetails": {
            "description": "Couldn't create report: Links created with no expiration.",
            "fields": [
                {
                    "description": "Failure reason.",
                    "parameter": "failure_reason",
                    "type": {
                        "datatype": "TeamReportFailureReason",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoExpirationLinkGenReportFailedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoPasswordLinkGenCreateReportDetails": {
            "description": "Report created: Links created without passwords.",
            "fields": [
                {
                    "description": "Report start date.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "Report end date.",
                    "parameter": "end_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoPasswordLinkGenCreateReportType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoPasswordLinkGenReportFailedDetails": {
            "description": "Couldn't create report: Links created without passwords.",
            "fields": [
                {
                    "description": "Failure reason.",
                    "parameter": "failure_reason",
                    "type": {
                        "datatype": "TeamReportFailureReason",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoPasswordLinkGenReportFailedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoPasswordLinkViewCreateReportDetails": {
            "description": "Report created: Views of links without passwords.",
            "fields": [
                {
                    "description": "Report start date.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "Report end date.",
                    "parameter": "end_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoPasswordLinkViewCreateReportType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoPasswordLinkViewReportFailedDetails": {
            "description": "Couldn't create report: Views of links without passwords.",
            "fields": [
                {
                    "description": "Failure reason.",
                    "parameter": "failure_reason",
                    "type": {
                        "datatype": "TeamReportFailureReason",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoPasswordLinkViewReportFailedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NonTeamMemberLogInfo": {
            "description": "Non team member's logged information.",
            "fields": [
                {
                    "description": "User unique ID. Might be missing due to historical data gap.",
                    "parameter": "account_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "User display name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "User email address. Might be missing due to historical data gap.",
                    "parameter": "email",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "NonTrustedTeamDetails": {
            "description": "The email to which the request was sent",
            "fields": [
                {
                    "description": "The email to which the request was sent.",
                    "parameter": "team",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoteAclInviteOnlyDetails": {
            "description": "Changed Paper doc to invite-only.",
            "fields": [],
            "stone_type": "struct"
        },
        "NoteAclInviteOnlyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoteAclLinkDetails": {
            "description": "Changed Paper doc to link-accessible.",
            "fields": [],
            "stone_type": "struct"
        },
        "NoteAclLinkType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoteAclTeamLinkDetails": {
            "description": "Changed Paper doc to link-accessible for team.",
            "fields": [],
            "stone_type": "struct"
        },
        "NoteAclTeamLinkType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoteShareReceiveDetails": {
            "description": "Shared received Paper doc.",
            "fields": [],
            "stone_type": "struct"
        },
        "NoteShareReceiveType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "NoteSharedDetails": {
            "description": "Shared Paper doc.",
            "fields": [],
            "stone_type": "struct"
        },
        "NoteSharedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "OpenNoteSharedDetails": {
            "description": "Opened shared Paper doc.",
            "fields": [],
            "stone_type": "struct"
        },
        "OpenNoteSharedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "OrganizationDetails": {
            "description": "More details about the organization.",
            "fields": [
                {
                    "description": "The name of the organization.",
                    "parameter": "organization",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "OrganizationName": {
            "description": "The name of the organization",
            "fields": [
                {
                    "description": "The name of the organization.",
                    "parameter": "organization",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "OriginLogInfo": {
            "description": "The origin from which the actor performed the action.",
            "fields": [
                {
                    "description": "The method that was used to perform the action.",
                    "parameter": "access_method",
                    "type": {
                        "datatype": "AccessMethodLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Geographic location details.",
                    "parameter": "geo_location",
                    "type": {
                        "optional": {
                            "datatype": "GeoLocationLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "OutdatedLinkViewCreateReportDetails": {
            "description": "Report created: Views of old links.",
            "fields": [
                {
                    "description": "Report start date.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "Report end date.",
                    "parameter": "end_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "OutdatedLinkViewCreateReportType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "OutdatedLinkViewReportFailedDetails": {
            "description": "Couldn't create report: Views of old links.",
            "fields": [
                {
                    "description": "Failure reason.",
                    "parameter": "failure_reason",
                    "type": {
                        "datatype": "TeamReportFailureReason",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "OutdatedLinkViewReportFailedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperAccessType": {
            "fields": [
                {
                    "parameter": "viewer",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "commenter",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "editor",
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
        "PaperAdminExportStartDetails": {
            "description": "Exported all team Paper docs.",
            "fields": [],
            "stone_type": "struct"
        },
        "PaperAdminExportStartType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperChangeDeploymentPolicyDetails": {
            "description": "Changed whether Dropbox Paper, when enabled, is deployed to all members or to specific members.",
            "fields": [
                {
                    "description": "New Dropbox Paper deployment policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "PaperDeploymentPolicy",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "Previous Dropbox Paper deployment policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "PaperDeploymentPolicy",
                            "namespace": "team_policies"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperChangeDeploymentPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperChangeMemberLinkPolicyDetails": {
            "description": "Changed whether non-members can view Paper docs with link.",
            "fields": [
                {
                    "description": "New paper external link accessibility policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "PaperMemberPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperChangeMemberLinkPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperChangeMemberPolicyDetails": {
            "description": "Changed whether members can share Paper docs outside team, and if docs are accessible only by team members or anyone by default.",
            "fields": [
                {
                    "description": "New paper external accessibility policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "PaperMemberPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous paper external accessibility policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "PaperMemberPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperChangeMemberPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperChangePolicyDetails": {
            "description": "Enabled/disabled Dropbox Paper for team.",
            "fields": [
                {
                    "description": "New Dropbox Paper policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "PaperEnabledPolicy",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "Previous Dropbox Paper policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "PaperEnabledPolicy",
                            "namespace": "team_policies"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentAddMemberDetails": {
            "description": "Added users and/or groups to Paper doc/folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentAddMemberType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentAddToFolderDetails": {
            "description": "Added Paper doc/folder to folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Parent asset position in the Assets list.",
                    "parameter": "parent_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentAddToFolderType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentArchiveDetails": {
            "description": "Archived Paper doc/folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentArchiveType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentCreateDetails": {
            "description": "Created Paper doc/folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentCreateType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentPermanentlyDeleteDetails": {
            "description": "Permanently deleted Paper doc/folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentPermanentlyDeleteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentRemoveFromFolderDetails": {
            "description": "Removed Paper doc/folder from folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "optional": {
                            "primitive": "UInt64"
                        }
                    }
                },
                {
                    "description": "Parent asset position in the Assets list.",
                    "parameter": "parent_asset_index",
                    "type": {
                        "optional": {
                            "primitive": "UInt64"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentRemoveFromFolderType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentRemoveMemberDetails": {
            "description": "Removed users and/or groups from Paper doc/folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentRemoveMemberType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentRenameDetails": {
            "description": "Renamed Paper doc/folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentRenameType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentRestoreDetails": {
            "description": "Restored archived Paper doc/folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperContentRestoreType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDefaultFolderPolicy": {
            "description": "Policy to set default access for newly created Paper folders.",
            "fields": [
                {
                    "parameter": "everyone_in_team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "invite_only",
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
        "PaperDefaultFolderPolicyChangedDetails": {
            "description": "Changed Paper Default Folder Policy setting for team.",
            "fields": [
                {
                    "description": "New Paper Default Folder Policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "PaperDefaultFolderPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Paper Default Folder Policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "PaperDefaultFolderPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDefaultFolderPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDesktopPolicy": {
            "description": "Policy for controlling if team members can use Paper Desktop",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "PaperDesktopPolicyChangedDetails": {
            "description": "Enabled/disabled Paper Desktop for team.",
            "fields": [
                {
                    "description": "New Paper Desktop policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "PaperDesktopPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Paper Desktop policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "PaperDesktopPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDesktopPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocAddCommentDetails": {
            "description": "Added Paper doc comment.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocAddCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocChangeMemberRoleDetails": {
            "description": "Changed member permissions for Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Paper doc access type.",
                    "parameter": "access_type",
                    "type": {
                        "datatype": "PaperAccessType",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocChangeMemberRoleType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocChangeSharingPolicyDetails": {
            "description": "Changed sharing setting for Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Sharing policy with external users. Might be missing due to historical data gap.",
                    "parameter": "public_sharing_policy",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Sharing policy with team. Might be missing due to historical data gap.",
                    "parameter": "team_sharing_policy",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocChangeSharingPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocChangeSubscriptionDetails": {
            "description": "Followed/unfollowed Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New doc subscription level.",
                    "parameter": "new_subscription_level",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous doc subscription level. Might be missing due to historical data gap.",
                    "parameter": "previous_subscription_level",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocChangeSubscriptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocDeleteCommentDetails": {
            "description": "Deleted Paper doc comment.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocDeleteCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocDeletedDetails": {
            "description": "Archived Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocDeletedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocDownloadDetails": {
            "description": "Downloaded Paper doc in specific format.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Export file format.",
                    "parameter": "export_file_format",
                    "type": {
                        "datatype": "PaperDownloadFormat",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocDownloadType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocEditCommentDetails": {
            "description": "Edited Paper doc comment.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocEditCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocEditDetails": {
            "description": "Edited Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocEditType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocFollowedDetails": {
            "description": "Followed Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocFollowedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocMentionDetails": {
            "description": "Mentioned user in Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocMentionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocOwnershipChangedDetails": {
            "description": "Transferred ownership of Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New owner.",
                    "parameter": "new_owner_user_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous owner.",
                    "parameter": "old_owner_user_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocOwnershipChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocRequestAccessDetails": {
            "description": "Requested access to Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocRequestAccessType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocResolveCommentDetails": {
            "description": "Resolved Paper doc comment.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocResolveCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocRevertDetails": {
            "description": "Restored Paper doc to previous version.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocRevertType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocSlackShareDetails": {
            "description": "Shared Paper doc via Slack.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocSlackShareType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocTeamInviteDetails": {
            "description": "Shared Paper doc with users and/or groups.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocTeamInviteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocTrashedDetails": {
            "description": "Deleted Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocTrashedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocUnresolveCommentDetails": {
            "description": "Unresolved Paper doc comment.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text. Might be missing due to historical data gap.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocUnresolveCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocUntrashedDetails": {
            "description": "Restored Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocUntrashedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocViewDetails": {
            "description": "Viewed Paper doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocViewType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDocumentLogInfo": {
            "description": "Paper document's logged information.",
            "fields": [
                {
                    "description": "Papers document Id.",
                    "parameter": "doc_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Paper document title.",
                    "parameter": "doc_title",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperDownloadFormat": {
            "fields": [
                {
                    "parameter": "docx",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "html",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "markdown",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "pdf",
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
        "PaperEnabledUsersGroupAdditionDetails": {
            "description": "Added users to Paper-enabled users list.",
            "fields": [],
            "stone_type": "struct"
        },
        "PaperEnabledUsersGroupAdditionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperEnabledUsersGroupRemovalDetails": {
            "description": "Removed users from Paper-enabled users list.",
            "fields": [],
            "stone_type": "struct"
        },
        "PaperEnabledUsersGroupRemovalType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperExternalViewAllowDetails": {
            "description": "Changed Paper external sharing setting to anyone.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperExternalViewAllowType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperExternalViewDefaultTeamDetails": {
            "description": "Changed Paper external sharing setting to default team.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperExternalViewDefaultTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperExternalViewForbidDetails": {
            "description": "Changed Paper external sharing setting to team-only.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperExternalViewForbidType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperFolderChangeSubscriptionDetails": {
            "description": "Followed/unfollowed Paper folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New folder subscription level.",
                    "parameter": "new_subscription_level",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous folder subscription level. Might be missing due to historical data gap.",
                    "parameter": "previous_subscription_level",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperFolderChangeSubscriptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperFolderDeletedDetails": {
            "description": "Archived Paper folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperFolderDeletedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperFolderFollowedDetails": {
            "description": "Followed Paper folder.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperFolderFollowedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperFolderLogInfo": {
            "description": "Paper folder's logged information.",
            "fields": [
                {
                    "description": "Papers folder Id.",
                    "parameter": "folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Paper folder name.",
                    "parameter": "folder_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperFolderTeamInviteDetails": {
            "description": "Shared Paper folder with users and/or groups.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperFolderTeamInviteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperMemberPolicy": {
            "description": "Policy for controlling if team members can share Paper documents externally.",
            "fields": [
                {
                    "parameter": "anyone_with_link",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "only_team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "team_and_explicitly_shared",
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
        "PaperPublishedLinkChangePermissionDetails": {
            "description": "Changed permissions for published doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New permission level.",
                    "parameter": "new_permission_level",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous permission level.",
                    "parameter": "previous_permission_level",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperPublishedLinkChangePermissionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperPublishedLinkCreateDetails": {
            "description": "Published doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperPublishedLinkCreateType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperPublishedLinkDisabledDetails": {
            "description": "Unpublished doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperPublishedLinkDisabledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperPublishedLinkViewDetails": {
            "description": "Viewed published doc.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PaperPublishedLinkViewType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ParticipantLogInfo": {
            "description": "A user or group",
            "fields": [
                {
                    "description": "A user with a Dropbox account.",
                    "parameter": "user",
                    "type": {
                        "datatype": "UserLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Group details.",
                    "parameter": "group",
                    "type": {
                        "datatype": "GroupLogInfo",
                        "namespace": "team_log"
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
        "PassPolicy": {
            "fields": [
                {
                    "parameter": "enabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "allow",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "disabled",
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
        "PasswordChangeDetails": {
            "description": "Changed password.",
            "fields": [],
            "stone_type": "struct"
        },
        "PasswordChangeType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PasswordResetAllDetails": {
            "description": "Reset all team member passwords.",
            "fields": [],
            "stone_type": "struct"
        },
        "PasswordResetAllType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PasswordResetDetails": {
            "description": "Reset password.",
            "fields": [],
            "stone_type": "struct"
        },
        "PasswordResetType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PasswordStrengthRequirementsChangePolicyDetails": {
            "description": "Changed team password strength requirements.",
            "fields": [
                {
                    "description": "Old password strength policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "PasswordStrengthPolicy",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "New password strength policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "PasswordStrengthPolicy",
                        "namespace": "team_policies"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PasswordStrengthRequirementsChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PathLogInfo": {
            "description": "Path's details.",
            "fields": [
                {
                    "description": "Path relative to the namespace containing the content.",
                    "parameter": "namespace_relative",
                    "type": {
                        "datatype": "NamespaceRelativePathLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Fully qualified path relative to event's context. Might be missing due to historical data gap.",
                    "parameter": "contextual",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PendingSecondaryEmailAddedDetails": {
            "description": "Added pending secondary email.",
            "fields": [
                {
                    "description": "New pending secondary email.",
                    "parameter": "secondary_email",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PendingSecondaryEmailAddedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PermanentDeleteChangePolicyDetails": {
            "description": "Enabled/disabled ability of team members to permanently delete content.",
            "fields": [
                {
                    "description": "New permanent delete content policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "ContentPermanentDeletePolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous permanent delete content policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "ContentPermanentDeletePolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PermanentDeleteChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PlacementRestriction": {
            "fields": [
                {
                    "parameter": "australia_only",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "europe_only",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "japan_only",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "none",
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
        "PrimaryTeamRequestAcceptedDetails": {
            "description": "Team merge request acceptance details shown to the primary team",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "secondary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PrimaryTeamRequestCanceledDetails": {
            "description": "Team merge request cancellation details shown to the primary team",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "secondary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PrimaryTeamRequestExpiredDetails": {
            "description": "Team merge request expiration details shown to the primary team",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "secondary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PrimaryTeamRequestReminderDetails": {
            "description": "Team merge request reminder details shown to the primary team",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "secondary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the primary team admin the request was sent to.",
                    "parameter": "sent_to",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RelocateAssetReferencesLogInfo": {
            "description": "Provides the indices of the source asset and the destination asset for a relocate action.",
            "fields": [
                {
                    "description": "Source asset position in the Assets list.",
                    "parameter": "src_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Destination asset position in the Assets list.",
                    "parameter": "dest_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ResellerLogInfo": {
            "description": "Reseller information.",
            "fields": [
                {
                    "description": "Reseller name.",
                    "parameter": "reseller_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Reseller email.",
                    "parameter": "reseller_email",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ResellerSupportChangePolicyDetails": {
            "description": "Enabled/disabled reseller support.",
            "fields": [
                {
                    "description": "New Reseller support policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "ResellerSupportPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Reseller support policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "ResellerSupportPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ResellerSupportChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ResellerSupportPolicy": {
            "description": "Policy for controlling if reseller can access the admin console as administrator",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "ResellerSupportSessionEndDetails": {
            "description": "Ended reseller support session.",
            "fields": [],
            "stone_type": "struct"
        },
        "ResellerSupportSessionEndType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ResellerSupportSessionStartDetails": {
            "description": "Started reseller support session.",
            "fields": [],
            "stone_type": "struct"
        },
        "ResellerSupportSessionStartType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RewindFolderDetails": {
            "description": "Rewound a folder.",
            "fields": [
                {
                    "description": "Folder was Rewound to this date.",
                    "parameter": "rewind_folder_target_ts_ms",
                    "type": {
                        "primitive": "Timestamp"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RewindFolderType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RewindPolicy": {
            "description": "Policy for controlling whether team members can rewind",
            "fields": [
                {
                    "parameter": "admins_only",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "everyone",
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
        "RewindPolicyChangedDetails": {
            "description": "Changed Rewind policy for team.",
            "fields": [
                {
                    "description": "New Dropbox Rewind policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "RewindPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Dropbox Rewind policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "RewindPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RewindPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SecondaryEmailDeletedDetails": {
            "description": "Deleted secondary email.",
            "fields": [
                {
                    "description": "Deleted secondary email.",
                    "parameter": "secondary_email",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SecondaryEmailDeletedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SecondaryEmailVerifiedDetails": {
            "description": "Verified secondary email.",
            "fields": [
                {
                    "description": "Verified secondary email.",
                    "parameter": "secondary_email",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SecondaryEmailVerifiedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SecondaryMailsPolicy": {
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "SecondaryMailsPolicyChangedDetails": {
            "description": "Secondary mails policy changed.",
            "fields": [
                {
                    "description": "Previous secondary mails policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "SecondaryMailsPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New secondary mails policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SecondaryMailsPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SecondaryMailsPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SecondaryTeamRequestAcceptedDetails": {
            "description": "Team merge request acceptance details shown to the secondary team",
            "fields": [
                {
                    "description": "The primary team name.",
                    "parameter": "primary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SecondaryTeamRequestCanceledDetails": {
            "description": "Team merge request cancellation details shown to the secondary team",
            "fields": [
                {
                    "description": "The email of the primary team admin that the request was sent to.",
                    "parameter": "sent_to",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SecondaryTeamRequestExpiredDetails": {
            "description": "Team merge request expiration details shown to the secondary team",
            "fields": [
                {
                    "description": "The email of the primary team admin the request was sent to.",
                    "parameter": "sent_to",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SecondaryTeamRequestReminderDetails": {
            "description": "Team merge request reminder details shown to the secondary team",
            "fields": [
                {
                    "description": "The email of the primary team admin the request was sent to.",
                    "parameter": "sent_to",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SendForSignaturePolicy": {
            "description": "Policy for controlling team access to send for signature feature",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "SendForSignaturePolicyChangedDetails": {
            "description": "Changed send for signature policy for team.",
            "fields": [
                {
                    "description": "New send for signature policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SendForSignaturePolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous send for signature policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "SendForSignaturePolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SendForSignaturePolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SessionLogInfo": {
            "description": "Session's logged information.",
            "fields": [
                {
                    "description": "Session ID. Might be missing due to historical data gap.",
                    "parameter": "session_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "SfAddGroupDetails": {
            "description": "Added team to shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Team name.",
                    "parameter": "team_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Sharing permission. Might be missing due to historical data gap.",
                    "parameter": "sharing_permission",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfAddGroupType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfAllowNonMembersToViewSharedLinksDetails": {
            "description": "Allowed non-collaborators to view links to files in shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Shared folder type. Might be missing due to historical data gap.",
                    "parameter": "shared_folder_type",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfAllowNonMembersToViewSharedLinksType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfExternalInviteWarnDetails": {
            "description": "Set team members to see warning before sharing folders outside team.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New sharing permission. Might be missing due to historical data gap.",
                    "parameter": "new_sharing_permission",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Previous sharing permission. Might be missing due to historical data gap.",
                    "parameter": "previous_sharing_permission",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfExternalInviteWarnType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfFbInviteChangeRoleDetails": {
            "description": "Changed Facebook user's role in shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous sharing permission. Might be missing due to historical data gap.",
                    "parameter": "previous_sharing_permission",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "New sharing permission. Might be missing due to historical data gap.",
                    "parameter": "new_sharing_permission",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfFbInviteChangeRoleType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfFbInviteDetails": {
            "description": "Invited Facebook users to shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Sharing permission. Might be missing due to historical data gap.",
                    "parameter": "sharing_permission",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfFbInviteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfFbUninviteDetails": {
            "description": "Uninvited Facebook user from shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfFbUninviteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfInviteGroupDetails": {
            "description": "Invited group to shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfInviteGroupType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamGrantAccessDetails": {
            "description": "Granted access to shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamGrantAccessType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamInviteChangeRoleDetails": {
            "description": "Changed team member's role in shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New sharing permission. Might be missing due to historical data gap.",
                    "parameter": "new_sharing_permission",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Previous sharing permission. Might be missing due to historical data gap.",
                    "parameter": "previous_sharing_permission",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamInviteChangeRoleType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamInviteDetails": {
            "description": "Invited team members to shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Sharing permission. Might be missing due to historical data gap.",
                    "parameter": "sharing_permission",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamInviteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamJoinDetails": {
            "description": "Joined team member's shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamJoinFromOobLinkDetails": {
            "description": "Joined team member's shared folder from link.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Shared link token key.",
                    "parameter": "token_key",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Sharing permission. Might be missing due to historical data gap.",
                    "parameter": "sharing_permission",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamJoinFromOobLinkType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamJoinType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamUninviteDetails": {
            "description": "Unshared folder with team member.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Original shared folder name.",
                    "parameter": "original_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SfTeamUninviteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentAddInviteesDetails": {
            "description": "Invited user to Dropbox and added them to shared file/folder.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "A list of invitees.",
                    "parameter": "invitees",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentAddInviteesType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentAddLinkExpiryDetails": {
            "description": "Added expiration date to link for shared file/folder.",
            "fields": [
                {
                    "description": "New shared content link expiration date. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentAddLinkExpiryType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentAddLinkPasswordDetails": {
            "description": "Added password to link for shared file/folder.",
            "fields": [],
            "stone_type": "struct"
        },
        "SharedContentAddLinkPasswordType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentAddMemberDetails": {
            "description": "Added users and/or groups to shared file/folder.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentAddMemberType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeDownloadsPolicyDetails": {
            "description": "Changed whether members can download shared file/folder.",
            "fields": [
                {
                    "description": "New downloads policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "DownloadPolicyType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous downloads policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "DownloadPolicyType",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeDownloadsPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeInviteeRoleDetails": {
            "description": "Changed access type of invitee to shared file/folder before invite was accepted.",
            "fields": [
                {
                    "description": "New access level.",
                    "parameter": "new_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The invitee whose role was changed.",
                    "parameter": "invitee",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous access level. Might be missing due to historical data gap.",
                    "parameter": "previous_access_level",
                    "type": {
                        "optional": {
                            "datatype": "AccessLevel",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeInviteeRoleType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeLinkAudienceDetails": {
            "description": "Changed link audience of shared file/folder.",
            "fields": [
                {
                    "description": "New link audience value.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "LinkAudience",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Previous link audience value.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "LinkAudience",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeLinkAudienceType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeLinkExpiryDetails": {
            "description": "Changed link expiration of shared file/folder.",
            "fields": [
                {
                    "description": "New shared content link expiration date. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "Previous shared content link expiration date. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeLinkExpiryType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeLinkPasswordDetails": {
            "description": "Changed link password of shared file/folder.",
            "fields": [],
            "stone_type": "struct"
        },
        "SharedContentChangeLinkPasswordType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeMemberRoleDetails": {
            "description": "Changed access type of shared file/folder member.",
            "fields": [
                {
                    "description": "New access level.",
                    "parameter": "new_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Previous access level. Might be missing due to historical data gap.",
                    "parameter": "previous_access_level",
                    "type": {
                        "optional": {
                            "datatype": "AccessLevel",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeMemberRoleType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeViewerInfoPolicyDetails": {
            "description": "Changed whether members can see who viewed shared file/folder.",
            "fields": [
                {
                    "description": "New viewer info policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "ViewerInfoPolicy",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Previous view info policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "ViewerInfoPolicy",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentChangeViewerInfoPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentClaimInvitationDetails": {
            "description": "Acquired membership of shared file/folder by accepting invite.",
            "fields": [
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentClaimInvitationType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentCopyDetails": {
            "description": "Copied shared file/folder to own Dropbox.",
            "fields": [
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The path where the member saved the content.",
                    "parameter": "destination_path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The shared content owner.",
                    "parameter": "shared_content_owner",
                    "type": {
                        "optional": {
                            "datatype": "UserLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentCopyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentDownloadDetails": {
            "description": "Downloaded shared file/folder.",
            "fields": [
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The shared content owner.",
                    "parameter": "shared_content_owner",
                    "type": {
                        "optional": {
                            "datatype": "UserLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentDownloadType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRelinquishMembershipDetails": {
            "description": "Left shared file/folder.",
            "fields": [],
            "stone_type": "struct"
        },
        "SharedContentRelinquishMembershipType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRemoveInviteesDetails": {
            "description": "Removed invitee from shared file/folder before invite was accepted.",
            "fields": [
                {
                    "description": "A list of invitees.",
                    "parameter": "invitees",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRemoveInviteesType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRemoveLinkExpiryDetails": {
            "description": "Removed link expiration date of shared file/folder.",
            "fields": [
                {
                    "description": "Previous shared content link expiration date. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRemoveLinkExpiryType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRemoveLinkPasswordDetails": {
            "description": "Removed link password of shared file/folder.",
            "fields": [],
            "stone_type": "struct"
        },
        "SharedContentRemoveLinkPasswordType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRemoveMemberDetails": {
            "description": "Removed user/group from shared file/folder.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "optional": {
                            "datatype": "AccessLevel",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRemoveMemberType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRequestAccessDetails": {
            "description": "Requested access to shared file/folder.",
            "fields": [
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRequestAccessType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRestoreInviteesDetails": {
            "description": "Restored shared file/folder invitees.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "A list of invitees.",
                    "parameter": "invitees",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRestoreInviteesType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRestoreMemberDetails": {
            "description": "Restored users and/or groups to membership of shared file/folder.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentRestoreMemberType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentUnshareDetails": {
            "description": "Unshared file/folder by clearing membership.",
            "fields": [],
            "stone_type": "struct"
        },
        "SharedContentUnshareType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentViewDetails": {
            "description": "Previewed shared file/folder.",
            "fields": [
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The shared content owner.",
                    "parameter": "shared_content_owner",
                    "type": {
                        "optional": {
                            "datatype": "UserLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedContentViewType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderChangeLinkPolicyDetails": {
            "description": "Changed who can access shared folder via link.",
            "fields": [
                {
                    "description": "New shared folder link policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SharedLinkPolicy",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Previous shared folder link policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "SharedLinkPolicy",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderChangeLinkPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderChangeMembersInheritancePolicyDetails": {
            "description": "Changed whether shared folder inherits members from parent folder.",
            "fields": [
                {
                    "description": "New member inheritance policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SharedFolderMembersInheritancePolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous member inheritance policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "SharedFolderMembersInheritancePolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderChangeMembersInheritancePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderChangeMembersManagementPolicyDetails": {
            "description": "Changed who can add/remove members of shared folder.",
            "fields": [
                {
                    "description": "New members management policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "AclUpdatePolicy",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Previous members management policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "AclUpdatePolicy",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderChangeMembersManagementPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderChangeMembersPolicyDetails": {
            "description": "Changed who can become member of shared folder.",
            "fields": [
                {
                    "description": "New external invite policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "MemberPolicy",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Previous external invite policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "MemberPolicy",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderChangeMembersPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderCreateDetails": {
            "description": "Created shared folder.",
            "fields": [
                {
                    "description": "Target namespace ID. Might be missing due to historical data gap.",
                    "parameter": "target_ns_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderCreateType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderDeclineInvitationDetails": {
            "description": "Declined team member's invite to shared folder.",
            "fields": [],
            "stone_type": "struct"
        },
        "SharedFolderDeclineInvitationType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderMembersInheritancePolicy": {
            "description": "Specifies if a shared folder inherits its members from the parent folder.",
            "fields": [
                {
                    "parameter": "inherit_members",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "dont_inherit_members",
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
        "SharedFolderMountDetails": {
            "description": "Added shared folder to own Dropbox.",
            "fields": [],
            "stone_type": "struct"
        },
        "SharedFolderMountType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderNestDetails": {
            "description": "Changed parent of shared folder.",
            "fields": [
                {
                    "description": "Previous parent namespace ID. Might be missing due to historical data gap.",
                    "parameter": "previous_parent_ns_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "New parent namespace ID. Might be missing due to historical data gap.",
                    "parameter": "new_parent_ns_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Previous namespace path. Might be missing due to historical data gap.",
                    "parameter": "previous_ns_path",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "New namespace path. Might be missing due to historical data gap.",
                    "parameter": "new_ns_path",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderNestType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderTransferOwnershipDetails": {
            "description": "Transferred ownership of shared folder to another member.",
            "fields": [
                {
                    "description": "The email address of the new shared folder owner.",
                    "parameter": "new_owner_email",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The email address of the previous shared folder owner.",
                    "parameter": "previous_owner_email",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderTransferOwnershipType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedFolderUnmountDetails": {
            "description": "Deleted shared folder from Dropbox.",
            "fields": [],
            "stone_type": "struct"
        },
        "SharedFolderUnmountType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkAccessLevel": {
            "description": "Shared link access level.",
            "fields": [
                {
                    "parameter": "none",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "reader",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "writer",
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
        "SharedLinkAddExpiryDetails": {
            "description": "Added shared link expiration date.",
            "fields": [
                {
                    "description": "New shared link expiration date.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "Timestamp"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkAddExpiryType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkChangeExpiryDetails": {
            "description": "Changed shared link expiration date.",
            "fields": [
                {
                    "description": "New shared link expiration date. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "Previous shared link expiration date. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkChangeExpiryType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkChangeVisibilityDetails": {
            "description": "Changed visibility of shared link.",
            "fields": [
                {
                    "description": "New shared link visibility.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SharedLinkVisibility",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous shared link visibility. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "SharedLinkVisibility",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkChangeVisibilityType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkCopyDetails": {
            "description": "Added file/folder to Dropbox from shared link.",
            "fields": [
                {
                    "description": "Shared link owner details. Might be missing due to historical data gap.",
                    "parameter": "shared_link_owner",
                    "type": {
                        "optional": {
                            "datatype": "UserLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkCopyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkCreateDetails": {
            "description": "Created shared link.",
            "fields": [
                {
                    "description": "Defines who can access the shared link. Might be missing due to historical data gap.",
                    "parameter": "shared_link_access_level",
                    "type": {
                        "optional": {
                            "datatype": "SharedLinkAccessLevel",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkCreateType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkDisableDetails": {
            "description": "Removed shared link.",
            "fields": [
                {
                    "description": "Shared link owner details. Might be missing due to historical data gap.",
                    "parameter": "shared_link_owner",
                    "type": {
                        "optional": {
                            "datatype": "UserLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkDisableType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkDownloadDetails": {
            "description": "Downloaded file/folder from shared link.",
            "fields": [
                {
                    "description": "Shared link owner details. Might be missing due to historical data gap.",
                    "parameter": "shared_link_owner",
                    "type": {
                        "optional": {
                            "datatype": "UserLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkDownloadType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkRemoveExpiryDetails": {
            "description": "Removed shared link expiration date.",
            "fields": [
                {
                    "description": "Previous shared link expiration date. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkRemoveExpiryType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsAddExpirationDetails": {
            "description": "Added an expiration date to the shared link.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "New shared content link expiration date. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsAddExpirationType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsAddPasswordDetails": {
            "description": "Added a password to the shared link.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsAddPasswordType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsAllowDownloadDisabledDetails": {
            "description": "Disabled downloads.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsAllowDownloadDisabledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsAllowDownloadEnabledDetails": {
            "description": "Enabled downloads.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsAllowDownloadEnabledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsChangeAudienceDetails": {
            "description": "Changed the audience of the shared link.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "New link audience value.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "LinkAudience",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Previous link audience value.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "LinkAudience",
                            "namespace": "sharing"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsChangeAudienceType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsChangeExpirationDetails": {
            "description": "Changed the expiration date of the shared link.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "New shared content link expiration date. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "Previous shared content link expiration date. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsChangeExpirationType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsChangePasswordDetails": {
            "description": "Changed the password of the shared link.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsChangePasswordType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsRemoveExpirationDetails": {
            "description": "Removed the expiration date from the shared link.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Previous shared link expiration date. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsRemoveExpirationType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsRemovePasswordDetails": {
            "description": "Removed the password from the shared link.",
            "fields": [
                {
                    "description": "Shared content access level.",
                    "parameter": "shared_content_access_level",
                    "type": {
                        "datatype": "AccessLevel",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "Shared content link.",
                    "parameter": "shared_content_link",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkSettingsRemovePasswordType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkShareDetails": {
            "description": "Added members as audience of shared link.",
            "fields": [
                {
                    "description": "Shared link owner details. Might be missing due to historical data gap.",
                    "parameter": "shared_link_owner",
                    "type": {
                        "optional": {
                            "datatype": "UserLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Users without a Dropbox account that were added as shared link audience.",
                    "parameter": "external_users",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "ExternalUserLogInfo",
                                "namespace": "team_log"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkShareType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkViewDetails": {
            "description": "Opened shared link.",
            "fields": [
                {
                    "description": "Shared link owner details. Might be missing due to historical data gap.",
                    "parameter": "shared_link_owner",
                    "type": {
                        "optional": {
                            "datatype": "UserLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkViewType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharedLinkVisibility": {
            "description": "Defines who has access to a shared link.",
            "fields": [
                {
                    "parameter": "no_one",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "password",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "public",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "team_only",
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
        "SharedNoteOpenedDetails": {
            "description": "Opened shared Paper doc.",
            "fields": [],
            "stone_type": "struct"
        },
        "SharedNoteOpenedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharingChangeFolderJoinPolicyDetails": {
            "description": "Changed whether team members can join shared folders owned outside team.",
            "fields": [
                {
                    "description": "New external join policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SharingFolderJoinPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous external join policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "SharingFolderJoinPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharingChangeFolderJoinPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharingChangeLinkPolicyDetails": {
            "description": "Changed whether members can share links outside team, and if links are accessible only by team members or anyone by default.",
            "fields": [
                {
                    "description": "New external link accessibility policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SharingLinkPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous external link accessibility policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "SharingLinkPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharingChangeLinkPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharingChangeMemberPolicyDetails": {
            "description": "Changed whether members can share files/folders outside team.",
            "fields": [
                {
                    "description": "New external invite policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SharingMemberPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous external invite policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "SharingMemberPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharingChangeMemberPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SharingFolderJoinPolicy": {
            "description": "Policy for controlling if team members can join shared folders owned by non team members.",
            "fields": [
                {
                    "parameter": "from_anyone",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "from_team_only",
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
        "SharingLinkPolicy": {
            "description": "Policy for controlling if team members can share links externally",
            "fields": [
                {
                    "parameter": "default_private",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "default_public",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "only_private",
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
        "SharingMemberPolicy": {
            "description": "External sharing policy",
            "fields": [
                {
                    "parameter": "allow",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "forbid",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "forbid_with_exclusions",
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
        "ShmodelGroupShareDetails": {
            "description": "Shared link with group.",
            "fields": [],
            "stone_type": "struct"
        },
        "ShmodelGroupShareType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseAccessGrantedDetails": {
            "description": "Granted access to showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseAccessGrantedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseAddMemberDetails": {
            "description": "Added member to showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseAddMemberType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseArchivedDetails": {
            "description": "Archived showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseArchivedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseChangeDownloadPolicyDetails": {
            "description": "Enabled/disabled downloading files from Dropbox Showcase for team.",
            "fields": [
                {
                    "description": "New Dropbox Showcase download policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "ShowcaseDownloadPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Dropbox Showcase download policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "ShowcaseDownloadPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseChangeDownloadPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseChangeEnabledPolicyDetails": {
            "description": "Enabled/disabled Dropbox Showcase for team.",
            "fields": [
                {
                    "description": "New Dropbox Showcase policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "ShowcaseEnabledPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Dropbox Showcase policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "ShowcaseEnabledPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseChangeEnabledPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseChangeExternalSharingPolicyDetails": {
            "description": "Enabled/disabled sharing Dropbox Showcase externally for team.",
            "fields": [
                {
                    "description": "New Dropbox Showcase external sharing policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "ShowcaseExternalSharingPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Dropbox Showcase external sharing policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "ShowcaseExternalSharingPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseChangeExternalSharingPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseCreatedDetails": {
            "description": "Created showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseCreatedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseDeleteCommentDetails": {
            "description": "Deleted showcase comment.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseDeleteCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseDocumentLogInfo": {
            "description": "Showcase document's logged information.",
            "fields": [
                {
                    "description": "Showcase document Id.",
                    "parameter": "showcase_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Showcase document title.",
                    "parameter": "showcase_title",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseDownloadPolicy": {
            "description": "Policy for controlling if files can be downloaded from Showcases by team members",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "ShowcaseEditCommentDetails": {
            "description": "Edited showcase comment.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseEditCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseEditedDetails": {
            "description": "Edited showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseEditedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseEnabledPolicy": {
            "description": "Policy for controlling whether Showcase is enabled.",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "ShowcaseExternalSharingPolicy": {
            "description": "Policy for controlling if team members can share Showcases externally.",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "ShowcaseFileAddedDetails": {
            "description": "Added file to showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseFileAddedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseFileDownloadDetails": {
            "description": "Downloaded file from showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Showcase download type.",
                    "parameter": "download_type",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseFileDownloadType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseFileRemovedDetails": {
            "description": "Removed file from showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseFileRemovedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseFileViewDetails": {
            "description": "Viewed file in showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseFileViewType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcasePermanentlyDeletedDetails": {
            "description": "Permanently deleted showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcasePermanentlyDeletedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcasePostCommentDetails": {
            "description": "Added showcase comment.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcasePostCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseRemoveMemberDetails": {
            "description": "Removed member from showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseRemoveMemberType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseRenamedDetails": {
            "description": "Renamed showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseRenamedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseRequestAccessDetails": {
            "description": "Requested access to showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseRequestAccessType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseResolveCommentDetails": {
            "description": "Resolved showcase comment.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseResolveCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseRestoredDetails": {
            "description": "Unarchived showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseRestoredType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseTrashedDeprecatedDetails": {
            "description": "Deleted showcase (old version).",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseTrashedDeprecatedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseTrashedDetails": {
            "description": "Deleted showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseTrashedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseUnresolveCommentDetails": {
            "description": "Unresolved showcase comment.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Comment text.",
                    "parameter": "comment_text",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseUnresolveCommentType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseUntrashedDeprecatedDetails": {
            "description": "Restored showcase (old version).",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseUntrashedDeprecatedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseUntrashedDetails": {
            "description": "Restored showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseUntrashedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseViewDetails": {
            "description": "Viewed showcase.",
            "fields": [
                {
                    "description": "Event unique identifier.",
                    "parameter": "event_uuid",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ShowcaseViewType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SignInAsSessionEndDetails": {
            "description": "Ended admin sign-in-as session.",
            "fields": [],
            "stone_type": "struct"
        },
        "SignInAsSessionEndType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SignInAsSessionStartDetails": {
            "description": "Started admin sign-in-as session.",
            "fields": [],
            "stone_type": "struct"
        },
        "SignInAsSessionStartType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SmartSyncChangePolicyDetails": {
            "description": "Changed default Smart Sync setting for team members.",
            "fields": [
                {
                    "description": "New smart sync policy.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "datatype": "SmartSyncPolicy",
                            "namespace": "team_policies"
                        }
                    }
                },
                {
                    "description": "Previous smart sync policy.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "SmartSyncPolicy",
                            "namespace": "team_policies"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SmartSyncChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SmartSyncCreateAdminPrivilegeReportDetails": {
            "description": "Created Smart Sync non-admin devices report.",
            "fields": [],
            "stone_type": "struct"
        },
        "SmartSyncCreateAdminPrivilegeReportType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SmartSyncNotOptOutDetails": {
            "description": "Opted team into Smart Sync.",
            "fields": [
                {
                    "description": "Previous Smart Sync opt out policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "SmartSyncOptOutPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New Smart Sync opt out policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SmartSyncOptOutPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SmartSyncNotOptOutType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SmartSyncOptOutDetails": {
            "description": "Opted team out of Smart Sync.",
            "fields": [
                {
                    "description": "Previous Smart Sync opt out policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "SmartSyncOptOutPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New Smart Sync opt out policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SmartSyncOptOutPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SmartSyncOptOutPolicy": {
            "fields": [
                {
                    "parameter": "default",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "opted_out",
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
        "SmartSyncOptOutType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SmarterSmartSyncPolicyChangedDetails": {
            "description": "Changed automatic Smart Sync setting for team.",
            "fields": [
                {
                    "description": "Previous automatic Smart Sync setting.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "SmarterSmartSyncPolicyState",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "New automatic Smart Sync setting.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SmarterSmartSyncPolicyState",
                        "namespace": "team_policies"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SmarterSmartSyncPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SpaceCapsType": {
            "description": "Space limit alert policy",
            "fields": [
                {
                    "parameter": "hard",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "off",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "soft",
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
        "SpaceLimitsStatus": {
            "fields": [
                {
                    "parameter": "within_quota",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "near_quota",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "over_quota",
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
        "SsoAddCertDetails": {
            "description": "Added X.509 certificate for SSO.",
            "fields": [
                {
                    "description": "SSO certificate details.",
                    "parameter": "certificate_details",
                    "type": {
                        "datatype": "Certificate",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoAddCertType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoAddLoginUrlDetails": {
            "description": "Added sign-in URL for SSO.",
            "fields": [
                {
                    "description": "New single sign-on login URL.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoAddLoginUrlType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoAddLogoutUrlDetails": {
            "description": "Added sign-out URL for SSO.",
            "fields": [
                {
                    "description": "New single sign-on logout URL. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoAddLogoutUrlType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoChangeCertDetails": {
            "description": "Changed X.509 certificate for SSO.",
            "fields": [
                {
                    "description": "New SSO certificate details.",
                    "parameter": "new_certificate_details",
                    "type": {
                        "datatype": "Certificate",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous SSO certificate details. Might be missing due to historical data gap.",
                    "parameter": "previous_certificate_details",
                    "type": {
                        "optional": {
                            "datatype": "Certificate",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoChangeCertType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoChangeLoginUrlDetails": {
            "description": "Changed sign-in URL for SSO.",
            "fields": [
                {
                    "description": "Previous single sign-on login URL.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New single sign-on login URL.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoChangeLoginUrlType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoChangeLogoutUrlDetails": {
            "description": "Changed sign-out URL for SSO.",
            "fields": [
                {
                    "description": "Previous single sign-on logout URL. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "New single sign-on logout URL. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoChangeLogoutUrlType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoChangePolicyDetails": {
            "description": "Changed single sign-on setting for team.",
            "fields": [
                {
                    "description": "New single sign-on policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SsoPolicy",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "Previous single sign-on policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "SsoPolicy",
                            "namespace": "team_policies"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoChangeSamlIdentityModeDetails": {
            "description": "Changed SAML identity mode for SSO.",
            "fields": [
                {
                    "description": "Previous single sign-on identity mode.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "Int64"
                    }
                },
                {
                    "description": "New single sign-on identity mode.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "Int64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoChangeSamlIdentityModeType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoErrorDetails": {
            "description": "Failed to sign in via SSO.",
            "fields": [
                {
                    "description": "Error details.",
                    "parameter": "error_details",
                    "type": {
                        "datatype": "FailureDetailsLogInfo",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoErrorType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoRemoveCertDetails": {
            "description": "Removed X.509 certificate for SSO.",
            "fields": [],
            "stone_type": "struct"
        },
        "SsoRemoveCertType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoRemoveLoginUrlDetails": {
            "description": "Removed sign-in URL for SSO.",
            "fields": [
                {
                    "description": "Previous single sign-on login URL.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoRemoveLoginUrlType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoRemoveLogoutUrlDetails": {
            "description": "Removed sign-out URL for SSO.",
            "fields": [
                {
                    "description": "Previous single sign-on logout URL.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SsoRemoveLogoutUrlType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "StartedEnterpriseAdminSessionDetails": {
            "description": "Started enterprise admin session.",
            "fields": [
                {
                    "description": "More information about the organization or team.",
                    "parameter": "federation_extra_details",
                    "type": {
                        "datatype": "FedExtraDetails",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "StartedEnterpriseAdminSessionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamActivityCreateReportDetails": {
            "description": "Created team activity report.",
            "fields": [
                {
                    "description": "Report start date.",
                    "parameter": "start_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "Report end date.",
                    "parameter": "end_date",
                    "type": {
                        "primitive": "Timestamp"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamActivityCreateReportFailDetails": {
            "description": "Couldn't generate team activity report.",
            "fields": [
                {
                    "description": "Failure reason.",
                    "parameter": "failure_reason",
                    "type": {
                        "datatype": "TeamReportFailureReason",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamActivityCreateReportFailType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamActivityCreateReportType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamDetails": {
            "description": "More details about the team.",
            "fields": [
                {
                    "description": "The name of the team.",
                    "parameter": "team",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamEvent": {
            "description": "An audit log event.",
            "fields": [
                {
                    "description": "The Dropbox timestamp representing when the action was taken.",
                    "parameter": "timestamp",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "The category that this type of action belongs to.",
                    "parameter": "event_category",
                    "type": {
                        "datatype": "EventCategory",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The particular type of action taken.",
                    "parameter": "event_type",
                    "type": {
                        "datatype": "EventType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The variable event schema applicable to this type of action, instantiated with respect to this particular action.",
                    "parameter": "details",
                    "type": {
                        "datatype": "EventDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The entity who actually performed the action. Might be missing due to historical data gap.",
                    "parameter": "actor",
                    "type": {
                        "optional": {
                            "datatype": "ActorLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "The origin from which the actor performed the action including information about host, ip address, location, session, etc. If the action was performed programmatically via the API the origin represents the API client.",
                    "parameter": "origin",
                    "type": {
                        "optional": {
                            "datatype": "OriginLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "True if the action involved a non team member either as the actor or as one of the affected users. Might be missing due to historical data gap.",
                    "parameter": "involve_non_team_member",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "The user or team on whose behalf the actor performed the action. Might be missing due to historical data gap.",
                    "parameter": "context",
                    "type": {
                        "optional": {
                            "datatype": "ContextLogInfo",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Zero or more users and/or groups that are affected by the action. Note that this list doesn't include any actors or users in context.",
                    "parameter": "participants",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "ParticipantLogInfo",
                                "namespace": "team_log"
                            }
                        }
                    }
                },
                {
                    "description": "Zero or more content assets involved in the action. Currently these include Dropbox files and folders but in the future we might add other asset types such as Paper documents, folders, projects, etc.",
                    "parameter": "assets",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "AssetLogInfo",
                                "namespace": "team_log"
                            }
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamExtensionsPolicy": {
            "description": "Policy for controlling whether App Integrations are enabled for the team.",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "TeamExtensionsPolicyChangedDetails": {
            "description": "Changed App Integrations setting for team.",
            "fields": [
                {
                    "description": "New Extensions policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "TeamExtensionsPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Extensions policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "TeamExtensionsPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamExtensionsPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderChangeStatusDetails": {
            "description": "Changed archival status of team folder.",
            "fields": [
                {
                    "description": "New team folder status.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "TeamFolderStatus",
                        "namespace": "team"
                    }
                },
                {
                    "description": "Previous team folder status. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "TeamFolderStatus",
                            "namespace": "team"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderChangeStatusType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderCreateDetails": {
            "description": "Created team folder in active status.",
            "fields": [],
            "stone_type": "struct"
        },
        "TeamFolderCreateType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderDowngradeDetails": {
            "description": "Downgraded team folder to regular shared folder.",
            "fields": [
                {
                    "description": "Target asset position in the Assets list.",
                    "parameter": "target_asset_index",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderDowngradeType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderPermanentlyDeleteDetails": {
            "description": "Permanently deleted archived team folder.",
            "fields": [],
            "stone_type": "struct"
        },
        "TeamFolderPermanentlyDeleteType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderRenameDetails": {
            "description": "Renamed active/archived team folder.",
            "fields": [
                {
                    "description": "Previous folder name.",
                    "parameter": "previous_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New folder name.",
                    "parameter": "new_folder_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamFolderRenameType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamInviteDetails": {
            "description": "Details about team invites",
            "fields": [
                {
                    "description": "How the user was invited to the team.",
                    "parameter": "invite_method",
                    "type": {
                        "datatype": "InviteMethod",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamLogInfo": {
            "description": "Team's logged information.",
            "fields": [
                {
                    "description": "Team display name.",
                    "parameter": "display_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMemberLogInfo": {
            "description": "Team member's logged information.",
            "fields": [
                {
                    "description": "User unique ID. Might be missing due to historical data gap.",
                    "parameter": "account_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "User display name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "User email address. Might be missing due to historical data gap.",
                    "parameter": "email",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Team member ID. Might be missing due to historical data gap.",
                    "parameter": "team_member_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Team member external ID.",
                    "parameter": "member_external_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Details about this user&#x2019s team for enterprise event.",
                    "parameter": "team",
                    "type": {
                        "optional": {
                            "datatype": "TeamLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "TeamMembershipType": {
            "fields": [
                {
                    "parameter": "full",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "free",
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
        "TeamMergeFromDetails": {
            "description": "Merged another team into this team.",
            "fields": [
                {
                    "description": "The name of the team that was merged into this team.",
                    "parameter": "team_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeFromType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestAcceptedDetails": {
            "description": "Accepted a team merge request.",
            "fields": [
                {
                    "description": "Team merge request acceptance details.",
                    "parameter": "request_accepted_details",
                    "type": {
                        "datatype": "TeamMergeRequestAcceptedExtraDetails",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestAcceptedExtraDetails": {
            "description": "Team merge request acceptance details",
            "fields": [
                {
                    "description": "Team merge request accepted details shown to the primary team.",
                    "parameter": "primary_team",
                    "type": {
                        "datatype": "PrimaryTeamRequestAcceptedDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Team merge request accepted details shown to the secondary team.",
                    "parameter": "secondary_team",
                    "type": {
                        "datatype": "SecondaryTeamRequestAcceptedDetails",
                        "namespace": "team_log"
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
        "TeamMergeRequestAcceptedShownToPrimaryTeamDetails": {
            "description": "Accepted a team merge request.",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "secondary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestAcceptedShownToPrimaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestAcceptedShownToSecondaryTeamDetails": {
            "description": "Accepted a team merge request.",
            "fields": [
                {
                    "description": "The primary team name.",
                    "parameter": "primary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestAcceptedShownToSecondaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestAcceptedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestAutoCanceledDetails": {
            "description": "Automatically canceled team merge request.",
            "fields": [
                {
                    "description": "The cancellation reason.",
                    "parameter": "details",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestAutoCanceledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestCanceledDetails": {
            "description": "Canceled a team merge request.",
            "fields": [
                {
                    "description": "Team merge request cancellation details.",
                    "parameter": "request_canceled_details",
                    "type": {
                        "datatype": "TeamMergeRequestCanceledExtraDetails",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestCanceledExtraDetails": {
            "description": "Team merge request cancellation details",
            "fields": [
                {
                    "description": "Team merge request cancellation details shown to the primary team.",
                    "parameter": "primary_team",
                    "type": {
                        "datatype": "PrimaryTeamRequestCanceledDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Team merge request cancellation details shown to the secondary team.",
                    "parameter": "secondary_team",
                    "type": {
                        "datatype": "SecondaryTeamRequestCanceledDetails",
                        "namespace": "team_log"
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
        "TeamMergeRequestCanceledShownToPrimaryTeamDetails": {
            "description": "Canceled a team merge request.",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "secondary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestCanceledShownToPrimaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestCanceledShownToSecondaryTeamDetails": {
            "description": "Canceled a team merge request.",
            "fields": [
                {
                    "description": "The email of the primary team admin that the request was sent to.",
                    "parameter": "sent_to",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestCanceledShownToSecondaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestCanceledType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestExpiredDetails": {
            "description": "Team merge request expired.",
            "fields": [
                {
                    "description": "Team merge request expiration details.",
                    "parameter": "request_expired_details",
                    "type": {
                        "datatype": "TeamMergeRequestExpiredExtraDetails",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestExpiredExtraDetails": {
            "description": "Team merge request expiration details",
            "fields": [
                {
                    "description": "Team merge request canceled details shown to the primary team.",
                    "parameter": "primary_team",
                    "type": {
                        "datatype": "PrimaryTeamRequestExpiredDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Team merge request canceled details shown to the secondary team.",
                    "parameter": "secondary_team",
                    "type": {
                        "datatype": "SecondaryTeamRequestExpiredDetails",
                        "namespace": "team_log"
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
        "TeamMergeRequestExpiredShownToPrimaryTeamDetails": {
            "description": "Team merge request expired.",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "secondary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestExpiredShownToPrimaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestExpiredShownToSecondaryTeamDetails": {
            "description": "Team merge request expired.",
            "fields": [
                {
                    "description": "The email of the primary team admin the request was sent to.",
                    "parameter": "sent_to",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestExpiredShownToSecondaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestExpiredType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestRejectedShownToPrimaryTeamDetails": {
            "description": "Rejected a team merge request.",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "secondary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestRejectedShownToPrimaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestRejectedShownToSecondaryTeamDetails": {
            "description": "Rejected a team merge request.",
            "fields": [
                {
                    "description": "The name of the secondary team admin who sent the request originally.",
                    "parameter": "sent_by",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestRejectedShownToSecondaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestReminderDetails": {
            "description": "Sent a team merge request reminder.",
            "fields": [
                {
                    "description": "Team merge request reminder details.",
                    "parameter": "request_reminder_details",
                    "type": {
                        "datatype": "TeamMergeRequestReminderExtraDetails",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestReminderExtraDetails": {
            "description": "Team merge request reminder details",
            "fields": [
                {
                    "description": "Team merge request reminder details shown to the primary team.",
                    "parameter": "primary_team",
                    "type": {
                        "datatype": "PrimaryTeamRequestReminderDetails",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Team merge request reminder details shown to the secondary team.",
                    "parameter": "secondary_team",
                    "type": {
                        "datatype": "SecondaryTeamRequestReminderDetails",
                        "namespace": "team_log"
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
        "TeamMergeRequestReminderShownToPrimaryTeamDetails": {
            "description": "Sent a team merge request reminder.",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "secondary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the primary team admin the request was sent to.",
                    "parameter": "sent_to",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestReminderShownToPrimaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestReminderShownToSecondaryTeamDetails": {
            "description": "Sent a team merge request reminder.",
            "fields": [
                {
                    "description": "The email of the primary team admin the request was sent to.",
                    "parameter": "sent_to",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestReminderShownToSecondaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestReminderType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestRevokedDetails": {
            "description": "Canceled the team merge.",
            "fields": [
                {
                    "description": "The name of the other team.",
                    "parameter": "team",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestRevokedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestSentShownToPrimaryTeamDetails": {
            "description": "Requested to merge their Dropbox team into yours.",
            "fields": [
                {
                    "description": "The secondary team name.",
                    "parameter": "secondary_team",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the primary team admin the request was sent to.",
                    "parameter": "sent_to",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestSentShownToPrimaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestSentShownToSecondaryTeamDetails": {
            "description": "Requested to merge your team into another Dropbox team.",
            "fields": [
                {
                    "description": "The email of the primary team admin the request was sent to.",
                    "parameter": "sent_to",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeRequestSentShownToSecondaryTeamType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeToDetails": {
            "description": "Merged this team into another team.",
            "fields": [
                {
                    "description": "The name of the team that this team was merged into.",
                    "parameter": "team_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMergeToType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamName": {
            "description": "Team name details",
            "fields": [
                {
                    "description": "Team's display name.",
                    "parameter": "team_display_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Team's legal name.",
                    "parameter": "team_legal_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamProfileAddLogoDetails": {
            "description": "Added team logo to display on shared link headers.",
            "fields": [],
            "stone_type": "struct"
        },
        "TeamProfileAddLogoType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamProfileChangeDefaultLanguageDetails": {
            "description": "Changed default language for team.",
            "fields": [
                {
                    "description": "New team's default language.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Previous team's default language.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamProfileChangeDefaultLanguageType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamProfileChangeLogoDetails": {
            "description": "Changed team logo displayed on shared link headers.",
            "fields": [],
            "stone_type": "struct"
        },
        "TeamProfileChangeLogoType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamProfileChangeNameDetails": {
            "description": "Changed team name.",
            "fields": [
                {
                    "description": "New team name.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "TeamName",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous teams name. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "TeamName",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamProfileChangeNameType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamProfileRemoveLogoDetails": {
            "description": "Removed team logo displayed on shared link headers.",
            "fields": [],
            "stone_type": "struct"
        },
        "TeamProfileRemoveLogoType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamSelectiveSyncPolicy": {
            "description": "Policy for controlling whether team selective sync is enabled for team.",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "TeamSelectiveSyncPolicyChangedDetails": {
            "description": "Enabled/disabled Team Selective Sync for team.",
            "fields": [
                {
                    "description": "New Team Selective Sync policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "TeamSelectiveSyncPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous Team Selective Sync policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "TeamSelectiveSyncPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamSelectiveSyncPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamSelectiveSyncSettingsChangedDetails": {
            "description": "Changed sync default.",
            "fields": [
                {
                    "description": "Previous value.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "SyncSetting",
                        "namespace": "files"
                    }
                },
                {
                    "description": "New value.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "SyncSetting",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamSelectiveSyncSettingsChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamSharingWhitelistSubjectsChangedDetails": {
            "description": "Edited the approved list for sharing externally.",
            "fields": [
                {
                    "description": "Domains or emails added to the approved list for sharing externally.",
                    "parameter": "added_whitelist_subjects",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Domains or emails removed from the approved list for sharing externally.",
                    "parameter": "removed_whitelist_subjects",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamSharingWhitelistSubjectsChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaAddBackupPhoneDetails": {
            "description": "Added backup phone for two-step verification.",
            "fields": [],
            "stone_type": "struct"
        },
        "TfaAddBackupPhoneType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaAddExceptionDetails": {
            "description": "Added members to two factor authentication exception list.",
            "fields": [],
            "stone_type": "struct"
        },
        "TfaAddExceptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaAddSecurityKeyDetails": {
            "description": "Added security key for two-step verification.",
            "fields": [],
            "stone_type": "struct"
        },
        "TfaAddSecurityKeyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaChangeBackupPhoneDetails": {
            "description": "Changed backup phone for two-step verification.",
            "fields": [],
            "stone_type": "struct"
        },
        "TfaChangeBackupPhoneType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaChangePolicyDetails": {
            "description": "Changed two-step verification setting for team.",
            "fields": [
                {
                    "description": "New change policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "TwoStepVerificationPolicy",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "Previous change policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "TwoStepVerificationPolicy",
                            "namespace": "team_policies"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaChangeStatusDetails": {
            "description": "Enabled/disabled/changed two-step verification setting.",
            "fields": [
                {
                    "description": "The new two factor authentication configuration.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "TfaConfiguration",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "The previous two factor authentication configuration. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "TfaConfiguration",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Used two factor authentication rescue code. This flag is relevant when the two factor authentication configuration is disabled.",
                    "parameter": "used_rescue_code",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaChangeStatusType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaConfiguration": {
            "description": "Two factor authentication configuration. Note: the enabled option is deprecated.",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "sms",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "authenticator",
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
        "TfaRemoveBackupPhoneDetails": {
            "description": "Removed backup phone for two-step verification.",
            "fields": [],
            "stone_type": "struct"
        },
        "TfaRemoveBackupPhoneType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaRemoveExceptionDetails": {
            "description": "Removed members from two factor authentication exception list.",
            "fields": [],
            "stone_type": "struct"
        },
        "TfaRemoveExceptionType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaRemoveSecurityKeyDetails": {
            "description": "Removed security key for two-step verification.",
            "fields": [],
            "stone_type": "struct"
        },
        "TfaRemoveSecurityKeyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TfaResetDetails": {
            "description": "Reset two-step verification for team member.",
            "fields": [],
            "stone_type": "struct"
        },
        "TfaResetType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TimeUnit": {
            "fields": [
                {
                    "parameter": "milliseconds",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "seconds",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "minutes",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "hours",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "days",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "weeks",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "months",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "years",
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
        "TrustedNonTeamMemberLogInfo": {
            "description": "User that is not a member of the team but considered trusted.",
            "fields": [
                {
                    "description": "Indicates the type of the member of a trusted team.",
                    "parameter": "trusted_non_team_member_type",
                    "type": {
                        "datatype": "TrustedNonTeamMemberType",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "User unique ID. Might be missing due to historical data gap.",
                    "parameter": "account_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "User display name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "User email address. Might be missing due to historical data gap.",
                    "parameter": "email",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Details about this useru2019s trusted team.",
                    "parameter": "team",
                    "type": {
                        "optional": {
                            "datatype": "TeamLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "TrustedNonTeamMemberType": {
            "fields": [
                {
                    "parameter": "multi_instance_admin",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enterprise_admin",
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
        "TrustedTeamsRequestAction": {
            "fields": [
                {
                    "parameter": "invited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "expired",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "revoked",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "accepted",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "declined",
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
        "TrustedTeamsRequestState": {
            "fields": [
                {
                    "parameter": "invited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "linked",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "unlinked",
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
        "TwoAccountChangePolicyDetails": {
            "description": "Enabled/disabled option for members to link personal Dropbox account and team account to same computer.",
            "fields": [
                {
                    "description": "New two account policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "TwoAccountPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous two account policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "TwoAccountPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TwoAccountChangePolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TwoAccountPolicy": {
            "description": "Policy for pairing personal account to work account",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "UserLinkedAppLogInfo": {
            "description": "User linked app",
            "fields": [
                {
                    "description": "App unique ID. Might be missing due to historical data gap.",
                    "parameter": "app_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "App display name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "UserLogInfo": {
            "description": "User's logged information.",
            "fields": [
                {
                    "description": "User unique ID. Might be missing due to historical data gap.",
                    "parameter": "account_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "User display name. Might be missing due to historical data gap.",
                    "parameter": "display_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "User email address. Might be missing due to historical data gap.",
                    "parameter": "email",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "UserNameLogInfo": {
            "description": "User's name logged information",
            "fields": [
                {
                    "description": "Given name.",
                    "parameter": "given_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Surname.",
                    "parameter": "surname",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Locale. Might be missing due to historical data gap.",
                    "parameter": "locale",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ViewerInfoPolicyChangedDetails": {
            "description": "Changed team policy for viewer info.",
            "fields": [
                {
                    "description": "Previous Viewer Info policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "PassPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "New Viewer Info policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "PassPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ViewerInfoPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WatermarkingPolicy": {
            "description": "Policy for controlling team access to watermarking feature",
            "fields": [
                {
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "enabled",
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
        "WatermarkingPolicyChangedDetails": {
            "description": "Changed watermarking policy for team.",
            "fields": [
                {
                    "description": "New watermarking policy.",
                    "parameter": "new_value",
                    "type": {
                        "datatype": "WatermarkingPolicy",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Previous watermarking policy.",
                    "parameter": "previous_value",
                    "type": {
                        "datatype": "WatermarkingPolicy",
                        "namespace": "team_log"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WatermarkingPolicyChangedType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WebDeviceSessionLogInfo": {
            "description": "Information on active web sessions",
            "fields": [
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
                    "description": "The IP address of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "ip_address",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The time this session was created. Might be missing due to historical data gap.",
                    "parameter": "created",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "The time of the last activity from this session. Might be missing due to historical data gap.",
                    "parameter": "updated",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "Web session unique id. Might be missing due to historical data gap.",
                    "parameter": "session_info",
                    "type": {
                        "optional": {
                            "datatype": "WebSessionLogInfo",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "WebSessionLogInfo": {
            "description": "Web session.",
            "fields": [
                {
                    "description": "Session ID. Might be missing due to historical data gap.",
                    "parameter": "session_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "WebSessionsChangeActiveSessionLimitDetails": {
            "description": "Changed limit on active sessions per member.",
            "fields": [
                {
                    "description": "Previous max number of concurrent active sessions policy.",
                    "parameter": "previous_value",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "New max number of concurrent active sessions policy.",
                    "parameter": "new_value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WebSessionsChangeActiveSessionLimitType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WebSessionsChangeFixedLengthPolicyDetails": {
            "description": "Changed how long members can stay signed in to Dropbox.com.",
            "fields": [
                {
                    "description": "New session length policy. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "datatype": "WebSessionsFixedLengthPolicy",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Previous session length policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "WebSessionsFixedLengthPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WebSessionsChangeFixedLengthPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WebSessionsChangeIdleLengthPolicyDetails": {
            "description": "Changed how long team members can be idle while signed in to Dropbox.com.",
            "fields": [
                {
                    "description": "New idle length policy. Might be missing due to historical data gap.",
                    "parameter": "new_value",
                    "type": {
                        "optional": {
                            "datatype": "WebSessionsIdleLengthPolicy",
                            "namespace": "team_log"
                        }
                    }
                },
                {
                    "description": "Previous idle length policy. Might be missing due to historical data gap.",
                    "parameter": "previous_value",
                    "type": {
                        "optional": {
                            "datatype": "WebSessionsIdleLengthPolicy",
                            "namespace": "team_log"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WebSessionsChangeIdleLengthPolicyType": {
            "fields": [
                {
                    "parameter": "description",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WebSessionsFixedLengthPolicy": {
            "description": "Web sessions fixed length policy.",
            "fields": [
                {
                    "description": "Defined fixed session length.",
                    "parameter": "defined",
                    "type": {
                        "datatype": "DurationLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Undefined fixed session length.",
                    "parameter": "undefined",
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
        "WebSessionsIdleLengthPolicy": {
            "description": "Web sessions idle length policy.",
            "fields": [
                {
                    "description": "Defined idle session length.",
                    "parameter": "defined",
                    "type": {
                        "datatype": "DurationLogInfo",
                        "namespace": "team_log"
                    }
                },
                {
                    "description": "Undefined idle session length.",
                    "parameter": "undefined",
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
        }
    },
    "team_policies": {
        "EmmState": {
            "fields": [
                {
                    "description": "Emm token is disabled.",
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Emm token is optional.",
                    "parameter": "optional",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Emm token is required.",
                    "parameter": "required",
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
        "FileLockingPolicyState": {
            "fields": [
                {
                    "description": "File locking feature is disabled.",
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "File locking feature is allowed.",
                    "parameter": "enabled",
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
        "GroupCreation": {
            "fields": [
                {
                    "description": "Team admins and members can create groups.",
                    "parameter": "admins_and_members",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Only team admins can create groups.",
                    "parameter": "admins_only",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "union"
        },
        "PaperDeploymentPolicy": {
            "fields": [
                {
                    "description": "All team members have access to Paper.",
                    "parameter": "full",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Only whitelisted team members can access Paper. To see which user is whitelisted, check 'is_paper_whitelisted' on 'account/info'.",
                    "parameter": "partial",
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
        "PaperEnabledPolicy": {
            "fields": [
                {
                    "description": "Paper is disabled.",
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Paper is enabled.",
                    "parameter": "enabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Unspecified policy.",
                    "parameter": "unspecified",
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
        "PasswordStrengthPolicy": {
            "fields": [
                {
                    "description": "User passwords will adhere to the minimal password strength policy.",
                    "parameter": "minimal_requirements",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User passwords will adhere to the moderate password strength policy.",
                    "parameter": "moderate_password",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User passwords will adhere to the very strong password strength policy.",
                    "parameter": "strong_password",
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
        "RolloutMethod": {
            "fields": [
                {
                    "description": "Unlink all.",
                    "parameter": "unlink_all",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Unlink devices with the most inactivity.",
                    "parameter": "unlink_most_inactive",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Add member to Exceptions.",
                    "parameter": "add_member_to_exceptions",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "union"
        },
        "SmartSyncPolicy": {
            "fields": [
                {
                    "description": "The specified content will be synced as local files by default.",
                    "parameter": "local",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The specified content will be synced as on-demand files by default.",
                    "parameter": "on_demand",
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
        "SmarterSmartSyncPolicyState": {
            "fields": [
                {
                    "description": "Smarter Smart Sync feature is disabled.",
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Smarter Smart Sync feature is enabled.",
                    "parameter": "enabled",
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
        "SsoPolicy": {
            "fields": [
                {
                    "description": "Users will be able to sign in with their Dropbox credentials.",
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Users will be able to sign in with either their Dropbox or single sign-on credentials.",
                    "parameter": "optional",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Users will be required to sign in with their single sign-on credentials.",
                    "parameter": "required",
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
        "TwoStepVerificationPolicy": {
            "fields": [
                {
                    "description": "Enabled require two factor authorization.",
                    "parameter": "require_tfa_enable",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Disabled require two factor authorization.",
                    "parameter": "require_tfa_disable",
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
        }
    }
}
