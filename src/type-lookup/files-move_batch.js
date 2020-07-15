export default {"files": {"MoveIntoVaultError": {"stone_type": "open_union", "fields": [{"parameter": "is_shared_folder", "type": {"primitive": "Void"}, "description": "Moving shared folder into Vault is not allowed."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "RelocationError": {"stone_type": "open_union", "fields": [{"parameter": "from_lookup", "type": {"datatype": "LookupError", "namespace": "files"}}, {"parameter": "from_write", "type": {"datatype": "WriteError", "namespace": "files"}}, {"parameter": "to", "type": {"datatype": "WriteError", "namespace": "files"}}, {"parameter": "cant_copy_shared_folder", "type": {"primitive": "Void"}, "description": "Shared folders can't be copied."}, {"parameter": "cant_nest_shared_folder", "type": {"primitive": "Void"}, "description": "Your move operation would result in nested shared folders.  This is not allowed."}, {"parameter": "cant_move_folder_into_itself", "type": {"primitive": "Void"}, "description": "You cannot move a folder into itself."}, {"parameter": "too_many_files", "type": {"primitive": "Void"}, "description": "The operation would involve more than 10,000 files and folders."}, {"parameter": "duplicated_or_nested_paths", "type": {"primitive": "Void"}, "description": "There are duplicated/nested paths among :field:`RelocationArg.from_path` and :field:`RelocationArg.to_path`."}, {"parameter": "cant_transfer_ownership", "type": {"primitive": "Void"}, "description": "Your move operation would result in an ownership transfer. You may reissue the request with the field :field:`RelocationArg.allow_ownership_transfer` to true."}, {"parameter": "insufficient_quota", "type": {"primitive": "Void"}, "description": "The current user does not have enough space to move or copy the files."}, {"parameter": "internal_error", "type": {"primitive": "Void"}, "description": "Something went wrong with the job on Dropbox's end. You'll need to verify that the action you were taking succeeded, and if not, try again. This should happen very rarely."}, {"parameter": "cant_move_shared_folder", "type": {"primitive": "Void"}, "description": "Can't move the shared folder to the given destination."}, {"parameter": "cant_move_into_vault", "type": {"datatype": "MoveIntoVaultError", "namespace": "files"}, "description": "Some content cannot be moved into Vault under certain circumstances, see detailed error."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "WriteConflictError": {"stone_type": "open_union", "fields": [{"parameter": "file", "type": {"primitive": "Void"}, "description": "There's a file in the way."}, {"parameter": "folder", "type": {"primitive": "Void"}, "description": "There's a folder in the way."}, {"parameter": "file_ancestor", "type": {"primitive": "Void"}, "description": "There's a file at an ancestor path, so we couldn't create the required parent folders."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "RelocationPath": {"stone_type": "struct", "fields": [{"parameter": "from_path", "type": {"primitive": "String"}, "description": "Path in the user's Dropbox to be copied or moved."}, {"parameter": "to_path", "type": {"primitive": "String"}, "description": "Path in the user's Dropbox that is the destination."}]}, "MoveBatchArg": {"stone_type": "struct", "fields": [{"parameter": "entries", "type": {"list": {"datatype": "RelocationPath", "namespace": "files"}}, "description": "List of entries to be moved or copied. Each entry is :type:`RelocationPath`."}, {"parameter": "autorename", "type": {"primitive": "Boolean"}, "description": "If there's a conflict with any file, have the Dropbox server try to autorename that file to avoid the conflict."}, {"parameter": "allow_ownership_transfer", "type": {"primitive": "Boolean"}, "description": "Allow moves by owner even if it would result in an ownership transfer for the content being moved. This does not apply to copies."}]}, "RelocationBatchV2Result": {"stone_type": "struct", "fields": [{"parameter": "entries", "type": {"list": {"datatype": "RelocationBatchResultEntry", "namespace": "files"}}, "description": "Each entry in CopyBatchArg.entries or :field:`MoveBatchArg.entries` will appear at the same position inside :field:`RelocationBatchV2Result.entries`."}]}, "RelocationBatchErrorEntry": {"stone_type": "open_union", "fields": [{"parameter": "relocation_error", "type": {"datatype": "RelocationError", "namespace": "files"}, "description": "User errors that retry won't help."}, {"parameter": "internal_error", "type": {"primitive": "Void"}, "description": "Something went wrong with the job on Dropbox's end. You'll need to verify that the action you were taking succeeded, and if not, try again. This should happen very rarely."}, {"parameter": "too_many_write_operations", "type": {"primitive": "Void"}, "description": "There are too many write operations in user's Dropbox. Please retry this request."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "WriteError": {"stone_type": "open_union", "fields": [{"parameter": "malformed_path", "type": {"optional": {"primitive": "String"}}, "description": "The given path does not satisfy the required path format. Please refer to the :link:`Path formats documentation https://www.dropbox.com/developers/documentation/http/documentation#path-formats` for more information."}, {"parameter": "conflict", "type": {"datatype": "WriteConflictError", "namespace": "files"}, "description": "Couldn't write to the target path because there was something in the way."}, {"parameter": "no_write_permission", "type": {"primitive": "Void"}, "description": "The user doesn't have permissions to write to the target location."}, {"parameter": "insufficient_space", "type": {"primitive": "Void"}, "description": "The user doesn't have enough available space (bytes) to write more data."}, {"parameter": "disallowed_name", "type": {"primitive": "Void"}, "description": "Dropbox will not save the file or folder because of its name."}, {"parameter": "team_folder", "type": {"primitive": "Void"}, "description": "This endpoint cannot move or delete team folders."}, {"parameter": "too_many_write_operations", "type": {"primitive": "Void"}, "description": "There are too many write operations in user's Dropbox. Please retry this request."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "RelocationBatchResultEntry": {"stone_type": "open_union", "fields": [{"parameter": "success", "type": {"datatype": "Metadata", "namespace": "files"}}, {"parameter": "failure", "type": {"datatype": "RelocationBatchErrorEntry", "namespace": "files"}}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "RelocationBatchV2Launch": {"stone_type": "union", "fields": [{"parameter": "async_job_id", "type": {"primitive": "String"}, "description": "This response indicates that the processing is asynchronous. The string is an id that can be used to obtain the status of the asynchronous job."}, {"parameter": "complete", "type": {"datatype": "RelocationBatchV2Result", "namespace": "files"}}], "description": "Result returned by :route:`copy_batch:2` or :route:`move_batch:2` that may either launch an asynchronous job or complete synchronously."}, "LookupError": {"stone_type": "open_union", "fields": [{"parameter": "malformed_path", "type": {"optional": {"primitive": "String"}}, "description": "The given path does not satisfy the required path format. Please refer to the :link:`Path formats documentation https://www.dropbox.com/developers/documentation/http/documentation#path-formats` for more information."}, {"parameter": "not_found", "type": {"primitive": "Void"}, "description": "There is nothing at the given path."}, {"parameter": "not_file", "type": {"primitive": "Void"}, "description": "We were expecting a file, but the given path refers to something that isn't a file."}, {"parameter": "not_folder", "type": {"primitive": "Void"}, "description": "We were expecting a folder, but the given path refers to something that isn't a folder."}, {"parameter": "restricted_content", "type": {"primitive": "Void"}, "description": "The file cannot be transferred because the content is restricted.  For example, sometimes there are legal restrictions due to copyright claims."}, {"parameter": "unsupported_content_type", "type": {"primitive": "Void"}, "description": "This operation is not supported for this content type."}, {"parameter": "locked", "type": {"primitive": "Void"}, "description": "The given path is locked."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "Metadata": {"stone_type": "struct", "fields": [{"parameter": "name", "type": {"primitive": "String"}, "description": "The last component of the path (including extension). This never contains a slash."}, {"parameter": "path_lower", "type": {"optional": {"primitive": "String"}}, "description": "The lowercased full path in the user's Dropbox. This always starts with a slash. This field will be null if the file or folder is not mounted."}, {"parameter": "path_display", "type": {"optional": {"primitive": "String"}}, "description": "The cased path to be used for display purposes only. In rare instances the casing will not correctly match the user's filesystem, but this behavior will match the path provided in the Core API v1, and at least the last path component will have the correct casing. Changes to only the casing of paths won't be returned by :route:`list_folder/continue`. This field will be null if the file or folder is not mounted."}, {"parameter": "parent_shared_folder_id", "type": {"optional": {"primitive": "String"}}, "description": "Please use :field:`FileSharingInfo.parent_shared_folder_id` or :field:`FolderSharingInfo.parent_shared_folder_id` instead."}], "todo": true, "description": "Metadata for a file or folder."}}}
