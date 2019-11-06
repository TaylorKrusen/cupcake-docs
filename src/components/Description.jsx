import React from 'react'

const descriptionStyle = {
    backgroundColor: 'green',
}

const Description = ({children}) => {
    return (
        <div style={descriptionStyle}>
            {children}   
        </div>
    )
}

export default Description