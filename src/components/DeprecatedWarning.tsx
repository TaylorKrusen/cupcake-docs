import React from 'react';
import Warning from './Warning';

export default function ({deprecatedBy}: {deprecatedBy: string}) {
  let deprecatedByMsg;
  if (deprecatedBy) {
    deprecatedByMsg = <span>Use {deprecatedBy} instead.</span>;
  }
  return <Warning>WARNING: This API is deprecated. {deprecatedByMsg}</Warning>;
}
