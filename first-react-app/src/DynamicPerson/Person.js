import React from 'react';
import './Person.css';
const DynamicPerson = (props) =>{
    return (
    <div className='person'>
        Change Name <input type ="text" onChange={props.namechange} value={props.name}/>
        <h1>{props.name}</h1>
        Increment: <input type="text" onChange={props.change}></input>
        <p>Your Age: {props.age}</p>
        <p>{props.children}</p>
    </div>
    );
};

export default DynamicPerson;