import React from 'react';
import Avatar from './smile-regular.svg'
import './UserCard.css'
import { Link } from 'react-router-dom'

function userCards(props){
    const postUrl = `/user/${props.user.id}/posts`
    const todoUrl = `/user/${props.user.id}/todos`

    return(
        <div className="UserCard">
            <div className="card-infor">
            <div className="card-avatar">
                <img src={Avatar} alt="user icon"/>
            </div>
            <div className="card-body">
                <p className="user-name">
                    {props.user.name}<br/>
                    <span className="user-email">{props.user.email}</span>
                </p>
            </div>
            </div>
            <div className="card-action">
                <Link to={postUrl} onClick={()=>{props.handleActions(props.user, 'posts')}}>Posts</Link>
                <Link to={todoUrl} onClick={()=>{props.handleActions(props.user, 'todos')}}>Todo</Link>
            </div>
        </div>
    )
}

export default userCards