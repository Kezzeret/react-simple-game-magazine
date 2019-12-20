import React from 'react';
import './PageArticles.css';
import ArticleItem from './ArticleItem'

const PageArticles = (props) => {

    let articlesElement = props.pageArticlesData.map(n =>
        <div key={n.id}><ArticleItem image={n.image} title={n.title} date={n.date} commentsCount={n.commentsCount} text={n.text} /></div>);
    return <div className='pageArticles'>
        {articlesElement}

    </div>
}

export default PageArticles;