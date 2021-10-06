import s from './Posts.module.css'
import Post from "./Task/Post";
import * as React from "react";

const Tasks = (props) => {

    let newPostText = React.createRef()

    let addPost = () => {
        props.addTask()
    }

    let onPostChange = () => {
        let text = newPostText.current.value
        props.updateNewPostText(text)
    }


    let tasks = props.tasks.map(p => (<Post pubDateAndTime = {p.pubDateAndTime}
                                            text = {p.text}
                                            id = {p.id}
    />)).reverse()

    return <div className={s.tasks}>
        My Tasks
        <div>
            <button onClick={addPost}>New Task</button>
        </div>
        <div>
            <textarea
                ref = {newPostText}
                value={props.newTaskText}
                onChange={onPostChange}
            />
        </div>
        <div>
            {tasks}
        </div>
    </div>
}

export default Tasks
