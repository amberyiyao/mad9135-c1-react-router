import { createStore } from 'redux'

let defaultState = {
    users:[],
    posts:[],
    todos:[],
    currentUser:{}
}

function amount(state = defaultState, action){
    console.log(action.type, action.data)
    if(action.type){
        return {...state, ...action.data}
    }
    return state
}

let store = createStore(amount)

export default store