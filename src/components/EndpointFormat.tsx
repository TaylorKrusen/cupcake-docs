import React from 'react';
import {Link} from 'docz';

const formatMap: Record<string,string> = {
  "rpc": "RPC",
  "download": "Content-download",
  "upload": "Content-upload",
}

export default function EndpointFormat(props: {endpointFormat: string}) {
  let {endpointFormat} = props;
  endpointFormat = formatMap[endpointFormat] || endpointFormat;
  return (
    <Link to="https://www.dropbox.com/developers/documentation/http/documentation#formats">
      {endpointFormat}
    </Link>
  );
}
