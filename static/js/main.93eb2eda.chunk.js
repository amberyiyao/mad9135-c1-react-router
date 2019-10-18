(this["webpackJsonpmad9135-c1-react-router"]=this["webpackJsonpmad9135-c1-react-router"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/smile-regular.aca9471f.svg"},,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/comments-regular.1f301d23.svg"},function(e,t,a){e.exports=a.p+"static/media/list-alt-regular.1f44e83c.svg"},function(e,t,a){e.exports=a.p+"static/media/loading.47b17d22.svg"},,,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(17),o=a.n(r),c=(a(33),a(9)),i=a.n(c),u=a(12),l=a(18),d=a(19),m=a(26),p=a(20),f=a(27);a(35);var h=function(e){return s.a.createElement("header",{className:"App-header"},s.a.createElement("p",null,e.header))},E=(a(36),a(10)),g=a.n(E),v=(a(37),a(2));var b=function(e){var t="/user/".concat(e.user.id,"/posts"),a="/user/".concat(e.user.id,"/todos"),n="/user/".concat(e.user.id);return s.a.createElement("div",{className:"UserCard"},s.a.createElement("div",{className:"card-infor"},s.a.createElement("div",{className:"card-avatar"},s.a.createElement("img",{src:g.a,alt:"user icon"})),s.a.createElement("div",{className:"card-body"},s.a.createElement(v.b,{className:"user-name",to:n,onClick:function(){e.getCurrentUser(e.user),e.changeHeader(e.user.name)}},e.user.name,s.a.createElement("br",null),s.a.createElement("span",{className:"user-email"},e.user.email)))),s.a.createElement("div",{className:"card-action"},s.a.createElement(v.b,{to:t,onClick:function(){e.handleActions(e.user,"posts")}},"Posts"),s.a.createElement(v.b,{to:a,onClick:function(){e.handleActions(e.user,"todos")}},"Todo")))},U=a(23),k=a.n(U);a(43);var N=function(e){return s.a.createElement("div",{className:"postCard"},s.a.createElement("img",{src:k.a,alt:"post icon"}),s.a.createElement("div",{className:"postInfor"},s.a.createElement("p",{className:"postTitle"},e.post.title),s.a.createElement("p",{className:"postBody"},e.post.body)))},y=a(24),C=a.n(y);a(44);var P=function(e){var t=e.todo.completed?"Done":"Pending";return s.a.createElement("div",{className:"todoCard"},s.a.createElement("img",{src:C.a,alt:"todo icon"}),s.a.createElement("div",{className:"todoInfor"},s.a.createElement("p",{className:"todoTitle"},e.todo.title),s.a.createElement("p",{className:"status"},t)))},S=a(25),w=a.n(S);var x=function(){return s.a.createElement("div",{className:"loading"},s.a.createElement("img",{src:w.a}))},A=a(6);a(45);var j=function(e){var t="/user/".concat(e.user.id,"/posts"),a="/user/".concat(e.user.id,"/todos");return s.a.createElement("div",{className:"userDetail"},s.a.createElement("img",{src:g.a}),s.a.createElement("p",null,s.a.createElement("b",null,"Name:")," ",e.user.name),s.a.createElement("p",null,s.a.createElement("b",null,"City:")," ",e.user.address.city),s.a.createElement("p",null,s.a.createElement("b",null,"Phone:")," ",e.user.phone),s.a.createElement("p",null,s.a.createElement("b",null,"Email:")," ",e.user.email),s.a.createElement("p",null,s.a.createElement("b",null,"Website:")," ",e.user.website),s.a.createElement("div",{className:"card-actions"},s.a.createElement(v.b,{to:t,onClick:function(){e.handleActions(e.user,"posts")}},"Posts"),s.a.createElement(v.b,{to:a,onClick:function(){e.handleActions(e.user,"todos")}},"Todo")))},H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={users:[],posts:[],todos:[],currentUser:{},header:"Users",loading:!0,userPage:!0},a.getUserAction=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),"posts"===n?(console.log(a.state.posts),s=a.state.posts.filter((function(e){return e.userId===t.id})),a.setState({posts:s,header:"".concat(t.name," Posts")})):(r=a.state.todos.filter((function(e){return e.userId===t.id})),a.setState({todos:r,header:"".concat(t.name," Todos")})),a.setState({loading:!1});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.getCurrentUser=function(e){var t=a.state.users.filter((function(t){return t.id===e.id}));a.setState({currentUser:t[0]}),a.setState({userPage:!0})},a.updateHeader=function(e){a.setState({header:e})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"getUsers",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({loading:!0}),"users"!==t){e.next=6;break}return e.next=4,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return a.setState({users:e})}));case 4:e.next=13;break;case 6:if("posts"!==t){e.next=11;break}return e.next=9,fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return a.setState({posts:e})}));case 9:e.next=13;break;case 11:return e.next=13,fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()})).then((function(e){return a.setState({todos:e})}));case 13:this.setState({loading:!1});case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getUsers("users"),this.getUsers("posts"),this.getUsers("todos")}},{key:"render",value:function(){var e=this,t=this.state.users.map((function(t){return s.a.createElement(b,{key:t.id,user:t,handleActions:e.getUserAction,getCurrentUser:e.getCurrentUser,changeHeader:e.updateHeader})})),a=this.state.posts.map((function(e){return s.a.createElement(N,{key:e.id,post:e})})),n=this.state.todos.map((function(e){return s.a.createElement(P,{key:e.id,todo:e})}));return s.a.createElement(v.a,{basename:"/mad9135-c1-react-router"},s.a.createElement("div",{className:"App"},s.a.createElement(h,{header:this.state.header}),this.state.userPage?s.a.createElement("nav",null,s.a.createElement(v.b,{to:"/users",onClick:function(){e.updateHeader("Users"),e.getUsers("users"),e.setState({userPage:!1})}},"Users"),s.a.createElement(v.b,{to:"/posts",onClick:function(){e.updateHeader("".concat(e.state.header," Posts")),e.getUserAction(e.state.currentUser,"posts"),e.getUsers("posts"),e.setState({userPage:!1})}},"Posts"),s.a.createElement(v.b,{to:"/todos",onClick:function(){e.updateHeader("".concat(e.state.header," Todos")),e.getUserAction(e.state.currentUser,"todos"),e.getUsers("todos"),e.setState({userPage:!1})}},"ToDos")):s.a.createElement("nav",null,s.a.createElement(v.b,{to:"/users",onClick:function(){e.updateHeader("Users"),e.getUsers("users")}},"Users"),s.a.createElement(v.b,{to:"/posts",onClick:function(){e.updateHeader("Posts"),e.getUsers("posts")}},"Posts"),s.a.createElement(v.b,{to:"/todos",onClick:function(){e.updateHeader("Todos"),e.getUsers("todos")}},"ToDos")),this.state.loading?s.a.createElement(x,null):s.a.createElement(A.c,null,s.a.createElement(A.a,{path:["/user/:id/posts","/posts"]},a),s.a.createElement(A.a,{path:["/user/:id/todos","/todos"]},n),s.a.createElement(A.a,{path:"/user/:id"},s.a.createElement(j,{user:this.state.currentUser,handleActions:this.getUserAction})),s.a.createElement(A.a,{path:"/"},t))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[28,1,2]]]);
//# sourceMappingURL=main.93eb2eda.chunk.js.map