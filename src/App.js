import React from 'react';
import './App.css';
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
        <Header />
        <Slider />
        <Route path="/main" render = {  () => <MainPage articlesData={props.articlesData} newsData={props.newsData} /> } />
        <Route path="/articles" render = { () => <PageArticles pageArticlesData={props.pageArticlesData} /> } />
      </div>
    </BrowserRouter>
  );
}

export default App;
