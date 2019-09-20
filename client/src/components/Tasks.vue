<template>
  <div class="tasks">
    <h5>{{taskProp.description}}</h5>

    <select @change="moveTask()" v-model="newListId">
      <option v-for="list in lists" :value="list._id" :key="list._id">{{ list.title }}</option>
    </select>

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
      newListId: "",
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
    },
    lists() {
      return this.$store.state.lists;
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
    },
    moveTask() {
      let taskData = {
        boardId: this.taskProp.boardId,
        listId: this.newListId,
        oldListId: this.taskProp.listId,
        currentTaskId: this.taskProp._id
      };
      this.$store.dispatch("moveTask", taskData);

      //put request on the Task
      //create an object that includes the newList Id :: this.selected
      //old list id :: this.taskProp.listId
      //current task Id :: this.taskProp._id
      //fire off dispatch to store with above data in a single object
      //not sure what changed during git commit
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