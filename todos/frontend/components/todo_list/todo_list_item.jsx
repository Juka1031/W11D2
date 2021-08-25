import React from 'react'


const TodoListItem = (props) => {

    return (
        <li >
            {props.todo.title}<br></br>
            {props.todo.body}
        </li>
    )
}

export default TodoListItem;