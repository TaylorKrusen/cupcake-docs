import React from 'react'
import {useComponents} from 'docz'

import DeprecatedWarning from './DeprecatedWarning'
import AuthTypes from './AuthTypes'
import ShellExample from './ShellExample'
import Code from './Code'
import TypeExplanation from './TypeExplanation'

export default function Endpoint(props) {
    const {namespace, route, isDeprecated, deprecatedBy, description, authTypes, shellExample, paramType, resultType, errorType, children} = props
    const components = useComponents()
    const url = "https://api.dropboxapi.com/2/" + namespace + "/" + route
    return <>
        {isDeprecated ? <DeprecatedWarning deprecatedBy={deprecatedBy} /> : null}
        <h1>/{namespace}/{route}</h1>
        <p>{description}</p>
        <components.h3>Authentication</components.h3>
        <p><AuthTypes authTypes={authTypes} /></p>
        <components.h3>URL Structure</components.h3>
        <Code>{url}</Code>
        <components.h3>Example</components.h3>
        <ShellExample namespace={namespace} route={route} shellExample={shellExample} />
        <components.h3>Parameters</components.h3>
        <TypeExplanation type={paramType} />
        <components.h3>Returns</components.h3>
        <components.h3>Errors</components.h3>
        <p>{children}</p>
    </>
}

