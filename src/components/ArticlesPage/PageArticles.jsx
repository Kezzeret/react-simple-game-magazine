import React from 'react';
import './PageArticles.css';
import ArticleItem from './ArticleItem'
import InterviewItem from './InterviewItem'

const PageArticles = (props) => {

    let articlesElement = props.pageArticlesData.map(n =>
        <div key={n.id} className={"article" + n.id}><ArticleItem  id={n.id} image={n.image} title={n.title} date={n.date} commentsCount={n.commentsCount} text={n.text} text_small={n.text_small}/></div>);
    let interviewElement = props.pageArticlesInterviewData.map(n =>
        <div key={n.id} className={"article" + n.id}><InterviewItem  id={n.id} image={n.image} title={n.title} text={n.text}/></div>);

    return <div className='pageArticles'>
        <div className="articles">
            <div className="magazin_articles_title"><h2>Статьи</h2></div>
            {articlesElement}
        </div>
        <div className="interview">
            <div className="magazin_interview_title"><h2>Интервью</h2></div>
            {interviewElement}
        </div>
    </div>
}

export default PageArticles;