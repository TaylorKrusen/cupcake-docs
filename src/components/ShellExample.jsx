import React from 'react'
import { useComponents } from 'docz'
import Code from './Code'

export default function ShellExample(props) {
    const {namespace, route, shellExample} = props
    const components = useComponents()
    return <Code>
    curl -X POST https://api.dropboxapi.com/2/{namespace}/{route} \<br />
    --header "Authorization: Bearer " \<br />
    --header "Content-Type: application/json" \<br />
    --data "{shellExample}"
    </Code>
}