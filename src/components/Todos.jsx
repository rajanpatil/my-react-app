import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component{

    static propTypes = {
        todos: PropTypes.array.isRequired
    }
    
    render(){
        return(this.props.todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} markCompleted={this.props.markCompleted}/>
        )));
    }
}

export default Todos;