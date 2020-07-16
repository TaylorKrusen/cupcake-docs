export default {
    "cloud_docs": {
        "CloudDocsAccessError": {
            "fields": [
                {
                    "description": "The Cloud Doc ID is invalid.",
                    "parameter": "invalid_doc_id",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A Cloud Doc could not be found for the given ID.",
                    "parameter": "not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Permission denied for the Cloud Doc with the given ID.",
                    "parameter": "permission_denied",
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
        "GetContentArg": {
            "fields": [
                {
                    "parameter": "file_id",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
