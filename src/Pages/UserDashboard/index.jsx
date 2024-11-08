import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/User/userActions";
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";
import Modal from "../../Components/Modal";
import "./index.css";
function UserDashboard() {
  const { error, loading, users } = useSelector((store) => store.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="userPage_Container">
      <Modal/>
      <div className="userHeader">
        <h1>Users Dashboard</h1>
      </div>
      {loading && <Loader />}
      <div className="userBody">
        <div className="userContainerHeading">
          <div className="userContent">
            <h3>Name</h3>
            <h3>Email</h3>
            <h3>Website</h3>
          </div>
          <div className="userButtonGroup">
            <Button>ADD User</Button>
          </div>
        </div>
        {users &&
          users.map((user) => (
            <div className="userContainer" key={user.id}>
              <div className="userContent">
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <h3>{user.website}</h3>
              </div>
              <div className="userButtonGroup">
                <Button>Delete</Button>
                <Button>Edit</Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default UserDashboard;
