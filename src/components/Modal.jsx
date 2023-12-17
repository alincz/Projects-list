import React, { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
 const dialog = useRef()
 
  useImperativeHandle(ref, () => {
    return {
      open() {
       dialog.current.showModal()
      }
      //in metoda open vreau sa ajung cu dialogul respectiv
      //si sa apelez metoda showModal care este furnizata de acea
      //componenta de dialog built-in
    }
  })
  //l am folosit pt a expune o functie care poate
  //fi apelata din afara acestei component function 
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
    <form method="dialog" className="mt-4 text-right ">
      <Button >{buttonCaption}</Button>
    </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
