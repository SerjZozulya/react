import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let sendMessage = () => {
        let action = sendMessageActionCreator()
        props.store.dispatch(action)
    }

    let onNewMessageBodyChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <Dialogs sendMessage = {sendMessage}
                    onNewMessageBodyChange = {onNewMessageBodyChange}
                    messages = {state.messagesData.messages}
                    contacts = {state.messagesData.contacts}
                    newMessageText = {state.messagesData.newMessageText}
    />
}

export default DialogsContainer