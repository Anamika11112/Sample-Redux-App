import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";
import todoReducer from "./Slices/todoSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoReducer,
  },
});
