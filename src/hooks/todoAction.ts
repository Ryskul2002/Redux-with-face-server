import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActionCreators from "../store/action-creator/todo";
export const todoAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(todoActionCreators, dispatch);
};