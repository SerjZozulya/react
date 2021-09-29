 import React from 'react';
 import  s from './Header.module.css'
 import i from '../../img/header.jpg'

const Header = () => {
    return <header className={s.header}>
        <img src={i}/>
    </header>
}

export default Header;