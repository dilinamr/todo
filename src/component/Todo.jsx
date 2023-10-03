 import React from 'react'
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
 import { faTrash } from '@fortawesome/free-solid-svg-icons'
 export const Todo = ({task,togglecomplete,handledelete,handleedit}) => {
    
   return (
     <div className='list'>
        <p onClick={()=>togglecomplete(task.id)} className={`${task.completed ? 'done':""}`}>{task.task}</p>
        <div className='li-icons'>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>handleedit(task.id)} className='icon'/>   
            <FontAwesomeIcon icon={faTrash} onClick={()=>handledelete(task.id)}/>
        </div>
     </div>
   )
 }
 