import React from 'react';
import './App.css';
import './css/fonts.css'
import Header from './components/Header';
import SimpleSlider from './components/Slider'
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import PageArticles from './components/PageArticles';
import Admin from './components/Admin'
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
    debugger;
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <SimpleSlider />
        <Route path="/main" render = {  () => <MainPage articlesData={props.appState.articlesData} newsData={props.appState.newsData} /> } />
        <Route path="/articles" render = { () => <PageArticles pageArticlesData={props.appState.articlesData} /> } />
        <Route path="/admin" render = { () => <Admin dispatch={props.dispatch} /> } />
      </div>
    </BrowserRouter>
  );
}

export default App;
