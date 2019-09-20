<template>
  <div class="taskModal">
    <div :id="'create-task-modal' + listProp._id" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create a Task</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="description">description</label>
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
  </div>
</template>


<script>
export default {
  name: "Create-Task-Modal",
  props: ["listProp"],
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
      let taskData = {
        listId: this.listProp._id,
        boardId: this.listProp.boardId,
        description: this.newTask.description
      };
      //this.newTask.listId = this.$route.params.listId;
      this.$store.dispatch("createTask", taskData);
      this.newTask = {};
    }
  },
  components: {}
};
</script>


<style>
.tasks {
  background-color: rgb(16, 137, 173);
}
</style>