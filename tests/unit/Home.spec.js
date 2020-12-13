import { mount } from '@vue/test-utils';
import Home from '../../src/views/pages/subpages/Home.vue';

describe('Home.vue', () => {
  it('image exists', () => {
    const wrapper = mount(Home);
    const img = wrapper.find('.img-fluid');
    expect(img.exists()).toBeTruthy;
  });
});
