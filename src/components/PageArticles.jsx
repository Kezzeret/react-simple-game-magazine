import React from 'react';
import './PageArticles.css';
import ArticleItem from './ArticleItem'

const PageArticles = (props) => {

    let articlesElement = props.pageArticlesData.map(n =>
        <ArticleItem preview={n.preview} title={n.title} date={n.date} commentsCount={n.commentsCount} text={n.text} />);
    return <div className='pageArticles'>
        {articlesElement}

    </div>
}

export default PageArticles;