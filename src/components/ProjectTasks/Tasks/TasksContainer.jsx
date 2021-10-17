import Tasks from "./TasksClass";
import {
    addPostActionCreator,
    setTasksAC,
    updateNewPostTextActionCreator,
    updateTaskTypeActionCreator
} from "../../../redux/project-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        tasks: state.tasksData.tasks,
        newTaskText: state.tasksData.newTaskText,
        taskType: state.tasksData.taskType
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addTask: () => {
            let action = addPostActionCreator()
            dispatch(action)
        },
        setTasks: (tasks) => {
            let action = setTasksAC(tasks)
            dispatch(action)
        },
        updateTaskType: (taskType) => {
            let action = updateTaskTypeActionCreator(taskType)
            dispatch(action)
        }
    }
}

const TasksContainer  = connect(mapStateToProps, mapDispatchToProps)(Tasks)

export default TasksContainer