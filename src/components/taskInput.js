import React, { useState } from "react";
import "../styles/taskInputStyle.css";
import { v4 as uuidv4 } from 'uuid';


const TaskInput = (props) => {

  const [input, setInput] = useState("");

  const inputHandler = e => {
    setInput(e.target.value)
  }

  const sendHandler = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTask);
  }


  return (
    <form 
    onSubmit={sendHandler}
    className="inputDiv">
      <input 
      type="text" 
      placeholder="Enter your task"
      onChange={inputHandler}>
      </input>
      <button type="submit">
        ADD TASK
      </button>
    </form>
  )
}

export default TaskInput;