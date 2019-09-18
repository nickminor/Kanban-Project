<template>
  <div class="taskModal">
    <div id="create-task-modal" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Create a Task</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <lable for="description">description</lable>
              <input
                type="text"
                class="form-control"
                v-model="newTask.description"
                id="taskDescription"
                placeholder="Task Description"
              />
            </div>
            <button type="submit" @click="createTask()" class="btn btn-primary">Submit</button>
          </form>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Create-Task-Modal",
  data() {
    return {
      newTask: {}
    };
  },
  computed: {
    post() {
      return this.$store.state.activeTask;
    }
  },
  methods: {
    createTask() {
      this.newTask.ListID = this.$route.params.ListID;
      this.$store.dispatch("createTask", this.newTask);
      this.newTask = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>