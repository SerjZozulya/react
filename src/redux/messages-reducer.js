const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

const messagesReducer = (state, action) => {
    debugger
    switch (action.type) {
        case SEND_MESSAGE:
            let now = new Date()
            let newMessage = {
                id: 15,
                text: state.newMessageText,
                dateAndTime: now.toLocaleDateString()
                    + '\n' + now.getHours()
                    + ':' + now.getMinutes()
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            debugger
            return state

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newText;
            return state

        default: return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text})

export default messagesReducer