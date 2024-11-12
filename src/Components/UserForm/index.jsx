import { dynamicInputHandler, validation } from "../../Helpers/Utils";
import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { addData, fetchData } from "../../Redux/User/userActions";
import "./index.css";
import { useDispatch } from "react-redux";
function UserForm({ toggleModal }) {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    age:"",
  });
  const dispatch = useDispatch()
  const [formError, setFormError] = useState("");
  const handleRegistration = (event) => {
    event.preventDefault();
    const valid = validation(formData, setFormError);
    if (valid) {
      console.log("Registration successful");
      dispatch(addData(formData))
      toggleModal("addModal",false)
      dispatch(fetchData())
      setFormError("");
    } else {
      // setModalVisibility(false);
    }
  };
  return (
    <div className="form_container">
      <div className="formHeading">
        <h1>User Registration</h1>
        <Button
          onClick={() => toggleModal("addModal",false)}
          className="closeButton"
        >
          &times;
        </Button>
      </div>
      <form onSubmit={handleRegistration} className="form_body">
        <Input
          onChange={(event) => dynamicInputHandler(event, setFormData)}
          name="name"
          placeholder="Enter Name"
        />
        <Input
          onChange={(event) => dynamicInputHandler(event, setFormData)}
          name="designation"
          placeholder="Enter Designantion"
        />
        <Input
          type="number"
          onChange={(event) => dynamicInputHandler(event, setFormData)}
          name="age"
          placeholder="Enter Age"
        />
        <div className="error_container">{formError && <p>{formError}</p>}</div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
export default UserForm;
