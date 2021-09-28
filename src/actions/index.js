import axios from "axios";
import { AUTH_USER } from "./types";

export const signup = (formProps) => {
  return (dispatch) => {
    axios.post("http://localhost:3090/signup", formProps);
    // dispatch({ type: AUTH_USER });
  };
};
