import React from 'react';
import './person.css';
const Person = (props) =>{

    return(
        <div className='person'>
            <input type="text" onChange={props.nameChange} value={props.name}/>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <button onClick={props.delete}>Delete</button>
        </div>
    )

}

export default Person;