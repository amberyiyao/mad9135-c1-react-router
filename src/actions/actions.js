export function changeUserData(newUsers){
    return {
        type: "CHANGE_UESER_DATA",
        data: {users: newUsers}
    }
}

export function changePostData(newPosts){
    return {
        type: "CHANGE_POST_DATA",
        data: {posts: newPosts}
    }
}

export function changeTodosData(newTodos){
    return {
        type: "CHANGE_TODO_DATA",
        data: {todos: newTodos}
    }
}