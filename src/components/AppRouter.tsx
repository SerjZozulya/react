import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { authRoutes, publicRoutes } from "../router";
import Layout from "../UI/Layout";
import ErrorPage from "../pages/error-page";
import Login from "../pages/Login";

const AppRouter = () => {
  const user = useAppSelector((state: any) => state.user);
  const element = user.isAuth ? <Layout /> : <Login />;

  const children: any = user.isAuth
    ? authRoutes.map(({ path, component }) => {
        let child = {
          path: path,
          element: component,
        };
        return child;
      })
    : publicRoutes.map(({ path, component }) => {
        let child = {
          path: path,
          element: component,
        };
        return child;
      });

  const router = createBrowserRouter([
    {
      path: "/",
      element: element,
      errorElement: <ErrorPage />,
      children: children,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
