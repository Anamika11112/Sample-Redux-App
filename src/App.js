import React, { useState } from "react";
import CounterMain from "./Pages/CounterMain";
import CounterControl from "./Pages/CounterControl";
import TodoMain from "./Pages/TodoMain";
import TodoControl from "./Pages/TodoControl";
import "./App.css";
function App() {
  const [editId, setEditId] = useState("");
  const [editText, setEditText] = useState("");
  return (
    <div className="app_container">
      <div className="app_container_main">
        <CounterMain />
        <TodoMain setEditId={setEditId} setEditText={setEditText} />
      </div>
      <div className="app_container_bottom">
        <CounterControl />
        <TodoControl
          editId={editId}
          editText={editText}
          setEditId={setEditId}
        />
      </div>
    </div>
  );
}
export default App;
