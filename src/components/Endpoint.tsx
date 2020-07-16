import React from 'react';

import DeprecatedWarning from './DeprecatedWarning';
import AuthTypes from './AuthTypes';
import ShellExample from './ShellExample';
import Code from './Code';
import TypeExplanation from './TypeExplanation';
import Description from './Description';
import RowContainer from './RowContainer';
import VersionDropdown from './VersionDropdown';

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
  const url = `https://api.dropboxapi.com/2${route}`;
  return (
    <>
      {isDeprecated && <DeprecatedWarning deprecatedBy={deprecatedBy || ''} />}
      <h1>{route}</h1>
      <RowContainer title="Version">
        <VersionDropdown versions={[1]} selected={1} />
      </RowContainer>
      <RowContainer title="Description">
        <Description>{description}</Description>
      </RowContainer>
      <RowContainer title="URL Structure">
        <Code>{url}</Code>
      </RowContainer>
      <RowContainer title="Authentication">
        {authTypes && <AuthTypes authTypes={authTypes} />}
      </RowContainer>
      <RowContainer title="Endpoint Format">.</RowContainer>
      <RowContainer title="Required Scope">.</RowContainer>
      <RowContainer title="Example">
        <ShellExample namespace={namespace} endpoint={endpoint} shellExample={shellExample} />
      </RowContainer>
      <RowContainer title="Parameters">
        <TypeExplanation
          namespace={paramType.namespace}
          datatype={paramType.datatype}
          typeInfo={typeInfo}
        />
      </RowContainer>
      <RowContainer title="Returns">
        {!!returnType ? (
          <TypeExplanation
            namespace={returnType.namespace}
            datatype={returnType.datatype}
            typeInfo={typeInfo}
          />
        ) : (
          <div>Nothing</div>
        )}
      </RowContainer>
      <RowContainer title="Errors">
        {!!errorType ? (
          <TypeExplanation
            namespace={errorType.namespace}
            datatype={errorType.datatype}
            typeInfo={typeInfo}
          />
        ) : (
          <div>Nothing</div>
        )}
      </RowContainer>
    </>
  );
}
