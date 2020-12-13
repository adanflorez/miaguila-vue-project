import { mount } from '@vue/test-utils';
import TaskCard from '@/components/TaskCard';

describe('TaskCard.vue', () => {
  const wrapper = mount(TaskCard);
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
