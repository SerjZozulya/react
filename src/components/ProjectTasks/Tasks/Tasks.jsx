import s from './Posts.module.css'
import * as React from "react";

const Tasks = (props) => {
    return <div className={s.tasks}>
        <div>
            <textarea
                className={s.ta}
                ref={props.newPostTextRef}
                value={props.newTaskText}
                onChange={props.onPostChange}
            />
        </div>
        <div>
            Тип задачи: <select value={props.taskType}
                                onChange={props.onTypeChange}
                                ref={props.taskTypeRef}
        >
                <option>TASK</option>
                <option>BUG</option>
            </select>
            Статус: <select value={props.status}
                            onChange={props.onStatusChange}
                            ref={props.statusRef}
        >
            <option>SOLVED</option>
            <option>IN PROGRESS</option>
            <option>ACTIVE</option>
        </select>
            <button onClick={props.addTask}>Add New Task</button>
        </div>
        My Tasks
        <div>
            {props.tasks}
        </div>
    </div>
}

export default Tasks
