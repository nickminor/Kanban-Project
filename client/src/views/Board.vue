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
    <br />
    <div class="container-fluid">
      <div class="col-4 d-flex">
        <List v-for="list in lists" :listProp="list" :key="list._id" />
        <CreateListModal />
      </div>
    </div>
  </div>
</template>

<script>
import CreateListModal from "../components/CreateListModal.vue";
import List from "../components/List.vue";
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getActiveBoard", this.$route.params.boardId);
    this.$store.dispatch("getListsByBoardId", this.$route.params.boardId);
  },
  computed: {
    board() {
      return (
        //FIXME This does not work on page reload because the boards array is empty in the store
        this.$store.state.activeBoard
      );
    },
    lists() {
      return this.$store.state.lists;
    }
  },
  props: ["boardId"],
  components: {
    CreateListModal,
    List
  },
  methods: {
    deleteBoard() {
      this.$store.dispatch("deleteBoard", this.$route.params.boardId);
    },
    createList() {
      this.$store.dispatch("createList", this.$route.params.boardId);
    },
    deleteList() {
      this.$store.dispatch("deleteList", this.$route.params.listId);
    }
  }
};
</script>