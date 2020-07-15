import React from 'react';
import {useState, useCallback, useMemo} from 'react';
import NestingTypeBox from './NestingTypeBox';

import {StoneType, StoneTypeField, StoneTypeInfoMap} from '../interfaces/index';

const stoneTypeDescription = {
  struct: 'Struct',
  union: 'Union',
  open_union: 'Open Union',
};

const fieldRowHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  margin: '0',
};

type ResolvedType = {
  name: string;
  optional: boolean;
  terminal: boolean;
} & (
  | {
      terminal: true;
    }
  | {
      terminal: false;
      namespace: string;
      datatype: string;
    }
);
function recursivelyResolveType(type: StoneType): ResolvedType {
  if ('primitive' in type) {
    const {primitive} = type;
    return {terminal: true, name: primitive, optional: false};
  } else if ('namespace' in type) {
    const {datatype, namespace} = type;
    return {terminal: false, name: datatype, namespace, datatype, optional: false};
  } else if ('list' in type) {
    const previous = recursivelyResolveType(type.list);
    return Object.assign({}, previous, {
      name: `List of (${previous.name})`,
      optional: false,
    });
  } else if ('map' in type) {
    const previous = recursivelyResolveType(type.map);

    return Object.assign({}, previous, {
      name: `Map from (${type.key}) to (${previous.name})`,
      optional: false,
    });
  } else if ('optional' in type) {
    const previous = recursivelyResolveType(type.optional);
    return Object.assign({}, previous, {
      name: `${previous.name}?`,
      optional: true,
    });
  } else {
    throw Error('unexpected type ' + type);
  }
}

type FieldRowProps = {
  field: StoneTypeField;
  typeInfo: StoneTypeInfoMap;
};
function FieldRow({field, typeInfo}: FieldRowProps) {
  const {parameter, description, type} = field;
  const typeData = useMemo(() => recursivelyResolveType(type), [type]);
  const {optional, name} = typeData;
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = useCallback((e) => setExpanded((s) => !s), [setExpanded]);

  return (
    <>
      <div>
        <div
          style={{
            ...fieldRowHeaderStyle,
            backgroundColor: optional ? 'lightsteelblue' : 'lightblue',
          }}
          onClick={typeData.terminal ? () => {} : toggleExpanded}
        >
          <pre style={{margin: '0'}}>{parameter}</pre>
          <i>{name}</i>
        </div>
        <span>{description}</span>
      </div>
      {typeData.terminal ? null : (
        <NestingTypeBox visible={expanded}>
          <TypeExplanation
            namespace={typeData.namespace}
            datatype={typeData.datatype}
            typeInfo={typeInfo}
          />
        </NestingTypeBox>
      )}
    </>
  );
}

const typeExplanationListStyle = {
  listStyleType: 'none',
  padding: '0',
};

type TypeExplainationProps = {
  namespace: string;
  datatype: string;
  typeInfo: StoneTypeInfoMap;
};

export default function TypeExplanation({namespace, datatype, typeInfo}: TypeExplainationProps) {
  const info = typeInfo[namespace][datatype];
  const {stone_type, fields, description} = info;
  return (
    <>
      <p>
        {datatype} <i>({stoneTypeDescription[stone_type]})</i>
      </p>
      {description && <p>{description}</p>}
      <ul style={typeExplanationListStyle}>
        {fields.map((field, idx) => (
          <li key={`TypeExplanation-${idx}`}>
            <FieldRow field={field} typeInfo={typeInfo} />
          </li>
        ))}
      </ul>
    </>
  );
}
