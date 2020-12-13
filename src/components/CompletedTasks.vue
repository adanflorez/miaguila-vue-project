<template>
  <div>
    <div class="card" v-if="tasks.length">
      <div class="card-body">
        <h3 class="card-title">Tareas completadas</h3>
        <template>
          <div v-for="(task, index) of tasks" :key="index">
            <div class="d-flex align-items-center">
              <i class="fas fa-check-double text-success mr-3"></i>{{ task }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Card complete tasks
 */
export default {
  name: 'completed-tasks',
  props: {
    /**
     * Array of tasks
     */
    tasks: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
</style>