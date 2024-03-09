import { FC } from "react";
import s from "./Message.module.css";
import React from 'react';

type PropsType = {
    id: number,
    text: string,
    dateAndTime: string
}

const Message: FC<PropsType> = (props) => {
    return <div className={s.message}>
        <div>{props.text}</div>
        <div className={s.sendTime}>{props.dateAndTime}</div>
    </div>
}

export default Message