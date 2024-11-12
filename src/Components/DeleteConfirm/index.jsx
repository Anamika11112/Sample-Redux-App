import React from "react";
import "./index.css";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { deleteData, fetchData } from "../../Redux/User/userActions";
function DeleteConfirm({toggleModal,deleteId}) {
  const dispatch = useDispatch()
  const handleDeleteData = async () => {
    try {
      const deleteSuccess = await dispatch(deleteData(deleteId));
      console.log(deleteSuccess);
      if (deleteSuccess) {
        dispatch(fetchData()); 
        toggleModal("deleteModal", false);
      }
      // dispatch(fetchData()); 
      // toggleModal("deleteModal", false);
    } catch (error) {
      console.log("Error while deleting data", error);
    }
  };
  
  return (
    <div className="deleteConfirm_Container">
      <h1>Are You Sure ?</h1>
      <p>
        This action cannot be undone. All data associated with this employee
        will be lost..!
      </p>
      <div className="delete_button_group">
        <Button onClick={()=>toggleModal("deleteModal",false)}>Cancel</Button>
        <Button onClick={handleDeleteData}>Delete</Button>
      </div>
    </div>
  );
}

export default DeleteConfirm;
