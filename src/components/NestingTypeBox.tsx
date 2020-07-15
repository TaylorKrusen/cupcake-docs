import React from 'react';

const style = {
  border: '1px solid slategray',
  borderRadius: '5px',
  padding: '10px',
};

export default function NestingTypeBox({children, visible}) {
  // not even there when invisible
  if (!visible) return null;
  return <div style={style}>{children}</div>;
}
