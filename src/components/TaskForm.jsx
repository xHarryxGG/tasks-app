import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("")
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(tittle)

    createTask({
      tittle,
      description
    })

    setTittle("")
    setDescription("")
  }

  return (
    <div className="bg-slate-700 py-5 px-5 max-w-md mx-auto">
      <h1 className="text-white text-2xl my-2 font-bold text-center">Create your task</h1>
      <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your task..."
        onChange={(e) => setTittle(e.target.value)}
        value={tittle}
        autoFocus
        className="w-full bg-slate-100 p-1 my-2"
      />
      <textarea 
        placeholder="Write the description of your task..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full bg-slate-100 p-1 mb-2"
      ></textarea>
      <button className="w-full bg-green-800 p-1 my-2 hover:bg-green-700 rounded-md text-white">Save</button>
    </form>
    </div>
  );
}

export default TaskForm;
