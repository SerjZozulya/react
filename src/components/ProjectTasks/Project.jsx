import React from 'react'
import s from './Project.module.css'
import TasksContainer from "./Tasks/TasksContainer";

const Project = (props) => {
    return <div className={s.profileContent}>
        <div>
            Текущий проект - Система отслеживания задач по разработке системы отслеживания задач
        </div>
        <TasksContainer store = {props.store}/>
    </div>
}

export default Project