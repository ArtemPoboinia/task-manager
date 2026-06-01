import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

function TaskItem({ task, toggleTask, deleteTask }: TaskItemProps) {
  return (
    <li
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
  );
}

export default TaskItem;
