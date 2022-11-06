import React from 'react'
import '../MapOptions/TopPosts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {  } from '@fortawesome/free-solid-svg-icons'
import PostItem from '../MapOptions/PostItem'

const TopPosts = () => {
  return (
    <div className='top-posts'>
      <h1>Top posts in this area</h1>
      <PostItem/>
    </div>
  )
}

export default TopPosts