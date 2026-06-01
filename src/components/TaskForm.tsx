interface TaskFormProps {
  taskTitle: string
  setTaskTitle: (value: string) => void
  addTask: () => void
}

function TaskForm({
  taskTitle,
  setTaskTitle,
  addTask,
}: TaskFormProps) {
  return (
    <div className="mt-8 flex gap-3">
      <input
        type="text"
        placeholder="Введите новую задачу..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={addTask}
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Добавить
      </button>
    </div>
  )
}

export default TaskForm