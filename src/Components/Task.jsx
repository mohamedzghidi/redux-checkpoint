import React, { useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filteredTodos: state.filteredTodos,
  };
};

const Task = (props) => {
  const editId = "edit" + props.todo.id;
  const inputId = "input" + props.todo.id;
  const doneId = "done" + props.todo.id;

  const remove = () => {
    props.dispatch({ type: "REMOVE", payload: props.todo.id });
  };

  const handleChange = (e) => {
    props.dispatch({
      type: "EDIT",
      id: props.todo.id,
      payload: e.target.value,
    });
  };

  const edit = () => {
    const buttonType = document
      .getElementById(editId)
      .className.includes("save")
      ? "save"
      : "edit";
    if (buttonType === "edit") {
      document.getElementById(inputId).removeAttribute("disabled");
      document.getElementById(editId).className = "fa fa-save save";
    } else {
      document.getElementById(inputId).setAttribute("disabled", true);
      document.getElementById(editId).className = "fa fa-edit edit";
    }
  };

  const mark = () => {
    const buttonType = document.getElementById(doneId).className.includes("up")
      ? "done"
      : "undone";
    if (buttonType === "done") {
      document.getElementById(doneId).className = "fa fa-thumbs-down done";
      props.dispatch({
        type: "DONE",
        id: props.todo.id,
        payload: true,
      });
    } else {
      document.getElementById(doneId).className = "fa fa-thumbs-up done";
      props.dispatch({
        type: "DONE",
        id: props.todo.id,
        payload: false,
      });
    }
  };

  return (
    <div className="row justify-content-between text-white p-2 todo">
      <div className="form-group flex-fill mb-2">
        <input
          id={inputId}
          type="text"
          disabled
          className="form-control"
          value={props.todo.description}
          style={{ textDecoration: props.todo.isDone ? "line-through" : "" }}
          onChange={handleChange}
        />
      </div>
      <span
        id={editId}
        className="fa fa-edit edit"
        onClick={() => edit()}
      ></span>
      <span className="fa fa-trash delete" onClick={() => remove()}></span>
      <span
        id={doneId}
        className="fa fa-thumbs-up done"
        onClick={() => mark()}
      ></span>
    </div>
  );
};

export default connect(mapStateToProps)(Task);
