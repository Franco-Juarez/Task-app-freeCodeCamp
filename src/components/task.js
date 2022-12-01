import React from "react"; 
import "../styles/taskStyle.css"
import { TiDeleteOutline } from "react-icons/ti";

const Task = ( {id, text, completed, completeTask, deleteTask} ) => {
  return (
    <div className={completed ?  "taskStyle completedTask" : "taskStyle"}>
      <li onClick={() => completeTask(id)}> 
      {text} 
      </li>
      <TiDeleteOutline className={completed ?  "delteIcon completedTask" : "delteIcon"} onClick={() => deleteTask(id)}/>
    </div>
  )
}


export default Task;