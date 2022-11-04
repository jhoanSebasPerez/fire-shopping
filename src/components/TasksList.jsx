import React, { useState, useEffect, useContext } from 'react'
import { createTask, getTasks, updateTask, deleteTask } from '../firebase/taskController'
import { AppContext } from '../App'

const initialTask = { title: '', description: '' }

const TasksList = () => {
  const { user } = useContext(AppContext)

  const [task, setTask] = useState(initialTask)
  const [tasks, setTasks] = useState([])
  const [mode, setMode] = useState('add')

  const handleSubmit = () => {
    if (mode === 'add') {
      createTask(task)
    } else {
      updateTask(task)
    }
    fetchData()
    setTask(initialTask)
    setMode('add')
  }

  const fetchData = async () => {
    try {
      const tasksServer = await getTasks()
      setTasks(tasksServer)
    } catch (error) {
      console.log(error)
    }
  }

  const editTask = (task) => {
    setTask(task)
    setMode('edit')
  }

  const removeTask = (task) => {
    deleteTask(task)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section>
      <div className='flex flex-col align-middle bg-orange-100 py-6 rounded-md'>
        <input
          type='text'
          value={task.title}
          onChange={e => setTask({ ...task, title: e.target.value })}
          placeholder='Title for task'
          className='shadow-sm border-2 py-1 px-2 rounded-md w-80 mb-3 m-auto'
          disabled={!user}
        />
        <textarea
          row={4}
          value={task.description}
          onChange={e => setTask({ ...task, description: e.target.value })}
          placeholder='Description for task'
          className='shadow-sm border-2 py-1 px-2 rounded-md w-80 m-auto'
          disabled={!user}
        />

        <button
          className='mt-5 bg-orange-600 text-white py-2 rounded-md w-40 m-auto hover:bg-orange-400 transition disabled:bg-gray-300'
          onClick={handleSubmit}
          disabled={!user}
        >
          {mode}
        </button>

        {/* Tasks list */}
      </div>
      {!user && <p className='text-red-600 font-semibold mt-5'>Please login before taking any action</p>}
      <div>
        {tasks.map(task => (
          <article
            key={task.id}
            className='text-left my-3 bg-amber-100 p-4 rounded-md w-80 m-auto'
          >

            <h3
              className='mb-1 font-semibold text-xl'
            >{task.title}
            </h3>
            <p
              className='text-lg text-gray-500'
            >{task.description}
            </p>

            <div className='flex justify-between mt-3'>

              <button
                className='bg-blue-400 py-1 px-3 rounded text-white hover:bg-blue-300'
                onClick={() => editTask(task)}
              >Edit
              </button>
              <button
                className='bg-red-500 py-1 px-3 rounded text-white hover:bg-red-300'
                onClick={() => removeTask(task)}
              >Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TasksList
