import { useEffect, useState } from 'react'
import type { Task } from './types/task'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'

function App() {
  const [taskTitle, setTaskTitle] = useState('')
  const [filter, setFilter] = useState<
    'all' | 'active' | 'completed'
  >('all')

  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (!taskTitle.trim()) return

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskTitle,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setTaskTitle('')
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <main
      style={{
        padding: '40px',
        maxWidth: '700px',
        margin: '0 auto',
      }}
    >
      <h1>Task Manager</h1>

      <TaskForm
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        addTask={addTask}
      />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </main>
  )
}

export default App