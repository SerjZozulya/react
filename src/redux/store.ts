import { applyMiddleware, combineReducers, createStore } from "redux";
import tasksReducer from "./reducers/tasks-reducer";
import messagesReducer from "./reducers/messages-reducer";
import {productsReducer} from "./reducers/products-reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  tasks: tasksReducer,
  messagesData: messagesReducer,
  products: productsReducer
});

export const setupStore = () => configureStore({reducer:rootReducer});

//sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
