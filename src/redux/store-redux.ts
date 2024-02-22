import { applyMiddleware, combineReducers, createStore } from "redux";
import {tasksReducer} from "./tasks-reducer";
import messagesReducer from "./messages-reducer";
import authReducer from "./auth-reducer";
import {productsReducer} from "./products-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  messagesData: messagesReducer,
  auth: authReducer,
  products: productsReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
