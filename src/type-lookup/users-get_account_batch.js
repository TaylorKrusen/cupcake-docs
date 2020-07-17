export default {
    "users": {
        "BasicAccount": {
            "description": "Basic information about any account.",
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
                    "description": "Whether this user is a teammate of the current user. If this account is the current user's account, then this will be :val:`true`.",
                    "parameter": "is_teammate",
                    "type": {
                        "primitive": "Boolean"
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
                    "description": "The user's unique team member id. This field will only be present if the user is part of a team and :field:`is_teammate` is :val:`true`.",
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
        "GetAccountBatchArg": {
            "fields": [
                {
                    "description": "List of user account identifiers.  Should not contain any duplicate account IDs.",
                    "parameter": "account_ids",
                    "type": {
                        "list": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GetAccountBatchError": {
            "fields": [
                {
                    "description": "The value is an account ID specified in :field:`GetAccountBatchArg.account_ids` that does not exist.",
                    "parameter": "no_account",
                    "type": {
                        "primitive": "String"
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
    }
}
