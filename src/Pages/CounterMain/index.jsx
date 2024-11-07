import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
function CounterMain() {
  const count = useSelector((state) => state.counter.count);
  const todos = useSelector((state) => state.todoList);
  return (
    <div className="CounterMain_container">
      <h1>{count}</h1>
      <h4>Target Hours To Study</h4>
      <h2>Subjects</h2>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>{todos.text.split(" ")[0]}</li>
        ))}
      </ul>
    </div>
  );
}
export default CounterMain;
