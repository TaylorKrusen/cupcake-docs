import React from 'react';
import {useState, useCallback, useMemo} from 'react';
import NestingTypeBox from './NestingTypeBox';

import {StoneType, StoneTypeField, StoneTypeInfoMap} from '../interfaces/index';
import '../scss/type_explanation.scss';

const stoneTypeDescription = {
  struct: 'Struct',
  union: 'Union',
  open_union: 'Open Union',
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
  expandedByDefault: boolean;
};
function FieldRow({field, typeInfo, expandedByDefault}: FieldRowProps) {
  const {parameter, description, type} = field;
  const typeData = useMemo(() => recursivelyResolveType(type), [type]);
  const {optional, name} = typeData;
  const [expanded, setExpanded] = useState(expandedByDefault);
  const toggleExpanded = useCallback((e) => setExpanded((s) => !s), [setExpanded]);
  const parameterClassNames = typeData.terminal ? 'parameter-type' : 'parameter-type nested';
  return (
    <div className="field-row">
      <div>
        <div>
          <div>
            <span className="parameter-name">{parameter}</span>
            <span className={parameterClassNames} onClick={toggleExpanded}>
              {name}
            </span>
            <span className="parameter-description">{description}</span>
          </div>
        </div>
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
    </div>
  );
}

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
      <div>
        {datatype} <i>({stoneTypeDescription[stone_type]})</i>
      </div>
      {description && <p>{description}</p>}
      <ul className="type-explanation-list">
        {fields.map((field, idx) => (
          <li key={`TypeExplanation-${idx}`}>
            <FieldRow field={field} typeInfo={typeInfo} expandedByDefault={false} />
          </li>
        ))}
      </ul>
    </>
  );
}
