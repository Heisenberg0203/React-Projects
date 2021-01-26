import React from 'react';
import './Person.css';
const Person = (props) =>{
    return (
    <div className='person'>
        <h1 onClick={props.click}>{props.name}</h1>
        <p>Your Age: {props.age}</p>
        <p>{props.children}</p>
    </div>
    );
};

export default Person;