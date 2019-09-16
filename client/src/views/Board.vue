<template>
  <div class="board">
    {{board.title}}
    <button @click="deleteBoard(boardId)" class="btn btn-danger">Delete</button>
    <button
      @click="createList"
      type="submit"
      data-toggle="modal"
      data-target="#create-list-modal"
    >Create List</button>
  </div>
</template>

<script>
export default {
  name: "board",
  computed: {
    board() {
      return (
        //FIXME This does not work on page reload because the boards array is empty in the store
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    }
  },
  props: ["boardId"],

  methods: {
    deleteBoard() {
      this.$store.dispatch("deleteBoard", this.$route.params.boardId);
    },
    createList() {
      this.$store.dispatch("createList", this.$route.params.boardId);
    }
  }
};
</script>