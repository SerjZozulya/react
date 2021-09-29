import s from "./Message.module.css";

const Message = (props) => {
    return <div className={s.messsage}>
        <div>{props.id + '. ' + props.text}</div>
    </div>
}

export default Message