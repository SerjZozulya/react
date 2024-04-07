import { Input } from "antd";
import { useLocation } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { useState } from "react";
import { login, registration } from "../API/userAPI";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userSlice } from "../redux/reducers/user-reducer";

const Login = (props) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { setIsAuth, setUser } = userSlice.actions;
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      dispatch(setUser(user));
      dispatch(setIsAuth(true));
    } catch (error) {
        alert(error.response.message)
    }
  };

  return (
    <>
      <form>
        <Input
          placeholder="Login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            click();
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
