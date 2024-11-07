import { INCREMENT, DECREMENT, RESET } from "./counterActionTypes";
const initialState = {
  count: 0,
};
const countReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...prevState, count: prevState.count + 1 };
    case DECREMENT:
      return { ...prevState, count: prevState.count - 1 };
    case RESET:
      return { ...prevState, count: initialState.count };
    default:
      return prevState;
  }
};

export default countReducer;
