import React, { useMemo } from "react";
import endpoint_types from '../stone-types/endpoint-types'


export default function GeneratedTypeExplanation({namespace, datatype}) {
    typeInfo = endpoint_types[namespace][datatype]
    const mdx = useMdx()
    console.log(mdx, namespace, datatype)
    const {namespace, datatype} = props
    const mdxNode = useMemo(() => mdx.find(x => x.namespace === namespace && x.dataname === datatype), [namespace, datatype, mdx])
    return <MDXRenderer {...props} generatedTypeComponent={GeneratedTypeExplanation}>{mdxNode.body}</MDXRenderer>
}