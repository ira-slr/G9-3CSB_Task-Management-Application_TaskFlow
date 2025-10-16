import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskListView from "./pages/TaskListView";
import AddTaskView from "./pages/AddTaskView";

function App() {
   const [tasks, setTasks] = useState([
    {
      title: "Sample",
      description: "dobby dubby dabby",
      priority: "High"
    } 

  ]);
  const addTask = (task) => {
    setTasks((prev) => [...prev, {...task}]);
  };
  const deleteTask = (title) => {
    setTasks(tasks.filter((task) => task.title !== title));

  };

  return (
    <>
      <Navbar />
       <Routes>
        <Route path="/" element={<TaskListView tasks={tasks} deleteTask = {deleteTask}/>} />
        <Route path="/add" element={<AddTaskView addTask ={addTask} />} />
      </Routes>
    </>
  );
}

export default App;
