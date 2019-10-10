import React from 'react';
import Avatar from './smile-regular.svg'
// import './UserCard.css'

function userDetail(props){
    return(
        <div>
            <img src={Avatar}/>
            <p>name</p>
            <p>phone</p>
            <p>Email</p>
            <p>City</p>
            <p>Website</p>
            <p>Company</p>
        </div>
    )
}

export default userDetail