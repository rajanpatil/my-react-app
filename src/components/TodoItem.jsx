import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {

    state = {
        editEnabled: false,
        editTodoText: this.props.todo.title
    }

    static propType = {
        todo: PropTypes.object.isRequired,
        markCompleted: PropTypes.func,
        deleteTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired
    }

    getStyle = () => {
        return  this.props.todo.completed ? "basic-style text-decoration-line-through": "basic-style text-decoration-none"
    }

    markCompleted = ()=>{
        this.props.markCompleted(this.props.todo.id)
    }

    deleteTodo = () =>{
        this.props.deleteTodo(this.props.todo.id);
    }

    editTodo = () => {
        if(this.state.editEnabled){
            let editTodoText = this.state.editTodoText
            this.props.editTodo(this.props.todo.id, editTodoText)
            this.setState({
                editEnabled: false,
                editTodoText: this.props.todo.title
            })
        }else{
            this.setState({editEnabled: true})
        }
    }

    setEditedTodoText = (evt) => {
        this.setState (
            {
                editTodoText: evt.target.value
            }
        )
    }

    render(){
        let todoValue = this.props.todo.title
        return(
            <div className={this.getStyle()}>
                <input type={this.state.editEnabled? "hidden" : "checkbox"} onChange={this.markCompleted} />
                <span className={this.state.editEnabled ? "hide": "show"}>{this.props.todo.title}</span>
                <input type={this.state.editEnabled? "text": "hidden"} defaultValue={todoValue} onChange={this.setEditedTodoText}/>
                <button type="button" onClick={this.editTodo}>{this.state.editEnabled ? "save" : "edit"}</button>
                <button type="button" onClick={this.deleteTodo} disabled={this.state.editEnabled}>delete</button>
            </div>
        );
    }
}

export default TodoItem