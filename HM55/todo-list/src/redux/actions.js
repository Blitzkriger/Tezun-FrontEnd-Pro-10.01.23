import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

export const addTodo = (input) => ({
  type: ADD_TODO,
  payload: input,
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: index,
});

export const getTodosRequest = () => ({ type: GET_TODOS_REQUEST });
export const getTodosSuccess = todos => ({ type: GET_TODOS_SUCCESS, payload: todos });
export const getTodosFailure = error => ({ type: GET_TODOS_FAILURE, payload: error });

export const fetchTodos = () => {
  return function(dispatch) {
    dispatch(getTodosRequest());
    axios
      .get('https://mockapi.io/your_endpoint')
      .then(response => {
        const todos = response.data;
        dispatch(getTodosSuccess(todos));
      })
      .catch(error => {
        dispatch(getTodosFailure(error.message));
      });
  };
};

