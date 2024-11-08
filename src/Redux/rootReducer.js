import { combineReducers } from "redux";
import { todoReducer } from "./reducers";
import countReducer  from './Counter/counterReducer';
import { userDataReducer } from "./User/userReducer";
const rootReducer = combineReducers({
  count: countReducer,
  todos: todoReducer,
  userData:userDataReducer
});
export default rootReducer;
