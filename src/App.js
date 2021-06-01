import React from 'react';
import './App.css';
import News from './comps/news';
import TextGenerator from './comps/textGenerator';

function App() {
  return (
    <div className="container">
      <h1>Container App</h1>
      <div className="inner-container">
        <News />
      </div>

      <div className="inner-container">
        <TextGenerator />
      </div>
    </div>
  );
}

export default App;
