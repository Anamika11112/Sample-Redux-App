import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { fetchData } from "../../Redux/User/userActions";
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";
import Modal from "../../Components/Modal";
import UserForm from "../../Components/UserForm";
import DeleteConfirm from "../../Components/DeleteConfirm";
import "./index.css";
function UserDashboard() {
  const { users } = useSelector((store) => store.userData);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [deleteModalVisibility, setDeleteModalVisibiliy] = useState(false);
  const [userID, setUserID] = useState("");
  const [loader, setLoader] = useState(false);
  const handleDelete = (id) => {
    setDeleteModalVisibiliy(true);
    setUserID(id);
  };
  const handleEdit = (id) => {
    setModalVisibility(true);
    setUserID(id);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    setLoader(true);
    dispatch(fetchData(() => setLoader(false)));
  }, []);
  return (
    <div className="userPage_Container">
      <div className="userHeader">
        <h1>Users Dashboard</h1>
      </div>
      <div className="userBody">
        <div className="userContainerHeading">
          <div className="userContent">
            <h3>Name</h3>
            <h3>Designation</h3>
            <h3>Website</h3>
          </div>
          <div className="userButtonGroup">
            <Button onClick={() => setModalVisibility(true)}>ADD User</Button>
            <Toaster />
          </div>
        </div>

        {modalVisibility && (
          <Modal onClick={() => setModalVisibility(false)}>
            <UserForm
              setUserID={setUserID}
              userID={userID}
              setModalVisibility={setModalVisibility}
            />
          </Modal>
        )}
        {deleteModalVisibility && (
          <Modal onClick={() => setDeleteModalVisibiliy(false)}>
            <DeleteConfirm
              setUserID={setUserID}
              userID={userID}
              setDeleteModalVisibiliy={setDeleteModalVisibiliy}
            />
          </Modal>
        )}
        {loader ? (
          <Loader />
        ) : (
          users?.map((user) => (
            <div className="userContainer" key={user.id}>
              <div className="userContent">
                <h3>{user?.name}</h3>
                <h3>{user?.designation}</h3>
                <h3>{user?.age}</h3>
              </div>
              <div className="userButtonGroup">
                <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                <Button onClick={() => handleEdit(user.id)}>Edit</Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default UserDashboard;
