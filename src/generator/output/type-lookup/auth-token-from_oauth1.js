export default {
    "auth": {
        "TokenFromOAuth1Arg": {
            "fields": [
                {
                    "description": "The supplied OAuth 1.0 access token.",
                    "parameter": "oauth1_token",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The token secret associated with the supplied access token.",
                    "parameter": "oauth1_token_secret",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "TokenFromOAuth1Error": {
            "fields": [
                {
                    "description": "Part or all of the OAuth 1.0 access token info is invalid.",
                    "parameter": "invalid_oauth1_token_info",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The authorized app does not match the app associated with the supplied access token.",
                    "parameter": "app_id_mismatch",
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
        "TokenFromOAuth1Result": {
            "fields": [
                {
                    "description": "The OAuth 2.0 token generated from the supplied OAuth 1.0 token.",
                    "parameter": "oauth2_token",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
