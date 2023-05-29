import { ADD_TODO, TOGGLE_TODO, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } from './actions';

const initialState = {
  loading: false,
  todos: [],
  error: ''
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case GET_TODOS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_TODOS_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
        error: ''
      };
    case GET_TODOS_FAILURE:
      return {
        loading: false,
        todos: [],
        error: action.payload
      };
    default:
      return state;
  }
}

export default todosReducer;
