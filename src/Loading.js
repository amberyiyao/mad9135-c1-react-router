import React from 'react'
import loading from './loading.svg'

function Loading(){
    return (
        <div className="loading">
            <img src={loading}/>
        </div>
    )
}

export default Loading