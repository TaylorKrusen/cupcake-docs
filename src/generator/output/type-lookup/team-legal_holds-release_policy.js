export default {
    "team": {
        "LegalHoldsPolicyReleaseArg": {
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
        "LegalHoldsPolicyReleaseError": {
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
                    "description": "Legal hold is currently performing another operation.",
                    "parameter": "legal_hold_performing_another_operation",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Legal hold is currently performing a release or is already released.",
                    "parameter": "legal_hold_already_releasing",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Legal hold policy does not exist for :field:`LegalHoldsPolicyReleaseArg.id`.",
                    "parameter": "legal_hold_policy_not_found",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        }
    }
}
