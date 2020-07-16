export default {
    "sharing": {
        "RelinquishFileMembershipArg": {
            "fields": [
                {
                    "description": "The path or id for the file.",
                    "parameter": "file",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RelinquishFileMembershipError": {
            "fields": [
                {
                    "parameter": "access_error",
                    "type": {
                        "datatype": "SharingFileAccessError",
                        "namespace": "sharing"
                    }
                },
                {
                    "description": "The current user has access to the shared file via a group.  You can't relinquish membership to a file shared via groups.",
                    "parameter": "group_access",
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
        },
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
        }
    }
}
