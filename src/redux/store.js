import projectReducer from "./project-reducer";
import messagesReducer from "./messages-reducer";

let store = {
    _state: {
        tasksData: {
            tasks: [
                {id: 0, text: 'Теперь и посты тоже в отдельном массиве', pubDateAndTime: '26.09.2021\n21:16'},
                {id: 1, text: 'Это удобно, потому что так будут приходить данные с сервера', pubDateAndTime: '26.09.2021\n21:18'},
                {id: 2, text: 'Теперь это не столько соц-сеть, сколько дневник разработки', pubDateAndTime: '26.09.2021\n21:20'},
                {id: 3, text: 'А\nчто\nесли\nбудет\nкакой-то\nсупер\nдлинный\nтекст?', pubDateAndTime: '26.09.2021\n21:52'},
                {id: 4, text: 'Баг: текст не переносится. Надо ещё красоту навести', pubDateAndTime: '26.09.2021\n23:03'},
                {id: 5, text: 'Баг: "Стена" не прокручивается вниз', pubDateAndTime: '26.09.2021\n23:04'},
                {id: 6, text: 'Баг: "Стена" не прокручивается вниз. Статус: исправлено', pubDateAndTime: '27.09.2021\n0:04'},
                {id: 7, text: 'Баг: "Сообщения" прокручиваются вниз. Статус: активен', pubDateAndTime: '27.09.2021\n0:05'},
            ],

            newTaskText: ''
        },

        messagesPage: {
            contacts: [
                {id: 0, name: 'Роман'},
                {id: 1, name: 'Фарш'},
                {id: 2, name: 'Гена'},
                {id: 3, name: 'Semen'},
                {id: 4, name: 'Птица Детектив'},
                {id: 5, name: 'Лёха'},
                {id: 6, name: 'Саня'},
                {id: 7, name: 'Микрочелик1'},
                {id: 8, name: 'Микрочелик2'},
                {id: 9, name: 'Микрочелик3'},
                {id: 10, name: 'Микрочелик4'},
                {id: 11, name: 'Микрочелик5'},
                {id: 12, name: 'Микрочелик6'},
                {id: 13, name: 'Микрочелик7'},
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
        },
    },

    _callSubscriber() {
        console.log('State changed')
    },

    dispatch(action) {
        this._state.tasksData = projectReducer(this._state.tasksData, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    },

    getState() {
        return this._state
    },

    subscribe(observer){
        this._callSubscriber = observer
    },

}


export default store
window.store = store