import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED } from '../actions';

const initialState = {
    todos: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload] 
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === action.payload) ? { ...todo, completed: !todo.completed } : todo)
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case CLEAR_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            };
        default:
            return state;
    }
};