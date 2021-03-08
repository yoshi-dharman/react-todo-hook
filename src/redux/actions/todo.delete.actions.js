import axios from 'axios';

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";

export const deleteTodoRequest = () => {
    return {
        type : DELETE_TODO_REQUEST,
    };
};

export const deleteTodoSuccess = (result) => {
    return {
        type : DELETE_TODO_SUCCESS,
        result,
    };
};

export const deleteTodoFailed = (err) => {
    return {
        type : DELETE_TODO_FAILED,
        err,
    };
};

export const deleteTodo = (id) => {
    return function (dispatch) {
        dispatch(deleteTodoRequest());

        axios
        .delete("https://6023acfe6bf3e6001766b5db.mockapi.io/todo/"+id)
        .then(result => dispatch(deleteTodoSuccess(result.data)))
        .catch(err => dispatch(deleteTodoFailed(err)))
    };
};