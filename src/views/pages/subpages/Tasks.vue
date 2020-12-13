<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="input-group mb-4">
          <input
            type="text"
            class="form-control"
            placeholder="Nueva tarea..."
            v-model="new_task"
          />

          <div class="input-group-append">
            <button
              class="btn btn-primary"
              type="button"
              @click="addTask()"
              :disabled="!new_task"
            >
              {{ button_text }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 mb-4">
        <template v-if="tasks_list.length">
          <div class="mb-2 d-flex">
            <div class="ml-auto">
              <span>Quitar las tareas</span>
              <i
                class="fas fa-trash text-danger cursor-pointer ml-2"
                @click="tasks_list = []"
              ></i>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div v-for="(task, index) of tasks_list" :key="index">
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
        </template>
        <div v-else class="jumbotron">Agrega tareas a la lista...</div>
      </div>
      <div class="col-lg-6">
        <completed-tasks :tasks="completed_tasks" />
      </div>
    </div>
  </div>
</template>

<script>
import CompletedTasks from '../../../components/CompletedTasks.vue';

export default {
  components: {
    CompletedTasks
  },
  data() {
    return {
      new_task: '',
      tasks_list: [],
      completed_tasks: [],
      updating_task: false,
      task_index_to_update: null,
      button_text: '+ Agregar'
    };
  },
  methods: {
    /** 
     * Add or edit tasks in the list 
     */
    addTask() {
      if (!this.updating_task) {
        this.tasks_list.push(this.new_task);
      } else {
        this.tasks_list[this.task_index_to_update] = this.new_task;
        this.tasks_list.push('');
        this.tasks_list.pop();
        this.updateTasks();
        this.button_text = '+ Agregar';
        this.updating_task = false;
      }
      this.new_task = '';

    },
    /** Remove tasks from the list
     * 
     * @param {Number} index - Task position in array 
     */
    deleteTask(index) {
      this.tasks_list.splice(index, 1);
    },
    /** Move task from pending task to completed task
     * 
     * @param {Number} index - Task position in array 
     * @param {String} task - Task
     */
    moveTaskToComplete(index, task) {
      this.completed_tasks.push(task);
      this.deleteTask(index);
    },
    /** Prepare the task to edit
     * 
     * @param {Number} index - Task position in array 
     * @param {String} task - Task
     */
    editTask(index, task) {
      this.updating_task = true;
      this.new_task = task;
      this.task_index_to_update = index;
      this.button_text = 'Editar';
    },
    /** 
     * Update pending tasks in localStorage  
     */
    updateTasks() {
      localStorage.setItem('pending-tasks', JSON.stringify(this.tasks_list));
    },
    /** 
     * Update completed tasks in localStorage 
     */
    updateCompletedTasks() {
      localStorage.setItem('completed-tasks', JSON.stringify(this.completed_tasks));
    }
  },
  /** 
   * Initialize life cycle 
   */
  mounted() {
    if (localStorage.getItem('pending-tasks')) {
      this.tasks_list = JSON.parse(localStorage.getItem('pending-tasks'));
    }
    if (localStorage.getItem('completed-tasks')) {
      this.completed_tasks = JSON.parse(localStorage.getItem('completed-tasks'));
    }
    this.$store.dispatch('setTotalTasks', this.tasks_list.length);
  },
  watch: {
    /** 
     * Watcher that updates total tasks in notifications and updates localStorage  
     */
    tasks_list() {
      this.$store.dispatch('setTotalTasks', this.tasks_list.length);
      this.updateTasks();
    },
    /** 
     * Watcher which updates completed tasks in localStorage 
     */
    completed_tasks() {
      this.updateCompletedTasks();
    }
  },
};
</script>

<style scoped>
</style>