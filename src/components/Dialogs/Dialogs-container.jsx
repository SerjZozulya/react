import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import Tasks from "../ProjectTasks/Tasks/Tasks";
import {addPostAC, updateNewPostTextAC} from "../../redux/tasks-reducer";

let mapStateToProps = (state) => {
    return {
        messages: state.messagesData.messages,
        contacts: state.messagesData.contacts,
        newMessageText: state.messagesData.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageBodyChange: (text) => {
            let action = updateNewMessageTextActionCreator(text)
            dispatch(action)
        },
        sendMessage: () => {
            let action = sendMessageActionCreator()
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
/*(props) => {
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
}*/

export default DialogsContainer