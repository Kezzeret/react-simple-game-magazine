import React, { useState } from 'react';
import './addNews.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddNews = (props) => {
  const newPostTitle = React.createRef();
  const newPostImg = React.createRef();
  const [value, setValue] = useState('');

  const addNewPost = () => {
    const title = newPostTitle.current.value;
    const img = newPostImg.current.value;
    const text = value;
    newPostTitle.current.value = '';
    newPostImg.current.value = '';
    props.addNewPost(title, img, text);
    // props.dispatch(addNewPostActionCreator(title, img, text));
  };


  return (
    <div className="addPost">
      <label className="add-news">Добавление новости</label>
      <label>Название новости</label>
      <input ref={newPostTitle} />
      <label>Ссылка на изображение</label>
      <input ref={newPostImg} />
      <label>Текст новости</label>
      <div className="inputText">
        <CKEditor
          editor={ClassicEditor}
          onChange={(event, editor) => {
            const data = editor.getData();
            setValue(data);
          }}
        />
      </div>
      <button className="addNewsButton" onClick={addNewPost}>Добавить новость</button>
    </div>
  );
};

export default AddNews;
