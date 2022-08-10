import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as useActionCreators from "../store/action-creator/user";
export const useActioner = () => {
  const dispatch = useDispatch();
  return bindActionCreators(useActionCreators, dispatch);
};
