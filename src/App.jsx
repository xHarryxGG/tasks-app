import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";

function App() {
  return (
    <main className="bg-zinc-900 h-screen pt-10">
      <section className="container mx-auto">
        <TaskForm />
        <TaskList />
      </section>
    </main>
  );
}

export default App;
