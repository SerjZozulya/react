import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";

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

export default DialogsContainer