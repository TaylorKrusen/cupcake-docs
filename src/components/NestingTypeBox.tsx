import React from 'react';

export default function NestingTypeBox({children, visible}) {
  const className = visible ? 'nesting-type-box' : 'nesting-type-box hidden';
  return <div className={className}>{children}</div>;
}
