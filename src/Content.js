import React from "react";

import ToDoItem from "./ToDoItem";

const Content = () => {
  return (
    <main>
      {tasks.length ? (
        <ToDoItem tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your ToDo List Is Empty</p>
      )}
    </main>
  );
};

export default Content;
