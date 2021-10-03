import React from 'react'
import s from './Project.module.css'
import Tasks from "./Tasks/Tasks";

const Project = (props) => {
    return <div className={s.profileContent}>
        <div>
            Текущий проект - Система отслеживания задач по разработке системы отслеживания задач
        </div>
        <Tasks
            tasks = {props.tasksData.tasks}
            newTaskText = {props.tasksData.newTaskText}
            dispatch = {props.dispatch}
        />
    </div>
}

export default Project