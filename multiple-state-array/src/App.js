
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks,setTasks]=useState([
  {id:1,name:"Kajal",completed:true},
  {id:2,name:"PM",completed:false},
  {id:3,name:"Pritam",completed:true}
])
const handleDelete=((id)=>{
  setTasks(tasks.filter(task=>
    task.id!==id
  ))
})
  return (
    <div className="App">
    <h1>Task List</h1>
   <ul>
   {tasks.map((task)=>(
    <li key={task.id}> <span>{task.id} - {task.name}</span>
    <button onClick={()=>handleDelete(task.id)} className='delete'>Delete</button>
    </li>
   ))}
   </ul>
    </div>
  );
}

export default App;
