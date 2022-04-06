import React from "react";
import Additem from "./Components/Additem";
import Tasklist from "./Components/Tasklist";
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tasks: [
        { id: Math.random(), text: "task1" },
        { id: Math.random(), text: "task2" },
        { id: Math.random(), text: "task3" },
      ],
    }   
  }
    
  render() { 
    const addTask=(text)=>{
 
      return this.setState({tasks:[...this.state.tasks, {id:Math.random(), text:text}] })
    }
    return (  
      <div>
        
        <Additem addTask={addTask}/>
        <Tasklist tasks={this.state.tasks}/>
        
      </div>
    );
  }
}
 
export default App;
