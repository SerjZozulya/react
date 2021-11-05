import s from './Post.module.css'
import avatar from '../../../../assets/img/avatar.jpg'
import del from '../../../../assets/img/del.png'
import edit from '../../../../assets/img/edit.jpg'

const Post = (props) => {
    return <div className={s.postContainer}>
        <div className={s.post}>
            <div className={s.avatarAndDateBlock}>
                <img src={avatar} alt={"ava"}/>
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
                <img width={'15 px'} src={del} onClick={() => props.deleteTask(props.id)} alt={"del"}/>
                <img width={'15 px'} src={edit} alt={"edit"}/>
            </div>
        </div>
        <div className={s.statusBar}>
            <div>STATUS: {props.status}</div>
        </div>
    </div>
}

export default Post
