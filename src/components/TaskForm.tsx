interface TaskFormProps {
  taskTitle: string;
  setTaskTitle: (value: string) => void;
  addTask: () => void;
}

function TaskForm({ taskTitle, setTaskTitle, addTask }: TaskFormProps) {
  return (
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
  );
}

export default TaskForm;
