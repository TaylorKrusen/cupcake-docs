export default {
    "file_properties": {
        "InvalidPropertyGroupError": {
            "fields": [
                {
                    "description": "Template does not exist for the given identifier.",
                    "parameter": "template_not_found",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "You do not have permission to modify this template.",
                    "parameter": "restricted_content",
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
                    "parameter": "path",
                    "type": {
                        "datatype": "LookupError",
                        "namespace": "file_properties"
                    }
                },
                {
                    "description": "This folder cannot be tagged. Tagging folders is not supported for team-owned templates.",
                    "parameter": "unsupported_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "One or more of the supplied property field values is too large.",
                    "parameter": "property_field_too_large",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "One or more of the supplied property fields does not conform to the template specifications.",
                    "parameter": "does_not_fit_template",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There are 2 or more property groups referring to the same templates in the input.",
                    "parameter": "duplicate_property_groups",
                    "type": {
                        "primitive": "Void"
                    }
                }
            ],
            "stone_type": "open_union"
        },
        "LookupError": {
            "fields": [
                {
                    "parameter": "malformed_path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "There is nothing at the given path.",
                    "parameter": "not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "We were expecting a file, but the given path refers to something that isn't a file.",
                    "parameter": "not_file",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "We were expecting a folder, but the given path refers to something that isn't a folder.",
                    "parameter": "not_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The file cannot be transferred because the content is restricted.  For example, sometimes there are legal restrictions due to copyright claims.",
                    "parameter": "restricted_content",
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
        "Dimensions": {
            "description": "Dimensions for a photo or video.",
            "fields": [
                {
                    "description": "Height of the photo/video.",
                    "parameter": "height",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "Width of the photo/video.",
                    "parameter": "width",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "ExportInfo": {
            "description": "Export information for a file.",
            "fields": [
                {
                    "description": "Format to which the file can be exported to.",
                    "parameter": "export_as",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileLockMetadata": {
            "fields": [
                {
                    "description": "True if caller holds the file lock.",
                    "parameter": "is_lockholder",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "The display name of the lock holder.",
                    "parameter": "lockholder_name",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The account ID of the lock holder if known.",
                    "parameter": "lockholder_account_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The timestamp of the lock was created.",
                    "parameter": "created",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "FileMetadata": {
            "fields": [
                {
                    "description": "The last component of the path (including extension). This never contains a slash.",
                    "parameter": "name",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "A unique identifier for the file.",
                    "parameter": "id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "For files, this is the modification time set by the desktop client when the file was added to Dropbox. Since this time is not verified (the Dropbox server stores whatever the desktop client sends up), this should only be used for display purposes (such as sorting) and not, for example, to determine if a file has changed or not.",
                    "parameter": "client_modified",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "The last time the file was modified on Dropbox.",
                    "parameter": "server_modified",
                    "type": {
                        "primitive": "Timestamp"
                    }
                },
                {
                    "description": "A unique identifier for the current revision of a file. This field is the same rev as elsewhere in the API and can be used to detect changes and avoid conflicts.",
                    "parameter": "rev",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The file size in bytes.",
                    "parameter": "size",
                    "type": {
                        "primitive": "UInt64"
                    }
                },
                {
                    "description": "The lowercased full path in the user's Dropbox. This always starts with a slash. This field will be null if the file or folder is not mounted.",
                    "parameter": "path_lower",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "The cased path to be used for display purposes only. In rare instances the casing will not correctly match the user's filesystem, but this behavior will match the path provided in the Core API v1, and at least the last path component will have the correct casing. Changes to only the casing of paths won't be returned by :route:`list_folder/continue`. This field will be null if the file or folder is not mounted.",
                    "parameter": "path_display",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Please use :field:`FileSharingInfo.parent_shared_folder_id` or :field:`FolderSharingInfo.parent_shared_folder_id` instead.",
                    "parameter": "parent_shared_folder_id",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Additional information if the file is a photo or video. This field will not be set on entries returned by :route:`list_folder`, :route:`list_folder/continue`, or :route:`get_thumbnail_batch`, starting December 2, 2019.",
                    "parameter": "media_info",
                    "type": {
                        "optional": {
                            "datatype": "MediaInfo",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "Set if this file is a symlink.",
                    "parameter": "symlink_info",
                    "type": {
                        "optional": {
                            "datatype": "SymlinkInfo",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "Set if this file is contained in a shared folder.",
                    "parameter": "sharing_info",
                    "type": {
                        "optional": {
                            "datatype": "FileSharingInfo",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "If true, file can be downloaded directly; else the file must be exported.",
                    "parameter": "is_downloadable",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "Information about format this file can be exported to. This filed must be set if :field:`is_downloadable` is set to false.",
                    "parameter": "export_info",
                    "type": {
                        "optional": {
                            "datatype": "ExportInfo",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "Additional information if the file has custom properties with the property template specified.",
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
                    "description": "This flag will only be present if include_has_explicit_shared_members  is true in :route:`list_folder` or :route:`get_metadata`. If this  flag is present, it will be true if this file has any explicit shared  members. This is different from sharing_info in that this could be true  in the case where a file has explicit members but is not contained within  a shared folder.",
                    "parameter": "has_explicit_shared_members",
                    "type": {
                        "optional": {
                            "primitive": "Boolean"
                        }
                    }
                },
                {
                    "description": "A hash of the file content. This field can be used to verify data integrity. For more information see our :link:`Content hash https://www.dropbox.com/developers/reference/content-hash` page.",
                    "parameter": "content_hash",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "If present, the metadata associated with the file's current lock.",
                    "parameter": "file_lock_info",
                    "type": {
                        "optional": {
                            "datatype": "FileLockMetadata",
                            "namespace": "files"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "FileSharingInfo": {
            "description": "Sharing info for a file which is contained by a shared folder.",
            "fields": [
                {
                    "description": "True if the file or folder is inside a read-only shared folder.",
                    "parameter": "read_only",
                    "type": {
                        "primitive": "Boolean"
                    }
                },
                {
                    "description": "ID of shared folder that holds this file.",
                    "parameter": "parent_shared_folder_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The last user who modified the file. This field will be null if the user's account has been deleted.",
                    "parameter": "modified_by",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                }
            ],
            "stone_type": "struct"
        },
        "GpsCoordinates": {
            "description": "GPS coordinates for a photo or video.",
            "fields": [
                {
                    "description": "Latitude of the GPS coordinates.",
                    "parameter": "latitude",
                    "type": {
                        "primitive": "Float64"
                    }
                },
                {
                    "description": "Longitude of the GPS coordinates.",
                    "parameter": "longitude",
                    "type": {
                        "primitive": "Float64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "MediaInfo": {
            "fields": [
                {
                    "description": "Indicate the photo/video is still under processing and metadata is not available yet.",
                    "parameter": "pending",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The metadata for the photo/video.",
                    "parameter": "metadata",
                    "type": {
                        "datatype": "MediaMetadata",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "union"
        },
        "MediaMetadata": {
            "description": "Metadata for a photo or video.",
            "fields": [
                {
                    "description": "Dimension of the photo/video.",
                    "parameter": "dimensions",
                    "type": {
                        "optional": {
                            "datatype": "Dimensions",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "The GPS coordinate of the photo/video.",
                    "parameter": "location",
                    "type": {
                        "optional": {
                            "datatype": "GpsCoordinates",
                            "namespace": "files"
                        }
                    }
                },
                {
                    "description": "The timestamp when the photo/video is taken.",
                    "parameter": "time_taken",
                    "type": {
                        "optional": {
                            "primitive": "Timestamp"
                        }
                    }
                }
            ],
            "stone_type": "struct",
            "todo": true
        },
        "SymlinkInfo": {
            "fields": [
                {
                    "description": "The target this symlink points to.",
                    "parameter": "target",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UploadSessionCursor": {
            "fields": [
                {
                    "description": "The upload session ID (returned by :route:`upload_session/start`).",
                    "parameter": "session_id",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The amount of data that has been uploaded so far. We use this to make sure upload data isn't lost or duplicated in the event of a network error.",
                    "parameter": "offset",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UploadSessionFinishArg": {
            "fields": [
                {
                    "description": "Contains the upload session ID and the offset.",
                    "parameter": "cursor",
                    "type": {
                        "datatype": "UploadSessionCursor",
                        "namespace": "files"
                    }
                },
                {
                    "description": "Contains the path and other optional modifiers for the commit.",
                    "parameter": "commit",
                    "type": {
                        "datatype": "CommitInfo",
                        "namespace": "files"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "UploadSessionFinishError": {
            "fields": [
                {
                    "description": "The session arguments are incorrect; the value explains the reason.",
                    "parameter": "lookup_failed",
                    "type": {
                        "datatype": "UploadSessionLookupError",
                        "namespace": "files"
                    }
                },
                {
                    "description": "Unable to save the uploaded contents to a file. Data has already been appended to the upload session. Please retry with empty data body and updated offset.",
                    "parameter": "path",
                    "type": {
                        "datatype": "WriteError",
                        "namespace": "files"
                    }
                },
                {
                    "description": "The supplied property group is invalid. The file has uploaded without property groups.",
                    "parameter": "properties_error",
                    "type": {
                        "datatype": "InvalidPropertyGroupError",
                        "namespace": "file_properties"
                    }
                },
                {
                    "description": "The batch request commits files into too many different shared folders. Please limit your batch request to files contained in a single shared folder.",
                    "parameter": "too_many_shared_folder_targets",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There are too many write operations happening in the user's Dropbox. You should retry uploading this file.",
                    "parameter": "too_many_write_operations",
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
        "UploadSessionLookupError": {
            "fields": [
                {
                    "description": "The upload session ID was not found or has expired. Upload sessions are valid for 48 hours.",
                    "parameter": "not_found",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The specified offset was incorrect. See the value for the correct offset. This error may occur when a previous request was received and processed successfully but the client did not receive the response, e.g. due to a network error.",
                    "parameter": "incorrect_offset",
                    "type": {
                        "datatype": "UploadSessionOffsetError",
                        "namespace": "files"
                    }
                },
                {
                    "description": "You are attempting to append data to an upload session that has already been closed (i.e. committed).",
                    "parameter": "closed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The session must be closed before calling upload_session/finish_batch.",
                    "parameter": "not_closed",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "You can not append to the upload session because the size of a file should not reach the max file size limit (i.e. 350GB).",
                    "parameter": "too_large",
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
        "UploadSessionOffsetError": {
            "fields": [
                {
                    "description": "The offset up to which data has been collected.",
                    "parameter": "correct_offset",
                    "type": {
                        "primitive": "UInt64"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "WriteConflictError": {
            "fields": [
                {
                    "description": "There's a file in the way.",
                    "parameter": "file",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There's a folder in the way.",
                    "parameter": "folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There's a file at an ancestor path, so we couldn't create the required parent folders.",
                    "parameter": "file_ancestor",
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
        "WriteError": {
            "fields": [
                {
                    "description": "The given path does not satisfy the required path format. Please refer to the :link:`Path formats documentation https://www.dropbox.com/developers/documentation/http/documentation#path-formats` for more information.",
                    "parameter": "malformed_path",
                    "type": {
                        "optional": {
                            "primitive": "String"
                        }
                    }
                },
                {
                    "description": "Couldn't write to the target path because there was something in the way.",
                    "parameter": "conflict",
                    "type": {
                        "datatype": "WriteConflictError",
                        "namespace": "files"
                    }
                },
                {
                    "description": "The user doesn't have permissions to write to the target location.",
                    "parameter": "no_write_permission",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The user doesn't have enough available space (bytes) to write more data.",
                    "parameter": "insufficient_space",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "Dropbox will not save the file or folder because of its name.",
                    "parameter": "disallowed_name",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "This endpoint cannot move or delete team folders.",
                    "parameter": "team_folder",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "There are too many write operations in user's Dropbox. Please retry this request.",
                    "parameter": "too_many_write_operations",
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
