import { combineReducers } from "redux";
import tasksReducer from "./slices/tasks-slice";
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal-slice";
import userReducer from "./slices/user-slice";
import { projectsAPI } from "./services/ProjectService";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  modal: modalReducer,
  user: userReducer,
  [projectsAPI.reducerPath]: projectsAPI.reducer
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectsAPI.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
