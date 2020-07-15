export default {"files": {"DeleteBatchLaunch": {"stone_type": "open_union", "fields": [{"parameter": "async_job_id", "type": {"primitive": "String"}, "description": "This response indicates that the processing is asynchronous. The string is an id that can be used to obtain the status of the asynchronous job."}, {"parameter": "complete", "type": {"datatype": "DeleteBatchResult", "namespace": "files"}}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "Result returned by :route:`delete_batch` that may either launch an asynchronous job or complete synchronously."}, "DeleteBatchResult": {"stone_type": "struct", "fields": [{"parameter": "entries", "type": {"list": {"datatype": "DeleteBatchResultEntry", "namespace": "files"}}, "description": "Each entry in :field:`DeleteBatchArg.entries` will appear at the same position inside :field:`DeleteBatchResult.entries`."}]}, "DeleteBatchResultEntry": {"stone_type": "union", "fields": [{"parameter": "success", "type": {"datatype": "DeleteBatchResultData", "namespace": "files"}}, {"parameter": "failure", "type": {"datatype": "DeleteError", "namespace": "files"}}]}, "DeleteArg": {"stone_type": "struct", "fields": [{"parameter": "path", "type": {"primitive": "String"}, "description": "Path in the user's Dropbox to delete."}, {"parameter": "parent_rev", "type": {"optional": {"primitive": "String"}}, "description": "Perform delete if given \"rev\" matches the existing file's latest \"rev\". This field does not support deleting a folder."}]}, "DeleteBatchArg": {"stone_type": "struct", "fields": [{"parameter": "entries", "type": {"list": {"datatype": "DeleteArg", "namespace": "files"}}}]}, "WriteError": {"stone_type": "open_union", "fields": [{"parameter": "malformed_path", "type": {"optional": {"primitive": "String"}}, "description": "The given path does not satisfy the required path format. Please refer to the :link:`Path formats documentation https://www.dropbox.com/developers/documentation/http/documentation#path-formats` for more information."}, {"parameter": "conflict", "type": {"datatype": "WriteConflictError", "namespace": "files"}, "description": "Couldn't write to the target path because there was something in the way."}, {"parameter": "no_write_permission", "type": {"primitive": "Void"}, "description": "The user doesn't have permissions to write to the target location."}, {"parameter": "insufficient_space", "type": {"primitive": "Void"}, "description": "The user doesn't have enough available space (bytes) to write more data."}, {"parameter": "disallowed_name", "type": {"primitive": "Void"}, "description": "Dropbox will not save the file or folder because of its name."}, {"parameter": "team_folder", "type": {"primitive": "Void"}, "description": "This endpoint cannot move or delete team folders."}, {"parameter": "too_many_write_operations", "type": {"primitive": "Void"}, "description": "There are too many write operations in user's Dropbox. Please retry this request."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "WriteConflictError": {"stone_type": "open_union", "fields": [{"parameter": "file", "type": {"primitive": "Void"}, "description": "There's a file in the way."}, {"parameter": "folder", "type": {"primitive": "Void"}, "description": "There's a folder in the way."}, {"parameter": "file_ancestor", "type": {"primitive": "Void"}, "description": "There's a file at an ancestor path, so we couldn't create the required parent folders."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "DeleteBatchResultData": {"stone_type": "struct", "fields": [{"parameter": "metadata", "type": {"datatype": "Metadata", "namespace": "files"}, "description": "Metadata of the deleted object."}]}, "DeleteError": {"stone_type": "open_union", "fields": [{"parameter": "path_lookup", "type": {"datatype": "LookupError", "namespace": "files"}}, {"parameter": "path_write", "type": {"datatype": "WriteError", "namespace": "files"}}, {"parameter": "too_many_write_operations", "type": {"primitive": "Void"}, "description": "There are too many write operations in user's Dropbox. Please retry this request."}, {"parameter": "too_many_files", "type": {"primitive": "Void"}, "description": "There are too many files in one request. Please retry with fewer files."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "LookupError": {"stone_type": "open_union", "fields": [{"parameter": "malformed_path", "type": {"optional": {"primitive": "String"}}, "description": "The given path does not satisfy the required path format. Please refer to the :link:`Path formats documentation https://www.dropbox.com/developers/documentation/http/documentation#path-formats` for more information."}, {"parameter": "not_found", "type": {"primitive": "Void"}, "description": "There is nothing at the given path."}, {"parameter": "not_file", "type": {"primitive": "Void"}, "description": "We were expecting a file, but the given path refers to something that isn't a file."}, {"parameter": "not_folder", "type": {"primitive": "Void"}, "description": "We were expecting a folder, but the given path refers to something that isn't a folder."}, {"parameter": "restricted_content", "type": {"primitive": "Void"}, "description": "The file cannot be transferred because the content is restricted.  For example, sometimes there are legal restrictions due to copyright claims."}, {"parameter": "unsupported_content_type", "type": {"primitive": "Void"}, "description": "This operation is not supported for this content type."}, {"parameter": "locked", "type": {"primitive": "Void"}, "description": "The given path is locked."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "Metadata": {"stone_type": "struct", "fields": [{"parameter": "name", "type": {"primitive": "String"}, "description": "The last component of the path (including extension). This never contains a slash."}, {"parameter": "path_lower", "type": {"optional": {"primitive": "String"}}, "description": "The lowercased full path in the user's Dropbox. This always starts with a slash. This field will be null if the file or folder is not mounted."}, {"parameter": "path_display", "type": {"optional": {"primitive": "String"}}, "description": "The cased path to be used for display purposes only. In rare instances the casing will not correctly match the user's filesystem, but this behavior will match the path provided in the Core API v1, and at least the last path component will have the correct casing. Changes to only the casing of paths won't be returned by :route:`list_folder/continue`. This field will be null if the file or folder is not mounted."}, {"parameter": "parent_shared_folder_id", "type": {"optional": {"primitive": "String"}}, "description": "Please use :field:`FileSharingInfo.parent_shared_folder_id` or :field:`FolderSharingInfo.parent_shared_folder_id` instead."}], "todo": true, "description": "Metadata for a file or folder."}}}
