import axios from 'axios';

export const POST_TODO_REQUEST = "POST_TODO_REQUEST";
export const POST_TODO_SUCCESS = "POST_TODO_SUCCESS";
export const POST_TODO_FAILED = "POST_TODO_FAILED";

export const postTodoRequest = () => {
    return {
        type : POST_TODO_REQUEST,
    };
};

export const postTodoSuccess = (result) => {
    return {
        type : POST_TODO_SUCCESS,
        result,
    };
};

export const postTodoFailed = (err) => {
    return {
        type : POST_TODO_FAILED,
        err,
    };
};

export const postTodo = (newTodo) => {
    return function (dispatch) {
        dispatch(postTodoRequest());

        axios
        .post("https://6023acfe6bf3e6001766b5db.mockapi.io/todo",
        {
            todo : newTodo
        })
        .then(result => dispatch(postTodoSuccess(result.data)))
        .catch(err => dispatch(postTodoFailed(err)))
    };
};