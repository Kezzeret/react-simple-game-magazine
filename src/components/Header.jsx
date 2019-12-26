import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom"

const Header = (props) => {


  return <header className='header'>
    <nav className='menu-top'>
      <NavLink to="/main" className='main-nav' activeClassName="activeLink" >Профиль </NavLink>
      <NavLink to="/articles" className='main-nav' activeClassName="activeLink">Журнал </NavLink>
      <NavLink to="/admin" className='main-nav' activeClassName="activeLink">Админка</NavLink>
    </nav>
    </header>
}

export default Header;