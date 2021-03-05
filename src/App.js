import React, { useState } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import TaskList from "./Components/TaskList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AddTask from "./Components/AddTask";
import Filter from "./Components/Filter";

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
    case "REMOVE": {
      const newTodos = state.todos.filter((item) => item.id != action.payload);
      return { todos: newTodos };
    }
    case "ADD": {
      const newTodos = [...state.todos];
      const newTodo = {
        id: state.todos[state.todos.length - 1].id + 1,
        description: action.payload,
        isDone: false,
      };
      newTodos.push(newTodo);
      return { todos: newTodos };
    }

    case "EDIT": {
      const newTodos = [...state.todos].map((todo) => {
        if (todo.id == action.id) {
          todo.description = action.payload;
        }
        return todo;
      });
      return { todos: newTodos };
    }

    case "DONE": {
      const newTodos = [...state.todos].map((todo) => {
        if (todo.id == action.id) {
          todo.isDone = action.payload;
        }
        return todo;
      });
      return { todos: newTodos, filteredTodos: state.filteredTodos };
    }

    case "FILTER": {
      console.log(action.payload);
      switch (action.payload) {
        case "Active": {
          const newTodos = [...state.todos].filter(
            (todo) => todo.isDone === false
          );
          return { todos: newTodos };
        }
        case "Done": {
          const newTodos = [...state.todos].filter((todo) => todo.isDone);
          return { todos: newTodos };
        }
        default:
          return state;
      }
    }

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div>
        <Filter />
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );

  // return (
  //   <main>
  //     <Switch>
  //       <Route path="/" exact render={(props) => <Filter />} />
  //     </Switch>
  //   </main>
  // );
}

export default App;
