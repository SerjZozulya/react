import s from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    return <div>
        My Posts
        <div>
            <button>New Post</button>
        </div>
        <div>

            <Post id = '1'/>
            <Post id = '2'/>
        </div>
    </div>
}

export default Posts
