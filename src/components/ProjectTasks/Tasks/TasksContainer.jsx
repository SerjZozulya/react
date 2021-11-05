import Tasks from "./Tasks";
import {
    addTask,
    setTasks,
    updateNewPostText,
    updateTaskType,
    updateStatus,
    deleteTask, setProjects,
    changeProject, getTasks,
    getProjects
} from "../../../redux/tasks-reducer";
import {connect} from "react-redux";
import React from "react";

class TasksContainer extends React.Component {

    newTextRef = React.createRef()
    taskTypeRef = React.createRef()
    statusRef = React.createRef()
    selectedProjRef = React.createRef()

    componentDidMount() {
        this.props.getProjects()
        this.props.getTasks(this.props.selectedProject.id)
    }

    addTask = () => {

        let now = new Date()
        let newTask = {
            text: this.props.newTaskText,
            taskType: this.props.taskType,
            status: this.props.status,
            pubDate: now.toLocaleDateString(),
            time: now.getHours() + ':' + now.getMinutes(),
            projectId: this.props.selectedProject.id,
        }
        this.props.addTask(newTask)
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
        this.props.getTasks(project.valueOf())
    }

    render() {
        return <Tasks tasks = {this.props.tasks}
                      projects = {this.props.projects}
                      selectedProject = {this.props.selectedProject}

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
                      deleteTask = {this.props.deleteTask}
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
        changeProject,
        getTasks,
        getProjects
    })
(TasksContainer)

