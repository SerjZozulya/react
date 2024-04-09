import "./App.css";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { check } from "./API/userAPI";
import { userSlice } from "./redux/reducers/user-reducer";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import AppRouter from "./components/AppRouter";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { setUser, setIsAuth } = userSlice.actions;
  const { user } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then(
        (data) => {
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
