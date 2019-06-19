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

    captureEditedTodoText = (evt) => {
        this.setState (
            {
                editTodoText: evt.target.value
            }
        )
    }

    getTodoTextStyle = ()=>{
        return this.state.editEnabled ? "hide" : this.getTodoTextStyleForCompleted()
    }

    getTodoTextStyleForCompleted = () => {
        return  this.props.todo.completed ? "basic-style text-decoration-line-through": "basic-style text-decoration-none"
    }

    render(){
        let todoValue = this.props.todo.title
        const title = this.props.todo.title
        const editEnabled = this.state.editEnabled
        return(
            <div>
                <input className="basic-padding-and-margin" type={editEnabled? "hidden" : "checkbox"} onChange={this.markCompleted} />
                <span className={this.getTodoTextStyle()}>{title}</span>
                <input className="basic-padding-and-margin input-box" type={editEnabled? "text": "hidden"} defaultValue={todoValue} onChange={this.captureEditedTodoText}/>
                <button className="basic-padding-and-margin button" type="button" onClick={this.editTodo}>{editEnabled ? "Save" : "Edit"}</button>
                <button className="basic-padding-and-margin delete-button" type="button" onClick={this.deleteTodo} disabled={editEnabled}>Delete</button>
            </div>
        );
    }
}

export default TodoItem