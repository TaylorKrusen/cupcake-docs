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
        "LookupError": {
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
                    "description": "This operation is not supported for this content type.",
                    "parameter": "unsupported_content_type",
                    "type": {
                        "primitive": "Void"
                    }
                },
                {
                    "description": "The given path is locked.",
                    "parameter": "locked",
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
        "RestoreArg": {
            "fields": [
                {
                    "description": "The path to save the restored file.",
                    "parameter": "path",
                    "type": {
                        "primitive": "String"
                    }
                },
                {
                    "description": "The revision to restore.",
                    "parameter": "rev",
                    "type": {
                        "primitive": "String"
                    }
                }
            ],
            "stone_type": "struct"
        },
        "RestoreError": {
            "fields": [
                {
                    "description": "An error occurs when downloading metadata for the file.",
                    "parameter": "path_lookup",
                    "type": {
                        "datatype": "LookupError",
                        "namespace": "files"
                    }
                },
                {
                    "description": "An error occurs when trying to restore the file to that path.",
                    "parameter": "path_write",
                    "type": {
                        "datatype": "WriteError",
                        "namespace": "files"
                    }
                },
                {
                    "description": "The revision is invalid. It may not exist.",
                    "parameter": "invalid_revision",
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
        }
    }
}
