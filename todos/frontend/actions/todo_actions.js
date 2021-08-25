export const RECEIVE_TODOS = "RECEIVE_TODOS"; //we set the string as a const so it throws an error if mispelt (error would be undefined) when used in cases
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
//action creator
export const receiveTodos = (todos) => { // simply a function that creates a hash object
    return { 
      type: RECEIVE_TODOS, //type
      todos:todos //payload
    };
};

export const receiveTodo = (todo) => {
    return {
      type: RECEIVE_TODO,
      todo,
    };
};


export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo,
  };
};



