import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskListView from "./pages/TaskListView";
import AddTaskView from "./pages/AddTaskView";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskListView/>} />
        <Route path="/add" element={<AddTaskView/>} />
      </Routes>
    </>
  );
}

export default App;
