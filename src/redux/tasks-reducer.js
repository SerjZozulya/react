import axios from "axios";

const ADD_TASK = 'ADD-TASK'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_TASKS = 'SET-TASKS'
const UPDATE_TASK_TYPE = 'UPDATE-TASK-TYPE'
const UPDATE_STATUS = 'UPDATE_STATUS'
const DEL_TASK = 'DEL_TASK'
const SET_PROJECTS = 'SET_PROJECTS'
const CHANGE_PROJECT = 'CHANGE_PROJECT'

const SOLVED = 'SOLVED'
const IN_PROGRESS = 'IN PROGRESS'
const ACTIVE = 'ACTIVE'

const BUG = 'BUG'
const TASK = 'TASK'

let initState = {
    projects: [],
    selectedProject: {},
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
            return  {...state,
                tasks: [...action.tasks]}

        case SET_PROJECTS:
            return  {...state, projects: action.projects}

        case CHANGE_PROJECT:
            console.log(action)
            return {...state, selectedProject: state.projects[action.project.valueOf()]}

        case DEL_TASK:

            axios.post("http://localhost:8080/api/delTask", {id: action.id}).then(r => {
                console.log('success')
            })

            state.tasks.splice(state.tasks.findIndex(e => e.id === action.id), 1)
            return  {...state, tasks: [...state.tasks]}

        default: return state
    }
}

export const addTask = () => ({type: ADD_TASK})
export const deleteTask = (id) => ({type: DEL_TASK, id: id})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setTasks = (tasks) => ({type: SET_TASKS, tasks: tasks})
export const updateTaskType = (taskType) => ({type: UPDATE_TASK_TYPE, taskType: taskType})
export const updateStatus = (status) => ({type: UPDATE_STATUS, status: status})
export const setProjects = (projects) => ({type: SET_PROJECTS, projects: projects})
export const changeProject = (project) => ({type: CHANGE_PROJECT, project: project})

export default tasksReducer
