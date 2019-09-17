<template>
  <div class="lists">
    <h3>
      {{listProp.title}}
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
      this.$store.dispatch("deleteList", this.listsProp);
    },
    viewList() {
      this.$router.push({ name: "List", params: { listId: listsProp._id } });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
