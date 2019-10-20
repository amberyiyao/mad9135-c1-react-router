import React from 'react'
import Header from './Header'
import './App.css'
import UserCard from './UserCard'
import PostCard from './PostsCard'
import TodoCard from './TodoCard'
import Loading from './Loading'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import UserDetail from './UserDetail'

class App extends React.Component{

  state = {
    users:[],
    posts:[],
    todos:[],
    currentUser:{},
    header: "Users",
    loading: true,
    userPage: true
  }

  async getUsers(type){
    this.setState({loading: true})

    if(type === 'users'){
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}))
    } else if(type === 'posts'){
      await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts}))
    } else {
      await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => this.setState({todos}))
    }
    setTimeout(()=>this.setState({loading: false}),1000) //Just for showing laoding animation for longer time
  }

   getUserAction= async (user, action)=>{
    this.setState({loading: true})
    
    if(action === 'posts'){
       const newInfor = this.state.posts.filter(item => item.userId === user.id)    
      this.setState({posts: newInfor, header: `${user.name} Posts`})
    } else {
      const newInfor = this.state.todos.filter(item => item.userId === user.id)    
      this.setState({todos: newInfor, header: `${user.name} Todos`})
    } 

    setTimeout(()=>this.setState({loading: false}),1000)//Just for showing laoding animation for longer time
  }

  getCurrentUser=(user)=>{
    this.setState({loading: true})

    const currentUser = this.state.users.filter(item => item.id === user.id)
    this.setState({currentUser: currentUser[0]})
    this.setState({userPage: true})

    setTimeout(()=>this.setState({loading: false}),1000)//Just for showing laoding animation for longer time
  }

  updateHeader = (text)=>{
    this.setState({header:text})
  }

  componentDidMount(){
    this.getUsers('users')
    this.getUsers('posts')
    this.getUsers('todos')
  }

  render(){
    const usersList = this.state.users.map(user => <UserCard key={user.id} user={user} handleActions={this.getUserAction} getCurrentUser={this.getCurrentUser} changeHeader={this.updateHeader}/>)
    const postsList = this.state.posts.map(post => <PostCard key={post.id} post={post} />)
    const todosList = this.state.todos.map(todo => <TodoCard key={todo.id} todo={todo} />)
   
    return (
      <Router basename="/mad9135-c1-react-router">
        <div className="App">
          <Header header={this.state.header}/>
            {
              this.state.userPage
              ?(<nav>
                <Link to="/users" onClick={()=> {
                  this.updateHeader("Users")
                  this.getUsers('users')
                  this.setState({userPage:false})
                  }}>Users</Link>
                <Link to="/posts" onClick={()=> {
                  this.updateHeader(`${this.state.header} Posts`)
                  this.getUserAction(this.state.currentUser, 'posts')
                  this.getUsers('posts')
                  this.setState({userPage:false})
                }}>Posts</Link>
                <Link to="/todos" onClick={()=> {
                  this.updateHeader(`${this.state.header} Todos`)
                  this.getUserAction(this.state.currentUser, 'todos')
                  this.getUsers('todos')
                  this.setState({userPage:false})
                }}>ToDos</Link>
                </nav>
              )
              :(
                <nav>
                <Link to="/users" onClick={()=> {
                  this.updateHeader("Users")
                  this.getUsers('users')
                  }}>Users</Link>
                <Link to="/posts" onClick={()=> {
                  this.updateHeader("Posts")
                  this.getUsers('posts')
                }}>Posts</Link>
                <Link to="/todos" onClick={()=> {
                  this.updateHeader("Todos")
                  this.getUsers('todos')
                }}>ToDos</Link>
                </nav>
              )}
          {
            this.state.loading
            ? (<Loading/>)
            : (<Switch>
                  <Route path={["/user/:id/posts", "/posts"]}>
                    {postsList}
                  </Route>
                  <Route path={["/user/:id/todos", "/todos"]}>
                    {todosList}
                  </Route>
                  <Route path="/user/:id">
                    <UserDetail user={this.state.currentUser} handleActions={this.getUserAction}/>
                  </Route>
                  <Route path="/">
                    {usersList}
                  </Route>
                </Switch>
              ) 
            }
        </div>
        </Router>
      );
  }
}

export default App;
