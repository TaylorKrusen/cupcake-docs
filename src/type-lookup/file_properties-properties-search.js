export default {"file_properties": {"TemplateFilter": {"stone_type": "open_union", "fields": [{"parameter": "filter_some", "type": {"list": {"primitive": "String"}}, "description": "Only templates with an ID in the supplied list will be returned (a subset of templates will be returned)."}, {"parameter": "other", "type": {"primitive": "Void"}}, {"parameter": "filter_none", "type": {"primitive": "Void"}, "description": "No templates will be filtered from the result (all templates will be returned)."}]}, "PropertiesSearchMatch": {"stone_type": "struct", "fields": [{"parameter": "id", "type": {"primitive": "String"}, "description": "The ID for the matched file or folder."}, {"parameter": "path", "type": {"primitive": "String"}, "description": "The path for the matched file or folder."}, {"parameter": "is_deleted", "type": {"primitive": "Boolean"}, "description": "Whether the file or folder is deleted."}, {"parameter": "property_groups", "type": {"list": {"datatype": "PropertyGroup", "namespace": "file_properties"}}, "description": "List of custom property groups associated with the file."}]}, "PropertiesSearchMode": {"stone_type": "open_union", "fields": [{"parameter": "field_name", "type": {"primitive": "String"}, "description": "Search for a value associated with this field name."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "LogicalOperator": {"stone_type": "open_union", "fields": [{"parameter": "or_operator", "type": {"primitive": "Void"}, "description": "Append a query with an \"or\" operator."}, {"parameter": "other", "type": {"primitive": "Void"}}], "description": "Logical operator to join search queries together."}, "PropertiesSearchError": {"stone_type": "open_union", "fields": [{"parameter": "property_group_lookup", "type": {"datatype": "LookUpPropertiesError", "namespace": "file_properties"}}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "LookUpPropertiesError": {"stone_type": "open_union", "fields": [{"parameter": "property_group_not_found", "type": {"primitive": "Void"}, "description": "No property group was found."}, {"parameter": "other", "type": {"primitive": "Void"}}]}, "PropertyGroup": {"stone_type": "struct", "fields": [{"parameter": "template_id", "type": {"primitive": "String"}, "description": "A unique identifier for the associated template."}, {"parameter": "fields", "type": {"list": {"datatype": "PropertyField", "namespace": "file_properties"}}, "description": "The actual properties associated with the template. There can be up to 32 property types per template."}], "description": "A subset of the property fields described by the corresponding :type:`PropertyGroupTemplate`. Properties are always added to a Dropbox file as a :type:`PropertyGroup`. The possible key names and value types in this group are defined by the corresponding :type:`PropertyGroupTemplate`."}, "PropertiesSearchQuery": {"stone_type": "struct", "fields": [{"parameter": "query", "type": {"primitive": "String"}, "description": "The property field value for which to search across templates."}, {"parameter": "mode", "type": {"datatype": "PropertiesSearchMode", "namespace": "file_properties"}, "description": "The mode with which to perform the search."}, {"parameter": "logical_operator", "type": {"datatype": "LogicalOperator", "namespace": "file_properties"}, "description": "The logical operator with which to append the query."}]}, "PropertiesSearchArg": {"stone_type": "struct", "fields": [{"parameter": "queries", "type": {"list": {"datatype": "PropertiesSearchQuery", "namespace": "file_properties"}}, "description": "Queries to search."}, {"parameter": "template_filter", "type": {"datatype": "TemplateFilter", "namespace": "file_properties"}, "description": "Filter results to contain only properties associated with these template IDs."}]}, "PropertyField": {"stone_type": "struct", "fields": [{"parameter": "name", "type": {"primitive": "String"}, "description": "Key of the property field associated with a file and template. Keys can be up to 256 bytes."}, {"parameter": "value", "type": {"primitive": "String"}, "description": "Value of the property field associated with a file and template. Values can be up to 1024 bytes."}], "description": "Raw key/value data to be associated with a Dropbox file. Property fields are added to Dropbox files as a :type:`PropertyGroup`."}, "PropertiesSearchResult": {"stone_type": "struct", "fields": [{"parameter": "matches", "type": {"list": {"datatype": "PropertiesSearchMatch", "namespace": "file_properties"}}, "description": "A list (possibly empty) of matches for the query."}, {"parameter": "cursor", "type": {"optional": {"primitive": "String"}}, "description": "Pass the cursor into :route:`properties/search/continue` to continue to receive search results. Cursor will be null when there are no more results."}]}}}
