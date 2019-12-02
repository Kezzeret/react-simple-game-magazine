import React from 'react';
import './ArticleItem.css';

const ArticleItem = (props) => {
    return <div className='articleItem'>
        <div className='articlePreview'>
            <img src={props.preview}></img>
        </div>
        <div className='articleTitle'>
            {props.title}
        </div>
        <div className='articleDate'>
            {props.date}
        </div>
        <div className='articleComment'>
            {props.commentsCount}
        </div>
        <div className='articleText'>
            {props.text}
        </div>
    </div>
}




export default ArticleItem;
