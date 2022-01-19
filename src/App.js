import './App.css';
import React from 'react';
import MemeGenerator from './MemeGenerator.js';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* Header display only elements*/}
          <h1>Meme generator</h1>
          <h2> Have fun ! </h2>
        </header>
      </div>
      <div className="MemeGenerator">
        <MemeGenerator />
      </div>
    </>
  );
}

export default App;
