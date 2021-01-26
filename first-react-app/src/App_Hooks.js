import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const AppHooks=(props)=> {
    const [personState,setPersonState] = useState(
        {
        persons :[
            {name:'Rushikesh',age:22},
            {name:'Vinayak',age:24},
            {name:'Harshal',age:28},
            {name:'Akash',age:26},
            {name:'Karmanaya',age:28},
          ]
        })
    
    const AgeHandler=()=>{
        setPersonState({
            persons :[
              {name:'Rushikesh',age:personState.persons[0].age+1},
              {name:'Vinayak',age:personState.persons[1].age+1},
              {name:'Harshal',age:personState.persons[2].age+1},
              {name:'Akash',age:personState.persons[3].age+1},
              {name:'Karmanaya',age:personState.persons[4].age+1},
            ]
          }); 
    }
        
    return (
      <div>
      <div className="App">
        <h2> Rendering Component through Hook through UseState </h2>
        <button onClick={AgeHandler}>Increment Your Age by 1</button>
        <p>This Change is done useState. Available from functional component</p>
        <div>
          <Person name={personState.persons[0].name} age={personState.persons[0].age}> Software Engineering</Person>
          <Person name={personState.persons[1].name} age={personState.persons[1].age}> Entreprenuer</Person>
          <Person name={personState.persons[2].name} age={personState.persons[2].age}> Badmination Player </Person>
          <Person name={personState.persons[3].name} age={personState.persons[3].age}> IIT'ian</Person>
          <Person name={personState.persons[4].name} age={personState.persons[4].age}> Stud </Person>
        </div>
      </div>
      </div>
      
      
    );
  
}

export default AppHooks;
