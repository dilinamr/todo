import React, { useState } from 'react'

export const Edittodo = ({edittodo,task}) => {
    const [value,setvalue] = useState(task.task)
    
    function handlesubmit (e){
        e.preventDefault();
        edittodo(value,task.id)
        setvalue("");
    }
  return (
        <form className='todo-input mt' onSubmit={handlesubmit}>
            <input type="text" placeholder='Update task' value={value} onChange={(e)=>setvalue(e.target.value)}/>
        
            <button className='btn' type='submit'>Update</button>
        </form>
    
  )
}
