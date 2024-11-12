import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./userActionTypes";
// Action creators
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const addUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};
export const addUserSuccess = (user) => {
  return {
    type: ADD_USER_SUCCESS,
    payload:user
  };
};
export const addUserFailure = (error) => {
  return {
    type: ADD_USER_FAILURE,
    payload:error
  };
};
export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};
export const deleteUserSuccess = (user) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload:user
  };
};
export const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload:error
  };
};
// Thunk action creator
const url = "https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee";
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        dispatch(fetchUsersSuccess(response.data));
      } else {
        throw Error;
      }
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
export const addData = (user) => {
  return async (dispatch) => {
    dispatch(addUserRequest());
    try {
      const response = await axios.post(url, user);
      if (response.status === 201) {
        dispatch(addUserSuccess(response.data));  
      } else {
        throw  Error;
      }
    } catch (error) {
      dispatch(addUserFailure(error.message));   
    }
  };
};
export const deleteData = (id) => {
  return async (dispatch) => {
    dispatch(deleteUserRequest());
    try {
      const response = await axios.delete(`https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee/${id}`);
      if (response.status === 204) {
        dispatch(deleteUserSuccess(response.data)); 
        return true
      } else {
        throw  Error;
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));   
    }
  };
};