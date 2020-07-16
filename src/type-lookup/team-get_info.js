export default {
    "team": {
        "TeamGetInfoResult": {
            "fields": [
                {
                    "description": "The name of the team.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The ID of the team.",
                    "parameter": "team_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The number of licenses available to the team.",
                    "parameter": "num_licensed_users",
                    "type": {
                        "primitive": "UInt32"
                    }
                },
                {
                    "description": "The number of accounts that have been invited or are already active members of the team.",
                    "parameter": "num_provisioned_users",
                    "type": {
                        "primitive": "UInt32"
                    }
                },
                {
                    "parameter": "policies",
                    "type": {
                        "datatype": "TeamMemberPolicies",
                        "namespace": "team_policies"
                    }
                }
            ],
            "stone_type": "struct"
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
        "TeamMemberPolicies": {
            "description": "Policies governing team members.",
            "fields": [
                {
                    "description": "Policies governing sharing.",
                    "parameter": "sharing",
                    "type": {
                        "datatype": "TeamSharingPolicies",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "This describes the Enterprise Mobility Management (EMM) state for this team. This information can be used to understand if an organization is integrating with a third-party EMM vendor to further manage and apply restrictions upon the team's Dropbox usage on mobile devices. This is a new feature and in the future we'll be adding more new fields and additional documentation.",
                    "parameter": "emm_state",
                    "type": {
                        "datatype": "EmmState",
                        "namespace": "team_policies"
                    }
                },
                {
                    "description": "The admin policy around the Dropbox Office Add-In for this team.",
                    "parameter": "office_addin",
                    "type": {
                        "datatype": "OfficeAddInPolicy",
                        "namespace": "team_policies"
                    }
                }
            ],
            "stone_type": "struct"
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
    }
}
