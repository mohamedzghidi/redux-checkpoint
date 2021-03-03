import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import TaskList from "./Components/TaskList";
import "bootstrap/dist/css/bootstrap.css";
import AddTask from "./Components/AddTask";

const initialState = {
  todos: [
    {
      id: 0,
      description: "Learn about React",
      isDone: false,
    },
    {
      id: 1,
      description: "Meet friends for lunch",
      isDone: false,
    },
    {
      id: 2,
      description: "Build really cool todo app",
      isDone: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "REMOVE":
      const newTodos = state.todos.filter((item) => item.id != action.payload);
      return { todos: newTodos };
    case "ADD":
      const oldTodos = [...state.todos];
      const newTodo = {
        id: state.todos.length,
        description: action.payload,
        isDone: false,
      };
      oldTodos.push(newTodo);
      return { todos: oldTodos };

    case "FILTER":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = createStore(reducer, applyMiddleware(thunk));
// store.dispatch({ type: "INCREMENT" });

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
