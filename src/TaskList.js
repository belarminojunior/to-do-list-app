import React from "react";
import TaskLine from "./TaskLine";

const TaskList = ({ tasks, checkTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskLine
          key={task.id}
          task={task}
          checkTask={checkTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
