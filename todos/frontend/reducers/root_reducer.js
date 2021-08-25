import { combineReducers } from "redux";
import stepsReducer from "./steps_reducer";
import todosReducer from "./todos_reducer";


const rootReducer = combineReducers({ // all this does is combine all the reducers into one pojo
    todos: todosReducer,
    steps: stepsReducer
})

export default rootReducer;