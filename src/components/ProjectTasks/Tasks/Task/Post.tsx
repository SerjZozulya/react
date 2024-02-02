import s from './Post.module.css'
import avatar from '../../../../assets/img/avatar.jpg'

import { Button, Tooltip } from 'antd'
import { DeleteOutlined, EditFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Post: React.FC = ({...props}:any) => {
    return <div className={s.postContainer}>
        <div className={s.post}>
            <div className={s.avatarAndDateBlock}>
                <img src={avatar} alt={"ava"}/>
                <div>{props.pubDate}</div>
                <div>{props.time}</div>
            </div>
            <div className={s.text}>
                <Link to={`/project/${props.taskType+'-'+props.id}`} className={
                    props.taskType === 'TASK' ?
                    s.taskType : s.bugType
                }>{props.taskType} №{props.id}</Link>
                <span>: {props.text}</span>
            </div>
            <div className={s.options}>
                <Tooltip title="delete"><Button onClick={e => {props.remove(props.id)}} shape='circle' icon={<DeleteOutlined/>}/></Tooltip>
                <Tooltip title="edit"><Button shape='circle' icon={<EditFilled/>}/></Tooltip>   
            </div>
        </div>
        <div className={s.statusBar}>
            <div>STATUS: {props.completed ? "DONE" : "TODO"}</div>
        </div>
    </div>
}

export default Post
