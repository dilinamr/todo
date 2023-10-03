import React, { useState } from 'react'

export const Todoform = ({addtodo}) => {
    const [value,setvalue] = useState("")
    
    function handlesubmit (e){
        e.preventDefault();
        addtodo(value)
        setvalue("");
    }
  return (
        <form className='todo-input' onSubmit={handlesubmit}>
            <input type="text" placeholder='enter todo ....' value={value} onChange={(e)=>setvalue(e.target.value)}/>
        
            <button className='btn' type='submit'>ADD</button>
        </form>
    
  )
}
