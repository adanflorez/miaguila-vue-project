<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div v-for="(task, index) of tasks" :key="index">
          <hr v-if="index > 0" />
          <div class="mw-100">
            <span class="text-sm">{{ task }}</span>
            <div class="d-flex">
              <div class="ml-auto">
                <i
                  class="far fa-check-circle text-success mr-2 cursor-pointer"
                  @click="moveTaskToComplete(index, task)"
                ></i>
                <i
                  class="far fa-edit text-warning mr-2 cursor-pointer"
                  @click="editTask(index, task)"
                ></i>
                <i
                  class="fas fa-trash text-danger cursor-pointer"
                  @click="deleteTask(index)"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Card pending tasks
 */
export default {
  name: 'pending-tasks',
  props: {
    /**
     * Array of tasks
     */
    tasks: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    moveTaskToComplete(index, task) {
      /**
       * Triggers when task is choosen
       * 
       * @property {String} task Name of task
       * @property {Number} index Position of task
       */
      this.$emit('task-to-move', { task, index });
    },
    deleteTask(index) {
      /**
       * Triggers when a task will be removed 
       */
      this.$emit('delete-task', index);
    },
    editTask(index, task) {
      /**
       * Triggers when task will be updated
       * 
       * @property {String} task Name of task
       * @property {Number} index Position of task
       */
      this.$emit('edit-task', { task, index });
    }
  }
}
</script>