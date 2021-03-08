import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from './reducers/all.reducers';

export default createStore(rootReducers, applyMiddleware(thunk));