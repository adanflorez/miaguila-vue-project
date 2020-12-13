<template>
  <div class="d-flex justify-content-center">
    <div v-if="users_list.length" class="table-responsive">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Email</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) of users_list" :key="index">
            <td>{{ user.name + " " + user.last_name }}</td>
            <td>{{ user.phone_number }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span v-if="user.status" class="badge badge-success">Activo</span>
              <span v-else class="badge badge-danger">Inactivo</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import mainService from '../../../http/axios/index';
export default {
  data() {
    return {
      users_list: []
    };
  },
  /** 
   * Initialize life cycle 
   */
  mounted() {
    this.getUsersList();
  },
  methods: {
    /** 
     * Returns the list of users from Fake JSON API  
     */
    getUsersList() {
      mainService.usersList()
        .then(res => {
          this.users_list = this.lodash.orderBy(res.data.users, ['name'], ['asc']);
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style scoped>
</style>