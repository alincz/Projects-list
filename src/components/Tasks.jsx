import React from "react";
import NewTask from "./NewTask";
const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <div>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAdd} />
        {tasks && tasks.length === 0 && (
          <p className="text-stone-800 my-4">
            Acest proiect nu are încă sarcini.
          </p>
        )}

        {tasks.length > 0 && (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task) => (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDelete(task.id)}
                  //aici nu a fost suficient sa pun trasnmit onDelete
                  //catre onClick pt ca daca as face acest lucru nu am trece
                  //id-ul de la aceasta functie la handleDeleteTask si am
                  //nevoie de mai mult control si am invelit totul cu o functie a.i sa
                  //am control deplin asupra modului in care se executa
                >
                  Clear
                </button>
              </li>
            ))}
            {/* pt a afisa sarcinile in <ul></ul> folosesc metoda map */}
          </ul>
        )}
      </section>
    </div>
  );
};
// Înainte de a utiliza proprietatea length, trebuie să ma asigur
// că tasks este definit. Pot adăuga o verificare pentru a ma asigura
// că tasks nu este undefined înainte de a accesa proprietatea length

// Această modificare asigură că verificarea tasks.length === 0
// este efectuată
// doar dacă tasks nu este undefined.
export default Tasks;
