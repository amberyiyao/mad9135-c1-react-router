import React from 'react';
import Avatar from '../images/smile-regular.svg'
import './UserCard.css'
import { Link } from 'react-router-dom'

function userCards(props){
    const postUrl = `/user/${props.user.id}/posts`
    const todoUrl = `/user/${props.user.id}/todos`
    const userUrl = `/user/${props.user.id}`

    return(
          <div className="UserCard">
            <div className="card-infor">
            <div className="card-avatar">
                <img src={Avatar} alt="user icon"/>
            </div>
            <div className="card-body">
                <Link className="user-name" to={userUrl} onClick={()=>{
                    props.getCurrentUser(props.user)
                    props.changeHeader(props.user.name)
                    }}>
                    {props.user.name}<br/>
                    <span className="user-email">{props.user.email}</span>
                </Link>
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