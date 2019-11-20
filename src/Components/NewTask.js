import React from "react";

const NewTask = props => {
  const { addTask, newTask, setNewTask } = props;

  const keyUpHandler = event => {
    if (event.key === "Enter") addTask();
  };
  return (
    <input
      className="form-control"
      value={newTask}
      placeholder="Add New Task"
      onKeyUp={keyUpHandler}
      onChange={event => setNewTask(event.target.value)}
    />
  );
};

export default NewTask;
