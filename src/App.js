import './App.css';
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import {List} from "./components/List";
// import {Todos} from "./components/Todos";
import React, { useState } from 'react';
import { AddTodo } from "./components/addTodo";

function App() {

  const onDelete=(todo)=>{
    console.log("delete")

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo=(title, desc)=>{
    console.log("added")
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
    sno = todos[todos.length-1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Study",
      desc: "Frontend Task"
    },
    {
      sno: 2,
      title: "Eat",
      desc: "Lunch Time"
    },
    {
      sno: 3,
      title: "Study",
      desc: "Academics"
    },
  ])

  return (
    <>
      <Header title="To-Do List" search={true}/>
      <AddTodo addTodo={addTodo}/>
      <List todos={todos} onDelete = {onDelete} /> 
      <Footer/>
    </>
  );
}

export default App;
