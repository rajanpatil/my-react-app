import React from "react";

class AddTodo extends React.Component {

    state = {
        todoText: ""
    }

    setTodoText = (evt) => {
        this.setState (
            {
                todoText: evt.target.value
            }
        )
    }

    getStyle = () => {
        return {
            backgroundColor: '#e4e4e4',
            padding: "5px",
            borderBottom: "1px #ccc dotted"
        }
    }

    createTodo = () => {
        this.props.add(this.state.todoText);
        this.setState( 
            { todoText: "" }
        );
    }

    render(){
        return (
            <div>
                <input id="textBox" type="text" value={this.state.todoText} onChange={this.setTodoText}/>
                <button id="addButton" type="button" disabled={!this.state.todoText.length} onClick={this.createTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default AddTodo