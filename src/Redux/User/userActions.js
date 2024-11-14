import axios from "axios";
import {
  FETCH_USERS_SUCCESS,
  FETCH_SINGLE_USER,
  UPDATE_USER_SUCCESS,
  DELETE_SINGLE_USER,
} from "./userActionTypes";
import { failureToast, successToast } from "../Toast/ToastActions";
// Action creators
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchSingleUser =(user) =>{
  return {
    type:FETCH_SINGLE_USER,
    payload:user,
  }
}
export const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user,
  };
};
export const deleteSingleUser = () => {
  return {
    type: DELETE_SINGLE_USER,
  };
};
// Thunk action creator
const url = "https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee";
export const fetchData = (setLoader) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        dispatch(fetchUsersSuccess(response.data));
        if (setLoader) setLoader();
      } else {
        throw Error;
      }
    } catch (error) {
      dispatch(failureToast("Data Fetching Failed"));
    }
  };
};
export const fetchSingleData  =(id,setFormLoader)=>{
  return async (dispatch) => {
    setFormLoader(true)
    try {
      const response = await axios.get(`${url}/${id}`)
      if(response.status===200){
        dispatch(fetchSingleUser(response.data))
        if (setFormLoader) setFormLoader();
      }else{
        throw Error;
      }
    } catch (error) {
      setFormLoader(true)
      dispatch(failureToast("User Data Fetching Failed"));
    } 
  }
}
export const addData = (user, setFormLoader,setModalVisibility) => {
  return async (dispatch) => {
    setFormLoader(true)
    try {
      const response = await axios.post( url,user );
      if (response.status === 201) {
        dispatch(fetchData());
        if (setFormLoader) setFormLoader(false);
        if (setModalVisibility) setModalVisibility(false);
        dispatch(successToast("User Added Successfully"));
      } else {
        throw Error;
      }
    } catch (error) {
      if (setFormLoader) setFormLoader(true);
      dispatch(failureToast("User Addition Failed"));
    }
  };
};
export const deleteData = (userID, setDeleteLoader, setDeleteModalVisibiliy) => {
  return async (dispatch) => {
    try {
      console.log(userID)
      const response = await axios.delete(`${url}/${userID}`);
      if (response.status === 200) {
        dispatch(fetchData());
        if (setDeleteLoader) setDeleteLoader(false);
        dispatch(successToast("User deleted successfully"));
        if (setDeleteModalVisibiliy) setDeleteModalVisibiliy(false);
      } else {
        throw Error;
      }
    } catch (error) {
      setDeleteLoader(false);
      dispatch(failureToast("Delete Operation Failed"));
    }
  };
};
export const updateData =(id,user,setFormLoader,setModalVisibility)=>{
  return async (dispatch) => {
    setFormLoader(true)
    try {
      const response = await axios.put(`${url}/${id}`,user)
      if(response.status===200){
        dispatch(updateUserSuccess(response.data))
        dispatch(fetchData());
        if (setFormLoader) setFormLoader(false);
        if (setModalVisibility) setModalVisibility(false);
        dispatch(successToast("User updated successfully"));
      }else{
        throw Error
      }
    } catch (error) {
      if (setFormLoader) setFormLoader(true);
      dispatch(failureToast("Update Failed"));
    }
  }
}

