import React from 'react'
import { Layout } from 'docz'

const descriptionStyle = {
    backgroundColor: 'green',
}

const Description = ({children}) => {
    console.log(Layout)
    return (
        <div style={descriptionStyle}>
            {children}   
        </div>
    )
}

export default Description