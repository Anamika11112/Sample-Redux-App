import React from "react";
import Button from "../../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import {
  deleteTask,
  completionStatusToggle,
} from "../../Redux/Slices/todoSlice";
function TodoMain({ setEditText, setEditId }) {
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const handleEdit = (todos) => {
    setEditId(todos.id);
    setEditText(todos.text);
  };
  return (
    <div className="TodoMain_container">
      {todos.map((todos) => (
        <div
          className={`todo_box ${todos.completed ? "complete" : "notComplete"}`}
          key={todos.id}
        >
          <p>{todos.text}</p>
          <div className="button_group">
            <Button
              onClick={() => {
                dispatch(completionStatusToggle(todos.id));
              }}
            >
              {todos.completed ? "completed" : "mark as complete"}
            </Button>
            <Button onClick={() => dispatch(deleteTask(todos.id))}>
              Delete
            </Button>
            <Button onClick={() => handleEdit(todos)}>Edit</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TodoMain;
