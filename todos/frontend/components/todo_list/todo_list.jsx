import React from "react";
import { receiveTodo, removeTodo } from "../../actions/todo_actions";
import TodoForm from "./todo_form";

import TodoListItem from "./todo_list_item"


const TodoList = (props) => { //functional works too
    
    const todosli = props.todos.map((todo) =>{
        return (
             
            <TodoListItem
                key = {todo.id}
                todo = {todo}
                receiveTodo = {props.receiveTodo}
                removeTodo = {props.removeTodo}
            />
          
        )
    })

    return (
        <div>
            <ul>
                {todosli}
                <TodoForm receiveTodo={props.receiveTodo}/>
            </ul>
        </div>
    )
}


export default TodoList;