import React from "react";
import './Button.css'

export default props => {
    let classNames = `
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `

    return (
        <button onClick={e => props.click && props.click(props.label)} className={classNames}>
            {props.label}
        </button>

    )
} 


// export default props => 
//     <button className={`
//         button
//         ${props.operation ? 'operation' : ''}
//         ${props.double ? 'double' : ''}
//         ${props.triple ? 'triple' : ''}
//     `}>
//         {props.label}
//     </button>