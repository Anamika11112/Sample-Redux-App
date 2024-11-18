export const dynamicInputHandler = (event, setState) => {
  const { name, value } = event.target;
  setState((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};