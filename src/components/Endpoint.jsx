import React from 'react'
import {useComponents} from 'docz'

import DeprecatedWarning from './DeprecatedWarning'
import AuthTypes from './AuthTypes'
import ShellExample from './ShellExample'
import Code from './Code'
import TypeExplanation from './TypeExplanation'
import Description from './Description'

import endpoint_types from '../stone-types/alltypes'

import "../scss/styles.scss"

export default function Endpoint(props) {
    const {namespace, endpoint, route, isDeprecated, deprecatedBy, description, authTypes, shellExample, paramType} = props.endpointProps;
    const components = useComponents();
    const url = `https://api.dropboxapi.com/2${route}`;
    return <>
        {isDeprecated && <DeprecatedWarning deprecatedBy={deprecatedBy} />}
        <h1>{route}</h1>
        <Description>{description}</Description>
        <components.h3>Authentication</components.h3>
        <p><AuthTypes authTypes={authTypes} /></p>
        <components.h3>URL Structure</components.h3>
        <Code>{url}</Code>
        <components.h3>Example</components.h3>
        <ShellExample namespace={namespace} endpoint={endpoint} shellExample={shellExample} />
        <components.h3>Parameters</components.h3>
        <TypeExplanation namespace={paramType.namespace} datatype={paramType.datatype} typeInfo={endpoint_types} />
        <components.h3>Returns</components.h3>
        <p>stuff</p>
        <components.h3>Errors</components.h3>
        <p>stuff</p>
    </>
}

