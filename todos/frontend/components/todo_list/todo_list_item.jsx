import React from 'react'
import { removeTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view'


class TodoListItem extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            detail : false
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handleDetail = this.handleDetail.bind(this)
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

    handleDetail(e){
        this.setState ( {detail : !this.state.detail})
    }

    render(){
        // debugger
        let show = null;
        if(this.state.detail){

            show = <TodoDetailView todo = {this.props.todo}/>
        }else {

            show = <div></div>;
        }
        return (
            <li >
                
                <div onClick={this.handleDetail}>{this.props.todo.title}</div>
                <br></br>
                {show}
                <br />
                <button onClick={this.handleDelete}>Delete ToDo</button>
                <button onClick={this.handleDone}>{this.props.todo.done.toString()}</button>
            </li>
            )
    }
}

export default TodoListItem;