import React from "react";
import ActionButtons from "./ActionButtons";

const Task = props => {
  const { task, toogleTask, deleteTask } = props;

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">{new Date(task.createdAt).toLocaleString()}</div>
        <div className="col">{task.description}</div>
        <div className="col-2 text-right">
          {task.done ? new Date(task.updatedAt).toLocaleString() : ""}
        </div>
        <div className="col-2 text-right">
          <ActionButtons
            task={task}
            toogleTask={toogleTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </li>
  );
};
export default Task;
