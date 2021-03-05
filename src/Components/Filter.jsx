import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

function Filter(props) {
  const handleClick = (e) => {
    var spans = document.querySelectorAll(".badge");
    spans.forEach((element) => {
      element.className = "badge badge-secondary";
    });
    e.target.className = "badge badge-primary";
    props.dispatch({
      type: "FILTER",
      payload: e.target.textContent,
    });
  };

  return (
    <div style={{ width: "300px", margin: "auto", marginTop: "15px" }}>
      <div className="form-group flex-fill mb-2">
        <span className="badge badge-primary" onClick={handleClick}>
          All
        </span>
        <span className="badge badge-secondary" onClick={handleClick}>
          Active
        </span>
        <span className="badge badge-secondary" onClick={handleClick}>
          Done
        </span>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Filter);
