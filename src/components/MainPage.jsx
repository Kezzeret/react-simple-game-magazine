import React from 'react';
import Articles from './MainPage/Articles';
import News from './MainPage/News';
import './MainPage.css'

const MainPage = (props) => {
    debugger;
    return <div className='mainPage'>
        <Articles articles={props.articlesData} />
        <News news={props.newsData} />
        <script>
            
        </script>
    </div>
}

export default MainPage;