import { mount } from '@vue/test-utils';
import CompletedTasks from '@/components/CompletedTasks.vue';

describe('CompletedTasks.vue', () => {
  const wrapper = mount(CompletedTasks);
  it('typeof prop tasks', () => {
    expect(typeof wrapper.vm.$props.tasks).toBe('object');
  });
});
