import React from 'react'
import '../MapOptions/TopPosts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";
import posts from './Posts'

let user = require('../../assets/user.png');
let row = 5;
let cols = 60; 

const PostItem = () => {
    return (
      <div>
        <div className='posts-list'>
          <Link className='post-title' to={"/postpage"}>{posts[0].title}</Link>
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


export default PostItem
/*
const buildPostItem = function (randomPost: any) {
    const post = document.createElement("div");
    post.setAttribute("class", "posts-list");

    const postTitle = document.createElement("h2");
    postTitle.setAttribute("class", "post-title");
    postTitle.textContent = randomPost.title;
    post.appendChild(postTitle);

    const postType = document.createElement("p");
    postType.setAttribute("class", "post-type");
    postType.textContent = randomPost.postType;
    post.appendChild(postType);

    const postAuthor = document.createElement("p");
    postAuthor.setAttribute("class", "post-author");
    postAuthor.textContent = randomPost.user;
    post.appendChild(postAuthor);

    const profilePic = document.createElement("img");
    profilePic.setAttribute("class", "profile-picture");
    profilePic.setAttribute("src", "../../assets/user.png")
    post.appendChild(profilePic);

    const postDate = document.createElement("p");
    postDate.setAttribute("class", "post-date");
    postDate.textContent = randomPost.date;
    post.appendChild(postDate);

    const postDescription = document.createElement("p");
    postDescription.setAttribute("class", "post-description");
    postDescription.textContent = randomPost.description;
    post.appendChild(postDescription);

    const postReply = document.createElement("p");
    postDescription.setAttribute("class", "post-reply");
    postDescription.textContent = randomPost.description;
    post.appendChild(postReply);

    const postNumberOfLikes = document.createElement("p");
    postNumberOfLikes.setAttribute("class", "likes-number");
    postNumberOfLikes.textContent = randomPost.description;
    post.appendChild(postNumberOfLikes);

    const likeButton = document.createElement("button");
    likeButton.classList.add("fa-heart", "fa-2x", randomPost.liked ? "fa" : "fa-regular");

    likeButton.addEventListener("click", () => {
      likeButton.classList.replace(randomPost.liked ? "fa" : "fa-regular", randomPost.liked  ? "fa-regular" : "fa");
      randomPost.liked  = !randomPost.liked ;
      if (randomPost.liked) {
        randomPost.numberOfLikes += 1;
      } else {
        randomPost.numberOfLikes -= 1;
      }
    });

    post.appendChild(likeButton);

    const commentButton = document.createElement("button");
    likeButton.classList.add("fa-heart", "fa-2x", randomPost.liked  ? "fa" : "fa-regular");

    commentButton.addEventListener("click", () => {

    });

    return post;
}

const generateTopPosts = function (post: string[]) {

}*/

