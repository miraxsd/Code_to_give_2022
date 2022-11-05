import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../Background/Map.scss'
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import { filter } from './MapStyle';


const style = {with: "100vw", height: '90vh'};
const ops = {
    styles: filter,
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
    maxZoom: 16
}
const infoWindowOps ={
    minWidth: 1200
}

let marker = require('../../assets/map-marker.png');

const Map = () => {

    const [position, setPosition] = useState({lng: -73.567253, lat: 45.501690});

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setPosition({lng: pos.coords.longitude, lat: pos.coords.latitude});
        })
        console.log(position, process.env.REACT_APP_GOOGLE_MAPS_API_KEY!)
    },[])

    useEffect(()=>{
        console.log(position);
    }, [position])

    const [posts, setPosts] = useState([
        {
            position: {lng: -73.567253, lat: 45.501690},
            id: Date.now()+ Math.random()*100
        }
    ]);

    const [selectedPost, setSelectedPost] = useState<any>(null);

    const updatePost = () =>{
        //Insérer fonction qui va aller get les posts de cette région de la map
        // ex: getPosts(position) 
        setPosts(current => [...current, {position: {lng: -73.567253, lat: 45.501690}, id: Date.now() + Math.random()*100}]);
    }

    const mapReference = useRef();
    const onMapLoad = useCallback((map: any) => {
        mapReference.current = map;
    }, []);

  return (
    <div className='map'>
        <GoogleMap 
            mapContainerStyle={style} 
            zoom={12} 
            center={position} 
            options={ops} 
            onLoad={onMapLoad} 
            onCenterChanged={()=>updatePost()}
        >
            {
                posts.map(post => (
                    <Marker 
                        key={post.id.toString()} 
                        position={{lat: post.position.lat, lng: post.position.lng}} 
                        icon={{url: marker, scaledSize: new window.google.maps.Size(50,50)}} 
                        onClick={()=>setSelectedPost(post)}
                    />
                ))
            }

            {  
                selectedPost ? 
                    <InfoWindow 
                        position={{lat: selectedPost.position.lat, lng: selectedPost.position.lng}}
                        onCloseClick={()=>{setSelectedPost(null)}}
                        options={infoWindowOps}
                        onLoad={(infoWindow)=>{infoWindow.focus()}}
                    >
                        <div className='post-temp'>
                                this is a post
                        </div>
                    </InfoWindow> 
                : null
            }
        </GoogleMap>
    </div>
  )
}

export default Map