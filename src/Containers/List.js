import React, { useEffect, useState } from "react";
import ListHeaders from "../Components/ListHeaders";
import NewTask from "../Components/NewTask";
import Task from "../Components/Task";
import Filter from "../Components/Filter";
import useFetch from "../Hooks/useFetch";

const List = () => {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const tasksApi = useFetch(
    "https://5cfabdcbf26e8c00146d0b0e.mockapi.io/tasks"
  );

  useEffect(() => {
    setLoading(true);
    tasksApi
      .get()
      .then(data => data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)))
      .then(data => setList(data));
    setLoading(false);
  }, []);

  const addTask = () => {
    if (!newTask) return;
    setLoading(true);
    tasksApi
      .post({
        description: newTask,
        createdAt: new Date().toISOString(),
        done: false,
        updatedAt: ""
      })
      .then(data => {
        const newList = [...list, data].sort((a, b) =>
          a.createdAt < b.createdAt ? 1 : -1
        );
        setList(newList);
        setNewTask("");
        setLoading(false);
      });
  };

  const toogleTask = task => {
    const { id, done } = task;

    setLoading(true);
    tasksApi
      .put(id, {
        done: !done,
        updatedAt: new Date().toISOString()
      })
      .then(data => {
        const newList = list
          .map(l => {
            if (l.id === id) {
              l.done = data.done;
              l.updatedAt = data.updatedAt;
            }
            return l;
          })
          .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
        setList(newList);
        setNewTask("");
        setLoading(false);
      });
  };

  const deleteTask = task => {
    const { id } = task;
    setLoading(true);
    tasksApi.del(id).then(data => {
      const newList = list
        .filter(l => l.id !== data.id)
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
      setList(newList);
      setLoading(false);
    });
  };

  const filteredList = list.filter(
    task =>
      filter === "all" ||
      (filter === "done" && task.done) ||
      (filter === "pending" && !task.done)
  );

  return (
    <div className="row">
      {loading ? <div className="loading" /> : ""}
      <div className="col-8">
        <NewTask addTask={addTask} newTask={newTask} setNewTask={setNewTask} />
      </div>
      <div className="col">
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <div className="col-12">
        <hr />
      </div>

      <div className="col-12">
        <ul className="list-group">
          <ListHeaders />
          {filteredList.map(task => (
            <Task
              key={task.id}
              task={task}
              toogleTask={toogleTask}
              deleteTask={deleteTask}
              id={task.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default List;
