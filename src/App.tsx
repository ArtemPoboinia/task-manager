import { useEffect, useState } from "react";
import type { Task } from "./types/task";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskTitle.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle("");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="min-h-screen bg-slate-100 py-16 px-4">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900">Task Manager</h1>

        <p className="mt-2 text-slate-500">Управляй своими задачами красиво</p>

        <TaskForm
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          addTask={addTask}
        />

        <FilterBar filter={filter} setFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </main>
  );
}

export default App;
