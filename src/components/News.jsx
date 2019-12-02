import React from 'react';
import './News.css';

import PieceOfNews from './PieceOfNews.jsx'

const News = (props) => {


    let newsElement = props.news.map(n =>
        <PieceOfNews preview={n.preview} title={n.title} date={n.date} like_count={n.like_count} text={n.text} links={n.links} more={n.more} />
    );

    return <div className='news'>
        {newsElement}
    </div>
}

export default News;