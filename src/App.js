import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> Hello world,this is the first react app </h2>
        <div>
          <Person name="Rushikesh" age="22"> Software Engineering</Person>
          <Person name="Vinayak" age="24"> Entreprenuer</Person>
          <Person name="Harshal" age="28"> Badmination Player </Person>
          <Person name="Akash" age="26"> IIT'ian</Person>
          <Person name="Karmnaya" age="28"> Stud </Person>
          <Person name="Nudging" age="26" > Hike </Person>
        </div>
      </div>
      
    );
  }
}

export default App;
