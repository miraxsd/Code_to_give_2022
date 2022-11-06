import React from 'react'
import '../pages/PostPage.scss'
import NavBar from '../components/NavBar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import FullPost from '../components/Posts/FullPost'


let user = require('../assets/user.png');

const PostPage = () => {
  return (
    <div>
      <header className="Post-header">
        <NavBar></NavBar>
      </header>
      <div className='post-component-container'>
        <div className='post-container'>
          <h1 className='post-user-header'>Bobby123</h1>
          <img className='big-profile-pic' src={user} alt='profile pic'></img>
          <p className='user-location'>Montréal, Québec</p>
          <FullPost/>
          <div className='post-comments'>
            
          </div>
          <Link to={'/'}><FontAwesomeIcon icon={faHome} className='home-button'/></Link>
        </div>
      </div>
    </div>
  )
}

export default PostPage