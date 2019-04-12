export const ADD_TODO ='ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

let nextTodoId = 0;

export const addTodo = todoValue => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoId++,
            value: todoValue,
            completed: false
        }
    }
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}