import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import DynamicPerson from './DynamicPerson/Person';
class App extends Component {
  state = {
    persons1 :[
      {name:'Rushikesh',age:22},
      {name:'Vinayak',age:24},
      {name:'Harshal',age:28},
      {name:'Akash',age:26},
      {name:'Karmanaya',age:28},
    ],
    persons2 :[
      {name:'Rushikesh',age:22},
      {name:'Vinayak',age:24},
      {name:'Harshal',age:28},
      {name:'Akash',age:26},
      {name:'Karmanaya',age:28},
    ],
    persons3 :[
      {name:'Rushikesh',age:22},
      {name:'Vinayak',age:24},
      {name:'Harshal',age:28},
      {name:'Akash',age:26},
      {name:'Karmanaya',age:28},
    ]
  }
  AgeHandler1=(inc)=>{
      this.setState({
        persons1 :[
          {name:'Rushikesh',age:this.state.persons1[0].age+inc},
          {name:'Vinayak',age:this.state.persons1[1].age+inc},
          {name:'Harshal',age:this.state.persons1[2].age+inc},
          {name:'Akash',age:this.state.persons1[3].age+inc},
          {name:'Karmanaya',age:this.state.persons1[4].age+inc},
        ]
      }); 
  };

  AgeHandler2=(inc)=>{
    this.setState({
      persons2 :[
        {name:'Rushikesh',age:this.state.persons2[0].age+inc},
        {name:'Vinayak',age:this.state.persons2[1].age+inc},
        {name:'Harshal',age:this.state.persons2[2].age+inc},
        {name:'Akash',age:this.state.persons2[3].age+inc},
        {name:'Karmanaya',age:this.state.persons2[4].age+inc},
      ]
    }); 
};

AgeHandler3=(event)=>{
  this.setState({
    persons3 :[
      {name:'Rushikesh',age:this.state.persons3[0].age+parseInt(event.target.value)},
      {name:'Vinayak',age:this.state.persons3[1].age+parseInt(event.target.value)},
      {name:'Harshal',age:this.state.persons3[2].age+parseInt(event.target.value)},
      {name:'Akash',age:this.state.persons3[3].age+parseInt(event.target.value)},
      {name:'Karmanaya',age:this.state.persons3[4].age+parseInt(event.target.value)},
    ]
  }); 
};

NameHandler=(event)=>{
  this.setState({
    persons3 :[
      {name:event.target.value,age:this.state.persons3[0].age},
      {name:'Vinayak',age:this.state.persons3[1].age},
      {name:event.target.value,age:this.state.persons3[2].age},
      {name:'Akash',age:this.state.persons3[3].age},
      {name:'Karmanaya',age:this.state.persons3[4].age},
    ]
  }); 
}
  render() {
    return (
      <div>
        <div className="App">
          <h2> Hello world,this is the first react Component </h2>
          <div>
            <Person name="Rushikesh" age="22"> Software Engineering</Person>
            <Person name="Vinayak" age="24"> Entreprenuer</Person>
            <Person name="Harshal" age="28"> Badmination Player </Person>
            <Person name="Akash" age="26"> IIT'ian</Person>
            <Person name="Karmnaya" age="28"> Stud </Person>
          </div>
        </div>
        <div className="App">
          <h2> Rendering Component through State </h2>
          <button onClick={this.AgeHandler1.bind(this,1)}>Increment Your Age by 1</button>
          <p>This Change is done using set state. Only Available from Class component</p>
          <div>
            <Person name={this.state.persons1[0].name} age={this.state.persons1[0].age}> Software Engineering</Person>
            <Person name={this.state.persons1[1].name} age={this.state.persons1[1].age}> Entreprenuer</Person>
            <Person name={this.state.persons1[2].name} age={this.state.persons1[2].age}> Badmination Player </Person>
            <Person name={this.state.persons1[3].name} age={this.state.persons1[3].age}> IIT'ian</Person>
            <Person name={this.state.persons1[4].name} age={this.state.persons1[4].age}> Stud </Person>
          </div>
          </div>
        <div className="App">
          <h2> Rendering Component through State by passing method as a prop to functional component </h2>
          <p>This Change is done using set state by passing reference to function, Click on the Name to Increment Age by 1</p>
          <div >
            <Person name={this.state.persons2[0].name} age={this.state.persons2[0].age} click={this.AgeHandler2.bind(this,1)}> Software Engineering</Person>
            <Person name={this.state.persons2[1].name} age={this.state.persons2[1].age} click={this.AgeHandler2.bind(this,1)}> Entreprenuer</Person>
            <Person name={this.state.persons2[2].name} age={this.state.persons2[2].age} click={this.AgeHandler2.bind(this,1)}> Badmination Player </Person>
            <Person name={this.state.persons2[3].name} age={this.state.persons2[3].age} click={this.AgeHandler2.bind(this,1)}> IIT'ian</Person>
            <Person name={this.state.persons2[4].name} age={this.state.persons2[4].age} click={this.AgeHandler2.bind(this,1)}> Stud </Person>
          </div>
        </div>
        {/* two way binnding */}
        <div className="App">
          <h2> Two Way Binding: bug: it changes state of all elements at once </h2>
          <p> Target Dynamic State change will be implemented later in the course</p>
          <div>
            <DynamicPerson name={this.state.persons3[0].name} age={this.state.persons3[0].age} change={this.AgeHandler3} namechange={this.NameHandler}> Software Engineering</DynamicPerson>
            <DynamicPerson name={this.state.persons3[1].name} age={this.state.persons3[1].age} change={this.AgeHandler3}> Entreprenuer</DynamicPerson>
            <DynamicPerson name={this.state.persons3[2].name} age={this.state.persons3[2].age} change={this.AgeHandler3} namechange={this.NameHandler}> Badmination Player </DynamicPerson>
            <DynamicPerson name={this.state.persons3[3].name} age={this.state.persons3[3].age} change={this.AgeHandler3}> IIT'ian</DynamicPerson>
            <DynamicPerson name={this.state.persons3[4].name} age={this.state.persons3[4].age} change={this.AgeHandler3}> Stud </DynamicPerson>
          </div>
        </div>

      </div>
      
      
    );
  }
}

export default App;
