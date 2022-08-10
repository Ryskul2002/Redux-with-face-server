import { Dispatch } from "react";
import { UserAction, UserActionTypes } from "../../types/user";
import axios from "axios";

export const fetchUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER });
      const response = await axios.get("http://localhost:8080/users");
      setTimeout(() => {
        dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data })
      },1000);
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: "error" });
    }
  };
};
