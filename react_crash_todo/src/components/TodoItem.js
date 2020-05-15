import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    // Use a function to vary the style for the todo items
    getStyle = () => {
        // long way
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
    
        // short method
        return {
            background: '#f4f4f4',
            padding: '30px',
            borderBottom: '2px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (e) => {
        console.log(this.props);
    }

    render() {
        const { id, title } = this.props.todo; // Using destructuring to pull out values from this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        
        )
    }
}

const btnStyle = {
    background: 'red',
    color: '#ffffff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
// Variable for styling - enclose within single {}
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

// PropTypes - good practice to follow
TodoItem.propTypes = {
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default TodoItem
