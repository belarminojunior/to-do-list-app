import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddTask = ({ newTask, setNewTask, submitTask }) => {
  return (
    <form action="" className="addForm" onSubmit={submitTask}>
      <label htmlFor="addTask">Add Task</label>
      <input
        type="text"
        autoFocus
        id="addTask"
        placeholder="Add Task"
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button type="submit" aria-label="Add Task">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddTask;
