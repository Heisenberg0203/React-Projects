import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> Hello world,this is the first react app </h2>
        <div>
          <Person name="Rushikesh" age="22"/>
          <Person name="Vinayak" age="24"/>
          <Person name="Harshal" age="28"/>
          <Person name="Akash" age="26"> IIT'ian</Person>
          <Person name="Karmnaya" age="28"/>
          <Person name="Nudging" age="26" />
        </div>
      </div>
      
    );
  }
}

export default App;
