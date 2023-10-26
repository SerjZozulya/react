const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    text: string
    dateAndTime: string
}

let initialState = {
    contacts: [
        {id: 0, name: 'Роман'},
        {id: 1, name: 'Паштет'},
        {id: 2, name: 'Гена'},
        {id: 3, name: 'Semen'},
        {id: 5, name: 'Лёха'},
        {id: 6, name: 'Саня'},
        {id: 7, name: 'Микрочелик'},
    ] as Array<DialogType>,
    messages: [
        {id: 0, text: 'Beginning the new era of roman network!', dateAndTime: '26.10.2023\n12:46'},
        {id: 1, text: 'Узнал, что такое тернарное выражение', dateAndTime: '26.09.2021\n21:18'},
        {id: 2, text: 'Зарефакторил функцию мапинга', dateAndTime: '26.09.2021\n21:20'},
        {id: 3, text: 'Посмотрел 25 урок IT-KAMASUTRA', dateAndTime: '26.09.2021\n21:25'},
        {id: 4, text: 'Узнал, что переименовывание переменной в WebStorm происходит на комбинацию клавиш Shift+F6', dateAndTime: '26.09.2021\n21:29'},
        {id: 5, text: 'Баг: при нажатии на "Птица Детектив" меняется отступ. Статус: активен', dateAndTime: '26.09.2021\n22:41'},
        {id: 6, text: 'Баг: Блок "Сообщения" прокручивается вниз, а не должен. Статус: активен', dateAndTime: '27.09.2021\n0:04'},
        {id: 7, text: 'Баг: Блок "Сообщения" прокручивается вниз, а не должен. Статус: решено', dateAndTime: '27.09.2021\n13:07'},
        {id: 8, text: 'Вынес все данные в стэйт. По-прежнему не решил проблему с прокруткой блоков. Возможно, дело в гриде', dateAndTime: '27.09.2021\n21:49'},
    ] as Array<MessageType>,

    newMessageText: ''
}

const messagesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:

            if (state.newMessageText === '') {return state}
            else {
            let now = new Date()
            let newMessage = {
                id: 15,
                text: state.newMessageText,
                dateAndTime: now.toLocaleDateString()
                    + '\n' + now.getHours()
                    + ':' + now.getMinutes()
            }

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        }

        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageText: action.newText}

        default: return state
    }
}

type SendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE
}

type UpdateNewMessageTextActionCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    newText: string
}

export const sendMessageActionCreator = (): SendMessageActionCreatorType => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionCreatorType => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text})

export default messagesReducer