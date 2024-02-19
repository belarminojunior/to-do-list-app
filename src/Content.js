import React from "react";
import TaskList from "./TaskList";

const Content = ({ tasks, checkTask, deleteTask }) => {
  return (
    <main>
      {tasks.length ? (
        <TaskList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your ToDo List Is Empty</p>
      )}
    </main>
  );
};

export default Content;
