import SingleTask from "../pages/SingleTask";
import AllTasks from "../pages/AllTasks";
import Login from "../pages/Login";
import {
  LOGIN_ROUTE,
  PROJECT_ROUTE,
  TASK_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import { Navigate } from "react-router-dom";

export const authRoutes = [
  { path: "*", component: <Navigate to={PROJECT_ROUTE} replace /> },
  { path: PROJECT_ROUTE, component: <AllTasks />, exact: true },
  { path: TASK_ROUTE, component: <SingleTask />, exact: true },
];

export const publicRoutes = [
  { path: "*", component: <Navigate to={LOGIN_ROUTE} replace /> },
  { path: LOGIN_ROUTE, component: <Login />, exact: true },
  { path: REGISTRATION_ROUTE, component: <Login />, exact: true },
];
