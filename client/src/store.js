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
    tasks: {
      listId: []
    },
    activeTask: {},
    comments: {
      taskId: []
    },
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
    },
    setTasks(state, payload) {
      Vue.set(state.tasks, payload.listId, payload.tasks)
    },
    setComments(state, payload) {
      Vue.set(state.comments, payload.taskId, payload.comments)
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
        let res = await api.post('/lists', listData)
        //.then(serverList => {
        dispatch('getListsByBoardId', listData.boardId)
      } catch (error) {
        console.error(error)
      }
    },

    async deleteList({ commit, dispatch }, payload) {
      try {
        let res = await api.delete("/lists/" + payload._id)
        dispatch('getListsByBoardId', payload.boardId)
      } catch (error) {
        console.error(error)

      }
    },
    async postList({ commit, dispatch }) {
      try {
        let res = await api.get()
      } catch (error) {

      }
    },

    //#endregion

    // #region -- Tasks --

    async getTasksByListId({ commit, dispatch }, payload) {
      try {
        let res = await api.get(`/boards/${payload.boardId}/lists/${payload.listId}/tasks`)
        let data = {
          boardId: payload.boardId,
          listId: payload.listId,
          tasks: res.data
        }
        commit("setTasks", data)
      } catch (error) {
        console.error(error)
      }
    },

    async createTask({ commit, dispatch }, payload) {
      try {
        let res = await api.post('/tasks', payload)
        dispatch('getTasksByListId', payload)
      } catch (error) {
        console.error(error)

      }
    },

    async moveTask({ commit, dispatch }, payload) {
      //send put request to server to "tasks/"+payload.taskId with the object {listId: payload.newListId}
      //dispatch 'getTasks', payload.oldListId && dispatch 'getTasks' for payload.newListId
    },

    async deleteTask({ commit, dispatch }, payload) {
      try {
        let res = await api.delete('/tasks/' + payload._id)
        dispatch('getTasksByListId', payload)
      } catch (error) {
        console.error(error)

      }
    },

    async getCommentsByTaskId({ commit, dispatch }, payload) {
      try {
        let res = await api.get(`/boards/${payload.boardId}/lists/${payload.listId}/tasks/${payload.taskId}/comments`)
        let data = {
          boardId: payload.boardId,
          listId: payload.listId,
          taskId: payload.taskId,
          comments: res.data
        }
        commit("setComments", data)
      } catch (error) {
        console.error(error)
      }
    },

    async createComment({ commit, dispatch }, payload) {
      try {
        let res = await api.post('/comments', payload)
        dispatch('getCommentsByTaskId', payload)
      } catch (error) {
        console.error(error)

      }
    },

    async deleteComment({ commit, dispatch }, payload) {
      try {
        let res = await api.delete('/comments/' + payload._id)
        dispatch('getCommentsByTaskId', payload)
      } catch (error) {
        console.error(error)

      }
    },
  }


})
