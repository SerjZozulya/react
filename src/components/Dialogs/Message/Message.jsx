import s from "./Message.module.css";

const Message = (props) => {
    return <div className={s.message}>
        <div>{props.text}</div>
        <div className={s.sendTime}>{props.dateAndTime}</div>
    </div>
}

export default Message