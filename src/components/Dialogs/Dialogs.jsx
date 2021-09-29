import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let contactsElements = props.messagesData.contacts.map(el => <DialogItem id = {el.id} name={el.name}/>)
    let messages = props.messagesData.messages.map(m => <Message id = {m.id} text={m.text} dateAndTime = {m.dateAndTime}/>)

    return <div className={s.dialogsPage}>
        <div className={s.dialogs}>
            <div className={s.contacts}>Контакты</div>
            {contactsElements}
        </div>
        <div className={s.messages}>
            {messages}
        </div>
    </div>
}

export default Dialogs