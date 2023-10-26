import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

const DialogItem = (props: PropsType) => {
    return <div className={s.item}>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}

export default DialogItem