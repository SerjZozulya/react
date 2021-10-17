import axios from "axios";

const ADD_TASK = 'ADD-TASK'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_TASKS = 'SET-TASKS'
const UPDATE_TASK_TYPE = 'UPDATE-TASK-TYPE'
const UPDATE_STATUS = 'UPDATE_STATUS'

const SOLVED = 'SOLVED'
const IN_PROGRESS = 'IN PROGRESS'
const ACTIVE = 'ACTIVE'

const BUG = 'BUG'
const TASK = 'TASK'

let initState = {
    tasks: [],
    newTaskText: '',
    taskType: TASK,
    status: ACTIVE
}

const tasksReducer = (state = initState, action) => {
    switch (action.type) {

        case ADD_TASK:
            let now = new Date()
            let newTask = {
                text: state.newTaskText,
                taskType: state.taskType,
                status: state.status,
                pubDate: now.toLocaleDateString(),
                time: now.getHours() + ':' + now.getMinutes()
            }

            axios.post("http://localhost:8080/api/addTask", newTask).then(r => {
                console.log('success')
            })

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

        case UPDATE_STATUS:
            return {
                ...state, status: action.status
            }

        case SET_TASKS:
            return  {...state, tasks: [...action.tasks]}

        default: return state
    }
}

export const addPostAC = () => ({type: ADD_TASK})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setTasksAC = (tasks) => ({type: SET_TASKS, tasks: tasks})
export const updateTaskTypeAC = (taskType) => ({type: UPDATE_TASK_TYPE, taskType: taskType})
export const updateStatusAC = (status) => ({type: UPDATE_STATUS, status: status})

export default tasksReducer
