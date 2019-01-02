import React from 'react';

import './CharComponent.css'

const charComponent = (props) => {
    return (
        <div className="CharComponent">
            <span>{props.char}</span>   
        </div>
    )
}

export default charComponent;