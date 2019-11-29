import React from 'react';
import './Header.css';

const Header = () => {
    return <header className='header'>
    <div className='logo'>
      <img src='https://everyplayer.ru/img/logo.png'></img>
    </div>
    <div className='menu-top'>Menu Menu Menu</div>
    <div className='switcher'>color</div>
    <div className='profile'>profile</div>
  </header>
}

export default Header;