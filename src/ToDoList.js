import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, checkTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          checkTask={checkTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
