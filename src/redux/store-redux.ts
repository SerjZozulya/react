import { applyMiddleware, combineReducers, createStore } from "redux";
import {tasksReducer} from "./reducers/tasks-reducer";
import messagesReducer from "./reducers/messages-reducer";
import {productsReducer} from "./reducers/products-reducer";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  tasks: tasksReducer,
  messagesData: messagesReducer,
  products: productsReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;
