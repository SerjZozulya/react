import s from './Posts.module.css'
import Post from "./Task/Post";
import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/project-reducer";

const Tasks = (props) => {

    let newPostText = React.createRef()

    let addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action)
    }

    let onPostChange = () => {
        let text = newPostText.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
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
