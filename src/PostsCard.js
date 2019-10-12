import React from 'react';
import img from './comments-regular.svg';
import './PostCard.css'

function postCard(props){

    return(
        <div className="postCard">
            <img src={img} alt="post icon"/>
            <div className="postInfor">
                <p className="postTitle">{props.post.title}</p>
                <p className="postBody">{props.post.body}</p>
            </div>
        </div>
    )
}

export default postCard