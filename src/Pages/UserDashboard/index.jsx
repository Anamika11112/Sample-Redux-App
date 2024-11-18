import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { fetchData } from "../../Redux/User/userActions";
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";
import Modal from "../../Components/Modal";
import UserForm from "./UserForm";
import ConfirmDelete from "./ConfirmDelete";
import "./index.css";
function UserDashboard() {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.userData);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [deleteModalVisibility, setDeleteModalVisibiliy] = useState(false);
  const [userId, setUserId] = useState("");
  const [loader, setLoader] = useState(false);
  const [fetchFailed, setFetchFailed] = useState(false);
  useEffect(() => {
    setLoader(true);
    dispatch(fetchData(() => setLoader(false), setFetchFailed));
  }, []);
  const handleDelete = (id) => {
    setDeleteModalVisibiliy(true);
    setUserId(id);
  };
  const handleEdit = (id) => {
    setModalVisibility(true);
    setUserId(id);
  };
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
              setUserId={setUserId}
              userId={userId}
              setModalVisibility={setModalVisibility}
            />
          </Modal>
        )}
        {deleteModalVisibility && (
          <Modal onClick={() => setDeleteModalVisibiliy(false)}>
            <ConfirmDelete
              setUserId={setUserId}
              userId={userId}
              setDeleteModalVisibiliy={setDeleteModalVisibiliy}
            />
          </Modal>
        )}
        {loader ? (
          <Loader />
        ) : fetchFailed ? (
          <div className="error-message">
            <h1>Data Fetching Failed. Please try again later.</h1>
          </div>
        ) : users.length === 0 ? (
          <h1>Dashboard is empty</h1>
        ) : (
          users.map((user) => (
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