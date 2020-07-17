export default {
    "file_properties": {
        "PropertyField": {
            "description": "Raw key/value data to be associated with a Dropbox file. Property fields are added to Dropbox files as a :type:`PropertyGroup`.",
            "fields": [
                {
                    "description": "Key of the property field associated with a file and template. Keys can be up to 256 bytes.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Value of the property field associated with a file and template. Values can be up to 1024 bytes.",
                    "parameter": "value",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "PropertyGroup": {
            "description": "A subset of the property fields described by the corresponding :type:`PropertyGroupTemplate`. Properties are always added to a Dropbox file as a :type:`PropertyGroup`. The possible key names and value types in this group are defined by the corresponding :type:`PropertyGroupTemplate`.",
            "fields": [
                {
                    "description": "A unique identifier for the associated template.",
                    "parameter": "template_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The actual properties associated with the template. There can be up to 32 property types per template.",
                    "parameter": "fields",
                    "type": {
                        "list": {
                            "datatype": "PropertyField",
                            "namespace": "file_properties"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        }
    },
    "files": {
        "CommitInfo": {
            "fields": [
                {
                    "description": "Path in the user's Dropbox to save the file.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "Selects what to do if the file already exists.",
                    "parameter": "mode",
                    "type": {
                        "datatype": "WriteMode",
                        "namespace": "files"
                    }
                },
                {
                    "description": "If there's a conflict, as determined by :field:`mode`, have the Dropbox server try to autorename the file to avoid conflict.",
                    "parameter": "autorename",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "The value to store as the :field:`client_modified` timestamp. Dropbox automatically records the time at which the file was written to the Dropbox servers. It can also record an additional timestamp, provided by Dropbox desktop clients, mobile clients, and API apps of when the file was actually created or modified.",
                    "parameter": "client_modified",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                },
                {
                    "description": "Normally, users are made aware of any file modifications in their Dropbox account via notifications in the client software. If :val:`true`, this tells the clients that this modification shouldn't result in a user notification.",
                    "parameter": "mute",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "List of custom properties to add to file.",
                    "parameter": "property_groups",
                    "type": {
                        "optional": {
                            "list": {
                                "datatype": "PropertyGroup",
                                "namespace": "file_properties"
                            }
                        }
                    }
                },
                {
                    "description": "Be more strict about how each :type:`WriteMode` detects conflict. For example, always return a conflict error when :field:`mode` = :field:`WriteMode.update` and the given \"rev\" doesn't match the existing file's \"rev\", even if the existing file has been deleted.",
                    "parameter": "strict_conflict",
                    "type": {
                        "primitive": "Boolean"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GetTemporaryUploadLinkArg": {
            "fields": [
                {
                    "description": "Contains the path and other optional modifiers for the future upload commit. Equivalent to the parameters provided to :route:`upload`.",
                    "parameter": "commit_info",
                    "type": {
                        "datatype": "CommitInfo",
                        "namespace": "files"
                    }
                },
                {
                    "description": "How long before this link expires, in seconds.  Attempting to start an upload with this link longer than this period  of time after link creation will result in an error.",
                    "parameter": "duration",
                    "type": {
                        "primitive": "Float64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GetTemporaryUploadLinkResult": {
            "fields": [
                {
                    "description": "The temporary link which can be used to stream a file to a Dropbox location.",
                    "parameter": "link",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WriteMode": {
            "description": "Your intent when writing a file to some path. This is used to determine what constitutes a conflict and what the autorename strategy is.\nIn some situations, the conflict behavior is identical: (a) If the target path doesn't refer to anything, the file is always written; no conflict. (b) If the target path refers to a folder, it's always a conflict. (c) If the target path refers to a file with identical contents, nothing gets written; no conflict.\nThe conflict checking differs in the case where there's a file at the target path with contents different from the contents you're trying to write.",
            "fields": [
                {
                    "description": "Do not overwrite an existing file if there is a conflict. The autorename strategy is to append a number to the file name. For example, \"document.txt\" might become \"document (2).txt\".",
                    "parameter": "add",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Always overwrite the existing file. The autorename strategy is the same as it is for :field:`add`.",
                    "parameter": "overwrite",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Overwrite if the given \"rev\" matches the existing file's \"rev\". The autorename strategy is to append the string \"conflicted copy\" to the file name. For example, \"document.txt\" might become \"document (conflicted copy).txt\" or \"document (Panda's conflicted copy).txt\".",
                    "parameter": "update",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "union"
        }
    }
}
