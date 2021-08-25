import { connect } from "react-redux";
import { removeTodo } from "../../actions/todo_actions";
import TodoDetailView from "";
import { receiveSteps } from "../../actions/step_actions";

const mDTP = (dispatch) => {
    removeTodo: (todo) => dispatch(removeTodo(todo))
    receiveSteps: (steps) => dispatch(receiveSteps(steps))
}

export default connect (
    null,
    mDTP
)(TodoDetailView);