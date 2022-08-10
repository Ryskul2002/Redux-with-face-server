import { Dispatch } from "react";
import { TodoAction, TodoActionTypes } from "../../types/todo";
import axios from "axios";

export const fetchTodo = () => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
          dispatch({ type: TodoActionTypes.FETCH_TODO });
          const response = await axios.get("http://localhost:8080/todos");
          setTimeout(() => {
            dispatch({type: TodoActionTypes.FETCH_TODO_SUSSECC, payload: response.data })
          },1000);
        } catch (e) {
          dispatch({ type: TodoActionTypes.FETCH_TODO_ERROR, payload: "Произошла ошибка" });
        }
      };
}