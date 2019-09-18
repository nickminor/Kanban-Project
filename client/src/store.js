import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'


Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    authorId: {},
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    activeList: {},
    tasks: [],
    activeTask: {},
    comments: [],
    activeComment: {},

  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    resetState(state, payload) {
      state.user = payload
    },
    setLists(state, payload) {
      state.lists = payload
    },
    setActiveBoard(state, data) {
      state.activeBoard = data
    },
    setActiveList(state, lists) {
      state.lists = lists
    }

  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "boards" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "boards" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    getActiveBoard({ commit, dispatch }, payload) {
      api.get('boards/' + payload)
        .then(res => {
          commit('setActiveBoard', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },

    async deleteBoard({ commit, dispatch }, payload) {
      try {
        debugger
        let res = await api.delete(`/boards/${payload}`)
        dispatch('getBoards')
        router.push({ name: 'boards' })
      } catch (error) {
        console.error(error)

      }

    },
    //#endregion


    //#region -- LISTS --

    async getListsByBoardId({ commit, dispatch }, payload) {
      try {
        let res = await api.get(`/boards/${payload}/lists`)
        commit("setLists", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async createList({ commit, dispatch }, listData) {
      try {
        let res = await api.post('/List', listData)
        //.then(serverList => {
        dispatch('getListsByBoardId', listData.boardId)
      } catch (error) {
        console.error(error)
      }
    },

    async deleteList({ commit, dispatch }, payload) {
      try {
        debugger
        let res = await api.delete("/List/" + this.state.lists._id)
        dispatch('getListsByBoardId', listData.boardId)
        router.push({ name: 'boards/boardId' })
      } catch (error) {
        console.error(error)

      }
    },
    async postList({ commit, dispatch }) {
      try {
        let res = await api.get()
      } catch (error) {

      }
    }



    //#endregion
  }
})
