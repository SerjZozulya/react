import s from './Tasks.module.css'
import * as React from "react";
import Post from "./Task/Post";
import del from '../../../assets/img/del.png'
import edit from '../../../assets/img/edit.jpg'
import plus from '../../../assets/img/plus.svg'

let Tasks = (props) => {

    let tasks = props.tasks.map(p => (<Post key={p.id}
                                            id={p.id}
                                            pubDate={p.pubDate}
                                            time={p.time}
                                            text={p.text}
                                            status={p.status}
                                            taskType={p.taskType}
                                            deleteTask={props.deleteTask}
    />)).reverse()

    let projects = props.projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)

    return <div className={s.tasks}>
        <div className={s.projectsBlock}>
            Текущий проект - <select onChange={props.onProjectChange}
                                     value={props.selectedProject.id}
                                     ref={props.selectedProjRef}
                                     style={{width: 'auto'}

                                     }>{projects}</select>
            <img src={plus}/>
            <img src={del}  alt={"del"}/>
            <img src={edit} alt={"edit"}/>
        </div>

        <div style={{
            fontWeight: 1000,
            fontFamily: 'Lucida Console',
            marginTop: 30 + 'px',
            marginBottom: 5 + 'px'
        }}>Создать задачу
        </div>

        <textarea
            className={s.ta}
            ref={props.newPostTextRef}
            value={props.newTaskText}
            onChange={props.onPostChange}
        />


        <div className={s.settings}>
            Тип задачи: <select value={props.taskType}
                                onChange={props.onTypeChange}
                                ref={props.taskTypeRef}
        >
            <option>TASK</option>
            <option>BUG</option>
        </select>
            {` Статус:`} <select value={props.status}
                                 onChange={props.onStatusChange}
                                 ref={props.statusRef}
        >
            <option>SOLVED</option>
            <option>IN PROGRESS</option>
            <option>ACTIVE</option>
        </select>
            <button
                disabled={
                    props.newTaskText === ''
                }
                onClick={props.addTask}>Add New Task</button>
        </div>

        My Tasks
        <div>
            {tasks}
        </div>
    </div>
}

export default Tasks
