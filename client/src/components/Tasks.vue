<template>
  <div class="container-fluid">
    <div class="tasks">
      <div class="row"> 
        <div class="col-3 border m-5"> 
          <h5>
            {{taskProp.description}}
            <button class="btn btn-danger" @click="deleteTask">x</button>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "tasks",
  props: ["taskProp"],
  data() {
    return {
      newTask: {
        description: ""
      }
    };
  },
  mounted() {},
  computed: {
    postTask() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.taskProp);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>