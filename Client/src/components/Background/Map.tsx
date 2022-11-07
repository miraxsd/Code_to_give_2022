import React, { MutableRefObject, useEffect, useState } from 'react'
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
    mapLoad: (map: google.maps.Map) => void | Promise<void>,
    mapRef?: MutableRefObject<any>
}

const Map = ({mapLoad, mapRef}: MapProps) => {

    const [position, setPosition] = useState([45.501690, -73.567253]);
    const [currentZoom, setZoom] = useState(12);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setPosition([pos.coords.latitude, pos.coords.longitude]);
        })
        //console.log(position, process.env.REACT_APP_GOOGLE_MAPS_API_KEY!)
    },[])

    useEffect(()=>{
        //console.log(position);
    }, [position])

    const [posts, setPosts] = useState<any[]>([
        {
            id: Date.now()+ Math.random()*100,
            user: '',
            location: [45.501690, -73.567253],
            numberOfLikes: 0 
        }
    ]);

    const [selectedPost, setSelectedPost] = useState<any>(null);

    const updatePost = async () =>{
        //Insérer fonction qui va aller get les posts de cette région de la map
        // ex: getPosts(position) 

        console.log(mapRef?.current?.getZoom());

        await fetch(`/api/posts`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                location: [-73.567253, 45.501690],
                etiquette: ['Climate']
            })

          }).then((response: Response) => response.json()).then((data: any) => {
            let list: any[] =  [];
            data.map((post: any) => 
                list.push(
                    {
                        id: post._id.$oid,
                        user: post.user,
                        location: post.location,
                        numberOfLikes: post.numberOfLikes
                    }
                )
            )
            console.log('list ', list)
            setPosts(list);
          }).catch(()=>{
            setPosts(current => [...current, {
                id: Date.now()+ Math.random()*100,
                user: '',
                location: [45.501690, -73.567253],
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


    useEffect(()=>{
        updatePost();
    }, [])

  return (
    <div className='map'>
        <GoogleMap 
            mapContainerStyle={style} 
            zoom={currentZoom} 
            center={{lat: position[0], lng: position[1]}} 
            options={ops} 
            onLoad={mapLoad} 
            //onCenterChanged={()=>updatePost()}
        >
            {
                posts.map(post => (
                    <Marker 
                        key={post?.id?.toString()} 
                        position={{lat: post?.location?.[0], lng: post?.location?.[1]}} 
                        icon={{url: marker, scaledSize: new window.google.maps.Size(50,50)}} 
                        onClick={async () =>getInfos(post)}
                    />
                ))
            }

            {  
                selectedPost ? 
                    <InfoWindow 
                        position={{lat: selectedPost.location?.[0], lng: selectedPost.location?.[1]}}
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