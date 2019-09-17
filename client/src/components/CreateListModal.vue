<template>
  <div class="listModal">
    <div id="create-list-modal" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create a List</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="title">Title</label>
                <<<<<<< HEAD
                <input
                  type="text"
                  class="form-control"
                  v-model="newList.title"
                  id="listTitle"
                  placeholder="List Title"
                />
                =======
                <input
                  type="text"
                  class="form-control"
                  id="listTitle"
                  placeholder="List Title"
                  v-model="newList.title"
                />
                >>>>>>> 8a4c793fb579a6632406fb15705761a9f4fa53f8
              </div>
              <button type="submit" @click="createList()" class="btn btn-primary">Submit</button>
            </form>
          </div>
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
  name: "Create-List-Modal",
  data() {
    return {
      newList: {}
    };
  },
  computed: {
    post() {
      return this.$store.state.activeList;
    }
  },
  methods: {
    createList() {
      this.newList.boardId = this.$route.params.boardId;
      this.$store.dispatch("createList", this.newList);
      this.newList = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>