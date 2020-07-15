export interface StoneTypeReference {
  namespace: string;
  datatype: string;
}

export interface StoneTypePrimitive {
  primitive: string;
}

export type StoneTypeBase = StoneTypePrimitive | StoneTypeReference;
export type StoneType =
  | StoneTypeBase
  | {list: StoneType}
  | {map: StoneType}
  | {optional: StoneType};

export interface StoneTypeField {
  parameter: string;
  description?: string;
  type: StoneType;
}
export interface StoneTypeDefinition {
  stone_type: 'union' | 'open_union' | 'struct';
  fields: StoneTypeField[];
}

export type StoneTypeInfoMap = Record<string, Record<string, StoneTypeDefinition>>;
