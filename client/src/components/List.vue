<template>
  <div class="container-fluid">
    <div class="lists">
      <div class="row">
        <div class="col-3 border m-5 d-flex justify-content-around">
          <h3>
            {{listProp.title}}
            <button class="btn btn-danger" @click="deleteList">x</button>
          </h3>
        </div>
      </div>
    </div>
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
      this.$store.dispatch("deleteList", this.listProp);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
