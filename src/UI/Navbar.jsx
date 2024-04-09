import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to={'/project'} className={classes.active}>Задачи</NavLink>
        </div>
    </nav>
}

export default Navbar