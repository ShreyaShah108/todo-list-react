import React from 'react'
import {Todos} from "./Todos";

export const List = (props) => {
    let myStyle = {
        minHeight: "70vh"
    }
  return (
    <div className='container' style={myStyle}>
     <h3>My List</h3>
     {props.todos.length===0? "No Remaining Tasks":
     props.todos.map((todo)=>{
        return (
        <>
        <Todos todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
        <hr></hr>
        </>)
     })
     }
    </div>
  )
}
