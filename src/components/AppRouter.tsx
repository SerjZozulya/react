import AllTasks from "../pages/AllTasks";
import { Route, Switch, Redirect } from "react-router-dom";
import SingleTask from "../pages/SingleTask";
import { usePosts } from "../hooks/usePosts";
import useLocalStorage from "../hooks/useLocalStorage";
import { useAppSelector } from "../hooks/redux";
import Login from "../pages/Login";
import { authRoutes, publicRoutes } from "../router";

const AppRouter = () => {

  const user = useAppSelector((state:any) => state.user);

  return (
    <div className={"Content-Wrapper"}>
      <Switch>
        {user.isAuth && authRoutes.map(({path, component}) => <Route path={path} component={component}></Route>)}
        {!user.isAuth && publicRoutes.map(({path, component}) => <Route path={path} component={component}></Route>)}
        <Redirect to={user.isAuth ? "/project" : "/login"}/>
      </Switch>
    </div>
  );
};

export default AppRouter;
