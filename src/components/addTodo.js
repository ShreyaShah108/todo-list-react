import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=> {
        e.preventDefault();
        if (!title || !desc) {
            alert("title or description cannot be blank")
        }
        props.addTodo(title,desc);
    }

  return (
    <div className='container my-3'>
        <form onSubmit={submit}>
            <h3>Add a Task</h3>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Task Name</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
            </div>
            <button type="Submit" className="btn btn-sm btn-success">Add</button>
        </form>
    </div>
  )
}
