import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to={'/project'} activeClassName={classes.active}>Задачи</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to={'/notes'} activeClassName={classes.active}>Заметки</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to={'/dialogs'} activeClassName={classes.active}>Сообщения</NavLink>
        </div>
        <div className={classes.item}>
            <a>Подписки</a>
        </div>
        <div className={classes.item}>
            <a>Настройки</a>
        </div>
        <div className={classes.item}>
            <a>Проекты</a>
        </div>
    </nav>
}

export default Navbar