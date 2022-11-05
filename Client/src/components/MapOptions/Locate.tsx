import React from 'react'
import '../MapOptions/Locate.scss'
import { MdOutlineMyLocation} from 'react-icons/md';

interface LocateProps {
    panningFunction: ({lat, lng}: any) => void
}

const Locate = ({panningFunction}: LocateProps) => {
  return (
    <div className='locate' onClick={() => {
        navigator.geolocation.getCurrentPosition((pos)=>{
            panningFunction({lat: pos.coords.latitude, lng: pos.coords.longitude});
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