import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dynamicInputHandler } from "../../../Helpers/Utils";
import { validation } from "./validation";
import Input from "../../../Components/TextInput";
import Button from "../../../Components/Button";
import Loader from "../../../Components/Loader";
import {
  addData,
  deleteSingleUser,
  fetchSingleData,
  updateData,
} from "../../../Redux/User/userActions";
import "./index.css";
function UserForm({ setUserId, setModalVisibility, userId }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    age: "",
  });
  useEffect(() => {
    if (userId) dispatch(fetchSingleData(userId, setFormLoading));
  }, [userId]);
  useEffect(() => {
    if (userId && user) {
      setFormData({
        name: user.name,
        designation: user.designation,
        age: user.age,
      });
    }
  }, [userId, user]);
  useEffect(() => {
    return () => {
      setUserId("");
      dispatch(deleteSingleUser());
    };
  }, []);
  const handleRegistration = (event) => {
    event.preventDefault();
    const valid = validation(formData, setFormError);
    if (valid) {
      if (userId) {
        dispatch(
          updateData(userId, formData, setIsSubmitting, setModalVisibility)
        );
      } else {
        dispatch(addData(formData, setIsSubmitting, setModalVisibility));
      }
    }
  };
  return formLoading ? (
    <Loader />
  ) : (
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
          disabled={isSubmitting}
        />
        <Input
          onChange={(event) => dynamicInputHandler(event, setFormData)}
          name="designation"
          value={formData.designation}
          placeholder="Enter Designantion"
          disabled={isSubmitting}
        />
        <Input
          type="number"
          onChange={(event) => dynamicInputHandler(event, setFormData)}
          name="age"
          value={formData.age}
          placeholder="Enter Age"
          disabled={isSubmitting}
        />
        <div className="error_container">{formError && <p>{formError}</p>}</div>
        <Button
          type="submit"
          loading={isSubmitting}
          loaderClassname="small_loader"
        >
          {userId ? "Update" : "Submit"}
        </Button>
      </form>
    </div>
  );
}
export default UserForm;