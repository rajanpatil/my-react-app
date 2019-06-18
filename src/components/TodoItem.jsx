import React from "react";
import PropTypes from "prop-types";
import "../App.css"

class TodoItem extends React.Component {

    static propType = {
        todo: PropTypes.object.isRequired,
        markCompleted: PropTypes.func,
        deleteTodo: PropTypes.func.isRequired  
    }

    getStyle = () => {
        return  this.props.todo.completed ? "text-decoration-line-through": "text-decoration-none"
    }

    deleteTodo = () =>{
        console.log(this.props.todo.id)
        this.props.deleteTodo(this.props.todo.id);
    }

    render(){
        return(
            <div className={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this, this.props.todo.id)}/>
                    {this.props.todo.title}
                    <button type="button" onClick={this.deleteTodo}>delete</button>
                </p>
            </div>
        );
    }
}

export default TodoItem