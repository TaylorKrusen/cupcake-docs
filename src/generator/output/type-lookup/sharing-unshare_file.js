export default {
    "sharing": {
        "SharingFileAccessError": {
            "description": "User could not access this file.",
            "fields": [
                {
                    "description": "Current user does not have sufficient privileges to perform the desired action.",
                    "parameter": "no_permission",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "File specified was not found.",
                    "parameter": "invalid_file",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A folder can't be shared this way. Use folder sharing or a shared link instead.",
                    "parameter": "is_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A file inside a public folder can't be shared this way. Use a public link instead.",
                    "parameter": "inside_public_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "A Mac OS X package can't be shared this way. Use a shared link instead.",
                    "parameter": "inside_osx_package",
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
        "SharingUserError": {
            "description": "User account had a problem preventing this action.",
            "fields": [
                {
                    "description": "The current user must verify the account e-mail address before performing this action.",
                    "parameter": "email_unverified",
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
        "UnshareFileArg": {
            "description": "Arguments for :route:`unshare_file`.",
            "fields": [
                {
                    "description": "The file to unshare.",
                    "parameter": "file",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UnshareFileError": {
            "description": "Error result for :route:`unshare_file`.",
            "fields": [
                {
                    "parameter": "user_error",
                    "type": {
                        "datatype": "SharingUserError",
                        "namespace": "sharing"
                    }
                },
                {
                    "parameter": "access_error",
                    "type": {
                        "datatype": "SharingFileAccessError",
                        "namespace": "sharing"
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
