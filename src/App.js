import React from 'react'
import Header from './Header'
import './App.css'
import UserCard from './UserCard'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

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
      <Router>
      <div className="App">
        <Header/>
        <nav>
          <Link to="/">Users</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/todos">ToDos</Link>
        </nav>
          <Route path="/">
            {usersList}
          </Route>
      </div>
      </Router>
    );
  }
}

export default App;
