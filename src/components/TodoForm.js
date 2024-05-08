import React, { useState } from 'react'
import './TodoForm.css'

function TodoForm({addTodo}) {
  const [ value, setValue ] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)

    setValue('')
  }
  return (
    <form className='todoForm'onSubmit={handleSubmit}>
      <input type="text" 
      className='text-input' 
      onChange={(e) => setValue(e.target.value)}
      value={value}
      
      placeholder='What is your todo?' />
      <button type='submit' className='todo-btn'>Add Todo</button>

    </form>
  )
}

export default TodoForm