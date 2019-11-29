import React from 'react';
import './Articles.css';
import Article from './Article';

const Articles = () => {
    return <div className='articles'>
    <div className='item'>
      Статьи
    </div>
    <div className='article_1'>
    <Article />
    </div>
    <div className='article_2'>
    <Article />
    </div>
  </div>
}

export default Articles;