import { combineReducers } from "redux";
import { todoReducer } from "./reducers";
import countReducer  from './Counter/counterReducer';
const rootReducer = combineReducers({
  count: countReducer,
  todos: todoReducer,
});
export default rootReducer;
