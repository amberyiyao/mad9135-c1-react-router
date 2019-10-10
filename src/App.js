import React from 'react'
import Header from './Header'
import './App.css'

class App extends React.Component{

  state = {
    users: []
  }

  getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json)
    .then(users => this.setState({users}))
  }


  render(){
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
