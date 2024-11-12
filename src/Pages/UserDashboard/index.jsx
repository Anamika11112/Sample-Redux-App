import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/User/userActions";
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";
import Modal from "../../Components/Modal";
import UserForm from "../../Components/UserForm";
import "./index.css";
import DeleteConfirm from "../../Components/DeleteConfirm";
function UserDashboard() {
  const { error, loading, users } = useSelector((store) => store.userData);
  const [modalVisibility, setModalVisibility] = useState({
    addModal: false,
    deleteModal: false,
    editModal: false,
  });
  const [deleteId,setDeleteId] = useState("")
  const handleDelete = (id)=>{toggleModal("deleteModal",true)
    setDeleteId(id);
  }
  const toggleModal = (modalName, isVisible) => {
    setModalVisibility((prevState) => ({
      ...prevState,
      [modalName]: isVisible,
    }));
  };
   const {addModal,deleteModal} = modalVisibility
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="userPage_Container">
      {addModal && (
        <Modal 
          onClick={()=>toggleModal("addModal",false)}
        >
          <UserForm toggleModal={toggleModal}/>
        </Modal>
      )}
        {deleteModal && (
        <Modal 
          onClick={()=>toggleModal("deleteModal",false)}
        >
          <DeleteConfirm deleteId ={deleteId} toggleModal={toggleModal}/>
        </Modal>
      )}
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
            <Button onClick={()=>toggleModal("addModal",true)}>ADD User</Button>
          </div>
        </div>
        {loading && <Loader />}
        {users &&
          users.map((user) => (
            <div className="userContainer" key={user.id}>
              <div className="userContent">
                <h3>{user?.name}</h3>
                <h3>{user?.designation}</h3>
                <h3>{user?.age}</h3>
              </div>
              <div className="userButtonGroup">
                <Button  onClick={()=>handleDelete(user.id)}>Delete</Button>
                <Button>Edit</Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default UserDashboard;
