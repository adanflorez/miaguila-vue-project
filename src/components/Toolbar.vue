<template>
  <div id="toolbar">
    <div class="d-flex justify-content-between align-items-center h-100 p-3">
      <h4>{{ path }}</h4>
      <div class="d-flex align-items-center">
        <i class="fas fa-search mr-3 cursor-pointer"></i>
        <i class="fas fa-bell mr-3 cursor-pointer"></i>
        <p class="text-sm mr-3 font-weight-600">{{ userEmail }}</p>
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
    path() {
      let path = this.$route.path.split('/')[1];
      let capitalized = path.charAt(0).toUpperCase() + path.slice(1);
      return capitalized;
    },
    userEmail() {
      let user = JSON.parse(localStorage.getItem('userInfo'));
      return user.email;
    }
  }
};
</script>

<style lang="scss">
#toolbar {
  height: 90px;
}
</style>