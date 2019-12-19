import React from 'react';
import './Admin.css'
import { addNewPostrActionCreator } from './../redux/state'


const Admin = (props) => {


  let newPostTitle = React.createRef();
  let newPostImg = React.createRef();
  let newPostText = React.createRef();

  let addNewPost = () => {
    let title = newPostTitle.current.value;
    let img = newPostImg.current.value;
    let text = newPostText.current.value;
    newPostTitle.current.value = ""
    newPostImg.current.value = ""
    newPostText.current.value = ""
    props.dispatch(addNewPostrActionCreator(title, img, text));
  }
  
    return <div className='admin'>
    <div className='addPost'>
      <label>Добавление новости</label>
      <label>Название новости</label>
      <input ref={newPostTitle}></input>
      <label>Ссылка на изображение</label>
      <input ref={newPostImg}></input>
      <label>Текст новости</label>
      <input ref={newPostText}></input>
    </div>
        <button className='button' onClick={addNewPost}>Добавить новость</button>
    </div>
}

export default Admin;