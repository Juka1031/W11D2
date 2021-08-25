
import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";
// import {  } from "../actions/todo_actions";


const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
};
  


//why are reducers pure function? does not mutate any local variables
const todosReducer = (state = initialState ,action) =>{

    Object.freeze(state); //should never mutate state so freeze ensures that
    const nextState = Object.assign({},state);//Object.assign makes a shallow copy of nextState so you can mutate the new copy
    // debugger
    switch(action.type){

        case RECEIVE_TODOS:
            action.todos.forEach( object => {
                nextState[object.id] = object
            })
            return nextState;

        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo 
            return  nextState;
        
        case REMOVE_TODO:
            delete nextState[action.todo.id];
            return nextState;

        default:
            return state;
    }
}

export default todosReducer;