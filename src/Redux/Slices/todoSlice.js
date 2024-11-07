import { createSlice } from "@reduxjs/toolkit";
const generateUniqueId = () => Date.now() + Math.random();
export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: generateUniqueId(), text: "HTML Learning", completed: false },
    { id: generateUniqueId(), text: "CSS Learning", completed: false },
    { id: generateUniqueId(), text: "JavaScript Learning", completed: false },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    completionStatusToggle: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
    editTask: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
    },
  },
});
export const { addTask, deleteTask, completionStatusToggle, editTask } = todoSlice.actions;
export default todoSlice.reducer;
