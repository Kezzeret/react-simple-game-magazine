import React from 'react';
import Articles from './Articles';
import News from './News';
import './MainPage.css'

const MainPage = (props) => {
    return <div className='mainPage'>
        <Articles articles={props.articlesData} />
        <News news={props.newsData} />
    </div>
}

export default MainPage;