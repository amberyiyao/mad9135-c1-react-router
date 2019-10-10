import React from 'react'
import Header from './Header'
import './App.css'
import UserCard from './UserCard'

class App extends React.Component{

  state = {
    users: []
  }

  getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({users}))
  }

  componentDidMount(){
    this.getUsers()
  }

  render(){
    const usersList = this.state.users.map(user => <UserCard key={user.id} user={user}/>)

    return (
      <div className="App">
        <Header/>
        <section className="profile-list">
          {usersList}
        </section>
      </div>
    );
  }
}

export default App;
