import React from 'react'
import { useState, useCallback } from 'react'
import NestingTypeBox from './NestingTypeBox';


const kindToExplanation = {
    "struct": "Struct",
    "union": "Union",
    "open_union": "Open Union"
}

const memberRowHeaderStyle = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
}

function MemberRow({ member, typeInfo }) {
    const {label, type, typeName, explanation, validator, optional, list} = member;
    const isTerminal = !!typeName;
    const [expanded, setExpanded] = useState(true)
    const toggleExpanded = useCallback(e => setExpanded(s => !s), [setExpanded])

    return <>
        <div>
            <div style={memberRowHeaderStyle} onClick={isTerminal ? null : toggleExpanded}>
                <pre>{label}</pre>
                <i>{list ? "List of " : null}{isTerminal ? typeName : type.datatype}{optional ? "?" : null}</i>
                {validator}
            </div> 
            <span>{explanation}</span>
        </div>
        {isTerminal ||
            <NestingTypeBox visible={expanded}><TypeExplanation type={type} typeInfo={typeInfo} /></NestingTypeBox>
        }
    </>
}

export default function TypeExplanation({ type, typeInfo }) {
    const {namespace, datatype} = type;
    const info = typeInfo[namespace][datatype]
    const {kind, members} = info;
    return <>
        <p>{datatype} <i>({kindToExplanation[kind]})</i></p>
        <ul>
            {members.map(member => <li key={member.label}><MemberRow member={member} typeInfo={typeInfo} /></li>)}
        </ul>
    </>
}