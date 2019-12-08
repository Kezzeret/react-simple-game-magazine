import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom"

const Header = (props) => {

  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    newPostElement.current.value = ""
    props.addPost(text);
  }

  return <header className='header'>
    <div className='logo'>
      <img src='https://everyplayer.ru/img/logo.png'></img>
    </div>
    <div className='menu-top'>
      <NavLink to="/main">Профиль </NavLink>
      <NavLink to="/articles">Статьи </NavLink>
    </div>
    <div className='switcher'>color</div>
    <div className='addPost'>
      <textarea ref={newPostElement}></textarea>
    </div>
    <button className='button' onClick={addNewPost}>тест-кнопка</button>
  </header>
}

export default Header;