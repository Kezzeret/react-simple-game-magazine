import React from 'react';
import './Articles.css';
import Article from './Article';

const Articles = (props) => {

  let articlesElement = props.articles.map( n => 
    <Article preview={n.preview} title={n.title} link={n.link} />);
    return <div className='articles'>
    <div className='articles_title'>
      Статьи
    </div>
    {articlesElement}
  </div>
}

export default Articles;