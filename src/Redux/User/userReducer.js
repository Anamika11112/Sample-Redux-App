import {
  ADD_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./userActionTypes";
const initialState = {
  loading: false,
  users: [],
  error: "",
};
export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    case ADD_USER_REQUEST:
      return{
        ...state,
        loading:true,
      }
    case ADD_USER_SUCCESS:
      return{
        ...state,
        users:[...state.users, action.payload],
        loading:false,
        error:""
      }
    case ADD_USER_FAILURE:
      return{
        ...state,
        loading:false,
        error:action.payload
      }
    case DELETE_USER_REQUEST:
      return{
        ...state,
        loading:true,
      }
    case DELETE_USER_SUCCESS:
      return{
        ...state,
        users:[...state.users,
          state.users.filter((user)=>user.id !==  action.payload.id)
        ],
        loading:false,
        error:""
      }
    case DELETE_USER_FAILURE:
      return{
        ...state,
        loading:false,
        error:action.payload
      }
    default:
      return state;
  }
}