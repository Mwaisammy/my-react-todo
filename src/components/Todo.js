import React from 'react'
import { faPenToSquare, faTrash  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Todo.css'

function Todo({task,toggleComplete, deleteTodo, editTodo}) {
  return (
    <div className='todo'>
      <p className={`${task.completed ? "completed" : ""}`}
      onClick={()=> toggleComplete(task.id)}
      >{task.task}</p>
      <div className='todos-btn'>
      <FontAwesomeIcon icon={faPenToSquare} className="icon" onClick={()=> editTodo(task.id)}/>
      <FontAwesomeIcon icon={faTrash} className="icon"  onClick={() => deleteTodo(task.id)}/>
      </div>
      
    </div>
  )
}

export default Todo