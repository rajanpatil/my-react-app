import React from "react";
import PropTypes from "prop-types"

class AddTodo extends React.Component {

    static propTypes = {
        createTodo: PropTypes.func
    }

    state = {
        todoText: ""
    }

    captureTodoText = (evt) => {
        this.setState (
            {
                todoText: evt.target.value
            }
        )
    }

    createTodo = () => {
        this.props.createTodo(this.state.todoText);
        this.setState( 
            { todoText: "" }
        );
    }

    render(){
        return (
            <div>
                <input id="textBox" className="basic-padding-and-margin input-box" type="text" value={this.state.todoText} onChange={this.captureTodoText} />
                <button id="addButton" className="basic-padding-and-margin button" type="button" disabled={!this.state.todoText.length} onClick={this.createTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default AddTodo