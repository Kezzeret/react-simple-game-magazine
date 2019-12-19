import React from 'react';
import './Admin.css'
import { addNewPostrActionCreator } from './../redux/state'


const Admin = (props) => {


  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    newPostElement.current.value = ""
    props.dispatch(addNewPostrActionCreator(text));
  }
  
    return <div className='admin'>
    <div className='addPost'>
        <textarea ref={newPostElement}></textarea>
    </div>
        <button className='button' onClick={addNewPost}>тест-кнопка</button>
    </div>
}

export default Admin;