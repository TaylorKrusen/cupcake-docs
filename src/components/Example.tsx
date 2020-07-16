import React from 'react';
import Code from './Code';

import '../scss/example.scss';

export default function Example(props) {
  const {label, content} = props;
  return (
    <div className="example-container">
      <div className="example-label">Example: {label}</div>
      <Code>{JSON.stringify(content, null, 2)}</Code>
    </div>
  );
}
