import React from 'react';
import './Header.css'

function Header(props){
    return (
        <header className="App-header">
          <p>{props.header}</p>
        </header>
    )
}

export default Header