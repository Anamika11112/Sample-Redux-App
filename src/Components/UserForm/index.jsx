import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dynamicInputHandler, validation } from "../../Helpers/Utils";
import Input from "../Input";
import Button from "../Button";
import {
  addData,
  deleteSingleUser,
  fetchSingleData,
  updateData,
} from "../../Redux/User/userActions";
import "./index.css";
function UserForm({ setUserID, setModalVisibility, userID }) {
  const dispatch = useDispatch();
  const [formLoader, setFormLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    age: "",
  });
  const [formError, setFormError] = useState("");
  const { user } = useSelector((state) => state.userData);
  useEffect(() => {
    if (userID) dispatch(fetchSingleData(userID, setFormLoader));
  }, [userID]);
  useEffect(() => {
    if (userID && user) {
      setFormData({
        name: user.name,
        designation: user.designation,
        age: user.age,
      });
    }
  }, [userID, user]);
  useEffect(() => {
    return () => {
      setUserID("");
      dispatch(deleteSingleUser());
    };
  }, []);
  const handleRegistration = (event) => {
    event.preventDefault();
    const valid = validation(formData, setFormError);
    if (valid) {
      setFormError("");
      if (userID) {
        dispatch(
          updateData(userID, formData, setFormLoader, setModalVisibility)
        );
      } else {
        dispatch(addData(formData, setFormLoader, setModalVisibility));
      }
    }
  };
  return (
    <div className="form_container">
      <div className="formHeading">
        <h1>User Registration</h1>
        <Button
          onClick={() => setModalVisibility(false)}
          className="closeButton"
        >
          &times;
        </Button>
      </div>
      <form onSubmit={handleRegistration} className="form_body">
        <Input
          onChange={(event) => dynamicInputHandler(event, setFormData)}
          name="name"
          value={formData.name}
          placeholder="Enter Name"
        />
        <Input
          onChange={(event) => dynamicInputHandler(event, setFormData)}
          name="designation"
          value={formData.designation}
          placeholder="Enter Designantion"
        />
        <Input
          type="number"
          onChange={(event) => dynamicInputHandler(event, setFormData)}
          name="age"
          value={formData.age}
          placeholder="Enter Age"
        />
        <div className="error_container">{formError && <p>{formError}</p>}</div>
        <Button
          type="submit"
          loading={formLoader}
          loaderClassname="small_loader"
        >
          {userID ? "Update" : "Submit"}
        </Button>
      </form>
    </div>
  );
}
export default UserForm;
