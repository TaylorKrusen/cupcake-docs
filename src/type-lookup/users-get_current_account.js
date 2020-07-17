export default {
    "common": {
        "RootInfo": {
            "description": "Information about current user's root.",
            "fields": [
                {
                    "description": "The namespace ID for user's root namespace. It will be the namespace ID of the shared team root if the user is member of a team with a separate team root. Otherwise it will be same as :field:`RootInfo.home_namespace_id`.",
                    "parameter": "root_namespace_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The namespace ID for user's home namespace.",
                    "parameter": "home_namespace_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        }
    },
    "team_policies": {
        "OfficeAddInPolicy": {
            "fields": [
                {
                    "description": "Office Add-In is disabled.",
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Office Add-In is enabled.",
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
        "SharedFolderJoinPolicy": {
            "description": "Policy governing which shared folders a team member can join.",
            "fields": [
                {
                    "description": "Team members can only join folders shared by teammates.",
                    "parameter": "from_team_only",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Team members can join any shared folder, including those shared by users outside the team.",
                    "parameter": "from_anyone",
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
        "SharedFolderMemberPolicy": {
            "description": "Policy governing who can be a member of a folder shared by a team member.",
            "fields": [
                {
                    "description": "Only a teammate can be a member of a folder shared by a team member.",
                    "parameter": "team",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Anyone can be a member of a folder shared by a team member.",
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
        "SharedLinkCreatePolicy": {
            "description": "Policy governing the visibility of shared links. This policy can apply to newly created shared links, or all shared links.",
            "fields": [
                {
                    "description": "By default, anyone can access newly created shared links. No login will be required to access the shared links unless overridden.",
                    "parameter": "default_public",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "By default, only members of the same team can access newly created shared links. Login will be required to access the shared links unless overridden.",
                    "parameter": "default_team_only",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Only members of the same team can access all shared links. Login will be required to access all shared links.",
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
        "TeamSharingPolicies": {
            "description": "Policies governing sharing within and outside of the team.",
            "fields": [
                {
                    "description": "Who can join folders shared by team members.",
                    "parameter": "shared_folder_member_policy",
                    "type": {
                        "datatype": "SharedFolderMemberPolicy",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "Which shared folders team members can join.",
                    "parameter": "shared_folder_join_policy",
                    "type": {
                        "datatype": "SharedFolderJoinPolicy",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "Who can view shared links owned by team members.",
                    "parameter": "shared_link_create_policy",
                    "type": {
                        "datatype": "SharedLinkCreatePolicy",
                        "namespace": "team_policies"
                    }
                }
            ],
            "stone_type": "struct"
        }
    },
    "users": {
        "FullAccount": {
            "description": "Detailed information about the current user's account.",
            "fields": [
                {
                    "description": "The user's unique Dropbox ID.",
                    "parameter": "account_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Details of a user's name.",
                    "parameter": "name",
                    "type": {
                        "datatype": "Name",
                        "namespace": "users"
                    }
                },
                {
                    "description": "The user's e-mail address. Do not rely on this without checking the :field:`email_verified` field. Even then, it's possible that the user has since lost access to their e-mail.",
                    "parameter": "email",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Whether the user has verified their e-mail address.",
                    "parameter": "email_verified",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Whether the user has been disabled.",
                    "parameter": "disabled",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The language that the user specified. Locale tags will be :link:`IETF language tags http://en.wikipedia.org/wiki/IETF_language_tag`.",
                    "parameter": "locale",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The user's :link:`referral link https://www.dropbox.com/referrals`.",
                    "parameter": "referral_link",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Whether the user has a personal and work account. If the current account is personal, then :field:`team` will always be :val:`null`, but :field:`is_paired` will indicate if a work account is linked.",
                    "parameter": "is_paired",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "What type of account this user has.",
                    "parameter": "account_type",
                    "type": {
                        "datatype": "AccountType",
                        "namespace": "users_common"
                    }
                },
                {
                    "description": "The root info for this account.",
                    "parameter": "root_info",
                    "type": {
                        "datatype": "RootInfo",
                        "namespace": "common"
                    }
                },
                {
                    "description": "URL for the photo representing the user, if one is set.",
                    "parameter": "profile_photo_url",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The user's two-letter country code, if available. Country codes are based on :link:`ISO 3166-1 http://en.wikipedia.org/wiki/ISO_3166-1`.",
                    "parameter": "country",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "If this account is a member of a team, information about that team.",
                    "parameter": "team",
                    "type": {
                        "optional": {
                            "datatype": "FullTeam",
                            "namespace": "users"
                        }
                    }
                },
                {
                    "description": "This account's unique team member id. This field will only be present if :field:`team` is present.",
                    "parameter": "team_member_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FullTeam": {
            "description": "Detailed information about a team.",
            "fields": [
                {
                    "description": "The team's unique ID.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The name of the team.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Team policies governing sharing.",
                    "parameter": "sharing_policies",
                    "type": {
                        "datatype": "TeamSharingPolicies",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "Team policy governing the use of the Office Add-In.",
                    "parameter": "office_addin_policy",
                    "type": {
                        "datatype": "OfficeAddInPolicy",
                        "namespace": "team_policies"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "Name": {
            "description": "Representations for a person's name to assist with internationalization.",
            "fields": [
                {
                    "description": "Also known as a first name.",
                    "parameter": "given_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Also known as a last name or family name.",
                    "parameter": "surname",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Locale-dependent name. In the US, a person's familiar name is their :field:`given_name`, but elsewhere, it could be any combination of a person's :field:`given_name` and :field:`surname`.",
                    "parameter": "familiar_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A name that can be used directly to represent the name of a user's Dropbox account.",
                    "parameter": "display_name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "An abbreviated form of the person's name. Their initials in most locales.",
                    "parameter": "abbreviated_name",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        }
    },
    "users_common": {
        "AccountType": {
            "description": "What type of account this user has.",
            "fields": [
                {
                    "description": "The basic account type.",
                    "parameter": "basic",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The Dropbox Pro account type.",
                    "parameter": "pro",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The Dropbox Business account type.",
                    "parameter": "business",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "union"
        }
    }
}
