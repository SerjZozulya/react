import React from "react";
import s from "./Posts.module.css";
import Post from "./Task/Post";
import axios from "axios";

class Tasks extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:8080/api/getTasks").then(response => {
            this.props.setTasks(response.data)
        })
    }


    addPost = () => {
        this.props.addTask()
    }

    newPostText = React.createRef()
    taskType = React.createRef()

    onPostChange = () => {
        let text = this.newPostText.current.value
        this.props.updateNewPostText(text)
    }

    onTypeChange = () => {
        let taskType = this.taskType.current.value
        this.props.updateTaskType(taskType)
    }


    tasks = this.props.tasks.map(p => (<Post pubDate = {p.pubDate}
                                            time = {p.time}
                                            text = {p.text}
                                            status = {p.status}
                                            id = {p.id}
                                            taskType = {p.taskType}
    />)).reverse()

    render() {
        return <div className={s.tasks}>
            <div>
            <textarea
                className={s.ta}
                ref={this.newPostText}
                value={this.props.newTaskText}
                onChange={this.onPostChange}
            />
            </div>
            <div>
                <select ref={this.taskType}
                        onChange={this.onTypeChange}
                        value={this.props.taskType}
                >
                    <option>TASK</option>
                    <option>BUG</option>
                </select>
                <button onClick={this.addPost}>Add New Task</button>
            </div>
            My Tasks
            <div>
                {this.tasks}
            </div>
        </div>
    }
}

export default Tasks