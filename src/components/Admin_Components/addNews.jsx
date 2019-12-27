import React, {useState} from 'react'
import './addNews.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddNews = (props) => {

    let newPostTitle = React.createRef();
    let newPostImg = React.createRef();

    let addNewPost = () => {
        let title = newPostTitle.current.value;
        let img = newPostImg.current.value;
        let text = value;
        newPostTitle.current.value = ""
        newPostImg.current.value = ""
        props.addNewPost(title, img, text);
        //props.dispatch(addNewPostActionCreator(title, img, text));
    }

    const [value, setValue] = useState("");

    
    return <div className='addPost'>
        <label className="add-news">Добавление новости</label>
        <label>Название новости</label>
        <input ref={newPostTitle}></input>
        <label>Ссылка на изображение</label>
        <input ref={newPostImg}></input>
        <label>Текст новости</label>
        <div className="inputText">
        <CKEditor
            editor = {ClassicEditor}
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setValue(data);
            } }
        />
        </div>
        <button className='addNewsButton' onClick={addNewPost}>Добавить новость</button>
    </div>
}

export default AddNews;