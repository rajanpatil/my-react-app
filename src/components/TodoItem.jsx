import React from "react";
import PropTypes from "prop-types";
import "../App.css"

class TodoItem extends React.Component {

    static propType = {
        todo: PropTypes.object.isRequired
    }

    render(){
        return(
            <div className={this.props.todo.completed?
                "text-decoration-line-through"
                :"text-decoration-none"}>
                <p>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this, this.props.todo.id)}/>
                    {this.props.todo.title}
                </p>
            </div>
        );
    }
}

export default TodoItem