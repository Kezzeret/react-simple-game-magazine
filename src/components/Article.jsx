import React from 'react';
import './Article.css';

const Article = (props) => {
    return <div className='article'>
    <div className='article_preview'>
        <img src={props.preview}></img>
    </div>
    <div>
        {props.title}
    </div>
    <div>
        {props.link}
    </div>
  </div>
}

export default Article;