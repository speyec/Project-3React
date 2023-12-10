import './App.css';
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
          <h1>Welcome to NovaGas</h1>
          <button className="button" onClick={handleClick}>Gas Station Information</button>
        </header>
      ) : (
        <GasStations />
      )}
    </div>
 );
}

export default App;