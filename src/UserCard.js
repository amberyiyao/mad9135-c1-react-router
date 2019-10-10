import React from 'react';
import Avatar from './smile-regular.svg'
import './UserCard.css'

function profileCards(props){
    return(
        <div className="UserCard">
            <div className="card-infor">
            <div className="card-avatar">
                <img src={Avatar} alt=""/>
            </div>
            <div className="card-body">
                <p className="user-name">
                    {props.user.name}<br/>
                    <span className="user-email">{props.user.email}</span>
                </p>
            </div>
            </div>
            <div className="card-action">
                <button>Posts</button>
                <button>Todo</button>
            </div>
        </div>
    )
}

export default profileCards