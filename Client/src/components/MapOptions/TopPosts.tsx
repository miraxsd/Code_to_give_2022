import React from 'react'
import '../MapOptions/TopPosts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {  } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

let user = require('../../assets/user.png');

const TopPosts = () => {
  return (
    <div className='top-posts'>
      <h1>Top posts in this area</h1>
      <PostItem/>
    </div>
  )
}

const PostItem = () => {
  return (
    <div className='posts-list'>
        <h2 className='post-title'>No access to healthy restaurants in my area</h2>
        <span className='post-type'>Issue</span>
        <span className='post-author'>RandomUser</span>
        <img className='profile-picture' src={user} alt='profile pic'></img>
        <span className='post-date'>10 weeks ago</span>
        <div className='post-description'>
            <p>I think its really unfortunate that there are no good restaurant in my area.</p>
        </div>
        <button className='post-like'><FontAwesomeIcon icon={faHeart} /></button><span className='likes-number'>730</span>
        <button className='post-comment'><FontAwesomeIcon icon={faComment} /></button><span className='post-reply'>Reply</span>
    </div>
  )
}

//const buildPostItem = function (object: post) {

//}

export default TopPosts