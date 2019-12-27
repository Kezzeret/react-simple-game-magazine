import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './addArticle.css';

const AddArticle = (props) => {
  const newArticleTitle = React.createRef();
  const newArticleImg = React.createRef();
  const newArticlePreview = React.createRef();
  const newArticleText = React.createRef();
  const [value, setValue] = useState('');

  const getSmallText = (bigTextWithTags) => {
    const textWithoutTags = bigTextWithTags.replace(/<\/?[^>]+>/g, '');
    for (let i = 170; i < 210; i++) {
      if (textWithoutTags[i] === ' ') return (`${textWithoutTags.slice(0, i)}...`);
    }
    return (`${textWithoutTags.slice(0, 170)}...`);
  };

  const addNewArticle = () => {
    getSmallText(value);
    const title = newArticleTitle.current.value;
    const image = newArticleImg.current.value;
    const preview = newArticlePreview.current.value;
    const text = value;
    const textSmall = getSmallText(value);
    newArticleTitle.current.value = '';
    newArticleImg.current.value = '';
    newArticlePreview.current.value = '';
    newArticleText.current.value = '';
    props.addNewArticle(title, image, preview, text, textSmall);
    console.log(value);
  };

  return (
    <div className="addArticle">
      <label className="add-article">Добавление статьи</label>
      <label>Название статьи</label>
      <input ref={newArticleTitle} />
      <label>Ссылка на большое изображение</label>
      <input ref={newArticleImg} />
      <label>Ссылка на превью</label>
      <input ref={newArticlePreview} />
      <label>Текст статьи</label>
      <CKEditor
        ref={newArticleText}
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
      />
      <button className="addArticleButton" onClick={addNewArticle}>Добавить статью</button>
    </div>
  );
};

export default AddArticle;
