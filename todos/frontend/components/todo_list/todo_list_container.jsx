import { connect } from "react-redux";
import { allTodos } from "../../reducers/selectors";
import TodoList from "./todo_list";


const mSTP = (state) => ({
    todos: allTodos(state),

})

const mDTP = (dispatch) => ({
    recieveTodo: todo => dispatch(recieveTodo(todo))

})

export default connect(
    mSTP,
    mDTP
)(TodoList); //function class?