import React from 'react'
import Code from './Code'

export default function ShellExample(props) {
    const {namespace, endpoint, shellExample} = props
    return (
        <Code>
            curl -X POST https://api.dropboxapi.com/2/{namespace}/{endpoint} \<br />
            --header "Authorization: Bearer " \<br />
            --header "Content-Type: application/json" \<br />
            --data "{shellExample}"
        </Code>
    );
}