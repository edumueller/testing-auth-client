import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps, callback) => {
  return async (dispatch) => {
    try {
      const {
        data: { token },
      } = await axios.post("http://localhost:3090/signup", formProps);
      dispatch({ type: AUTH_USER, payload: token });
      localStorage.setItem("token", token);
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: "Email in use" });
    }
  };
};
