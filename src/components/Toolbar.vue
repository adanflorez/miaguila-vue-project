<template>
  <div id="toolbar">
    <div class="d-flex justify-content-between align-items-center h-100 p-3">
      <h4>{{ path }}</h4>
      <div class="d-flex align-items-center">
        <i class="fas fa-search mr-3 cursor-pointer"></i>
        <div class="mr-3 position-relative" @click="$router.push('/tareas')">
          <i class="fas fa-bell cursor-pointer"></i>
          <div
            class="position-absolute d-flex justify-content-center align-items-center bg-primary notification"
            style=""
          >
            {{ totalTasks }}
          </div>
        </div>
        <p class="d-none d-md-flex text-sm mr-3 font-weight-600">
          {{ userEmail }}
        </p>
        <div
          class="pic-profile d-flex justify-content-center align-items-center cursor-pointer"
        >
          <i class="fas fa-user"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'toolbar',
  computed: {
    /** 
     * @returns {String} path with a capital initial 
     */
    path() {
      let capitalized = this.$route.path.split('/')[1].charAt(0).toUpperCase() + this.$route.path.split('/')[1].slice(1);
      return capitalized;
    },
    /** @returns {String} login user email */
    userEmail() {
      return this.$store.getters.getEmail;
    },
    /** @returns {String} the total of pending tasks */
    totalTasks() {
      return this.$store.state.total_tasks;
    }
  }
};
</script>

<style lang="scss">
#toolbar {
  height: 90px;

  .notification {
    right: 0;
    top: 0;
    font-size: 9px;
    width: 10px;
    height: 10px;
    color: #fff;
    border-radius: 50%;
    font-weight: 600;
  }
}
</style>