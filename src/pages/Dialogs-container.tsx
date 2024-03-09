import Dialogs from "../components/Dialogs/Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/reducers/messages-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        messages: state.messagesData.messages,
        contacts: state.messagesData.contacts,
        newMessageText: state.messagesData.newMessageText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        onNewMessageUpdate: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer