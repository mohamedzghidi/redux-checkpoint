import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const TaskList = (props) => {
  console.log("Amir: ", props.todos);

  const increment = () => {
    props.dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    props.dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      {props.todos.map((todo, index) => (
        <Task key={index} todo={todo} />
      ))}
    </div>
  );

  //   return (

  //     <div className="counter">
  //       <h2>Counter</h2>
  //       <div>
  //         <button onClick={() => decrement()}>-</button>
  //         <span className="count">{props.todos[0].description}</span>
  //         <button onClick={() => increment()}>+</button>
  //       </div>
  //     </div>
  //   );
};

export default connect(mapStateToProps)(TaskList);
