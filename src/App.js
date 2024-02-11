import Header from "./Header";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "Finish this mini project",
      completed: false,
    },
    {
      id: 2,
      content: "Date with Sarah",
      completed: false,
    },
    {
      id: 3,
      content: "Think about somethin new to create",
      completed: true,
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("todos", JSON.stringify(newTasks));
  };

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id, completed: false, task };
    const listTasks = [...tasks, newTask];
    setAndSaveTasks(listTasks);
  };

  const deleteTask = (id) => {
    const listTasks = tasks.filter((task) => task.id !== id);
    setAndSaveTasks(listTasks);
  };

  const checkTask = (id) => {
    const listTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setAndSaveTasks(listTasks);
  };

  const submitTask = (e) => {
    e.preventDefault();

    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="App">
      <Header title="ToDoList App" />
      <ToDoList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
      <Footer />
    </div>
  );
}

export default App;
