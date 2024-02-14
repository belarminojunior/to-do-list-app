import React from "react";

import TaskLine from "./TaskLine";

const Content = ({ tasks, checkTask, deleteTask }) => {
  return (
    <main>
      {tasks.length ? (
        <TaskLine tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your ToDo List Is Empty</p>
      )}
    </main>
  );
};

export default Content;
