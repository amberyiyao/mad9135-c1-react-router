import { createStore } from 'redux'

let defultState = {
    users:[],
    posts:[],
    todos:[],
    currentUser:{},
    header: "Users",
    loading: true,
    userPage: true
}

function amount(state = defaultStatus, action){
    //if(action.type === '')
    return state
}

let store = createStore(amount)

export default store