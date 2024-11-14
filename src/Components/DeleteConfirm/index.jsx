import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../../Redux/User/userActions";
import Button from "../Button";
import "./index.css";
function DeleteConfirm({ setUserId, setDeleteModalVisibiliy, userId }) {
  const dispatch = useDispatch();
  const [deleteLoader, setDeleteLoader] = useState(false);
  useEffect(() => {
    return () => {
      setUserId("");
    };
  }, []);
  const handleDelete = () => {
    setDeleteLoader(true);
    dispatch(deleteData(userId, setDeleteLoader, setDeleteModalVisibiliy));
  };
  return (
    <div className="deleteConfirm_Container">
      <div className="delete_confirm_content">
        <h1>Are You Sure?</h1>
        <p>
          This action cannot be undone. All data associated with this employee
          will be lost..!
        </p>
      </div>
      <div className="delete_button_group">
        <Button onClick={() => setDeleteModalVisibiliy(false)}>Cancel</Button>
        <Button
          onClick={handleDelete}
          loading={deleteLoader}
          loaderClassname="small_loader"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
export default DeleteConfirm;
