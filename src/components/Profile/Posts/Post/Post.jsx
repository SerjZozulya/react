import s from './Post.module.css'
import avatar from '../../../../img/avatar.jpg'

const Post = (props) => {
    return <div className={s.post}>
        <img src={avatar}/>
        <div>
            Post {props.id}
        </div>
    </div>
}

export default Post
