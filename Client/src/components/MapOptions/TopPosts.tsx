import React from 'react'
import '../MapOptions/TopPosts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostItem from '../MapOptions/PostItem'
import posts from './Posts'

const TopPosts = () => {
  return (
    <div className='top-posts'>
     <h1>Top posts in this area</h1>
       <PostItem/>
    </div>   )
}

// const TopPosts = () => {
//   const rows = [];
//   for (let i = 0; i < posts.length; i++) {
//     rows.push(<PostItem key={i} />);
//   }
//   return (
//     <div className='top-posts'>
//       <h1>Top posts in this area</h1>
//       {rows}
//     </div>
//   )
// }

export default TopPosts