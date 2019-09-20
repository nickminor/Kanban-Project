(function(t){function e(e){for(var a,i,n=e[0],d=e[1],c=e[2],m=0,u=[];m<n.length;m++)i=n[m],o[i]&&u.push(o[i][0]),o[i]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);l&&l(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var d=s[n];0!==o[d]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var l=d;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),o=s.n(a);o.a},"0b9a":function(t,e,s){},"147e":function(t,e,s){},"22dd":function(t,e,s){"use strict";var a=s("0b9a"),o=s.n(a);o.a},"3b8a":function(t,e,s){"use strict";var a=s("a539"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],i={name:"App"},n=i,d=(s("034f"),s("2877")),c=Object(d["a"])(n,o,r,!1,null,null,null),l=c.exports,m=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"boards"},[t._v("\r\n    WELCOME TO THE BOARDS!!!\r\n    "),s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("Log Out")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("Create Board")])]),s("div",{staticClass:"row",attrs:{id:"board"}},t._l(t.boards,function(e){return s("div",{key:e._id,staticClass:"col-3 border m-5"},[s("router-link",{attrs:{to:{name:"board",params:{boardId:e._id}}}},[t._v("\r\n        "+t._s(e.title)+"\r\n        "),s("br"),s("br"),t._v("\r\n        "+t._s(e.description)+"\r\n      ")]),s("br"),s("br"),s("button",{staticClass:"btn btn-danger",on:{click:function(s){t.deleteBoard(e._id)}}},[t._v("Delete")])],1)}))])])])])},p=[],h={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},logout(){this.$store.dispatch("logout",this.logout),this.logout=this.$router.push({name:"login"})},deleteBoard(t){this.$store.dispatch("deleteBoard",t)}}},v=h,b=(s("3b8a"),Object(d["a"])(v,u,p,!1,null,null,null)),f=b.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"board"},[t._v("\n        "+t._s(t.board.title)+"\n        "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteBoard(t.boardId)}}},[t._v("Delete")]),s("button",{attrs:{type:"button","data-toggle":"modal","data-target":"#create-list-modal"}},[t._v("Create List")])])])]),s("br"),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"col-4 d-flex"},[t._l(t.lists,function(t){return s("List",{key:t._id,attrs:{listProp:t}})}),s("CreateListModal")],2)])])},w=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"listModal"},[s("div",{staticClass:"modal",attrs:{id:"create-list-modal",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"form-control",attrs:{type:"text",id:"listTitle",placeholder:"List Title"},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){t.createList()}}},[t._v("Submit")])])]),t._m(1)])])])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),s("h4",{staticClass:"modal-title"},[t._v("Create a List")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],_={name:"Create-List-Modal",data(){return{newList:{}}},computed:{post(){return this.$store.state.activeList}},methods:{createList(){this.newList.boardId=this.$route.params.boardId,this.$store.dispatch("createList",this.newList),this.newList={}}},components:{}},y=_,$=(s("7a10"),Object(d["a"])(y,C,k,!1,null,"6841d0f5",null)),I=$.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"lists"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 border m-5 justify-content-around"},[t._v("\n        "+t._s(t.listProp.title)+"\n        "),s("button",{staticClass:"btn btn-danger",on:{click:t.deleteList}},[t._v("X")]),s("button",{attrs:{type:"button","data-toggle":"modal","data-target":"#create-task-modal"+t.listProp._id}},[t._v("Create Task")]),s("br"),t._l(t.tasks,function(t){return s("Tasks",{key:t._id,attrs:{taskProp:t}})}),s("CreateTaskModal",{attrs:{listProp:t.listProp}})],2)])])])},T=[],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"taskModal"},[s("div",{staticClass:"modal",attrs:{id:"create-task-modal"+t.listProp._id,role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"description"}},[t._v("description")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.description,expression:"newTask.description"}],staticClass:"form-control",attrs:{type:"text",id:"taskDescription",placeholder:"Task Description"},domProps:{value:t.newTask.description},on:{input:function(e){e.target.composing||t.$set(t.newTask,"description",e.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){t.createTask()}}},[t._v("Submit")])]),t._m(1)])])])])])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),s("h4",{staticClass:"modal-title"},[t._v("Create a Task")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],x={name:"Create-Task-Modal",props:["listProp"],data(){return{newTask:{}}},computed:{post(){return this.$store.state.activeTask}},methods:{createTask(){let t={listId:this.listProp._id,boardId:this.listProp.boardId,description:this.newTask.description};this.$store.dispatch("createTask",t),this.newTask={}}},components:{}},O=x,E=(s("22dd"),Object(d["a"])(O,B,P,!1,null,null,null)),U=E.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tasks"},[s("h5",[t._v(t._s(t.taskProp.description))]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.newListId,expression:"newListId"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.newListId=e.target.multiple?s:s[0]},function(e){t.moveTask()}]}},t._l(t.lists,function(e){return s("option",{key:e._id,domProps:{value:e._id}},[t._v(t._s(e.title))])})),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteTask()}}},[t._v("x")]),s("button",{attrs:{type:"button","data-toggle":"modal","data-target":"#create-comment-modal"+t.taskProp._id}},[t._v("Create Comment")]),t._l(t.comments,function(t){return s("Comments",{key:t._id,attrs:{commentProp:t}})}),s("CreateCommentModal",{attrs:{taskProp:t.taskProp}})],2)},M=[],N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"commentModal"},[s("div",{staticClass:"modal",attrs:{id:"create-comment-modal"+t.taskProp._id,role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"content"}},[t._v("content")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],staticClass:"form-control",attrs:{type:"text",id:"commentContent",placeholder:"comment Content"},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){t.createComment()}}},[t._v("Submit")])]),t._m(1)])])])])])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),s("h3",{staticClass:"modal-title"},[t._v("Create a Comment")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],S={name:"Create-Comment-Modal",props:["taskProp"],data(){return{newComment:{}}},computed:{post(){return this.$store.state.activeComment}},methods:{createComment(){let t={taskId:this.taskProp._id,listId:this.taskProp.listId,boardId:this.taskProp.boardId,content:this.newComment.content};this.$store.dispatch("createComment",t),this.newComment={}}},components:{}},D=S,R=(s("caa7"),Object(d["a"])(D,N,A,!1,null,null,null)),F=R.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comments"},[s("h4",[t._v("\n    "+t._s(t.commentProp.content)+"\n    "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteComment()}}},[t._v("x")])])])},q=[],H={name:"comments",props:["commentProp"],data(){return{newComment:{content:""}}},computed:{postComment(){return this.$store.state.comments}},methods:{deleteComment(){this.$store.dispatch("deleteComment",this.commentProp)}},components:{}},W=H,X=Object(d["a"])(W,J,q,!1,null,"ab240cd6",null),z=X.exports,G={name:"tasks",props:["taskProp"],data(){return{newListId:"",newTask:{description:""}}},mounted(){let t={boardId:this.$route.params.boardId,listId:this.taskProp.listId,taskId:this.taskProp._id};this.$store.dispatch("getCommentsByTaskId",t)},computed:{postTask(){return this.$store.state.tasks},comments(){return this.$store.state.comments[this.taskProp._id]||[]},lists(){return this.$store.state.lists}},methods:{deleteTask(){this.$store.dispatch("deleteTask",this.taskProp)},createComment(){this.$store.dispatch("createComment",this.taskProp)},deleteComment(){this.$store.dispatch("deleteComment",this.$route.params.commentId)},moveTask(){let t={boardId:this.taskProp.boardId,listId:this.newListId,oldListId:this.taskProp.listId,currentTaskId:this.taskProp._id};this.$store.dispatch("moveTask",t)}},components:{CreateCommentModal:F,Comments:z}},K=G,Q=Object(d["a"])(K,j,M,!1,null,"83b94370",null),V=Q.exports,Y={name:"lists",props:["listProp"],data(){return{newList:{title:""}}},mounted(){let t={boardId:this.$route.params.boardId,listId:this.listProp._id};this.$store.dispatch("getTasksByListId",t)},computed:{postList(){return this.$store.state.lists},tasks(){return this.$store.state.tasks[this.listProp._id]||[]}},methods:{deleteList(){this.$store.dispatch("deleteList",this.listProp)},createTask(){this.$store.dispatch("createTask",this.$route.params.listId)},deleteTask(){this.$store.dispatch("deleteTask",this.$route.params.taskId)},moveTask(){this.$store.dispatch("moveTask",this.$route.params.taskId)}},components:{CreateTaskModal:U,Tasks:V}},Z=Y,tt=Object(d["a"])(Z,L,T,!1,null,"00f504a0",null),et=tt.exports,st={name:"board",mounted(){this.$store.dispatch("getActiveBoard",this.$route.params.boardId),this.$store.dispatch("getListsByBoardId",this.$route.params.boardId)},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},props:["boardId"],components:{CreateListModal:I,List:et},methods:{deleteBoard(){this.$store.dispatch("deleteBoard",this.$route.params.boardId)},createList(){this.$store.dispatch("createList",this.$route.params.boardId)},deleteList(){this.$store.dispatch("deleteList",this.$route.params.listId)}}},at=st,ot=Object(d["a"])(at,g,w,!1,null,null,null),rt=ot.exports,it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Login")])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Create Account")])]),s("div",{staticClass:"action",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])},nt=[],dt={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},ct=dt,lt=(s("d6db"),Object(d["a"])(ct,it,nt,!1,null,null,null)),mt=lt.exports;a["a"].use(m["a"]);var ut=new m["a"]({routes:[{path:"/lists",name:"lists",component:et},{path:"/tasks",name:"tasks",component:V},{path:"/comments",name:"comments",component:z},{path:"/",name:"boards",component:f},{path:"/boards/:boardId",name:"board",props:!0,component:rt},{path:"/login",name:"login",component:mt},{path:"*",redirect:"/"}]}),pt=s("2f62"),ht=s("bc3a"),vt=s.n(ht);let bt=location.host.includes("localhost")?"//localhost:3000/":"/",ft=vt.a.create({baseURL:bt+"account/",timeout:3e3,withCredentials:!0});class gt{static async Login(t){try{let s=await ft.post("login",t);return s.data}catch(e){throw new Error(`[login failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Register(t){try{let s=await ft.post("register",t);return s.data}catch(e){throw new Error(`[registration failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Logout(){try{await ft.delete("logout");return!0}catch(t){throw new Error(`[logout failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let e=await ft.get("authenticate");return e.data}catch(t){console.warn(`[Authentication failed] : ${t.response?t.response.data.error:"No response from server"}`)}}}a["a"].use(pt["a"]);let wt=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",Ct=vt.a.create({baseURL:wt+"api/",timeout:3e3,withCredentials:!0});var kt=new pt["a"].Store({state:{authorId:{},user:{},boards:[],activeBoard:{},lists:[],activeList:{},tasks:{listId:[]},activeTask:{},comments:{taskId:[]},activeComment:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},resetState(t,e){t.user=e},setLists(t,e){t.lists=e},setActiveBoard(t,e){t.activeBoard=e},setActiveList(t,e){t.lists=e},setTasks(t,e){a["a"].set(t.tasks,e.listId,e.tasks)},setComments(t,e){a["a"].set(t.comments,e.taskId,e.comments)}},actions:{async register({commit:t,dispatch:e},s){try{let e=await gt.Register(s);t("setUser",e),ut.push({name:"boards"})}catch(a){console.warn(a.message)}},async login({commit:t,dispatch:e},s){try{let e=await gt.Login(s);t("setUser",e),ut.push({name:"boards"})}catch(a){console.warn(a.message)}},async logout({commit:t,dispatch:e}){try{await gt.Logout();t("resetState"),ut.push({name:"login"})}catch(s){console.warn(s.message)}},getBoards({commit:t,dispatch:e}){Ct.get("boards").then(e=>{t("setBoards",e.data)})},getActiveBoard({commit:t,dispatch:e},s){Ct.get("boards/"+s).then(e=>{t("setActiveBoard",e.data)})},addBoard({commit:t,dispatch:e},s){Ct.post("boards",s).then(t=>{e("getBoards")})},async deleteBoard({commit:t,dispatch:e},s){try{await Ct.delete(`/boards/${s}`);e("getBoards"),ut.push({name:"boards"})}catch(a){console.error(a)}},async getListsByBoardId({commit:t,dispatch:e},s){try{let e=await Ct.get(`/boards/${s}/lists`);t("setLists",e.data)}catch(a){console.error(a)}},async createList({commit:t,dispatch:e},s){try{await Ct.post("/lists",s);e("getListsByBoardId",s.boardId)}catch(a){console.error(a)}},async deleteList({commit:t,dispatch:e},s){try{await Ct.delete("/lists/"+s._id);e("getListsByBoardId",s.boardId)}catch(a){console.error(a)}},async postList({commit:t,dispatch:e}){try{await Ct.get()}catch(s){}},async getTasksByListId({commit:t,dispatch:e},s){try{let e=await Ct.get(`/boards/${s.boardId}/lists/${s.listId}/tasks`),o={boardId:s.boardId,listId:s.listId,tasks:e.data};t("setTasks",o)}catch(a){console.error(a)}},async getTasksById({commit:t,dispatch:e},s){try{await Ct.get(`/tasks/${s.currentTaskId}`)}catch(a){console.error(a)}},async createTask({commit:t,dispatch:e},s){try{await Ct.post("/tasks",s);e("getTasksByListId",s)}catch(a){console.error(a)}},async moveTask({commit:t,dispatch:e},s){try{await Ct.put(`/tasks/${s.currentTaskId}`,s);e("getTasksByListId",s)}catch(a){}},async deleteTask({commit:t,dispatch:e},s){try{await Ct.delete("/tasks/"+s._id);e("getTasksByListId",s)}catch(a){console.error(a)}},async getCommentsByTaskId({commit:t,dispatch:e},s){try{let e=await Ct.get(`/boards/${s.boardId}/lists/${s.listId}/tasks/${s.taskId}/comments`),o={boardId:s.boardId,listId:s.listId,taskId:s.taskId,comments:e.data};t("setComments",o)}catch(a){console.error(a)}},async createComment({commit:t,dispatch:e},s){try{await Ct.post("/comments",s);e("getCommentsByTaskId",s)}catch(a){console.error(a)}},async deleteComment({commit:t,dispatch:e},s){try{await Ct.delete("/comments/"+s._id);e("getCommentsByTaskId",s)}catch(a){console.error(a)}}}});async function _t(){let t=await gt.Authenticate();t?kt.commit("setUser",t):ut.push({name:"login"}),new a["a"]({router:ut,store:kt,render:t=>t(l)}).$mount("#app")}_t()},"64a9":function(t,e,s){},"7a10":function(t,e,s){"use strict";var a=s("8499"),o=s.n(a);o.a},8499:function(t,e,s){},a539:function(t,e,s){},a9e7:function(t,e,s){},caa7:function(t,e,s){"use strict";var a=s("147e"),o=s.n(a);o.a},d6db:function(t,e,s){"use strict";var a=s("a9e7"),o=s.n(a);o.a}});
//# sourceMappingURL=app.d4445d88.js.map