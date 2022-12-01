import React, { useState } from "react";
import Task from "./task";
import TaskInput from "./taskInput";



const TaskList = () => {
  
  const [tasks, setTask] = useState([]);

  const addTask = task => {
    if(task.text.trim()) {
      task.text = task.text.trim();
      const actualicedTaskList = [task, ...tasks];
      setTask(actualicedTaskList);
    } else {
      alert("Please, add a task")
    }
  }

  const deleteTask = id => {
    const actualicedTaskList = tasks.filter(task => task.id !== id);
    setTask(actualicedTaskList);
  }

  const completedTask = id => {
    const actualicedTaskList = tasks.map(task => {
      if (task.id === id ) {
        task.completed = !task.completed;
      }
      return task
    })
    setTask(actualicedTaskList);
  }

  return (
    <>
      <div>
        <TaskInput 
        onSubmit={addTask}/>
      </div>
      <ul className='taskList'>
        {
          tasks.map((task) =>
          <Task
          key={task.id}
          id={task.id}
          text= {task.text}
          completed={task.completed}
          completeTask={completedTask}
          deleteTask={deleteTask}
          />
          )
        }
      </ul>
    </>
  )
}


export default TaskList;