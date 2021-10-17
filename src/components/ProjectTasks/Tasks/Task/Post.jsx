import s from './Post.module.css'
import avatar from '../../../../img/avatar.jpg'

const Post = (props) => {
    return <div className={s.postContainer}>
        <div className={s.post}>
            <div className={s.avatarAndDateBlock}>
                <img src={avatar}/>
                <div>{props.pubDate}</div>
                <div>{props.time}</div>
            </div>
            <div className={s.text}>
                {props.text}
            </div>
        </div>
        <div className={s.statusBar}>
            <div>Type: {props.taskType} Status: {props.status}</div>
        </div>
    </div>
}

export default Post
