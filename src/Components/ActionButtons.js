import React from "react";

const ActionButtons = props => {
  const { task, toogleTask, deleteTask } = props;
  const iconClass =
    "fa " + (task.done ? "fa-check green" : "fa-exclamation orange");
  return (
    <span>
      <button
        className="btn btn-light"
        onClick={() => toogleTask(task)}
        title="Toogle Task"
      >
        <i className={iconClass} />
      </button>
      <button
        className="btn btn-light"
        title="Delete Task"
        onClick={() => deleteTask(task)}
      >
        <i className="fa fa-trash red" />
      </button>
    </span>
  );
};

export default ActionButtons;
