import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Background from './components/Background/Background';
import Map from './components/Background/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <div className='app-body'>
        <Background>
          <section>
            <Map />
            {/* <div style={{width: '200px', height: '200px', position: 'absolute'}}>nddd</div> */}
          </section>
        </Background>
      </div>
    </div>
  );
}

export default App;
