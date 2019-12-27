import React, {useState} from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './addArticle.css'

const AddArticle = (props) => {
    let newArticleTitle = React.createRef();
    let newArticleImg = React.createRef();
    let newArticlePreview = React.createRef();
    let newArticleText = React.createRef();

    let getSmallText = (bigTextWithTags) => {
        let textWithoutTags = bigTextWithTags.replace(/<\/?[^>]+>/g,'');
        for (let i = 170; i < 210; i++)
        {
            if (textWithoutTags[i] === ' ')
                return (textWithoutTags.slice(0,i) + "...");
        }
        return (textWithoutTags.slice(0,170) + "...")
    }

    let addNewArticle = () => {
        getSmallText(value);
        let title = newArticleTitle.current.value;
        let image = newArticleImg.current.value;
        let preview = newArticlePreview.current.value;
        let text = value;
        let text_small = getSmallText(value);
        newArticleTitle.current.value = '';
        newArticleImg.current.value = '';
        newArticlePreview.current.value = '';
        newArticleText.current.value = '';
        props.addNewArticle(title, image, preview, text, text_small);
        console.log(value);
    }

    const [value, setValue] = useState("");

    return <div className='addArticle'>
        <label className="add-article">Добавление статьи</label>
        <label>Название статьи</label>
        <input ref={newArticleTitle}></input>
        <label>Ссылка на большое изображение</label>
        <input ref={newArticleImg}></input>
        <label>Ссылка на превью</label>
        <input ref={newArticlePreview}></input>
        <label>Текст статьи</label>
        <CKEditor
            ref={newArticleText}
            editor = {ClassicEditor}
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setValue(data);
            } }
        />
        <button className='addArticleButton' onClick={addNewArticle}>Добавить статью</button>
    </div>
}

export default AddArticle;