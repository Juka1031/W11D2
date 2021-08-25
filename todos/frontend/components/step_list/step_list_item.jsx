import React from 'react';

class StepListItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
        this.handleDone = this.handleDone.bind(this)
        
    }

    handleDelete(e){
        this.props.removeStep(this.props.step)
        
    }

    handleDone(e){
        if(this.props.step.done){
            this.props.receiveStep({...this.props.step, done: false})
        } else {
            this.props.receiveStep({...this.props.step, done: true})    
        }
    }

    render(){
        return (
            <div>
                {this.props.step.title}<br></br>
                {this.props.step.body}
                <button onClick={this.handleDone}>{this.props.step.done.toString()}</button>
                <button onClick= {this.handleDelete}>Remove</button>
            </div>
        )
    }
}

export default StepListItem;