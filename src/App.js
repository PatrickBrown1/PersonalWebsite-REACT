import React from 'react';
import './App.css';
import NavBar from'./NavBar.js';
import Background from'./Background.js';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Background/>
      
      <header className="App-header">
        <p className="Title">Patrick Brown's Personal Website!</p>
      </header>
      <body className="App-body">
        <p>Make header first because why not</p>
        <p2>Make the header normal for over 50% window size</p2>
        <p2>Then make it a square button three lines if it's under 50%</p2>
      </body>
    </div>
  );
}

export default App;
