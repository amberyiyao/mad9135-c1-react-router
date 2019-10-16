import React from 'react'
import Header from './Header'
import './App.css'
import UserCard from './UserCard'
import PostCard from './PostsCard'
import TodoCard from './TodoCard'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import loading from './loading.svg'

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

  getUserAction=(user, action)=>{
    fetch( `https://jsonplaceholder.typicode.com/users/${user.id}/${action}`)
    .then(response => response.json())
    .then(infor => {
      const newInfor = infor.filter(item => item.userId === user.id)
      if(action === 'posts'){
        this.setState({posts: newInfor, header: `${user.name} Posts`})
      } else {
        this.setState({todos: newInfor, header: `${user.name} Todos`})
      } 
      console.log(newInfor)
    })
  }

  updateHeader(text){
    this.setState({header:text})
  }

  componentDidMount(){
    this.getUsers()
    console.log('ss')
  }

  componentWillUpdate(){
    let loading = document.getElementById('loading');
    loading.classList.remove('hide')
    setTimeout(()=>{
      loading.classList.add('hide')
    },800)
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
          <Link to="/users" onClick={()=> {
            this.updateHeader("Users")
            this.getUsers()
            }}>Users</Link>
          <Link to="/posts" onClick={()=> {
            this.updateHeader("Posts")
            this.getUsers()
          }}>Posts</Link>
          <Link to="/todos" onClick={()=> {
            this.updateHeader("Todos")
            this.getUsers()
          }}>ToDos</Link>
        </nav>
        <div id="loading" className="hide">
          <img src={loading} className="loading" />
        </div>
        <Switch>
          <Route path="/user/:id/posts">
            {postsList}
          </Route>
          <Route path="/user/:id/todos">
            {todosList}
          </Route>
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
