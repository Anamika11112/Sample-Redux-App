import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import Button from '../../Components/Button'
function TodoMain({setEditText,setEditId}) {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch()
  const deleteTask = (deleteID) =>{
    dispatch({type:"todos/deleteTask",payload:{id:deleteID}})
  }
  const toggleComplete = (completeID) =>{
    dispatch({type:"todos/completeTask",payload:{id:completeID}})
  }
  const handleEdit = (todos) =>{
    setEditId(todos.id)
    setEditText(todos.text)
  }
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
           onClick={() =>toggleComplete(todos.id)}
          >{todos.completed ? "completed" : "Accomplish"}</Button>
          <Button onClick={() =>deleteTask(todos.id)}>Delete</Button>
          <Button onClick={() =>handleEdit(todos)}>Edit</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TodoMain;
