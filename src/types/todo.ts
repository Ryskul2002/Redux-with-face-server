export enum TodoActionTypes {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUSSECC = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR'
}

export interface FetchTodo {
    type: TodoActionTypes.FETCH_TODO
}

export interface FetchTodoSuccess {
    type: TodoActionTypes.FETCH_TODO_SUSSECC,
    payload: any[]
}

export interface FetchTodoError {
    type: TodoActionTypes.FETCH_TODO_ERROR
    payload: string
}

export interface TodoUser {
    todos: any[],
    loading: boolean | string,
    error: null | string
}

export type TodoAction = FetchTodo | FetchTodoSuccess | FetchTodoError