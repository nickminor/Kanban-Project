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
            <p>Some text in the modal.</p>
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
    user() {
      return this.$store.state.activeUser;
    }
  },
  methods: {
    addList() {
      this.newList.userId = this.user._id;
      this.$store.dispatch("addList", this.newList);
      this.newList = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>