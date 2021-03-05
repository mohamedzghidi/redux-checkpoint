import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const TaskList = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <Task key={index} todo={todo} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(TaskList);
