import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

function TaskList({ tasks, toggleTask, deleteTask }: TaskListProps) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        marginTop: "20px",
      }}
    >
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
