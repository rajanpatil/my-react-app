import React from 'react';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import {v4} from "uuid"
import './App.css';

class App extends React.Component {

  state = {
     todos: []
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

  createTodo = (todoText) => {
    this.setState( state => {
      return {todos: [...state.todos, {id:v4(),title: todoText,completed: false}]}
    })
  }

  deleteTodo = (id) =>{
    this.setState(
      {
        todos: this.state.todos.filter(todo => todo.id !== id)
      }
    )
  }

  editTodo = (id, editTodoValue) => {
    this.setState(
      {
        todos: this.state.todos.map(
          todo => {
            if(todo.id === id){
              console.log(editTodoValue)
              todo.title = editTodoValue
            }
            return todo
          }
        )
      }
    )
  }

  render(){
    return (
      <div className="basic-style align-center">
        <h2>Create your ToDo list</h2>
        <AddTodo createTodo={this.createTodo}/>
        <div className="align-center">
        <Todos todos={this.state.todos} markCompleted={this.markCompleted} editTodo={this.editTodo} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
