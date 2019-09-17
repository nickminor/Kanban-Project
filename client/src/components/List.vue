<template>
  <div class="list">
    <h3>
      {{lists.list}}
      <span>
        <button class="btn btn-danger" @click="deleteList">x</button>
      </span>
    </h3>
  </div>
</template>


<script>
export default {
  name: "lists",
  props: ["listProp"],
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getLists");
  },
  computed: {
    postList() {
      debugger;
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
