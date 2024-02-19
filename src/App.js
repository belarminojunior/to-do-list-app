import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";

import apiRequest from "./apiRequest";
import { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:3500/tasks";

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data!");

        const listTasks = await response.json();
        setTasks(listTasks);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchTasks())();
    }, 2000);
  }, []);

  const addTask = async (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id, completed: false, task };
    const listTasks = [...tasks, newTask];
    setTasks(listTasks);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const deleteTask = async (id) => {
    const listTasks = tasks.filter((task) => task.id !== id);
    setTasks(listTasks);

    const deleteOptions = {
      method: "DELETE",
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);

    if (result) setFetchError(result);
  };

  const checkTask = async (id) => {
    const listTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(listTasks);

    const myTask = listTasks.filter((task) => task.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: myTask[0].completed }),
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);

    if (result) setFetchError(result);
  };

  const submitTask = (e) => {
    e.preventDefault();

    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="App">
      <Header title="To Do App" />
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        submitTask={submitTask}
      />
      <SearchTask search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading Tasks...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            tasks={tasks.filter((task) =>
              task.task.toLowerCase().includes(search.toLowerCase())
            )}
            checkTask={checkTask}
            deleteTask={deleteTask}
          />
        )}
      </main>
      <Footer length={tasks.length} />
    </div>
  );
}

export default App;
