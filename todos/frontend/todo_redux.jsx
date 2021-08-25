import configureStore from "./store/store";
import { receiveStep, receiveSteps, removeStep } from "./actions/step_actions";
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions";
import App from "./components/app"
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import {allTodos, stepsByTodoId} from './reducers/selectors'


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
    window.allTodos = allTodos;
    window.stepsByTodoId = stepsByTodoId;

    const root = document.getElementById("root");   
    ReactDOM.render(<Root store = {store} />, root)

})