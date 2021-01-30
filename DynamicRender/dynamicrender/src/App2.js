import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App2 extends Component {
  state = {
    persons :[
        {id:'1',name:'Rushikesh',age:22},
        {id:'2',name:'Vinayak',age:24},
        {id:'3',name:'Harshal',age:28},
        {id:'4',name:'Akash',age:26},
        {id:'5',name:'Karmanaya',age:28},
    ],
    show:false
  }


  showPerson = () => {
    const doesshow = this.state.show;
    this.setState({show:!doesshow});
  }


  nameChangeHandler = (event,id ) => {
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
                    nameChange={(event)=>this.nameChangeHandler(event,person.id)}
                    delete={()=>this.deleteHandler(index) }
                  />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <button onClick={this.showPerson}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App2;
