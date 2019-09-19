import Vue from 'vue'
import Router from 'vue-router'
import Boards from './views/Boards.vue'
import Board from './views/Board.vue'
import Login from './views/Login.vue'
import List from './components/List.vue'
import Tasks from './components/Tasks.vue'
import Comments from './components/Comments.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lists',
      name: 'lists',
      component: List
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    },
    {
      path: '/',
      name: 'boards',
      component: Boards
    },
    {
      path: '/boards/:boardId',
      name: 'board',
      props: true,
      component: Board
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})