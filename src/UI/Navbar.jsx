import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to={'/project'} activeClassName={classes.active}>Задачи</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to={'/dialogs'} activeClassName={classes.active}>Сообщения</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to={'/products'} activeClassName={classes.active}>Продукты</NavLink>
        </div>
    </nav>
}

export default Navbar