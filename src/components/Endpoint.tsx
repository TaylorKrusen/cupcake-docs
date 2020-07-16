import React from 'react';

import DeprecatedWarning from './DeprecatedWarning';
import AuthTypes from './AuthTypes';
import ShellExample from './ShellExample';
import Code from './Code';
import TypeExplanation from './TypeExplanation';
import Description from './Description';
import RowContainer from './RowContainer';
import VersionDropdown from './VersionDropdown';
import EndpointFormat from './EndpointFormat';
import Example from './Example';
import Warning from './Warning';

import {StoneTypeReference, StoneTypeInfoMap} from '../interfaces/index';

interface Example {
  label: string;
  content: any;
}

export interface EndpointProps {
  namespace: string;
  endpoint: string;
  route: string;
  isDeprecated: boolean;
  isPreview: boolean;
  deprecatedBy?: string | null;
  description: string;
  authentication: string[];
  shellExample: string;
  paramType: StoneTypeReference;
  returnType: StoneTypeReference;
  errorType: StoneTypeReference;
  typeInfo: StoneTypeInfoMap;
  endpointFormat: string;
  scope: string;
  paramExamples: Example[];
  returnExamples: Example[];
  errorExamples: Example[];
  urlStructure: string;
}

export default function Endpoint(props: {endpointProps: EndpointProps}) {
  const {
    namespace,
    endpoint,
    route,
    isDeprecated,
    isPreview,
    deprecatedBy,
    description,
    authentication,
    shellExample,
    paramType,
    typeInfo,
    returnType,
    errorType,
    endpointFormat,
    scope,
    paramExamples,
    returnExamples,
    errorExamples,
    urlStructure,
  } = props.endpointProps;
  const renderExamples = function (examples: Example[]) {
    if (!examples) {
      return;
    }
    return examples.map((example, idx) => {
      return (
        <Example
          key={`example-${idx}-${example.label}`}
          label={example.label}
          content={example.content}
        />
      );
    });
  };
  return (
    <>
      {isDeprecated && <DeprecatedWarning deprecatedBy={deprecatedBy || ''} />}
      {isPreview && <Warning>PREVIEW - may change or disappear without notice</Warning>}
      <h1>{route}</h1>
      <RowContainer title="Version">
        <VersionDropdown versions={[1]} selected={1} />
      </RowContainer>
      <RowContainer title="Description">
        <Description description={description} />
      </RowContainer>
      <RowContainer title="URL Structure">
        <Code>{urlStructure}</Code>
      </RowContainer>
      <RowContainer title="Authentication">
        {!!authentication && <AuthTypes authTypes={authentication} />}
      </RowContainer>
      <RowContainer title="Endpoint Format">
        <EndpointFormat endpointFormat={endpointFormat} />
      </RowContainer>
      <RowContainer title="Required Scope">{scope}</RowContainer>
      <RowContainer title="Example">
        <ShellExample namespace={namespace} endpoint={endpoint} shellExample={shellExample} />
      </RowContainer>
      <RowContainer title="Parameters">
        {renderExamples(paramExamples)}
        <TypeExplanation
          namespace={paramType.namespace}
          datatype={paramType.datatype}
          typeInfo={typeInfo}
        />
      </RowContainer>
      <RowContainer title="Returns">
        {renderExamples(returnExamples)}
        <TypeExplanation
          namespace={returnType.namespace}
          datatype={returnType.datatype}
          typeInfo={typeInfo}
        />
      </RowContainer>
      <RowContainer title="Errors">
        {renderExamples(errorExamples)}
        <TypeExplanation
          namespace={errorType.namespace}
          datatype={errorType.datatype}
          typeInfo={typeInfo}
        />
      </RowContainer>
    </>
  );
}
