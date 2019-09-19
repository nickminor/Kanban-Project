<template>
  <div class="comments">
    <h4>
      {{commentProp.content}}
      <button class="btn btn-danger" @click="deleteComment()">x</button>
    </h4>
  </div>
</template>


<script>
export default {
  name: "comments",
  props: ["commentProp"],
  data() {
    return {
      newComment: {
        content: ""
      }
    };
  },
  computed: {
    postComment() {
      return this.$store.state.comments;
    }
  },
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", this.commentProp);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>