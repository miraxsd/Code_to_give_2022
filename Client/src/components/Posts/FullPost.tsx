import React, { useEffect, useState } from 'react'
import '../Posts/FullPost.scss'
import { BiMessage } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';

interface FullPostProps{
    details: any,
}

const FullPost = ({details}: FullPostProps) => {

    const [showReply, setShowReply] = useState(false);

    const handleSubmit = async () => {

        const text = document.getElementById('new-comment') as HTMLTextAreaElement;

        await fetch(`/api/create_comment`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                text: text.value,
                name: 'Admin',
                numberOfLikes: 0,
                post_id:  details.id,
            })

          }).then(() =>{
            //window.location.reload();
          })

        console.log('submiting')
    }

    const handleClick = async () => {

        console.log(details.id);

        await fetch(`/api/like_post`, {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify(details.id)
    
        }).then((response: Response) => response.json()).then((data: any) => {
        }).catch(()=>{
        })
      }

    useEffect(() => {

    }, [showReply])
    
    return (
        <div className='Fullpost-container'>
            <div className='main-post'>
                <p className='post-author'>{details.user}</p>
                <div className='post-description'>
                    <p>{details.description}</p>
                </div>
                <div className='post-actions'>
                   <div className='action'>
                        <button className='post-like' onClick={()=>handleClick()}><AiOutlineHeart size={30}/></button>
                        <p className='likes-number'>{details.numberOfLikes}</p>
                    </div>
                    <div className='action' onClick={() => setShowReply(true)}>
                        <button className='post-comment' ><BiMessage  size={30}/></button>
                        <p className='post-reply'>Reply</p>
                    </div>
                </div>
            </div>
            {
                showReply ?
                    <form id="form1" style={{zIndex: '99999999'}} className='commentForm' action="">
                    <textarea id='new-comment' defaultValue="Write a comment" maxLength={512}></textarea>
                    <br></br>
                    <div className='submit-options'>
                        <button type='button' onClick={() => setShowReply(false)} className='cancelButton'>Cancel</button>
                        <button className='SubmitButton' onClick={handleSubmit}>Post</button>
                    </div>
                    </form>
                : null
            }
        </div>
    )
}

export default FullPost