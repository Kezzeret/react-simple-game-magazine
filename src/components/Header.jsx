import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom"

const Header = () => {
    return <header className='header'>
    <div className='logo'>
      <img src='https://everyplayer.ru/img/logo.png'></img>
    </div>
    <div className='menu-top'>
      <NavLink to="/main">Профиль </NavLink>
      <NavLink to="/articles">Статьи </NavLink>
    </div>
    <div className='switcher'>color</div>
    <div className='profile'>profile</div>
  </header>
}

export default Header;