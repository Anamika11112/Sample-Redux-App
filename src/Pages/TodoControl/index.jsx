import React, { useEffect, useState } from "react";
import "./index.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../../Redux/Slices/todoSlice";
function TodoControl({ editId, editText, setEditId }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (editId) {
      setTask(editText);
    } else {
      setTask("");
    }
  }, [editId, editText]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      setError("Enter Task");
    } else {
      if (editId) {
        dispatch(editTask({ id: editId, text: task }));
        setEditId(null);
      } else {
        const newTask = {
          id: Date.now() + Math.random(),
          text: task,
          completed: false,
        };
        dispatch(addTask(newTask));
      }
      setError("");
    }
    setTask("");
  };
  return (
    <div className="TodoControl_container">
      <form onSubmit={handleSubmit}>
        <Input placeholder="Enter Task" value={task} onChange={handleChange} />
        <Button type="submit">{editId ? "Update Task" : "Add Task"}</Button>
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
}
export default TodoControl;
