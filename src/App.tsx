import "./App.css";
import { FC, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { check } from "./http/userAPI";
import { userSlice } from "./redux/slices/user-slice";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import AppRouter from "./components/AppRouter";

const App: FC = () => {
  
  console.log('App')
  const dispatch = useAppDispatch();
  const { setUser, setIsAuth } = userSlice.actions;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then(
        (user) => {
          dispatch(setUser(user));
          dispatch(setIsAuth(true));
        },
        (error) => {
          dispatch(setIsAuth(false));
        }
      )
      .finally(() => setLoading(false));
  }, []);



  if (loading) {
    return (
      <Spin
        fullscreen
        indicator={<LoadingOutlined style={{ fontSize: 56 }} spin />}
      ></Spin>
    );
  } else {
    return (
        <div className="App">
          <AppRouter></AppRouter>
        </div>
    );
  }
};

export default App;
