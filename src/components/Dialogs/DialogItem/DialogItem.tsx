import { FC } from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

const DialogItem: FC<PropsType> = (props) => {
    return <div className={s.item}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

export default DialogItem