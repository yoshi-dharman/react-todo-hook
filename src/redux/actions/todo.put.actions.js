import axios from 'axios';

export const PUT_TODO_REQUEST = "PUT_TODO_REQUEST";
export const PUT_TODO_SUCCESS = "PUT_TODO_SUCCESS";
export const PUT_TODO_FAILED = "PUT_TODO_FAILED";

export const putTodoRequest = () => {
    return {
        type : PUT_TODO_REQUEST,
    };
};

export const putTodoSuccess = (result) => {
    return {
        type : PUT_TODO_SUCCESS,
        result,
    };
};

export const putTodoFailed = (err) => {
    return {
        type : PUT_TODO_FAILED,
        err,
    };
};

export const putTodo = (id, newTodo) => {
    return function (dispatch) {
        dispatch(putTodoRequest());

        axios
        .put("https://6023acfe6bf3e6001766b5db.mockapi.io/todo/"+id, {
            todo : newTodo
        })
        .then(result => dispatch(putTodoSuccess(result.data)))
        // .catch(err => dispatch(putTodoFailed(err)))
    };
};