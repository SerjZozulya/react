import { combineReducers } from "redux";
import tasksReducer from "./slices/tasks-slice";
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "./slices/modal-reducer";
import userReducer from "./slices/user-reducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  modal: modalReducer,
  user: userReducer
});

export const setupStore = () => configureStore({reducer:rootReducer});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
