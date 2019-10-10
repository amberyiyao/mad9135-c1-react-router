import React from 'react'
import Header from './Header'
import './App.css'
import UserCard from './UserCard'

class App extends React.Component{

  state = {
    users: [],
    posts:[],
    todos:[]
  }

  getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({users}))
  }

  getUserAction=(id, action)=>{
    fetch( `https://jsonplaceholder.typicode.com/users/${id}/${action}`)
    .then(response => response.json())
    .then(infor => {
      console.log(infor)
      const newInfor = infor.filter(item => item.userId == id)
      if(action == 'posts'){
        this.setState({posts: newInfor})
      } else {
        this.setState({todos: newInfor})
      } 
      console.log(newInfor)
    })
  }

  componentDidMount(){
    this.getUsers()
  }

  render(){
    const usersList = this.state.users.map(user => <UserCard key={user.id} user={user} handleActions={this.getUserAction}/>)

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
