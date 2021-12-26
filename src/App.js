import logo from './logo.svg';
import './App.css';
import { Signup } from './component/signup';
import Login from './component/login';
import { LoginForm } from './component/LoginForm';
import { useState } from 'react';
import { Task } from './component/Task';
import { AddTask } from './component/AddTask';


function App() {

  const [tasks, settasks] = useState([
    {
      tId:101,
      tName:"java"
    },
    {
      tId:102,
      tName:"python"
    },
    {
      tId:103,
      tName:"c++"
    }
  ])
  const addTicket =(ticektObj)=>{

    console.log("add ticket called...",ticektObj)

    settasks([...tasks,ticektObj])
  }
  const deleteTask = (task)=>{

    console.log("deleteing.....",task)

    
    settasks(tasks.filter((t)=>{

      return t !== task;
    }))

    console.log(tasks)

  }
  return (
    <div>

      <AddTask addTicket = {addTicket}/>
      <Task tasks ={tasks} deleteTask = {deleteTask}/>

    </div>
  );
}

export default App;
