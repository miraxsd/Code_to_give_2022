import React from 'react'
import '../Posts/FullPost.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import posts from '../../components/MapOptions/Posts'

let user = require('../../assets/user.png');
let row = 5;
let cols = 60; 

const FullPost = () => {
    return (
        <div>
            <div className='post-container'>
                <a className='post-title' href="">{posts[0].title}</a>
                <p className='post-type'>{posts[0].postType}</p>
                <p className='post-author'>{posts[0].user}</p>
                <img className='profile-picture' src={user} alt='profile pic'></img>
                <p className='post-date'>{posts[0].date}</p>
                <p className='post-description'>{posts[0].description}</p>
                <form className='likeForm' method='post' action="">
                <button  className='post-like' type='submit'><FontAwesomeIcon icon={faHeart} /></button>
                </form>
                <p className='likes-number'>{posts[0].numberOfLikes}</p>
                <button className='post-comment' onClick={openCommentBox}><FontAwesomeIcon icon={faComment} /></button>
                <p className='post-reply'>Reply</p>
            </div>
            <form id="form1" className='commentForm' display="none" action="" method='post'>
                <textarea defaultValue="Write a comment" rows={row}  cols={cols}></textarea>
                <br></br>
                <button type='button' onClick={closeCommentBox} className='cancelButton'>Cancel</button>
                <input className='SubmitButton' type="submit" value="Post"></input>
            </form>
        </div>
    )
}


function openCommentBox() {
  document.getElementById("form1").style.display = "block";
}

function closeCommentBox() {
  document.getElementById("form1").style.display = "none";
}

export default FullPost