import React from "react";
import "./index.css";
function Button({ type = "button", name, onClick, children,className}) {
  return (
    <div>
      <button type={type} name={name} onClick={onClick} className={`button ${className}` }>
        {children}
      </button>
    </div>
  );
}
export default Button;
