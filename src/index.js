import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';

const initialState={
  todos:[]
}

const todoReducer=( state =initialState ,action)=>{
  switch(action.type){
    case "ADD_TODO":
      state={...state,todos:[...state.todos,action.payload]}
      break;
    case "REMOVE_TODO":
      console.log(action.payload)
      let todos=state.todos;
      todos=todos.filter(todo=> todo.id!==action.payload)
      state={...state,todos}
      break;
      
    default:
      state={...state}  
  }
  return state;

}

const store =createStore(todoReducer)

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  
);
