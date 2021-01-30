
import React from 'react';
import './Input.css'

const Input = (props) =>{
   return(
        <div className="input">
                <input type="text" onChange={props.rendername} value={props.default} />
        </div>
   
    )
}

export default Input;