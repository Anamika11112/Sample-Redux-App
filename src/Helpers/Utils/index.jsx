import { nameRegex, ageRegex } from "../Contstants";
export const dynamicInputHandler = (event, setState) => {
  const { name, value } = event.target;
  setState((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
export const validation = (formData, setFormError) => {
  const { userName, designation, age } = formData;
  let isValid = false;
  if (!nameRegex.test(userName)) {
    isValid = false;
    setFormError("Enter valid Name");
  } else if (!nameRegex.test(designation)) {
    isValid = false;
    setFormError("Enter valid Designation");
  } else if (!ageRegex.test(age)) {
    isValid = false;
    setFormError("Enter Valid age");
  } else if (parseInt(age) < 18) {
    isValid = false;
    setFormError("Age must be 18 or older");
  } else {
    isValid = true;
  }
  return isValid;
};
