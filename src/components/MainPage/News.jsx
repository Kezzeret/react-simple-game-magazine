import React from 'react';
import './News.css';
import PieceOfNews from './PieceOfNews';

const News = (props) => {
  let j = 0;
  const arr = new Array(props.news.length);
  for (let i = props.news.length - 1; i >= 0; i -= 1) {
    arr[j] = props.news[i];
    j += 1;
  }

  const newsElement = props.news.map((n) => (
    <div key={n.id}>
      <PieceOfNews
        preview={n.preview}
        title={n.title}
        date={n.date}
        likeCount={n.likeCount}
        text={n.text}
        links={n.links}
        more={n.more}
      />
    </div>
  ));

  return (
    <div className="news">
      <div className="news_title">
        <h2>Новости</h2>
      </div>
      {newsElement}
    </div>
  );
};

export default News;
