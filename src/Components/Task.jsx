import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const Task = (props) => {
  const remove = (id) => {
    props.dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div
      className="row justify-content-between text-white p-2"
      style={{ width: "60%", margin: "auto" }}
    >
      <div className="form-group flex-fill mb-2">
        <input
          type="text"
          disabled
          className="form-control"
          value={props.todo.description}
        />
      </div>
      <button
        type="button"
        className="btn btn-danger mb-2 ml-2"
        onClick={() => remove(props.todo.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default connect(mapStateToProps)(Task);
