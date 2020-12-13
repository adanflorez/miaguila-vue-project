import { shallowMount, createLocalVue } from '@vue/test-utils';
import Tasks from '../../src/views/pages/subpages/Tasks.vue';
const Vue = createLocalVue();

import Vuex from 'vuex';
Vue.use(Vuex);

describe('Tasks.vue', () => {
  let actions;
  let store;
  let wrapper;

  beforeEach(() => {
    actions = {
      setTotalTasks: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
    wrapper = shallowMount(Tasks, { store, sync: false, localVue: Vue });
  });

  it('addTask', () => {
    wrapper.setData({ new_task: 'Pruebas unitarias', updating_task: false });
    wrapper.vm.addTask();
    expect(wrapper.vm.tasks_list).toStrictEqual(['Pruebas unitarias']);
  });

  it('EditTask', () => {
    wrapper.vm.editTask({ index: 0, task: 'Pruebas unitarias' });
    wrapper.setData({ new_task: 'Tarea tres' });
    wrapper.vm.addTask();
    expect(wrapper.vm.tasks_list).toStrictEqual(['Tarea tres']);
  });

  it('deletTask', () => {
    wrapper.vm.deleteTask(0);
    expect(wrapper.vm.tasks_list).toStrictEqual([]);
  });

  it('moveTaskToComplete', () => {
    wrapper.vm.moveTaskToComplete({ index: 0, task: 'Pruebas unitarias' });
    expect(wrapper.vm.tasks_list).toStrictEqual([]);
    expect(wrapper.vm.completed_tasks).toStrictEqual(['Pruebas unitarias']);
  });
});
