import React from 'react'
import { useState, useCallback, useMemo } from 'react'
import NestingTypeBox from './NestingTypeBox';


const stoneTypeDescription = {
    "struct": "Struct",
    "union": "Union",
    "open_union": "Open Union"
}

const fieldRowHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    margin: '0'
}

function recursivelyResolveType(type) {
    console.log(type)
    const {primitive, optional, list, map, key, namespace, datatype} = type;
    if (!!primitive) {
        return {terminal: true, name: primitive, optional: false}
    } else if (!!namespace) {
        return {terminal: false, name: datatype, namespace, datatype, optional: false}
    } else if (!!list) {
        const previous = recursivelyResolveType(list);
        return {terminal: previous.terminal, name: "List of (" + previous.name + ")", namespace: previous.namespace, datatype: previous.datatype, optional: false}
    } else if (!!map) {
        const previous = recursivelyResolveType(map);
        return {terminal: previous.terminal, name: "Map from (" + key + ") to (" + previous.name + ")", namespace: previous.namespace, datatype: previous.datatype, optional: false}
    } else if (!!optional) {
        const previous = recursivelyResolveType(optional)
        return {terminal: previous.terminal, name: previous.name + "?", namespace: previous.namespace, datatype: previous.datatype, optional: false}
    } else {
        throw Error('unexpected type ' + type)
    }
}

function FieldRow({ field, typeInfo }) {
    console.log(field)
    const {parameter, description, type} = field;
    const {terminal, name, namespace, datatype, optional} = useMemo(() => recursivelyResolveType(type), [type])
    const [expanded, setExpanded] = useState(true)
    const toggleExpanded = useCallback(e => setExpanded(s => !s), [setExpanded])

    return <>
        <div>
            <div style={{...fieldRowHeaderStyle, backgroundColor: optional ? 'lightsteelblue' : 'lightblue'}} onClick={terminal ? null : toggleExpanded}>
                <pre style={{margin: '0'}}>{parameter}</pre>
                <i>{name}</i>
            </div> 
            <span>{description}</span>
        </div>
        {terminal ||
            <NestingTypeBox visible={expanded}><TypeExplanation namespace={namespace} datatype={datatype} typeInfo={typeInfo} /></NestingTypeBox>
        }
    </>
}

const typeExplanationListStyle = {
    listStyleType: 'none',
    padding: '0',
}

export default function TypeExplanation({ namespace, datatype, typeInfo }) {
    const info = typeInfo[namespace][datatype]
    const {stone_type, fields, description} = info;
    return <>
        <p>{datatype} <i>({stoneTypeDescription[stone_type]})</i></p>
        {description ? <p>{description}</p> : null}
        <ul style={typeExplanationListStyle}>
            {fields.map(field => <li key={field.label}><FieldRow field={field} typeInfo={typeInfo} /></li>)}
        </ul>
    </>
}