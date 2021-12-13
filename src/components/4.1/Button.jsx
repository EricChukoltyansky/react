import React from "react";
import './button.css'

function Button(props){
    return (
        <>
        <button className="btn">{props.text}</button>
        </>
    )
}

export default Button;