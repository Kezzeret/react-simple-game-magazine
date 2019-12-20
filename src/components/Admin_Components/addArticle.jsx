import React from 'react'
import { addNewArticleActionCreator } from './../../redux/articlesData-reducer'

const AddArticle = (props) => {

    let newArticleTitle = React.createRef();
    let newArticleImg = React.createRef();
    let newArticlePreview = React.createRef();
    let newArticleText = React.createRef();

    let addNewArticle = () => {
        let title = newArticleTitle.current.value;
        let image = newArticleImg.current.value;
        let preview = newArticlePreview.current.value;
        let text = newArticleText.current.value;
        newArticleTitle.current.value = '';
        newArticleImg.current.value = '';
        newArticlePreview.current.value = '';
        newArticleText.current.value = '';
        props.dispatch(addNewArticleActionCreator(title, image, preview, text));
    }
    
    return <div className='addArticle'>
        <label>Добавление статьи</label>
        <label>Название статьи</label>
        <input ref={newArticleTitle}></input>
        <label>Ссылка на большое изображение</label>
        <input ref={newArticleImg}></input>
        <label>Ссылка на превью</label>
        <input ref={newArticlePreview}></input>
        <label>Текст статьи</label>
        <input ref={newArticleText}></input>
        <button className='button' onClick={addNewArticle}>Добавить новость</button>
    </div>
}

export default AddArticle;