import React from 'react';
import logo from './assets/logo.png';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Background from './components/Background/Background';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <body>
        <Background>
          <div>
            <h1>This is my child</h1>
          </div>
        </Background>
      </body>
    </div>
  );
}

export default App;
