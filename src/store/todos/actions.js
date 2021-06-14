import { ADD_TODO, CHANGE_TODO, REMOVE_TODO, TODOS_CHANGE_ORDER, TODOS_FROM_LOCAL_STORAGE } from "./types"

export const addTodoAction = (title) => {
    return {
        type: ADD_TODO, 
        payload: {title}
    } 
}

export const removeTodoAction = (todoId) => {
    return {
        type: REMOVE_TODO, 
        payload: todoId
    }
}

export const onChangeTodoAction = (todoId) => {
    return {
        type: CHANGE_TODO, 
        payload: todoId
    }
}
export const todosFromLocalStorageAction = todosFromLocalStorage => {
    return {
      type: TODOS_FROM_LOCAL_STORAGE,
      payload: JSON.parse(todosFromLocalStorage),
    };
  };
export const todosChangeOrderAction = (todo, currentTodo) => {
    return {
        type: TODOS_CHANGE_ORDER,
        payload: {todo, currentTodo}
    };
};