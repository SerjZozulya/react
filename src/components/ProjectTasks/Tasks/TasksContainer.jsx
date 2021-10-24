import Tasks from "./Tasks";
import {
    addTask,
    setTasks,
    updateNewPostText,
    updateTaskType,
    updateStatus,
    deleteTask, setProjects,
    changeProject
} from "../../../redux/tasks-reducer";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";

class TasksContainer extends React.Component {

    newTextRef = React.createRef()
    taskTypeRef = React.createRef()
    statusRef = React.createRef()
    selectedProjRef = React.createRef()

    componentDidMount() {
        axios.get("http://localhost:8080/api/getProjects").then(response => {
            this.props.setProjects(response.data)
        })

        let id = this.props.selectedProject
        axios.get(`http://localhost:8080/api/getTasks/${id}`).then(response => {
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

    onProjectChange = (e) => {
        let project = e.target.value
        this.props.changeProject(project)
        axios.get(`http://localhost:8080/api/getTasks/${project.valueOf()}`).then(response => {
            this.props.setTasks(response.data)
        })
    }

    render() {
        return <Tasks tasks = {this.props.tasks}
                      projects = {this.props.projects}
                      selectedProject = {this.props.selectedProject}
                      deleteTask = {this.props.deleteTask}

                      newTaskText = {this.props.newTaskText}
                      taskType = {this.props.taskType}
                      status = {this.props.status}

                      newPostTextRef = {this.newTextRef}
                      taskTypeRef = {this.taskTypeRef}
                      statusRef = {this.statusRef}
                      selectedProjRef = {this.selectedProjRef}

                      onTypeChange = {this.onTypeChange}
                      onPostChange = {this.onPostChange}
                      onStatusChange = {this.onStatusChange}
                      addTask = {this.addTask}
                      onProjectChange = {this.onProjectChange}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        tasks: state.tasksData.tasks,
        projects: state.tasksData.projects,
        newTaskText: state.tasksData.newTaskText,
        taskType: state.tasksData.taskType,
        status: state.tasksData.status,
        selectedProject: state.tasksData.selectedProject
    }
}

export default connect(mapStateToProps,
    {updateNewPostText,
        addTask,
        setTasks,
        updateTaskType,
        updateStatus,
        deleteTask,
        setProjects,
        changeProject
    })
(TasksContainer)

