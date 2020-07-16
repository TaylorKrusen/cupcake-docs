export default {
    "account": {
        "PhotoSourceArg": {
            "fields": [
                {
                    "description": "Image data in base64-encoded bytes.",
                    "parameter": "base64_data",
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
        "SetProfilePhotoArg": {
            "fields": [
                {
                    "description": "Image to set as the user's new profile photo.",
                    "parameter": "photo",
                    "type": {
                        "datatype": "PhotoSourceArg",
                        "namespace": "account"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "SetProfilePhotoError": {
            "fields": [
                {
                    "description": "File cannot be set as profile photo.",
                    "parameter": "file_type_error",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "File cannot exceed 10 MB.",
                    "parameter": "file_size_error",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Image must be larger than 128 x 128.",
                    "parameter": "dimension_error",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Image could not be thumbnailed.",
                    "parameter": "thumbnail_error",
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
                    "parameter": "other",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "SetProfilePhotoResult": {
            "fields": [
                {
                    "description": "URL for the photo representing the user, if one is set.",
                    "parameter": "profile_photo_url",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        }
    }
}
