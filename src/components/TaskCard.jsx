import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext)

  function showAlert() {
    alert("Task removed!");
  }

  return (
    <div className="bg-slate-800 text-white rounded-md p-4 capitalize min-w-60">
      <h1 className="text-xl font-bold">{task.tittle}</h1>
      <p className="text-slate-400 text-sm my-1">{task.description}</p>
      <button
        className="rounded-md bg-red-800 px-3 py-0.5 hover:bg-red-700"
        onClick={() => {
          deleteTask(task.id), showAlert();
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
