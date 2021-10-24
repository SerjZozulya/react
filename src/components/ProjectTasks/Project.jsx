import React from 'react'
import s from './Project.module.css'
import TasksContainer from "./Tasks/TasksContainer";

const Project = (props) => {
        return <div className={s.profileContent}>
            <TasksContainer store = {props.store}/>
        </div>
}

export default Project