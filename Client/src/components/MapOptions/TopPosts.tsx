import React, { MutableRefObject, useEffect, useState } from 'react'
import '../MapOptions/TopPosts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PostItem from '../MapOptions/PostItem'
import posts from './Posts'
import eventBus from '../../eventBus'

interface TopPostsProps {
  mapRef: MutableRefObject<any>
}

const TopPosts = ({mapRef}:TopPostsProps) => {

  const [details, setDetails] = useState([{
    id: 0,
    user:  "Bobby123",
    location: [17.966958, -66.123551],
    postType: "idea",
    etiquettes: ['Friendship', 'School-life'],
    description :
    "Last month, a hurricane hit my city and destroyed everything. My family was lucky, and our house was not really damaged, but most of my friends’ houses are gone. The power just came back, but we still don’t have clean water and food is hard to find. I don’t know how to help my community.",
    numberOfLikes: 110
  }])

  eventBus.on('newLocation', (e: any) => {
    getPosts(e);
  });

  const getPosts = async (location: any) => {
    console.log(mapRef.current)
    await fetch(`/api/posts`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
          location: [location.lat, location.lng],
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
                  postType: post.postType,
                  etiquettes: post.etiquettes,
                  description : post.text,
                  numberOfLikes: post.numberOfLikes
              }
          )
      )
      console.log('list ', list)
      setDetails(list);
    }).catch(()=>{
      setDetails(current => [...current, {
        id: 0,
        user:  "Bobby123",
        location: [17.966958, -66.123551],
        postType: "idea",
        etiquettes: ['Friendship', 'School-life'],
        description :
        "Last month, a hurricane hit my city and destroyed everything. My family was lucky, and our house was not really damaged, but most of my friends’ houses are gone. The power just came back, but we still don’t have clean water and food is hard to find. I don’t know how to help my community.",
        numberOfLikes: 110
      
      }]);
    })
  }

  useEffect(() => {
    //Insérer get top posts
      getPosts({lat: 17.966958, lng: -66.123551});
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