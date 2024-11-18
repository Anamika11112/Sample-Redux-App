import {
  FETCH_USERS_SUCCESS,
  FETCH_SINGLE_USER,
  UPDATE_USER_SUCCESS,
  DELETE_SINGLE_USER,
} from "./userActionTypes";
const initialState = {
  users: [],
  user: [],
};
export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE_SINGLE_USER:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};