import { combineReducers } from "redux";
import {countReducer,todoReducer} from './reducers'
const rootReducer = combineReducers({
    count: countReducer,
    todos: todoReducer,
  });
  export default rootReducer;