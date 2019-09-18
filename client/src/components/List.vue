<template>
  <div class="container-fluid">
    <div class="lists">
      <div class="row">
        <div class="col-3 border m-5 d-flex justify-content-around">
            {{listProp.title}}
            <button class="btn btn-danger" @click="deleteList">x</button>
          <button type="button" data-toggle="modal" data-target="#create-task-modal">Create Task</button>
        </div>
      </div>
    </div>
    <Task v-for="task in tasks" :taskProp="task" :key="task._id" />
 <CreateTaskModal />
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
  mounted() {},
  computed: {
    postList() {
      return this.$store.state.lists;
    }
  },
  methods: {
    deleteList() {
      this.$store.dispatch("deleteList", this.listProp);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
