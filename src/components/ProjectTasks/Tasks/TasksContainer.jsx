import Tasks from "./Tasks";
import {
    addPostAC,
    setTasksAC,
    updateNewPostTextAC,
    updateTaskTypeAC,
    updateStatusAC,
} from "../../../redux/tasks-reducer";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Post from "./Task/Post";

class TasksContainer extends React.Component {

    newTextRef = React.createRef()
    taskTypeRef = React.createRef()
    statusRef = React.createRef()

    componentDidMount() {
        axios.get("http://localhost:8080/api/getTasks").then(response => {
            this.props.setTasks(response.data)
        })
    }

    addTask = () => {
        this.props.addTask()
    }

    onPostChange = () => {
        let text = this.newTextRef.current.value
        this.props.updateNewPostText(text)
    }

    onTypeChange = () => {
        let taskType = this.taskTypeRef.current.value
        this.props.updateTaskType(taskType)
    }

    onStatusChange = () => {
        let status = this.statusRef.current.value
        this.props.updateStatus(status)
    }


    tasks = this.props.tasks.map(p => (<Post pubDate={p.pubDate}
                                             time={p.time}
                                             text={p.text}
                                             status={p.status}
                                             id={p.id}
                                             taskType={p.taskType}
    />)).reverse()

    render() {
        return <Tasks tasks = {this.tasks}

                      newTaskText = {this.props.newTaskText}
                      taskType = {this.props.taskType}
                      status = {this.props.status}

                      newPostTextRef = {this.newTextRef}
                      taskTypeRef = {this.taskTypeRef}
                      statusRef = {this.statusRef}

                      onTypeChange = {this.onTypeChange}
                      onPostChange = {this.onPostChange}
                      onStatusChange = {this.onStatusChange}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        tasks: state.tasksData.tasks,
        newTaskText: state.tasksData.newTaskText,
        taskType: state.tasksData.taskType,
        status: state.tasksData.status
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        },
        addTask: () => {
            let action = addPostAC()
            dispatch(action)
        },
        setTasks: (tasks) => {
            let action = setTasksAC(tasks)
            dispatch(action)
        },
        updateTaskType: (taskType) => {
            let action = updateTaskTypeAC(taskType)
            dispatch(action)
        },
        updateStatus: (status) => {
            let action = updateStatusAC(status)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)
