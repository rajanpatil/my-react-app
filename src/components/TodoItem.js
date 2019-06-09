import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: "20px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed? "line-through": "none"
        }
    }

    render(){
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this, this.props.todo.id)}/>
                    {this.props.todo.title}
                </p>
            </div>
        );
    }
}

TodoItem.propType = {
    todo: PropTypes.object.isRequired
}

export default TodoItem