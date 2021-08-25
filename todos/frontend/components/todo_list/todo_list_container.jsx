import { connect } from "react-redux";
import { removeTodo } from "../../actions/todo_actions";
import { allTodos } from "../../reducers/selectors";
import TodoList from "./todo_list";


const mSTP = (state) => ({
    todos: allTodos(state),

})

const mDTP = (dispatch) => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo))

})

export default connect(
    mSTP,
    mDTP
)(TodoList); //function class?