import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Background from './components/Background/Background';
import Map from './components/Background/Map';
import SearchBox from './components/MapOptions/SearchBox';
import TopPosts from './components/MapOptions/TopPosts';
import {useLoadScript } from '@react-google-maps/api'


const libraries: ('places')[] = ['places'];

function App() {

  //const [loading] = useGoogleMapsApi({ library: "places" });
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    libraries,
  })

  if(!isLoaded) return (<div>Loading</div>);
  if(loadError) return (<div>Error loading the map</div>);

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
            <SearchBox />
            <TopPosts />
          </section>
        </Background>
      </div>
    </div>
  );
}

export default App;
