//Sarmiento Benedic
import React from "react";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">Task List</h4>

      <table className="table table-striped table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                No tasks added yet.
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.title}>
                <td className="fw-semibold">{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <span
                    className={`badge bg-${
                      task.priority === "High"
                        ? "danger"
                        : task.priority === "Medium"
                        ? "warning"
                        : "secondary"
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteTask(task.title)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
