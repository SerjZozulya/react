import Tasks from "./Tasks";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/project-reducer";

const TasksContainer = (props) => {
    let state = props.store.getState()

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    let addTask = () => {
        props.store.dispatch(addPostActionCreator())
    }

    return <Tasks updateNewPostText = {onPostChange}
                  addTask = {addTask}
                  tasks = {state.tasksData.tasks}
                  newTaskText = {state.tasksData.newTaskText}
    />
}

export default TasksContainer