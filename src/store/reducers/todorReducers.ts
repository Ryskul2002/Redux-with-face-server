import { TodoAction, TodoUser, TodoActionTypes } from '../../types/todo'

const initialState: TodoUser = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoUser => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO:
      return { loading: true, error: null, todos: [] };
    case TodoActionTypes.FETCH_TODO_SUSSECC:
      return { loading: false, error: null, todos: action.payload };
    case TodoActionTypes.FETCH_TODO_ERROR:
      return { loading: false, error: action.payload, todos: [] };
    default:
      return state;
  }
};
