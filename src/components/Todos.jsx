import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component{

    static propTypes = {
        todos: PropTypes.array.isRequired,
        markCompleted: PropTypes.func,
        deleteTodo: PropTypes.func
    }
    
    render(){
        return(this.props.todos.map(todo=>
            <TodoItem key={todo.id} todo={todo} markCompleted={this.props.markCompleted} editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo}/>
        ));
    }
}

export default Todos;