import React from 'react'
import Header from './components/Header'
import './App.css'
import UserCard from './components/UserCard'
import PostCard from './components/PostsCard'
import TodoCard from './components/TodoCard'
import Loading from './components/Loading'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import UserDetail from './components/UserDetail'
import store from './stores/configureStore'
import * as actions from './actions/actions'

class App extends React.Component{

  state = {
    currentUser:{},
    header: "Users",
    loading: true,
    userPage: false
  }

  async getData(type){
    this.setState({loading: true})

    if(type === 'users'){
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => store.dispatch(actions.changeUserData(users)))
    } else if(type === 'posts'){
      await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => store.dispatch(actions.changePostData(posts)))
    } else {
      await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => store.dispatch(actions.changeTodosData(todos)))
    }
    setTimeout(()=>this.setState({loading: false}),1000) //Just for showing laoding animation for longer time for marking, or you will not see it. I will not use like this in real project.
  }

  getUserAction= async (user, action)=>{
    this.setState({loading: true})
    
    if(action === 'posts'){
      console.log(store.getState().posts)
      const newInfor = store.getState().posts.filter(item => item.userId === user.id) 
      console.log(newInfor)

      this.updateHeader(`${user.name} Posts`)
      store.dispatch(actions.changePostData(newInfor))

      console.log(store.getState().posts)
    } else {
      const newInfor = store.getState().todos.filter(item => item.userId === user.id) 
      this.updateHeader(`${user.name} Todos`)
      store.dispatch(actions.changeTodosData(newInfor))
      
    } 

    setTimeout(()=>this.setState({loading: false}),1000)//Just for showing laoding animation for longer time for marking, or you will not see it. I will not use like this in real project.
  }

  getCurrentUser=(user)=>{
    this.setState({loading: true})

    const currentUser = store.getState().users.filter(item => item.id === user.id)
    this.setState({currentUser: currentUser[0]})
    this.setState({userPage: true})

    setTimeout(()=>this.setState({loading: false}),1000)//Just for showing laoding animation for longer time for marking, or you will not see it. I will not use like this in real project.
  }

  updateHeader = (text)=>{
    this.setState({header: text})
  }

  componentDidMount(){
    this.getData('users')
    this.getData('posts')
    this.getData('todos')
    store.subscribe(()=> this.setState({}))
  }

  render(){

    if(!store.getState().users){
      this.getData('users')
      console.log('no user')
    }
    if(!store.getState().posts){
      this.getData('posts')
      console.log('no post')
    }
    if(!store.getState().todos){
      this.getData('todos')
      console.log('no todo')
    }

    console.log(store.getState().posts)
    const usersList = store.getState().users.map(user => <UserCard key={user.id} user={user} handleActions={this.getUserAction} getCurrentUser={this.getCurrentUser} changeHeader={this.updateHeader}/>)
    const postsList = store.getState().posts.map(post => <PostCard key={post.id} post={post} />)
    const todosList = store.getState().todos.map(todo => <TodoCard key={todo.id} todo={todo} />)
   
    return (
      <Router basename="/mad9135-c1-react-router">
        <div className="App">
          <Header header={this.state.header}/>
            {
              this.state.userPage
              ?(<nav>
                <Link to="/users" onClick={()=> {
                  this.updateHeader("Users")
                  this.getData('users')
                  this.setState({userPage:false})
                  }}>Users</Link>
                <Link to="/posts" onClick={()=> {
                  this.updateHeader(`${this.state.header} Posts`)
                  this.getUserAction(this.state.currentUser, 'posts')
                  this.setState({userPage:false})
                }}>Posts</Link>
                <Link to="/todos" onClick={()=> {
                  this.updateHeader(`${this.state.header} Todos`)
                  this.getUserAction(this.state.currentUser, 'todos')
                  this.setState({userPage:false})
                }}>ToDos</Link>
                </nav>
              )
              :(
                <nav>
                <Link to="/users" onClick={()=> {
                  this.updateHeader("Users")
                  this.getData('users')
                  }}>Users</Link>
                <Link to="/posts" onClick={()=> {
                  this.updateHeader("Posts")
                  this.getData('posts')
                }}>Posts</Link>
                <Link to="/todos" onClick={()=> {
                  this.updateHeader("Todos")
                  this.getData('todos')
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
