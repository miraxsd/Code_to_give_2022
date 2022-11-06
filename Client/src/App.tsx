import React, { useCallback, useRef } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Background from './components/Background/Background';
import Map from './components/Background/Map';
import SearchBox from './components/MapOptions/SearchBox';
import TopPosts from './components/MapOptions/TopPosts';
import {useLoadScript } from '@react-google-maps/api'
import Locate from './components/MapOptions/Locate';
import { MdOutlinePostAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const libraries: ('places')[] = ['places'];

function App() {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    libraries,
  })

  const mapReference = useRef<google.maps.Map>();
  const onMapLoad = useCallback((map: google.maps.Map) => {
      mapReference.current = map;
  }, []);

  const panTo = useCallback(({lat, lng}: any) => {
      mapReference.current?.panTo({lat, lng});
      mapReference.current?.setZoom(14);

  }, []);

  let navigate = useNavigate();

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
            <Map mapLoad={onMapLoad}/>
            <SearchBox panningFunction={panTo} />
            <Locate panningFunction={panTo} />
            <TopPosts />
            <button className='create-new-post' onClick={() => navigate('/share', {replace: true})}> <MdOutlinePostAdd size={40} color='white'/></button>
          </section>
        </Background>
      </div>
    </div>
  );
}

export default App;
