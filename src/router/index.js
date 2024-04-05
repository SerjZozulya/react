import SingleTask from "../pages/SingleTask";
import AllTasks from "../pages/AllTasks";
import Login from "../pages/Login";
import { LOGIN_ROUTE, PROJECT_ROUTE, TASK_ROUTE } from "../utils/consts";

export const authRoutes = [
  { path: PROJECT_ROUTE, component: AllTasks, exact: true },
  { path: TASK_ROUTE, component: SingleTask, exact: true },
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, component: Login, exact: true },
];
