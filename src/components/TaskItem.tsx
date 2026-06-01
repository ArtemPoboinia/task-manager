import type { Task } from '../types/task'

interface TaskItemProps {
  task: Task
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
}

function TaskItem({
  task,
  toggleTask,
  deleteTask,
}: TaskItemProps) {
  return (
    <li className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 shadow-sm">
      <span
        className={`font-medium ${
          task.completed
            ? 'text-slate-400 line-through'
            : 'text-slate-800'
        }`}
      >
        {task.title}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => toggleTask(task.id)}
          className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          {task.completed
            ? 'Отменить'
            : 'Готово'}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Удалить
        </button>
      </div>
    </li>
  )
}

export default TaskItem