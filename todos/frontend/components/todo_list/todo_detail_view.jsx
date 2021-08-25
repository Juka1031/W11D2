import React from "react";
import StepList from "../step_list/step_list";

class TodoDetailView extends React.Component{
    constructor(props){
        super(props)
  

    }
    render() {

        return(
            <div>{this.props.todo.body}
                <StepList todo = {this.props.todo}/>
            </div>
        )
    }
}

export default TodoDetailView;