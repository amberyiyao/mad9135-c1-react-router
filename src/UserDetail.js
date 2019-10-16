import React from 'react';
import Avatar from './smile-regular.svg'

function userDetail(props){
    return(
        <div className="userDetail">
            <img src={Avatar}/>
            <p><b>Name:</b> {props.user.name}</p>
            <p><b>City:</b> {props.user.address.city}</p>
            <p><b>Phone:</b> {props.user.phone}</p>
            <p><b>Email:</b> {props.user.email}</p>
            <p><b>Website:</b> {props.user.website}</p>
        </div>
    )
}

export default userDetail