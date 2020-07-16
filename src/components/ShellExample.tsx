import React from 'react';
import Code from './Code';

import '../scss/shell_example.scss';

export default function ShellExample(props) {
  const {namespace, endpoint, shellExample} = props;
  const getAccessToken = '<get access token>';
  return (
    <Code>
      curl -X POST https://api.dropboxapi.com/2/{namespace}/{endpoint} \<br />
      --header "Authorization: Bearer <span className="get-access-token">{getAccessToken}</span> " \
      <br />
      --header "Content-Type: application/json" \<br />
      --data "{shellExample}"
    </Code>
  );
}
