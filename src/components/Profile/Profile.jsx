import React from 'react'
import s from './Profile.module.css'
import title from '../../img/title.jpg'
import Posts from "./Posts/Posts";

const Profile = () => {
    return <div className={s.content}>
        <img src={title}/>
        <div>
            ava + description
        </div>
        <Posts />
    </div>
}

export default Profile