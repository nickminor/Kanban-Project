<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="board">
          {{board.title}}
          <button @click="deleteBoard(boardId)" class="btn btn-danger">Delete</button>
          <button type="button" data-toggle="modal" data-target="#create-list-modal">Create List</button>
        </div>
      </div>
    </div>
    <CreateListModal />
  </div>
</template>

<script>
import CreateListModal from "../components/CreateListModal";
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getBoards");
  },
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
  components: { CreateListModal },
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