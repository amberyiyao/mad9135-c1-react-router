import React from 'react';
import img from './list-alt-regular.svg';
import './TodoCard.css'

function todoCard(props){
    const status = props.todo.completed? "Done" : "Pending"

    return(
        <div className="todoCard">
            <img src={img} alt="todo icon"/>
            <div className="todoInfor">
                <p className="todoTitle">{props.todo.title}</p>
                <p className="status">{status}</p>
            </div>
        </div>
    )
}

export default todoCard 