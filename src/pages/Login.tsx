import { Input, Button, Form } from "antd";
import { Link, Navigate, redirect, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { useState } from "react";
import { login, registration } from "../http/userAPI";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userSlice } from "../redux/reducers/user-reducer";
import s from "./Login.module.css";

const Login = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state:any) => state.user);
  const { setIsAuth, setUser } = userSlice.actions;
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);

      } else {
        data = await registration(name, lastName, email, password);

      }

      dispatch(setUser(data));
      dispatch(setIsAuth(true));

    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <Form className={s.login_form}>
        {isLogin ? (
          <h1>LOGIN:</h1>
        ) : (
          <>
            <h1>REGISTRATION:</h1>
            <Input
              placeholder="First Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></Input>
            <Input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></Input>
          </>
        )}
        <Input
          placeholder="Login (email)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>

        <span>
          {isLogin ? (
            <h4>
              <Link to="/sign-up">Create account!</Link>
            </h4>
          ) : (
            <h4>
              <Link to="/login">I have account</Link>
            </h4>
          )}
          <Button
            type="primary"
            htmlType="submit"
            onClick={(e) => {
              e.preventDefault();
              click();
            }}
          >
            Submit
          </Button>
        </span>
      </Form>
    </>
  );
};

export default Login;
