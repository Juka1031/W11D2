import React from 'react'
import { removeTodo } from '../../actions/todo_actions';


class TodoListItem extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleDone = this.handleDone.bind(this)
    }

    handleDelete(e){
        this.props.removeTodo(this.props.todo)
        
    }

    handleDone(e){
        if(this.props.todo.done){
            this.props.receiveTodo({...this.props.todo, done: false})
        } else {
            this.props.receiveTodo({...this.props.todo, done: true})    
        }
    }

    render(){
        // debugger
        return (
            <li >
                {this.props.todo.title}<br></br>
                {this.props.todo.body}
                <br />
                <button onClick={this.handleDelete}>Delete ToDo</button>
                <button className="done" onClick={this.handleDone}>{this.props.todo.done.toString()}</button>
            </li>
            )
    }
}

export default TodoListItem;