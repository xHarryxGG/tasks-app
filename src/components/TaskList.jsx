import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl my-10 font-bold text-center">No hay tareas pendientes</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-5">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
