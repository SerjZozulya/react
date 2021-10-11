const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    contacts: [
        {id: 0, name: 'Роман'},
        {id: 1, name: 'Фарш'},
        {id: 2, name: 'Гена'},
        {id: 3, name: 'Semen'},
        {id: 4, name: 'Птица Детектив'},
        {id: 5, name: 'Лёха'},
        {id: 6, name: 'Саня'},
        {id: 7, name: 'Микрочелик'},
    ],
    messages: [
        {id: 0, text: 'Вынес дату в массив вне компоненты', dateAndTime: '26.09.2021\n21:16'},
        {id: 1, text: 'Узнал, что такое тернарное выражение', dateAndTime: '26.09.2021\n21:18'},
        {id: 2, text: 'Зарефакторил функцию мапинга', dateAndTime: '26.09.2021\n21:20'},
        {id: 3, text: 'Посмотрел 25 урок IT-KAMASUTRA', dateAndTime: '26.09.2021\n21:25'},
        {id: 4, text: 'Узнал, что переименовывание переменной в WebStorm происходит на комбинацию клавиш Shift+F6', dateAndTime: '26.09.2021\n21:29'},
        {id: 5, text: 'Баг: при нажатии на "Птица Детектив" меняется отступ. Статус: активен', dateAndTime: '26.09.2021\n22:41'},
        {id: 6, text: 'Баг: Блок "Сообщения" прокручивается вниз, а не должен. Статус: активен', dateAndTime: '27.09.2021\n0:04'},
        {id: 7, text: 'Баг: Блок "Сообщения" прокручивается вниз, а не должен. Статус: решено', dateAndTime: '27.09.2021\n13:07'},
        {id: 8, text: 'Вынес все данные в стэйт. По-прежнему не решил проблему с прокруткой блоков. Возможно, дело в гриде', dateAndTime: '27.09.2021\n21:49'},
    ],

    newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
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
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }

        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageText: action.newText}

        default: return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text})

export default messagesReducer