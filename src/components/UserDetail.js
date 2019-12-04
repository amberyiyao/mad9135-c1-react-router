import React from 'react';
import Avatar from '../images/smile-regular.svg'
import { Link } from 'react-router-dom'
import './UserDetail.css'


function userDetail(props){
    const postUrl = `/user/${props.user.id}/posts`
    const todoUrl = `/user/${props.user.id}/todos`
    return(
        <div className="userDetail">
            <img src={Avatar}/>
            <p><b>Name:</b> {props.user.name}</p>
            <p><b>City:</b> {props.user.address.city}</p>
            <p><b>Phone:</b> {props.user.phone}</p>
            <p><b>Email:</b> {props.user.email}</p>
            <p><b>Website:</b> {props.user.website}</p>
            <div className="card-actions">
                <Link to={postUrl} onClick={()=>{props.handleActions(props.user, 'posts')}}>Posts</Link>
                <Link to={todoUrl} onClick={()=>{props.handleActions(props.user, 'todos')}}>Todo</Link>
            </div>
        </div>
    )
}

export default userDetail