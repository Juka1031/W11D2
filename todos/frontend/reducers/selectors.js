export const allTodos = (state) => {
    const todos = Object.values(state.todos)

    return todos;
};

export const stepsByTodoId = (state, todoId) => {
    const steps = Object.values(state.todos).filter(todo => todo.id === todoId)


    return steps
}

