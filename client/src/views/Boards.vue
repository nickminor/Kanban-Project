<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12"> 
  <div class="boards">
    WELCOME TO THE BOARDS!!!
    <button @click="logout" class="btn btn-danger">Log Out</button>
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <div class="row">
    <div class="col-3 border m-5" v-for="board in boards" :key="board._id">
      <router-link :to="{name: 'board', params: {boardId: board._id}}">
        {{board.title}}
        <br><br>
        {{board.description}}
      </router-link>
      <br><br>
      <button @click="deleteBoard(board._id)" class="btn btn-danger">Delete</button>
  </div>
  </div>
  </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    logout() {
      this.$store.dispatch("logout", this.logout);
      this.logout = this.$router.push({ name: "login" });
    },
    deleteBoard(id) {
      this.$store.dispatch("deleteBoard", id);
    }
  }
};
</script> 
