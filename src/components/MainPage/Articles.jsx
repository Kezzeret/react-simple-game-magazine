import React from 'react';
import './Articles.css';
import Article from './Article';

const Articles = (props) => {

 // let articlesElement = props.articles.map(n =>
 //   <div key={n.id}><Article preview={n.preview} title={n.title} link={n.link} /></div>);
  let articlesElement1 = <div><Article preview={props.articles[0].preview} title={props.articles[0].title} link={props.articles[0].link} /></div>
  let articlesElement2 = <div><Article preview={props.articles[1].preview} title={props.articles[1].title} link={props.articles[1].link} /></div>
  return <div className='articles'>
    <div className='articles_title'>
      <h2>Последние статьи</h2>
    </div>
    {articlesElement1}
    {articlesElement2}
  </div>
}

export default Articles;