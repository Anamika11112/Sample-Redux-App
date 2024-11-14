import { nameRegex } from "../Contstants";
export const dynamicInputHandler = (event, setState) => {
  const { name, value } = event.target;
  setState((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
export const validation = (formData, setFormError) => {
  const { name, designation, age } = formData;
  let isValid = true;
  if (!name|| !designation || !age) {
    setFormError("Please fill out all fields.");
    isValid = false;
  }else if (!nameRegex.test(name)) {
    isValid = false;
    setFormError("Enter valid Name");
  } else if (!nameRegex.test(designation)) {
    isValid = false;
    setFormError("Enter valid Designation");
  }else if (parseInt(age) < 18) {
    isValid = false;
    setFormError("Age must be 18 or older");
  } else {
    setFormError("")
  }
  return isValid;
};
