import axios from 'axios';

export const GET_TODO_REQUEST = "GET_TODO_REQUEST";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILED = "GET_TODO_FAILED";

export const getTodoRequest = () => {
    return {
        type : GET_TODO_REQUEST,
    };
};

export const getTodoSuccess = (result) => {
    return {
        type : GET_TODO_SUCCESS,
        result,
    };
};

export const getTodoFailed = (err) => {
    return {
        type : GET_TODO_FAILED,
        err,
    };
};

export const getTodo = () => {
    return function (dispatch) {
        dispatch(getTodoRequest());

        axios
        .get("https://6023acfe6bf3e6001766b5db.mockapi.io/todo")
        .then(result => dispatch(getTodoSuccess(result.data)))
        .catch(err => dispatch(getTodoFailed(err)))
    };
};