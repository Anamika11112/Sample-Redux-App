import { SUCCESS_TOAST, FAILURE_TOAST } from "./ToadtActionTypes";
const initialState = {
  messge: "",
};
export const displayToastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_TOAST:
      return { ...state, messge: action.payload };
    case FAILURE_TOAST:
      return { ...state, messge: action.payload };
    default:
      return state;
  }
};
