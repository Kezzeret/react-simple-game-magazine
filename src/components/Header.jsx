import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom"

const Header = (props) => {


  return <header className='header'>
    <div className='logo'>
      <img src='https://everyplayer.ru/img/logo.png'></img>
    </div>
    <div className='menu-top'>
      <NavLink to="/main">Профиль </NavLink>
      <NavLink to="/articles">Статьи </NavLink>
      <NavLink to="/users">Игроки </NavLink>
      <NavLink to="/admin">Админка</NavLink>
    </div>
    </header>
}

export default Header;