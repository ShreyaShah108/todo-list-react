import React from 'react'

export const Todos = ({todo, onDelete}) => {
  return (
    <div className='my-3'>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button type="button" className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        <hr></hr>
    </div>
  )
}
