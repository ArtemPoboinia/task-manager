import { useEffect, useState } from "react";
import type { Task } from "./types/task";

function App() {
  const [taskTitle, setTaskTitle] = useState("");

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

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1>Task Manager</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Введите задачу"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
          }}
        />

        <button onClick={addTask}>Добавить</button>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "20px",
        }}
      >
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#fff",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                opacity: task.completed ? 0.5 : 1,
              }}
            >
              {task.title}
            </span>

            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Отменить" : "Выполнить"}
              </button>

              <button onClick={() => deleteTask(task.id)}>Удалить</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
