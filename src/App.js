import './App.css';
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { List } from "./components/List";
// import {Todos} from "./components/Todos";
import React, { useState, useEffect } from 'react';
import { AddTodo } from "./components/addTodo";
import { About } from "./components/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(storedTodos || []);
  }, []);

  const onDelete = (todo) => {
    console.log("delete");

    setTodos(todos.filter((e) => e !== todo));
    // Update localStorage after deleting a todo.
    localStorage.setItem("todos", JSON.stringify(todos.filter((e) => e !== todo)));
  };

  const addTodo = (title, desc) => {
    console.log("added");
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    let myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    // Update todos state with the new todo.
    setTodos([...todos, myTodo]);
    // Update localStorage after adding a new todo.
    localStorage.setItem("todos", JSON.stringify([...todos, myTodo]));
  };

  return(
    <>
      <Router>
        <Header title="To-Do List" search={false} />
        <Routes>
          <Route path="/" element={(
          
              <>
                <AddTodo addTodo={addTodo} />
                <List todos={todos} onDelete={onDelete}/>
              </>
          )}
        
        />
        <Route path="/about" element={<About/>}>
          {/* <About /> */}
        </Route>
              
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
