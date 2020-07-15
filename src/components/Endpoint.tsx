import React from 'react';
import {useComponents} from 'docz';

import DeprecatedWarning from './DeprecatedWarning';
import AuthTypes from './AuthTypes';
import ShellExample from './ShellExample';
import Code from './Code';
import TypeExplanation from './TypeExplanation';
import Description from './Description';

import allTypes from '../stone-types/alltypes';

import '../scss/styles.scss';

import {StoneTypeReference, StoneTypeInfoMap} from '../interfaces/index';

export interface EndpointProps {
  namespace: string;
  endpoint: string;
  route: string;
  isDeprecated: boolean;
  deprecatedBy?: string | null;
  description: string;
  authTypes: string[];
  shellExample: string;
  paramType: StoneTypeReference;
  returnType: StoneTypeReference;
  errorType: StoneTypeReference;
  typeInfo: StoneTypeInfoMap;
}

export default function Endpoint(props: {endpointProps: EndpointProps}) {
  const {
    namespace,
    endpoint,
    route,
    isDeprecated,
    deprecatedBy,
    description,
    authTypes,
    shellExample,
    paramType,
    typeInfo,
    returnType,
    errorType,
  } = props.endpointProps;
  const components = useComponents();
  const url = `https://api.dropboxapi.com/2${route}`;
  return (
    <>
      {isDeprecated && <DeprecatedWarning deprecatedBy={deprecatedBy} />}
      <h1>{route}</h1>
      <Description>{description}</Description>
      <components.h3>Authentication</components.h3>
      <p>{authTypes && <AuthTypes authTypes={authTypes} />}</p>
      <components.h3>URL Structure</components.h3>
      <Code>{url}</Code>
      <components.h3>Example</components.h3>
      <ShellExample namespace={namespace} endpoint={endpoint} shellExample={shellExample} />
      <components.h3>Parameters</components.h3>
      <TypeExplanation
        namespace={paramType.namespace}
        datatype={paramType.datatype}
        typeInfo={typeInfo || allTypes}
      />
      <components.h3>Returns</components.h3>
      {!!returnType ? (
        <TypeExplanation
          namespace={returnType.namespace}
          datatype={returnType.datatype}
          typeInfo={typeInfo || allTypes}
        />
      ) : (
        <p>Nothing</p>
      )}
      <components.h3>Errors</components.h3>
      {!!errorType ? (
        <TypeExplanation
          namespace={paramType.namespace}
          datatype={paramType.datatype}
          typeInfo={typeInfo || allTypes}
        />
      ) : (
        <p>Nothing</p>
      )}
    </>
  );
}
