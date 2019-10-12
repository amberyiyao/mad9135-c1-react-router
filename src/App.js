import React from 'react'
import Header from './Header'
import './App.css'
import UserCard from './UserCard'
import PostCard from './PostsCard'
import TodoCard from './TodoCard'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component{

  state = {
    users: [],
    posts:[],
    todos:[],
    header: "Users"
  }

  getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({users}))

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({posts}))

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => this.setState({todos}))
  }

  getUserAction=(id, action)=>{
    fetch( `https://jsonplaceholder.typicode.com/users/${id}/${action}`)
    .then(response => response.json())
    .then(infor => {
      const newInfor = infor.filter(item => item.userId === id)
      if(action === 'posts'){
        this.setState({posts: newInfor, header: "Posts"})
      } else {
        this.setState({todos: newInfor, header: "Todos"})
      } 
      console.log(newInfor)
    })
  }

  componentDidMount(){
    this.getUsers()
  }

  render(){
    const usersList = this.state.users.map(user => <UserCard key={user.id} user={user} handleActions={this.getUserAction}/>)
    const postsList = this.state.posts.map(post => <PostCard key={post.id} post={post} />)
    const todosList = this.state.todos.map(todo => <TodoCard key={todo.id} todo={todo} />)
   
    return (
      <Router>
      <div className="App">
        <Header header={this.state.header}/>
        <nav>
          <Link to="/users" onClick={()=> this.setState({header:"Users"})}>Users</Link>
          <Link to="/posts" onClick={()=> this.setState({header:"Posts"})}>Posts</Link>
          <Link to="/todos" onClick={()=> this.setState({header:"Todos"})}>ToDos</Link>
        </nav>
        <Switch>
          <Route path="/posts">
            {postsList}
          </Route>
          <Route path="/todos">
            {todosList}
          </Route>
          <Route path="/">
            {usersList}
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
