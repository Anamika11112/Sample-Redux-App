import React from "react";
import Loader from "../Loader";
import "./index.css";
function Button({
  type = "button",
  name,
  onClick,
  children,
  className,
  loading,
  loaderClassname,
}) {
  return (
    <div>
      <button
        type={type}
        name={name}
        onClick={onClick}
        disabled={loading}
        className={`button ${className}`}
      >
        {loading ? (
          <div className="button_content">
            <Loader className={loaderClassname} />
            Loading
          </div>
        ) : (
          children
        )}
      </button>
    </div>
  );
}
export default Button;
