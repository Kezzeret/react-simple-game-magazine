import React from 'react';
import './News.css';
import PieceOfNews from './PieceOfNews';

const News = (props) => {

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
