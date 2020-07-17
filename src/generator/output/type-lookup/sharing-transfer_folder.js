export default {
    "sharing": {
        "SharedFolderAccessError": {
            "description": "There is an error accessing the shared folder.",
            "fields": [
                {
                    "description": "This shared folder ID is invalid.",
                    "parameter": "invalid_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user is not a member of the shared folder thus cannot access it.",
                    "parameter": "not_a_member",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Never set.",
                    "parameter": "email_unverified",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The shared folder is unmounted.",
                    "parameter": "unmounted",
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
        "TransferFolderArg": {
            "fields": [
                {
                    "description": "The ID for the shared folder.",
                    "parameter": "shared_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A account or team member ID to transfer ownership to.",
                    "parameter": "to_dropbox_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TransferFolderError": {
            "fields": [
                {
                    "parameter": "access_error",
                    "type": {
                        "datatype": "SharedFolderAccessError",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": ":field:`TransferFolderArg.to_dropbox_id` is invalid.",
                    "parameter": "invalid_dropbox_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The new designated owner is not currently a member of the shared folder.",
                    "parameter": "new_owner_not_a_member",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The new designated owner has not added the folder to their Dropbox.",
                    "parameter": "new_owner_unmounted",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The new designated owner's e-mail address is unverified.",
                    "parameter": "new_owner_email_unverified",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This action cannot be performed on a team shared folder.",
                    "parameter": "team_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The current user does not have permission to perform this action.",
                    "parameter": "no_permission",
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
