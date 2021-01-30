import React, { Component } from 'react';

import './App.css';

import Input from './InputComponent/Input';
import Output from './OutputComponent/Output';

class App extends Component {
  state={
    username:"Username",
  }

  nameChangeHandler=(event)=>{
    this.setState({
      username:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <Input rendername={this.nameChangeHandler}/>
          <Output name={this.state.username}/>
        </div>
      </div>
    );
  }
}

export default App;
