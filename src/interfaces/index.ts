export type StoneTypeReference = {
  namespace: string;
  datatype: string;
};

export type StoneTypePrimitive = {
  primitive: string;
};

export type StoneTypeList = {list: StoneType};
export type StoneTypeMap = {map: StoneType; key: string};
export type StoneTypeOptional = {optional: StoneType};

export type StoneType =
  | StoneTypePrimitive
  | StoneTypeReference
  | StoneTypeList
  | StoneTypeMap
  | StoneTypeOptional;

export interface StoneTypeField {
  parameter: string;
  description?: string;
  type: StoneType;
}
export interface StoneTypeDefinition {
  stone_type: 'union' | 'open_union' | 'struct';
  fields: StoneTypeField[];
  description?: string;
}

export type StoneTypeInfoMap = Record<string, Record<string, StoneTypeDefinition>>;
