import React from "react";

const Tasklist=({tasks,deleteTask})=> {
  return (
      
    <div >
    
    {tasks.map((task)=>(<div className="task" key={task.id}> <h3 >{task.text}</h3>
      
    <button className="btn" onClick={()=>deleteTask(task.id)}>Delete</button>
    
    </div>
        
       
    ))}
    
    </div>
  )
};

export default Tasklist