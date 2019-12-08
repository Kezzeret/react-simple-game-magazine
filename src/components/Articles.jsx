import React from 'react';
import './Articles.css';
import Article from './Article';

const Articles = (props) => {

  let articlesElement = props.articles.map(n =>
    <div key={n.id}><Article preview={n.preview} title={n.title} link={n.link} /></div>);
  return <div className='articles'>
    <div className='articles_title'>
      <h2>Статьи</h2>
    </div>
    {articlesElement}
  </div>
}

export default Articles;