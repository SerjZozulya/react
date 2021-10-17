import axios from "axios";

const ADD_TASK = 'ADD-TASK'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_TASKS = 'SET-TASKS'
const UPDATE_TASK_TYPE = 'UPDATE-TASK-TYPE'

const SOLVED = 'SOLVED'
const IN_PROGRESS = 'IN PROGRESS'
const ACTIVE = 'ACTIVE'

const BUG = 'BUG'
const TASK = 'TASK'

let initState = {
    tasks: [],
    newTaskText: '',
    taskType: BUG
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_TASK:
            let now = new Date()
            let newTask = {
                text: state.newTaskText,
                taskType: state.taskType,
                status: IN_PROGRESS,
                pubDate: now.toLocaleDateString(),
                time: now.getHours() + ':' + now.getMinutes()
            }

            axios.post("http://localhost:8080/api/addTask", newTask).then(r => {})

             return {
                ...state,
                newTaskText: '',
                tasks: [...state.tasks, newTask]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newTaskText: action.newText
            }

        case UPDATE_TASK_TYPE:
            return {
                ...state, taskType: action.taskType
            }

        case SET_TASKS:
            return  {...state, tasks: [...action.tasks]}

        default: return state
    }
}

export const addPostActionCreator = () => ({type: ADD_TASK})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setTasksAC = (tasks) => ({type: SET_TASKS, tasks: tasks})
export const updateTaskTypeActionCreator = (taskType) => ({type: UPDATE_TASK_TYPE, taskType: taskType})

export default projectReducer
