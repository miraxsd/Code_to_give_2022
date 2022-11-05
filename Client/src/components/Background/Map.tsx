import React, { useEffect, useState } from 'react'
import '../Background/Map.scss'
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api'


const libraries: ('places')[] = ['places'];
const style = {with: "100vw", height: '90vh'};

const Map = () => {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
        libraries,
    })

    const [position, setPosition] = useState({lng: -73.567253, lat: 45.501690});

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setPosition({lng: pos.coords.longitude, lat: pos.coords.latitude});
        })
        console.log(position, process.env.REACT_APP_GOOGLE_MAPS_API_KEY!)
    },[])

    if(!isLoaded) return (<div>Loading</div>);
    if(loadError) return (<div>Error loading the map</div>);

    

  return (
    <div className='map'>
        <GoogleMap mapContainerStyle={style} zoom={8} center={position}></GoogleMap>
    </div>
  )
}

export default Map