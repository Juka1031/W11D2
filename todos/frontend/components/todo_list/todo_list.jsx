import React from "react";

import TodoListItem from "./todo_list_item"


const TodoList = (props) => { //functional works too

    const todosli = props.todos.map((todo) =>{
        return (
             
            <TodoListItem
                key = {todo.id}
                todo = {todo}
            />
          
        )
    })

    return (
        <div>
            <ul>
                {todosli}
            </ul>
        </div>
    )
}


export default TodoList;