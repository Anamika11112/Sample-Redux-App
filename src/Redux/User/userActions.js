import axios from "axios";
import {
  FETCH_USERS_SUCCESS,
  FETCH_SINGLE_USER,
  UPDATE_USER_SUCCESS,
  DELETE_SINGLE_USER,
} from "./userActionTypes";
import toast from "react-hot-toast";
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
const url = "https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee";
export const fetchData = (setLoader,setFetchFailed) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        dispatch(fetchUsersSuccess(response.data));
        if (setLoader) setLoader();
        if (setFetchFailed) setFetchFailed(false);
      } else {
        throw Error;
      }
    } catch (error) {
      toast.error("Data Fetching Failed");
      if(setFetchFailed) setFetchFailed(true);
    }
    finally{
      if (setLoader) setLoader();
    }
  };
};
export const fetchSingleData  =(id,setFormLoading)=>{
  return async (dispatch) => {
    if(setFormLoading) setFormLoading(true)
    try {
      const response = await axios.get(`${url}/${id}`)
      if(response.status===200){
        dispatch(fetchSingleUser(response.data))
        if(setFormLoading) setFormLoading(false)
      }else{
        throw Error;
      }
    } catch (error) {
      if(setFormLoading) setFormLoading(true)
      toast.error("User Data Fetching Failed");
    } 
  }
}
export const addData = (user, setIsSubmitting,setModalVisibility) => {
  return async (dispatch) => {
    if (setIsSubmitting) setIsSubmitting(true);
    try {
      const response = await axios.post( url,user );
      if (response.status === 201) {
        dispatch(fetchData());
        if (setIsSubmitting) setIsSubmitting(false);
        if (setModalVisibility) setModalVisibility(false);
        toast.success("User Added Successfully");
      } else {
        throw Error;
      }
    } catch (error) {
      toast.error("User Addition Failed");
    }
    finally{
      if (setIsSubmitting) setIsSubmitting(false);
    }
  };
};
export const deleteData = (id, setDeleteLoader, setDeleteModalVisibiliy) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      if (response.status === 200) {
        dispatch(fetchData());
        if (setDeleteLoader) setDeleteLoader(false);
        toast.success("User deleted successfully");
        if (setDeleteModalVisibiliy) setDeleteModalVisibiliy(false);
      } else {
        throw Error;
      }
    } catch (error) {
      if (setDeleteLoader) setDeleteLoader(false);
      toast.error("Delete Operation Failed");
    }
  };
};
export const updateData =(id,user,setIsSubmitting,setModalVisibility)=>{
  return async (dispatch) => {
    if (setIsSubmitting) setIsSubmitting(true)
    try {
      const response = await axios.put(`${url}/${id}`,user)
      if(response.status===200){
        dispatch(updateUserSuccess(response.data))
        dispatch(fetchData());
        if (setIsSubmitting) setIsSubmitting(false);
        if (setModalVisibility) setModalVisibility(false);
        toast.success("User updated successfully");
      }else{
        throw Error
      }
    } catch (error) { 
      toast.error("Update Failed");
    }
    finally{
      if (setIsSubmitting) setIsSubmitting(false);
    }
  }
}

