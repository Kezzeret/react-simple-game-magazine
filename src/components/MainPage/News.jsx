import React from 'react';
import './News.css';
import PieceOfNews from './PieceOfNews';

const News = (props) => {
    let j = 0;
    let arr = new Array(props.news.length);
    for (let i = props.news.length - 1; i >= 0; i--) {
        arr[j] = props.news[i];
        j++;
    }

    let newsElement = props.news.map(n =>
        <div key={n.id}><PieceOfNews preview={n.preview} title={n.title} date={n.date} like_count={n.like_count} text={n.text} links={n.links} more={n.more} /></div>
    );

    return <div className='news'>
        <div className='news_title'>
      <h2>Новости</h2>
    </div>
        {newsElement}
    </div>
}

export default News;