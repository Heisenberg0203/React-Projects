import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons :[
    ],
    show:false
  }

  componentDidMount =() =>{
    this.setState({persons:[
      {id:'1',name:'Rushikesh',age:22},
      {id:'2',name:'Vinayak',age:24},
      {id:'3',name:'Harshal',age:28},
      {id:'4',name:'Akash',age:26},
      {id:'5',name:'Karmanaya',age:28},
    ]})

    this.setState({
      show:true
    })
  }



  nameChangeHandler = ( id,event ) => {
      const currPersonIndex = this.state.persons.findIndex(person => {
        return person.id===id;
      }); 

      const currPerson = {...this.state.persons[currPersonIndex]};
      currPerson.name=event.target.value;

      const persons=[...this.state.persons];
      persons[currPersonIndex]=currPerson;
      this.setState( {persons:persons} ); 
    
  }

  deleteHandler =(index,event)=>{
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons})
  }

  render() {
    let persons=null;

    if(this.state.show){
      persons = (
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person 
                    name={person.name} age={person.age} key={person.id}
                    nameChange={this.nameChangeHandler.bind(this,person.id)}
                    delete={this.deleteHandler.bind(this,index) }
                  />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        {persons}
      </div>
    );
  }
}

export default App;
