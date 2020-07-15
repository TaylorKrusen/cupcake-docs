export default {"files": {"SearchV2Result": {"stone_type": "struct", "fields": [{"parameter": "matches", "type": {"list": {"datatype": "SearchMatchV2", "namespace": "files"}}, "description": "A list (possibly empty) of matches for the query."}, {"parameter": "has_more", "type": {"primitive": "Boolean"}, "description": "Used for paging. If true, indicates there is another page of results available that can be fetched by calling :route:`search/continue:2` with the cursor."}, {"parameter": "cursor", "type": {"optional": {"primitive": "String"}}, "description": "Pass the cursor into :route:`search/continue:2` to fetch the next page of results."}]}, "SearchError": {"stone_type": "open_union", "fields": [{"parameter": "path", "type": {"datatype": "LookupError", "namespace": "files"}}, {"parameter": "invalid_argument", "type": {"optional": {"primitive": "String"}}}, {"parameter": "internal_error", "type": {"primitive": "Void"}, "description": "Something went wrong, please try again."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "SearchMatchV2": {"stone_type": "struct", "fields": [{"parameter": "metadata", "type": {"datatype": "MetadataV2", "namespace": "files"}, "description": "The metadata for the matched file or folder."}, {"parameter": "highlight_spans", "type": {"optional": {"list": {"datatype": "HighlightSpan", "namespace": "files"}}}, "description": "The list of HighlightSpan determines which parts of the file title should be highlighted."}]}, "MetadataV2": {"stone_type": "open_union", "fields": [{"parameter": "metadata", "type": {"datatype": "Metadata", "namespace": "files"}}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "Metadata for a file, folder or other resource types."}, "LookupError": {"stone_type": "open_union", "fields": [{"parameter": "malformed_path", "type": {"optional": {"primitive": "String"}}, "description": "The given path does not satisfy the required path format. Please refer to the :link:`Path formats documentation https://www.dropbox.com/developers/documentation/http/documentation#path-formats` for more information."}, {"parameter": "not_found", "type": {"primitive": "Void"}, "description": "There is nothing at the given path."}, {"parameter": "not_file", "type": {"primitive": "Void"}, "description": "We were expecting a file, but the given path refers to something that isn't a file."}, {"parameter": "not_folder", "type": {"primitive": "Void"}, "description": "We were expecting a folder, but the given path refers to something that isn't a folder."}, {"parameter": "restricted_content", "type": {"primitive": "Void"}, "description": "The file cannot be transferred because the content is restricted.  For example, sometimes there are legal restrictions due to copyright claims."}, {"parameter": "unsupported_content_type", "type": {"primitive": "Void"}, "description": "This operation is not supported for this content type."}, {"parameter": "locked", "type": {"primitive": "Void"}, "description": "The given path is locked."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "HighlightSpan": {"stone_type": "struct", "fields": [{"parameter": "highlight_str", "type": {"primitive": "String"}, "description": "String to be determined whether it should be highlighted or not."}, {"parameter": "is_highlighted", "type": {"primitive": "Boolean"}, "description": "The string should be highlighted or not."}]}, "SearchV2ContinueArg": {"stone_type": "struct", "fields": [{"parameter": "cursor", "type": {"primitive": "String"}, "description": "The cursor returned by your last call to :route:`search:2`. Used to fetch the next page of results."}]}, "Metadata": {"stone_type": "struct", "fields": [{"parameter": "name", "type": {"primitive": "String"}, "description": "The last component of the path (including extension). This never contains a slash."}, {"parameter": "path_lower", "type": {"optional": {"primitive": "String"}}, "description": "The lowercased full path in the user's Dropbox. This always starts with a slash. This field will be null if the file or folder is not mounted."}, {"parameter": "path_display", "type": {"optional": {"primitive": "String"}}, "description": "The cased path to be used for display purposes only. In rare instances the casing will not correctly match the user's filesystem, but this behavior will match the path provided in the Core API v1, and at least the last path component will have the correct casing. Changes to only the casing of paths won't be returned by :route:`list_folder/continue`. This field will be null if the file or folder is not mounted."}, {"parameter": "parent_shared_folder_id", "type": {"optional": {"primitive": "String"}}, "description": "Please use :field:`FileSharingInfo.parent_shared_folder_id` or :field:`FolderSharingInfo.parent_shared_folder_id` instead."}], "todo": true, "description": "Metadata for a file or folder."}}}
