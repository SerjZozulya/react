import s from "./Header.module.css";
import i from "../assets/img/header.jpg";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import React from 'react';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt={"header"} src={i} />
      <Button onClick={(e) => props.openModal()} type="primary">
        Create Task
      </Button>
      <div className={s.loginBlock}>
        {/* {props.isAuth ? props.login :  */}
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
