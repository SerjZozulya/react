import {tasksAPI} from "../api/api";

const ADD_TASK = 'ADD-TASK'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_TASKS = 'SET-TASKS'
const UPDATE_TASK_TYPE = 'UPDATE-TASK-TYPE'
const UPDATE_STATUS = 'UPDATE_STATUS'
const DEL_TASK = 'DEL_TASK'
const SET_PROJECTS = 'SET_PROJECTS'
const CHANGE_PROJECT = 'CHANGE_PROJECT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const SOLVED = 'SOLVED'
const IN_PROGRESS = 'IN PROGRESS'
const ACTIVE = 'ACTIVE'

const BUG = 'BUG'
const TASK = 'TASK'

type SelectedProjectType = {
    id: number
    name: string
}

type InitStateType = {
    projects: Array<any>
    selectedProject: SelectedProjectType
    tasks: Array<any>
    newTaskText: string
    taskType: string
    status: string
}

let initState: InitStateType = {
    projects: [],
    selectedProject: {id: 1, name: ''},
    tasks: [],
    newTaskText: '',
    taskType: TASK,
    status: ACTIVE
}

const tasksReducer = (state = initState, action: any) => {
    switch (action.type) {

        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task],
                newTaskText: ''
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
            return  {...state,
                projects: action.projects
            }

        case CHANGE_PROJECT:
            return {...state, selectedProject: state.projects[action.project.valueOf()]}

        case DEL_TASK:

            state.tasks.splice(state.tasks.findIndex((e: any) => e.id === action.id), 1)
            return  {...state, tasks: [...state.tasks]}

        default: return state
    }
}

export const addTaskToState = (task: any) => ({type: ADD_TASK, task: task})
export const deleteTaskFromState = (id: number) => ({type: DEL_TASK, id: id})
export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setTasks = (tasks: any) => ({type: SET_TASKS, tasks: tasks})
export const updateTaskType = (taskType: any) => ({type: UPDATE_TASK_TYPE, taskType: taskType})
export const updateStatus = (status: string) => ({type: UPDATE_STATUS, status: status})
export const setProjects = (projects: any) => ({type: SET_PROJECTS, projects: projects})
export const changeProject = (project: any) => ({type: CHANGE_PROJECT, project: project})
export const toggleIsFetching = (isFetching: any) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getTasks = (id: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))

        tasksAPI.getTasks(id).then(data => {
            dispatch(setTasks(data))
            dispatch(toggleIsFetching(false))
        })
    }
}
export const getProjects = () => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))

        tasksAPI.getProjects().then(data => {
            dispatch(setProjects(data))
            dispatch(toggleIsFetching(false))
        })
    }
}
export const deleteTask = (id: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))

        tasksAPI.deleteTask(id).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(deleteTaskFromState(data.id))
                dispatch(toggleIsFetching(false))
            }
        })
    }
}

export const addTask = (newTask: any) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        tasksAPI.addTask(newTask).then(data => {
            if (data.resultCode === 0) {
                newTask.id = data.id;
                dispatch(addTaskToState(newTask))
                dispatch(toggleIsFetching(false))
            }
        })
    }
}

export default tasksReducer
