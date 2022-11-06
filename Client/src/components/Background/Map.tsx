import React, { useEffect, useState } from 'react'
import '../Background/Map.scss'
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import { filter } from './MapStyle';
import axios from 'axios';


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

interface MapProps {
    mapLoad: (map: google.maps.Map) => void | Promise<void>
}

const Map = ({mapLoad}: MapProps) => {

    const [position, setPosition] = useState({lng: -73.567253, lat: 45.501690});

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setPosition({lng: pos.coords.longitude, lat: pos.coords.latitude});
        })
        //console.log(position, process.env.REACT_APP_GOOGLE_MAPS_API_KEY!)
    },[])

    useEffect(()=>{
        //console.log(position);
    }, [position])

    const [posts, setPosts] = useState([
        {
            id: Date.now()+ Math.random()*100,
            user: '',
            location: {lng: -73.567253, lat: 45.501690},
            numberOfLikes: 0 
        }
    ]);

    const [selectedPost, setSelectedPost] = useState<any>(null);

    const updatePost = async () =>{
        //Insérer fonction qui va aller get les posts de cette région de la map
        // ex: getPosts(position) 
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`).then((posts: any) => {
            setPosts(current => [...current, posts]);
        }).catch(()=>{
            setPosts(current => [...current, {
                id: Date.now()+ Math.random()*100,
                user: '',
                location: {lng: -73.567253, lat: 45.501690},
                numberOfLikes: 0 
            
            }]);
        })
    }

    const getInfos = async (post: any) => {
        let id = post.id; 

        await axios.get(`${process.env.REACT_APP_SERVER_URL}/post/${id}`).then((posts: any) => {
            setSelectedPost(post)
        }).catch(()=>{
            console.log(post)

            setSelectedPost(post)
        })
    }

  return (
    <div className='map'>
        <GoogleMap 
            mapContainerStyle={style} 
            zoom={12} 
            center={position} 
            options={ops} 
            onLoad={mapLoad} 
            onCenterChanged={()=>updatePost()}
        >
            {
                posts.map(post => (
                    <Marker 
                        key={post.id.toString()} 
                        position={{lat: post.location.lat, lng: post.location.lng}} 
                        icon={{url: marker, scaledSize: new window.google.maps.Size(50,50)}} 
                        onClick={async () =>getInfos(post)}
                    />
                ))
            }

            {  
                selectedPost ? 
                    <InfoWindow 
                        position={{lat: selectedPost.location.lat, lng: selectedPost.location.lng}}
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