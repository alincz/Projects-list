import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState();
  //  cu acest useState luam datele din input cand apasam pe buton

  function handleChange(event) {
    setEnteredTask(event.target.value); //folosim metoda asta pt a stoca valoarea
    //introdusa pe input ca o noua valoare pt acest setEnteredTask
  }

  function handleClick() {
    onAdd(enteredTask);
    setEnteredTask("");

  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
