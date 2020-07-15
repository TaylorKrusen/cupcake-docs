export default {"cloud_docs": {"RenameError": {"stone_type": "struct", "fields": [{"parameter": "rename_error_tag", "type": {"optional": {"datatype": "rename_error_tag_union", "namespace": "cloud_docs"}}}]}, "rename_error_tag_union": {"stone_type": "open_union", "fields": [{"parameter": "rename_error", "type": {"datatype": "RenameErrorTag", "namespace": "cloud_docs"}}, {"parameter": "generic_error", "type": {"datatype": "GenericErrorTag", "namespace": "cloud_docs"}}, {"parameter": "locking_error", "type": {"datatype": "LockingErrorTag", "namespace": "cloud_docs"}}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "RenameArg": {"stone_type": "struct", "fields": [{"parameter": "file_id", "type": {"primitive": "String"}, "description": "The API ID (\"id:...\") associated with the Cloud Doc"}, {"parameter": "title", "type": {"primitive": "String"}, "description": "The new title of the doc, excluding extension"}]}, "RenameResult": {"stone_type": "struct", "fields": [{"parameter": "title", "type": {"primitive": "String"}, "description": "The updated title of the doc without extension, which could be different from the supplied title in the request because Dropbox may remove/replace charaters that are not supported in Dropbox Filesystem."}]}, "GenericErrorTag": {"stone_type": "open_union", "fields": [{"parameter": "invalid_argument", "type": {"primitive": "Void"}, "description": "Invalid argument supplied."}, {"parameter": "unauthenticated", "type": {"primitive": "Void"}, "description": "User is unauthenticated."}, {"parameter": "permission_denied", "type": {"primitive": "Void"}, "description": "User does not have access to the specified doc."}, {"parameter": "doc_not_found", "type": {"primitive": "Void"}, "description": "Doc could not be found based on the supplied doc ID."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "RenameErrorTag": {"stone_type": "open_union", "fields": [{"parameter": "invalid_title", "type": {"primitive": "Void"}, "description": "The supplied title is invalid, e.g. the length of the title is longer than max length (255 characters); the title contains illegal characters."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "LockingErrorTag": {"stone_type": "open_union", "fields": [{"parameter": "conflict", "type": {"primitive": "Void"}, "description": "A lock on the doc is held by another editor"}, {"parameter": "other", "type": {"primitive": "Void"}}]}}}