import React, { useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const AddTask = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    props.dispatch({ type: "ADD", payload: text });
    setText("");
  };

  return (
    <div
      className="row justify-content-between text-white p-2"
      style={{ width: "60%", margin: "auto" }}
    >
      <div className="form-group flex-fill mb-2">
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={text}
        />
      </div>
      <button
        type="button"
        className="btn btn-success mb-2 ml-2"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default connect(mapStateToProps)(AddTask);
