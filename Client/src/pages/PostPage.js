import React from 'react'
import '../pages/PostPage.scss'
import NavBar from '../components/NavBar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";
import FullPost from '../components/Posts/FullPost'


let user = require('../assets/user.png');
let row = 5;
let cols = 60; 


const PostPage = () => {
  return (
    <div>
      <header className="Post-header">
        <NavBar></NavBar>
      </header>
      <div className='post-component-container'>
        <h1>Issue</h1>
        <div className='post-container'>
          <img className='big-profile-pic' src={user} alt='profile pic'></img>
          <div className='post-and-comments'>
            <FullPost/>
          </div>
          <Link to={'/'}><button>Home</button></Link>
        </div>
      </div>
    </div>
  )
}

function openCommentBox() {
  document.getElementById("form1").style.display = "block";
}

function closeCommentBox() {
  document.getElementById("form1").style.display = "none";
}

export default PostPage