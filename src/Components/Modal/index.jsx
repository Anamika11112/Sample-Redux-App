import React from "react";
import "./index.css";
function Modal({ children, onClick }) {
  return (
    <div>
      <div className="modal_container">{children}</div>
      <div className="overlay" onClick={onClick}></div>
    </div>
  );
}
export default Modal;
