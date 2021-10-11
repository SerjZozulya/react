import s from './Posts.module.css'
import Post from "./Task/Post";
import * as React from "react";
import axios from "axios";

const Tasks = (props) => {

    if (props.tasks.length === 0) {

        axios.get("http://localhost:8080/getTasks").then(response => {
            props.setTasks(response.data)
        })
    }

    let newPostText = React.createRef()

    let addPost = () => {
        props.addTask()
    }

    let onPostChange = () => {
        let text = newPostText.current.value
        props.updateNewPostText(text)
    }


    let tasks = props.tasks.map(p => (<Post pubDate = {p.pubDate}
                                            time = {p.time}
                                            text = {p.text}
                                            status = {p.status}
                                            id = {p.id}
                                            type = {p.type}
    />)).reverse()

    return <div className={s.tasks}>
        <div>
            <textarea
                className={s.ta}
                ref={newPostText}
                value={props.newTaskText}
                onChange={onPostChange}
            />
        </div>
        <div>
            <select>
                <option>TASK</option>
                <option>BUG</option>
            </select>
            <button onClick={addPost}>Add New Task</button>
        </div>
        My Tasks
        <div>
            {tasks}
        </div>
    </div>
}

export default Tasks
