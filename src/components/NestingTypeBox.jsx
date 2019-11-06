import React from 'react'

const style = {
    border: '1px solid black',
    borderRadius: '5px',
    marginLeft: '10px',
    padding: '5px'
}

export default function NestingTypeBox({ children, visible }) {
    // not even there when invisible
    if (!visible) return null;
    return <div style={
        {border: '1px solid black', borderRadius: '5px', marginLeft: '10px', padding: '5px'}
        }>
        {children}
    </div>
}