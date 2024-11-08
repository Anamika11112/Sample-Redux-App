import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./index.css";
function UserForm() {
  return (
    <div className="form_container">
      <div className="formHeading">
        <h1>User Registration</h1>
        <Button>&times;</Button>
      </div>
      <form className="form_body">
        <Input placeholder="Enter Name" />
        <Input placeholder="Enter Email" />
        <Input placeholder="Enter Website Name" />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
export default UserForm;
