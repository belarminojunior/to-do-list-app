import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddTask = ({ newTask, setNewTask, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form action="" className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addTask">Add Task</label>
      <input
        type="text"
        autoFocus
        id="addTask"
        placeholder="addTask"
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button
        type="submit"
        aria-label="Add Task"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddTask;
