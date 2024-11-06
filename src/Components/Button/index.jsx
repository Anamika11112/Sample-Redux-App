import React from "react";
import "./index.css";
function Button({ type = "button", name, onClick, children }) {
  return (
    <div>
      <button type={type} name={name} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
export default Button;
