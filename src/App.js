import React from 'react';
import './App.css';
import './css/fonts.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import PageArticles from './components/ArticlesPage/PageArticles';
import Admin from './components/Admin';
import UsersPage from './components/UsersPage/UsersPage';
import Slider from './components/MainPage/Slider';

const App = (props) => (
  <div className="wrapper">
    <Header />
    <Slider />
    <Route path="/main" render={() => <MainPage articlesData={props.appState.articlesData} newsData={props.appState.newsData} />} />
    <Route path="/articles" render={() => <PageArticles pageArticlesData={props.appState.articlesData} pageArticlesInterviewData={props.appState.interviewData} />} />
    <Route path="/admin" render={() => <Admin />} />
    <Route path="/users" render={() => <UsersPage />} />
  </div>
);

export default App;
