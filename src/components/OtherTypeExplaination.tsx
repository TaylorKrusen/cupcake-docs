import React from "react";
import { useState, useCallback, useMemo } from "react";
import NestingTypeBox from "./NestingTypeBox";

export default function OtherTypeExplaination({ typeInfo }) {
  const { fields, name } = useMemo(() => JSON.parse(typeInfo), [typeInfo]);
  return (
    <>
      <TypeExplanation fields={fields} datatype={name} description="" />
      <pre>{JSON.stringify(JSON.parse(typeInfo), null, 2)}</pre>
    </>
  );
}

const stoneTypeDescription = {
  struct: "Struct",
  union: "Union",
  open_union: "Open Union",
};

const typeExplanationListStyle = {
  listStyleType: "none",
  padding: "0",
};
function TypeExplanation({ fields, datatype, description }) {
  return (
    <>
      <p>
        {datatype} <i>(TODO)</i>
      </p>
      {description && <p>{description}</p>}
      <ul style={typeExplanationListStyle}>
        {fields.map((field, idx) => (
          <li key={`TypeExplanation-${idx}`}>
            <FieldRow field={field} />
          </li>
        ))}
      </ul>
    </>
  );
}

const fieldRowHeaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  margin: "0",
};

function FieldRow({ field }) {
  const { name, type, optional, description } = field;
  const terminal = typeof type === "string";
  const typeName = terminal ? type : type["type name"];
  const children = terminal ? [] : type.properties;

  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = useCallback((e) => setExpanded((s) => !s), [
    setExpanded,
  ]);

  return (
    <>
      <div>
        <div
          style={{
            ...fieldRowHeaderStyle,
            backgroundColor: optional ? "lightsteelblue" : "lightblue",
          }}
          onClick={terminal ? null : toggleExpanded}
        >
          <pre style={{ margin: "0" }}>{name}</pre>
          <i>{typeName}</i>
        </div>
        <span>{description}</span>
      </div>
      {terminal || (
        <NestingTypeBox visible={expanded}>
          <TypeExplanation
            fields={children}
            datatype={typeName}
            description={description}
          />
        </NestingTypeBox>
      )}
    </>
  );
}
