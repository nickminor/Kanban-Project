import Vue from 'vue'
import Router from 'vue-router'
import Boards from './views/Boards.vue'
import Board from './views/Board.vue'
import Login from './views/Login.vue'
import List from './components/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/List',
      name: 'List',
      component: List
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