import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) =>{
    console.log("I am onDelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodos]= useState([
    {
      sno: 1,
      title: "title 1",
      description: "description 1"
    },
    {
      sno: 2,
      title: "title 2",
      description: "description 2"
    },
    {
      sno: 3,
      title: "title 3",
      description: "description 3"
    }    
  ]);
  return (
    <div classNameName="App">
        <Header title="My Todo's List" link={false}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>
    </div>
  );
}

export default App;
