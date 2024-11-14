import { combineReducers } from "redux";
import { todoReducer } from "./reducers";
import countReducer from "./Counter/counterReducer";
import { userDataReducer } from "./User/userReducer";
import { displayToastReducer } from "./Toast/ToastReducer";
const rootReducer = combineReducers({
  count: countReducer,
  todos: todoReducer,
  userData: userDataReducer,
  toast: displayToastReducer,
});
export default rootReducer;
