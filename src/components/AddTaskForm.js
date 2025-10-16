import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a title for the task.");
      return;
    }

 
    addTask({
      title,
      description,
      priority,
    });


    setTitle("");
    setDescription("");
    setPriority("Low");

    navigate("/");
  };

  return (
    <form onSubmit={submitHandler} className="card p-4 shadow-sm">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="priority" className="form-label">Priority</label>
        <select
          id="priority"
          className="form-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default AddTaskForm;