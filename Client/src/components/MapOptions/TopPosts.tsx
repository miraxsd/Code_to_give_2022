import React, { useEffect, useState } from 'react'
import '../MapOptions/TopPosts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostItem from '../MapOptions/PostItem'
import posts from './Posts'

const TopPosts = () => {

  const [details, setDetails] = useState([{
    id: 0,
    user:  "Bobby123",
    location: [17.966958, -66.123551],
    postType: "idea",
    etiquettes: ['Friendship', 'School-life'],
    title: "Hurricane hit my city",
    description :
    "Last month, a hurricane hit my city and destroyed everything. My family was lucky, and our house was not really damaged, but most of my friends’ houses are gone. The power just came back, but we still don’t have clean water and food is hard to find. I don’t know how to help my community.",
    date: "4 days ago",
    liked: false,
    numberOfLikes: 110,
    comments: [{
        user: "juan908",
        location: [17.934013, -76.456299],
        comment:
        "I was in this situation last year, so I know it’s really hard. You can help by sharing some of your clothes and utilities with your friends who lost everything. Even if it’s just a couple of shirts, it will help a lot.",
        liked: false,
        numberOfLikes: 40
    }]
  }])

  useEffect(() => {
    //Insérer get top posts
  }, [])

  return (
    <div className='top-posts'>
     <h1>Top posts in this area</h1>
      {
        details.map((detail, index) => {
          return(
            <PostItem key={index} details={detail}/>
          )
        })
      }
    </div>
    )
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