import type { Task } from '../types/task'
import TaskItem from './TaskItem'

interface TaskListProps {
  tasks: Task[]
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
}

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="mt-8 text-slate-500">
        Задач пока нет
      </p>
    )
  }

  return (
    <ul className="mt-8 space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  )
}

export default TaskList