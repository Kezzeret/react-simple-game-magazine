import React from 'react';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Articles from './components/Articles';
import News from './components/News';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Slider />
      <Articles />
      <News />
    </div>
  );
}

export default App;
