import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let newMessageText = React.createRef()

    let sendMessage = () => {
        props.sendMessage()
    }

    let onNewMessageBodyChange = () => {
        let text = newMessageText.current.value
        props.onNewMessageBodyChange(text)
    }

    let contactsElements = props.contacts.map(el => <DialogItem id = {el.id}
                                                                name={el.name}
                                                                key = {el.id}
    />)

    let messages = props.messages.map(m => <Message id = {m.id}
                                                    text={m.text}
                                                    dateAndTime = {m.dateAndTime}
                                                    key = {m.id}
    />)
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
                      value={props.newMessageText}
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