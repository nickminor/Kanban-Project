<template>
  <div class="container-fluid">
    <div class="lists border">
      {{listProp.title}}
      <button class="btn btn-danger" @click="deleteList">x</button>
      <div class="col-3 m-5 d-flex justify-content">
        <button
          type="button"
          data-toggle="modal"
          :data-target="'#create-task-modal' + listProp._id"
        >Create Task</button>
        <CreateTaskModal :listProp="listProp" />
        <br />
        <Tasks v-for="task in tasks" :taskProp="task" :key="task._id" />
      </div>
    </div>
  </div>
</template>

<script>
import CreateTaskModal from "../components/CreateTaskModal.vue";
import Tasks from "../components/Tasks.vue";

export default {
  name: "lists",
  props: ["listProp"],
  data() {
    return {
      newList: {
        title: ""
      }
    };
  },
  mounted() {
    let payload = {
      boardId: this.$route.params.boardId,
      listId: this.listProp._id
    };
    this.$store.dispatch("getTasksByListId", payload);
  },
  computed: {
    postList() {
      return this.$store.state.lists;
    },
    tasks() {
      return this.$store.state.tasks[this.listProp._id] || [];
    }
  },
  methods: {
    deleteList() {
      this.$store.dispatch("deleteList", this.listProp);
    },
    createTask() {
      this.$store.dispatch("createTask", this.$route.params.listId);
    },
    deleteTask() {
      this.$store.dispatch("deleteTask", this.$route.params.taskId);
    }
  },
  components: {
    CreateTaskModal,
    Tasks
  }
};
</script>


<style scoped>
</style>
