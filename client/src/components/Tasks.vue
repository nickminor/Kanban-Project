<template>
  <div class="tasks">
    <h5>{{taskProp.description}}</h5>
    <button class="btn btn-danger" @click="deleteTask()">x</button>
    <button
      type="button"
      data-toggle="modal"
      :data-target="'#create-comment-modal' + taskProp._id"
    >Create Comment</button>
    <Comments v-for="comment in comments" :commentProp="comment" :key="comment._id" />
    <CreateCommentModal :taskProp="taskProp" />
  </div>
</template>


<script>
import CreateCommentModal from "../components/CreateCommentModal.vue";
import Comments from "../components/Comments.vue";

export default {
  name: "tasks",
  props: ["taskProp"],
  data() {
    return {
      newTask: {
        description: ""
      }
    };
  },
  mounted() {
    let payload = {
      boardId: this.$route.params.boardId,
      listId: this.taskProp.listId,
      taskId: this.taskProp._id
    };
    this.$store.dispatch("getCommentsByTaskId", payload);
  },
  computed: {
    postTask() {
      return this.$store.state.tasks;
    },
    comments() {
      return this.$store.state.comments[this.taskProp._id] || [];
    }
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.taskProp);
    },
    createComment() {
      this.$store.dispatch("createComment", this.taskProp);
    },
    deleteComment() {
      this.$store.dispatch("deleteComment", this.$route.params.commentId);
    }
  },
  components: {
    CreateCommentModal,
    Comments
  }
};
</script>


<style scoped>
</style>