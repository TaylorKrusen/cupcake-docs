import React from 'react';
import Code from './Code';

import '../scss/shell_example.scss';

export default function ShellExample(props: {shellExample: string}) {
  const {shellExample} = props;
  if (!shellExample) {
    return <Code>Sorry, no curl example is currently available for this endpoint</Code>
  }

  const lines = shellExample.split('&nbsp').join(' ').split('\\n');
  const shellToRender = lines.map((line, idx) => {
    return <div key={`shell-example-${idx}`}>{line}</div>;
  });
  return <Code>{shellToRender}</Code>
}