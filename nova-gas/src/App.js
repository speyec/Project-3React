import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import React, { useState } from 'react';

import GasStations from './info';

function App() {
 const [view, setView] = useState('App');

 const handleClick = () => {
    setView(null);
 }

 return (
    <div className="App">
      {view === 'App' ? (
        <header className="App-header">
          <h1>Welcome to Nova Gas</h1>
          <button onClick={handleClick}>Gas Station Information</button>
        </header>
      ) : (
        <GasStations />
      )}
    </div>
 );
}

export default App;