import React from 'react'
import '../MapOptions/Locate.scss'
import { MdOutlineMyLocation} from 'react-icons/md';
import eventBus from '../../eventBus';

interface LocateProps {
    panningFunction: ({lat, lng}: any) => void
}

const Locate = ({panningFunction}: LocateProps) => {
  return (
    <div className='locate' onClick={() => {
        navigator.geolocation.getCurrentPosition((pos)=>{
            const location = {lat: pos.coords.latitude, lng: pos.coords.longitude}
            eventBus.dispatch('newLocation', location);
            panningFunction(location);
        },
        () => null
        )
    }}>
        <button className='locate-button'>
            <i><MdOutlineMyLocation color='black' size={60}/></i>
        </button>
    </div>
  )
}

export default Locate