const ADD_TASK = 'ADD-TASK'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_TASKS = 'SET-TASKS'

const SOLVED = 'SOLVED'
const IN_PROGRESS = 'IN PROGRESS'
const ACTIVE = 'ACTIVE'

const BUG = 'BUG'
const TASK = 'TASK'

let initState = {
    tasks: [],
    newTaskText: ''
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_TASK:
            let now = new Date()
            let newTask = {
                id: 15,
                text: state.newTaskText,
                pubDate: now.toLocaleDateString(),
                time:now.getHours() + ':' + now.getMinutes()
            }

            return {
                ...state,
                newTaskText: '',
                tasks: [...state.tasks, newTask]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newTaskText: action.newText
            }

        case SET_TASKS:
            return  {...state, tasks: [...action.tasks]}

        default: return state
    }
}

export const addPostActionCreator = () => ({type: ADD_TASK})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setTasksAC = (tasks) => ({type: SET_TASKS, tasks: tasks})

export default projectReducer
