import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import Button from "../../Components/Button";
function CounterControl() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "count/increment" });
  };
  const decrement = () => {
    dispatch({ type: "count/decrement" });
  };
  const reset = () => {
    dispatch({ type: "count/reset" });
  };
  return (
    <div className="CounterControl_container">
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
export default CounterControl;
