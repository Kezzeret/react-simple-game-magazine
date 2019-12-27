import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="menu-top">
      <NavLink to="/" className="main-nav" activeClassName="activeLink">Главная </NavLink>
      <NavLink to="/articles" className="main-nav" activeClassName="activeLink">Журнал </NavLink>
      <NavLink to="/admin" className="main-nav" activeClassName="activeLink">Админка</NavLink>
    </nav>
  </header>
);

export default Header;
