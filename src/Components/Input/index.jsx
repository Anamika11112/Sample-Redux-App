import React from "react";
import "./index.css";
function Input({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
  disabled,
  rest,
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
}
export default Input;
