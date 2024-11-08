import React from "react";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";
function CounterMain() {
  const count = useSelector((state) => state.count.count);
  const todos = useSelector((state) => state.todos.todos);
  const navigate = useNavigate();
  return (
    <div className="CounterMain_container">
      <div className="countercontainer_wrap">
      <h1>{count}</h1>
      <h4>Target Hours To Study</h4>
      <h2>Subjects</h2>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>{todos.text.split(" ")[0]}</li>
        ))}
      </ul>
      <Button onClick={() => navigate("/UserDashboard")}>Show Users</Button>
      </div>
    </div>
  );
}
export default CounterMain;
