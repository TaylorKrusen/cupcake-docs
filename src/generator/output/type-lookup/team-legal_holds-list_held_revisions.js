export default {
    "team": {
        "LegalHoldHeldRevisionMetadata": {
            "fields": [
                {
                    "description": "The held revision filename.",
                    "parameter": "new_filename",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The id of the held revision.",
                    "parameter": "original_revision_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The original path of the held revision.",
                    "parameter": "original_file_path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The last time the file was modified on Dropbox.",
                    "parameter": "server_modified",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "The member id of the revision's author.",
                    "parameter": "author_member_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The member status of the revision's author.",
                    "parameter": "author_member_status",
                    "type": {
                        "datatype": "TeamMemberStatus",
                        "namespace": "team"
                    }
                },
                {
                    "description": "The email address of the held revision author.",
                    "parameter": "author_email",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The type of the held revision's file.",
                    "parameter": "file_type",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The file size in bytes.",
                    "parameter": "size",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "A hash of the file content. This field can be used to verify data integrity. For more information see our :link:`Content hash https://www.dropbox.com/developers/reference/content-hash` page.",
                    "parameter": "content_hash",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsListHeldRevisionResult": {
            "fields": [
                {
                    "description": "List of file entries that under the hold.",
                    "parameter": "entries",
                    "type": {
                        "list": {
                            "datatype": "LegalHoldHeldRevisionMetadata",
                            "namespace": "team"
                        }
                    }
                },
                {
                    "description": "True if there are more file entries that haven't been returned. You can retrieve them with a call to /legal_holds/list_held_revisions_continue.",
                    "parameter": "has_more",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The cursor idicates where to continue reading file metadata entries for the next API call. When there are no more entries, the cursor will return none.\nPass the cursor into /2/team/legal_holds/list_held_revisions/continue.",
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
        "LegalHoldsListHeldRevisionsArg": {
            "fields": [
                {
                    "description": "The legal hold Id.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "LegalHoldsListHeldRevisionsError": {
            "fields": [
                {
                    "description": "There has been an unknown legal hold error.",
                    "parameter": "unknown_legal_hold_error",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "You don't have permissions to perform this action.",
                    "parameter": "insufficient_permissions",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "parameter": "other",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Temporary infrastructure failure, please retry.",
                    "parameter": "transient_error",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The legal hold is not holding any revisions yet.",
                    "parameter": "legal_hold_still_empty",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Trying to list revisions for an inactive legal hold.",
                    "parameter": "inactive_legal_hold",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "RemovedStatus": {
            "fields": [
                {
                    "description": "True if the removed team member is recoverable.",
                    "parameter": "is_recoverable",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "True if the team member's account was converted to individual account.",
                    "parameter": "is_disconnected",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TeamMemberStatus": {
            "description": "The user's status as a member of a specific team.",
            "fields": [
                {
                    "description": "User has successfully joined the team.",
                    "parameter": "active",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User has been invited to a team, but has not joined the team yet.",
                    "parameter": "invited",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User is no longer a member of the team, but the account can be un-suspended, re-establishing the user as a team member.",
                    "parameter": "suspended",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "User is no longer a member of the team. Removed users are only listed when include_removed is true in members/list.",
                    "parameter": "removed",
                    "type": {
                        "datatype": "RemovedStatus",
                        "namespace": "team"
                    }
                }
            ],
            "stone_type": "union"
        }
    }
}
