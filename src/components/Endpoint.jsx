import React from 'react'
import {useComponents} from 'docz'

import DeprecatedWarning from './DeprecatedWarning'
import AuthTypes from './AuthTypes'
import ShellExample from './ShellExample'
import Code from './Code'
import TypeExplanation from './TypeExplanation'

import endpoint_types from '../stone-types/alltypes'

export default function Endpoint(props) {
    const {namespace, route, isDeprecated, deprecatedBy, description, authTypes, shellExample, paramType, resultType, errorType, children} = props
    const components = useComponents()
    console.log(components)
    const url = "https://api.dropboxapi.com/2/" + namespace + "/" + route
    return <>
        {deprecatedBy ? <DeprecatedWarning deprecatedBy={deprecatedBy} /> : null}
        <h1>/{namespace}/{route}</h1>
        <p>{description}</p>
        <h3>Authentication</h3>
        <p><AuthTypes authTypes={authTypes} /></p>
        <h3>URL Structure</h3>
        <Code>{url}</Code>
        <h3>Example</h3>
        <ShellExample namespace={namespace} route={route} shellExample={shellExample} />
        <components.h3>Parameters</components.h3>
        <TypeExplanation namespace={paramType.namespace} datatype={paramType.datatype} typeInfo={endpoint_types} />
        <components.h3>Returns</components.h3>
        <components.h3>Errors</components.h3>
        <p>{children}</p>
    </>
}

