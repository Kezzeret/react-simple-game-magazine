import React from 'react';
import './App.css';
import './css/fonts.css'
import Header from './components/Header';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import PageArticles from './components/PageArticles';
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {

  

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header addPost={props.addPost}/>
        <Slider />
        <Route path="/main" render = {  () => <MainPage articlesData={props.appState.articlesData} newsData={props.appState.newsData} /> } />
        <Route path="/articles" render = { () => <PageArticles pageArticlesData={props.appState.pageArticlesData} /> } />
      </div>
    </BrowserRouter>
  );
}

export default App;
