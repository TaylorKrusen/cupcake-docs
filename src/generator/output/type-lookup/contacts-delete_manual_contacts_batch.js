export default {
    "contacts": {
        "DeleteManualContactsArg": {
            "fields": [
                {
                    "description": "List of manually added contacts to be deleted.",
                    "parameter": "email_addresses",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "DeleteManualContactsError": {
            "fields": [
                {
                    "description": "Can't delete contacts from this list. Make sure the list only has manually added contacts. The deletion was cancelled.",
                    "parameter": "contacts_not_found",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
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
