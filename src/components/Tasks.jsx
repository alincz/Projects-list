import React from "react";
import NewTask from "./NewTask";
const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <div>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAdd} />
        {tasks.length === 0 && (
          <p className="text-stone-800 my-4">
            This project does not have any tasks yet.
          </p>
        )}

        {tasks.length > 0 && (
          <ul className="">
            {tasks.map((task) => (
              <li key={task.id}>
                <span>{task.text}</span>
                <button>Clear</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Tasks;
