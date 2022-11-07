import React, { useState } from 'react'
import '../NavBar/NavBar.scss'
import { useNavigate } from 'react-router-dom';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

let logo = require('../../assets/logo.png');
let user = require('../../assets/user.png');

const NavBar = () => {
    let navigate = useNavigate();
    const [accountClicked, setState] = useState(false);

  return (
    <div className='nav-bar'>
        <div className='logo-section' onClick={()=>navigate('/', {replace: true})}>
            <img src={logo} alt='' />
        </div>
        <div className='page-options'>
            <p onClick={() => navigate('/dashboard', {replace: true})}>My Dashboard</p>
            <a href='https://digitalmoment.org/'>About us</a>
        </div>
        <div className='account-section' onClick={()=>setState(!accountClicked)}>
            <img src={user} alt='' />
            {
                accountClicked ? <BsChevronCompactUp size={20} color='black'/> : <BsChevronCompactDown size={20} color='black'/>
            }
        </div>
        <div className='translate'>
            <a href=''>FR</a>
        </div>
    </div>
  )
}

export default NavBar