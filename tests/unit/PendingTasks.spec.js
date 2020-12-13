import { mount } from '@vue/test-utils';
import PendingTasks from '@/components/PendingTasks';

describe('PendingTasks.vue', () => {
  const wrapper = mount(PendingTasks);
  it('emit task to move a completed', () => {
    wrapper.vm.moveTaskToComplete();
    expect(wrapper.emitted(['task-to-move'])).toBeTruthy();
  });

  it('emit task to edit', () => {
    wrapper.vm.editTask();
    expect(wrapper.emitted(['edit-task'])).toBeTruthy();
  });

  it('emit task to delete', () => {
    wrapper.vm.deleteTask();
    expect(wrapper.emitted(['delete-task'])).toBeTruthy();
  });
});
