import React from 'react'
import s from './Project.module.css'
import Tasks from "./Tasks/Tasks";

const Project = (props) => {
    return <div className={s.profileContent}>
        <div>
            Текущий проект - Система отслеживания задач по разработке системы отслеживания задач
        </div>
        <Tasks
            addTask={props.addTask}
            tasks = {props.tasksData.tasks}
            newTaskText = {props.tasksData.newTaskText}
            updateNewPostText = {props.updateNewPostText}
        />
    </div>
}

export default Project