import React from 'react';
import {useComponents} from 'docz';

import DeprecatedWarning from './DeprecatedWarning';
import AuthTypes from './AuthTypes';
import ShellExample from './ShellExample';
import Code from './Code';
import OtherTypeExplaination from './OtherTypeExplaination';
import Description from './Description';

import '../scss/styles.scss';

export default function OtherEndpoint({frontmatter, metadata}) {
  const {route, endpoint, menu: namespace} = frontmatter;
  const {deprecated, deprecatedBy, description, authTypes, example, parameters} = metadata;
  const components = useComponents();
  const url = `https://api.dropboxapi.com/2${route}`;
  return (
    <>
      {deprecated && <DeprecatedWarning deprecatedBy={deprecatedBy} />}
      <h1>{route}</h1>
      <Description>{description}</Description>
      <components.h3>Authentication</components.h3>
      <p>
        <AuthTypes authTypes={authTypes} />
      </p>
      <components.h3>URL Structure</components.h3>
      <Code>{url}</Code>
      <components.h3>Example</components.h3>
      <ShellExample namespace={namespace} endpoint={endpoint} shellExample={example} />
      <components.h3>Parameters</components.h3>
      <OtherTypeExplaination typeInfo={parameters} />
      <components.h3>Returns</components.h3>
      <p>stuff</p>
      <components.h3>Errors</components.h3>
      <p>stuff</p>
    </>
  );
}
