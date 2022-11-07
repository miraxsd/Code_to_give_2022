import React from 'react'
import '../MapOptions/PostItem.scss'
import { AiOutlineHeart } from 'react-icons/ai';


interface FullPostProps{
  details: any,
}
const PostItem = ({details}: FullPostProps) => {
    return (
      <div className='post-container'>
        <div className='main-post'>
            <p className='post-author'>{details.user}</p>
            <div className='post-description'>
                <p>{details.description}</p>
            </div>
            <div className='post-actions'>
                <div className='action'>
                    <button className='post-like' type='submit'><AiOutlineHeart size={30}/></button>
                    <p className='likes-number'>{details.numberOfLikes}</p>
                </div>
            </div>
          </div>
      </div>
    )
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

