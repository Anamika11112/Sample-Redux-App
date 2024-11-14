import toast from "react-hot-toast";
import { SUCCESS_TOAST, FAILURE_TOAST } from "./ToadtActionTypes";
export const successToast = (message) => {
  toast.success(message);
  return {
    type: SUCCESS_TOAST,
    payload: message,
  };
};
export const failureToast = (message) => {
  toast.error(message);
  return {
    type: FAILURE_TOAST,
    payload: message,
  };
};
