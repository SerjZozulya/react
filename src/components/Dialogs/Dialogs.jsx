import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/messages-reducer";

const Dialogs = (props) => {

    let newMessageText = React.createRef()

    let sendMessage = () => {
        let action = sendMessageActionCreator()
        props.dispatch(action)
    }

    let onNewMessageBodyChange = () => {
        let text = newMessageText.current.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
    }

    let contactsElements = props.messagesData.contacts.map(el => <DialogItem id = {el.id} name={el.name}/>)
    let messages = props.messagesData.messages.map(m => <Message id = {m.id} text={m.text} dateAndTime = {m.dateAndTime}/>)
        .reverse()

    return <div className={s.dialogsPage}>
        <div className={s.dialogs}>
            <div className={s.contacts}>Контакты</div>
            {contactsElements}
        </div>
        <div className={s.messages}>
            {messages}
        </div>
        <div className={s.newMessage}>
            <textarea placeholder={'Напишите    сообщение...'}
                      className={s.newMessageTA}
                      ref = {newMessageText}
                      value={props.messagesData.newMessageText}
                      onChange={onNewMessageBodyChange}
            />
            <div className={s.buttonsBlock}>
                <button className={s.sendMessage}
                        onClick={sendMessage}>
                    Отправить
                </button>
                <button className={s.addFile}>Прикрепить</button>
                <button className={s.recordVoice}>Записать голосовое</button>
            </div>
        </div>
    </div>
}

export default Dialogs