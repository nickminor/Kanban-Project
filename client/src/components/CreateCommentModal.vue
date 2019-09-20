<template>
  <div class="commentModal">
    <div :id="'create-comment-modal' + taskProp._id" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h3 class="modal-title">Create a Comment</h3>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="content">content</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="newComment.content"
                  id="commentContent"
                  placeholder="comment Content"
                />
              </div>
              <button type="submit" @click="createComment()" class="btn btn-primary">Submit</button>
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
  name: "Create-Comment-Modal",
  props: ["taskProp"],
  data() {
    return {
      newComment: {}
    };
  },
  computed: {
    post() {
      return this.$store.state.activeComment;
    }
  },
  methods: {
    createComment() {
      let commentData = {
        taskId: this.taskProp._id,
        listId: this.taskProp.listId,
        boardId: this.taskProp.boardId,
        content: this.newComment.content
      };
      //this.newTask.listId = this.$route.params.listId;
      this.$store.dispatch("createComment", commentData);
      this.newComment = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>