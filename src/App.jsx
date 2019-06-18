import React from 'react';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import {v4} from "uuid"
import './App.css';

class App extends React.Component {

  state = {
     todos: [
      // {
      //   id:v4(),
      //   title: "Grocery shopping.",
      //   completed: false
      // },
      // {
      //   id:v4(),
      //   title: "Hangout with friends.",
      //   completed: false
      // },
      // {
      //   id:v4(),
      //   title: "Go for tennis session.",
      //   completed: false
      // }
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

  addTodo = (todoText) => {
    this.setState( state => {
      return {todos: [...state.todos, {id:v4(),title: todoText,completed: false}]}
    })
  }

  render(){
    return (
      <div className="basic-style align-center">
        <h2>Create your ToDo list</h2>
        <AddTodo add={this.addTodo}/>
        <div className="align-center">
        <Todos todos={this.state.todos} markCompleted={this.markCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;
