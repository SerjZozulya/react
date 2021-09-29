import s from './Post.module.css'
import avatar from '../../../../img/avatar.jpg'

const Post = (props) => {
    return <div className={s.post}>
        <div className={s.avatarAndDateBlock}>
            <img src={avatar}/>
            <div>{props.pubDateAndTime}</div>
        </div>
        <div className={s.text}>
            {props.text}
        </div>
    </div>
}

export default Post
