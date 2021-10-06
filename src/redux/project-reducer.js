const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initState = {
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
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_TASK:
            let now = new Date()
            let newTask = {
                id: 15,
                text: state.newTaskText,
                pubDateAndTime: now.toLocaleDateString()
                    + '\n' + now.getHours()
                    + ':' + now.getMinutes()
            }
            state.tasks.push(newTask)
            state.newTaskText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newTaskText = action.newText;
            return state

        default: return state
    }
}

export const addPostActionCreator = () => ({type: ADD_TASK})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default projectReducer
