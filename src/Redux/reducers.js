const generateUniqueId = () => Date.now() + Math.random();
const initialState = {
  todos: [
    { id: generateUniqueId(), text: "HTML Learning", completed: false },
    { id: generateUniqueId(), text: "CSS Learning", completed: false },
    { id: generateUniqueId(), text: "JavaScript Learning", completed: false },
  ],
};
const todoReducer = (prevState = initialState, action) => {
  const nextId = prevState.todos.length
    ? Math.max(...prevState.todos.map((todo) => todo.id)) + 1
    : 1;
  switch (action.type) {
    case "todos/addTask":
      return {
        ...prevState,
        todos: [...prevState.todos, { id: nextId, ...action.payload }],
      };
    case "todos/deleteTask":
      return {
        ...prevState,
        todos: prevState.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case "todos/completeTask":
      return {
        ...prevState,
        todos: prevState.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "todos/editTask":
      return {
        ...prevState,
        todos: prevState.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    default:
      return prevState;
  }
};

export { todoReducer };
