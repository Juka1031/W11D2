import React from 'react';


class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateTitle = this.updateTitle.bind(this);

    }

    updateTitle(e){
        this.setState({title: e.target.value})
    }
  
    updateBody(e){
        this.setState({body: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
        const id = new Date().getTime();
        const todo = {...this.state, id: id}
        this.props.receiveTodo(todo);
        this.setState({
            title:"",
            body: ""
        })
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <h1>Add a ToDo </h1>
            <label>
              Title
              <input
                type="text"
                onChange={this.updateTitle}
                value={this.state.title}
              />
            </label>
            <label>
              Body
              <input
                type="text"
                onChange={this.updateBody}
                value={this.state.body}
              />
            </label>
            <button>Add ToDo</button>
          </form>
        )
    }
}

export default TodoForm