import { ADD_TODO, TOGGLE_TODO } from '../actions';

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
        // case DELETE_TODO:
        //     return {
        //         ...state,
        //         todos: state.todos.filter(todo => )
        //     }
        default:
            return state;
    }
};