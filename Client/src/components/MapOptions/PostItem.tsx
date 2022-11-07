import React from 'react'
import '../MapOptions/PostItem.scss'
import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import eventBus from '../../eventBus';


interface FullPostProps{
  details: any,
}
const PostItem = ({details}: FullPostProps) => {
  let navigate = useNavigate()

  const handleClick = async () => {

    await fetch(`/api/like_post`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
          id: details.id, 
      })

    }).then((response: Response) => response.json()).then((data: any) => {
    }).catch(()=>{
    })
  }

    return (
      <div className='post-container' onClick={()=>{ eventBus.dispatch('params', details.id);navigate(`/postpage/${details.id}`, {replace: true})}}>
        <div className='main-post'>
            <p className='post-author'>{details.user}</p>
            <div className='post-description'>
                <p>{details.description}</p>
            </div>
            <div className='post-actions'>
                <button className='action' onClick={async ()=>handleClick()}>  <AiOutlineHeart size={20}/> {details.numberOfLikes}</button>
            </div>
          </div>
      </div>
    )
}



export default PostItem
