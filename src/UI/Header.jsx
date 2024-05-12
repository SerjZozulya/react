import s from "./Header.module.css";
import i from "../static/img/header.jpg";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userSlice } from "../redux/reducers/user-reducer";

const Header = (props) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user);
  const {setUser, setIsAuth} = userSlice.actions

  const logOut = () => {
    dispatch(setUser({}))
    dispatch(setIsAuth(false))
    localStorage.removeItem('token')
  }

  return (
    <header className={s.header}>
      <img alt={"header"} src={i} />
      <Button onClick={(e) => props.openModal()} type="primary">
        Create Task
      </Button>
      <div className={s.loginBlock}>
        {user.isAuth ? <Button onClick={() => logOut()}>Exit</Button> : <a href="/login">Login</a>}
      </div>
    </header>
  );
};

export default Header;
