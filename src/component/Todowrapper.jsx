import React, { useState } from "react";
import { Todoform } from "./Todoform";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { Edittodo } from "./Edittodo";
uuidv4();
export const Todowrapper = () => {
  const [todos, settodos] = useState([]);

  const addtodo = (todo) => {
    settodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isediting: false },
    ]);
    console.log(todos);
  };
  const togglecomplete = (id) => {
    settodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handledelete = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };
  const handleedit = id =>{
    settodos(todos.map((todo)=>todo.id === id ?{...todo,isedited:!todo.isedited}:todo))
  }
  const edittask = (task,id)=>{
settodos(todos.map(todo=>todo.id===id ? {...todo,task,isedited:!todo.isedited}:todo))
  }
  return (
    <div className="bg">
      <Todoform addtodo={addtodo} />
      {todos.map((todo, index) => (
        todo.isedited ? (<Edittodo edittodo={edittask} task={todo}/>) : (
        <Todo
          task={todo}
          key={index}
          togglecomplete={togglecomplete}
          handledelete={handledelete}
          handleedit={handleedit}
        />)
      ))}
    </div>
  );
};
