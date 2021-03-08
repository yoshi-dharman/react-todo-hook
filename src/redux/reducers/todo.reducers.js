import {
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
    GET_TODO_FAILED
} from '../actions/todo.get.actions';

import {
    POST_TODO_REQUEST,
    POST_TODO_SUCCESS,
    POST_TODO_FAILED
} from '../actions/todo.post.actions';

import {
    PUT_TODO_REQUEST,
    PUT_TODO_SUCCESS,
    PUT_TODO_FAILED
} from '../actions/todo.put.actions';

import {
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILED
} from '../actions/todo.delete.actions';


const initialState = {
    todoList : [{
        id: 1,
        todo: "Todou",
    }],
    error: null,
    isLoading: false,
};

const todoo = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_TODO:
        //     let id;
        //     if(state.todoList.length < 1){
        //         id = 1;
        //     }
        //     else{
        //         id = state.todoList[state.todoList.length-1].id;
        //     }
        //     return {
        //         todoList : [
        //             ...state.todoList,
        //             {
        //             id: id + 1,
        //             todo: action.newTodo
        //         }]

        //     };
        // case EDIT_TODO:

        //     let editState = state.todoList.map(item => {
        //         if(item.id === action.id){
        //             item.todo = action.newTodo
        //         }
        //         return item;
        //     })

        //     return {
        //         todoList : [...editState]
        //     };

        // case DELETE_TODO:

        //     let newState = state.todoList.filter((item) => item.id !== action.id);
        //     return {
        //         todoList : [...newState]
        //     };

        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todoList: action.result,
                isLoading: false,
            };

        case GET_TODO_FAILED:
            console.log(action.error);
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };

        // POST====================================================
        case POST_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        
        case POST_TODO_SUCCESS:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.result
                ],
                isLoading: false,
            };

        case POST_TODO_FAILED:
            console.log(action.error);
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };

        // PUT====================================================
        case PUT_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        
        case PUT_TODO_SUCCESS:
            let editTodoList = state.todoList.map(item => {
                if(item.id === action.result.id){
                    item.todo = action.result.todo
                }
                return item;
            })

            return {
                ...state,
                todoList: [...editTodoList],
                isLoading: false,
            };

        case PUT_TODO_FAILED:
            console.log(action.error);
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };

        // DELETE====================================================
        case DELETE_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        
        case DELETE_TODO_SUCCESS:
            let newTodoList = state.todoList.filter(item => item.id !== action.result.id);
            return {
                ...state,
                todoList: [...newTodoList],
                isLoading: false,
            };

        case DELETE_TODO_FAILED:
            console.log(action.error);
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };

        default: 
            return state;
    }
};

export default todoo;