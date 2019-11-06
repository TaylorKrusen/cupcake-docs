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

function MemberRow({ member }) {
    const {label, type, typeName, explanation} = member;
    const isTerminal = !!typeName;
    const [expanded, setExpanded] = useState(true)
    const toggleExpanded = useCallback(e => setExpanded(!expanded), [expanded, setExpanded])

    return <>
        <div>
            <div style={memberRowHeaderStyle} onClick={isTerminal ? null : toggleExpanded}>
                <pre>{label}</pre>
                <i>{isTerminal ? typeName : type.name}</i>
            </div> 
            <span>{explanation}</span>
        </div>
        {isTerminal ||
            <NestingTypeBox visible={expanded}><TypeExplanation type={type} /></NestingTypeBox>
        }
    </>
}

export default function TypeExplanation({ type }) {
    const {kind, name, members} = type;
    return <>
        <p>{name} <i>({kindToExplanation[kind]})</i></p>
        <ul>
            {members.map(member => <li key={member.label}><MemberRow member={member} /></li>)}
        </ul>
    </>
}