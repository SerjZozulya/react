const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const projectReducer = (state, action) => {
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
