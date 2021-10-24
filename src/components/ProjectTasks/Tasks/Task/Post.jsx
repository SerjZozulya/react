import s from './Post.module.css'
import avatar from '../../../../img/avatar.jpg'
import del from '../../../../img/del.png'
import edit from '../../../../img/edit.jpg'

const Post = (props) => {
    return <div className={s.postContainer}>
        <div className={s.post}>
            <div className={s.avatarAndDateBlock}>
                <img src={avatar}/>
                <div>{props.pubDate}</div>
                <div>{props.time}</div>
            </div>
            <div className={s.text}>
                <span className={
                    props.taskType === 'TASK' ?
                    s.taskType : s.bugType
                }>{props.taskType}</span>
                <span>: {props.text}</span>
            </div>
            <div className={s.options}>
                <img width={'15 px'} src={del} onClick={() => props.deleteTask(props.id)}/>
                <img width={'15 px'} src={edit}/>
            </div>
        </div>
        <div className={s.statusBar}>
            <div>STATUS: {props.status}</div>
        </div>
    </div>
}

export default Post
