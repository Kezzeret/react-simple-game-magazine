import React from 'react';
import './Article.css';

const Article = (props) => {
    return <div className='article'>
        <div className='article_preview' style={{backgroundImage: `url(${props.preview})`}}>
        </div>
        <div className='article_name'>
            {props.title}
        </div>
        <div>
            {props.link}
        </div>
    </div>
}

export default Article;