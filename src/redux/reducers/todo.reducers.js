import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../actions/todo.actions';

const initialState = {
    todoList : [{
        id: 1,
        todo: "Todou",
    }]
};

const todoo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let id;
            if(state.todoList.length < 1){
                id = 1;
            }
            else{
                id = state.todoList[state.todoList.length-1].id;
            }
            return {
                todoList : [
                    ...state.todoList,
                    {
                    id: id + 1,
                    todo: action.newTodo
                }]

            };
        case EDIT_TODO:

            let editState = state.todoList.map(item => {
                if(item.id === action.id){
                    item.todo = action.newTodo
                }
                return item;
            })

            return {
                todoList : [...editState]
            };

        case DELETE_TODO:

            let newState = state.todoList.filter((item) => item.id !== action.id);
            return {
                todoList : [...newState]
            };
        default: 
            return state;
    }
};

export default todoo;