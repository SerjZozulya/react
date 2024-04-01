import { applyMiddleware, combineReducers, createStore } from "redux";
import tasksReducer from "./reducers/tasks-reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "./reducers/modal-reducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  tasks: tasksReducer,
  modal: modalReducer
});

export const setupStore = () => configureStore({reducer:rootReducer});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
