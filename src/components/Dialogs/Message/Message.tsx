import s from "./Message.module.css";

type PropsType = {
    text: string
    dateAndTime: string
    id: number
}

const Message = (props: PropsType) => {
    return <div className={s.message}>
        <div>{props.text}</div>
        <div className={s.sendTime}>{props.dateAndTime}</div>
    </div>
}

export default Message