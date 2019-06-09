import React from 'react';
import Todos from "./components/Todos";
import './App.css';

class App extends React.Component {

  state = {
    todos: [
      {
        id:1,
        title: "Grocery shopping.",
        completed: false
      },
      {
        id:2,
        title: "Hangout with friends.",
        completed: false
      },
      {
        id:3,
        title: "Go for tennis session.",
        completed: false
      }
    ]
  }

  markCompleted = (id) =>{
    this.setState({
      todos: this.state.todos.map(
        todo => {
          if(todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo;
        }
      )
    });
  }

  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos} markCompleted={this.markCompleted}/>
      </div>
    );
  }
}

export default App;
