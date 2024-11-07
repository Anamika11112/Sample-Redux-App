import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import Button from "../../Components/Button";
import { increment,decrement,reset } from '../../Redux/Counter/counterActions';
function CounterControl() {
  const dispatch = useDispatch();
  return (
    <div className="CounterControl_container">
      <Button onClick={()=>dispatch(increment())}>+</Button>
      <Button onClick={()=>dispatch(decrement())}>-</Button>
      <Button onClick={()=>dispatch(reset())}>Reset</Button>
    </div>
  );
}
export default CounterControl;
