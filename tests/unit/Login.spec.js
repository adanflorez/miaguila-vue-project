import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login';
import LoginForm from '../../src/components/LoginForm.vue'

describe('Login.vue', () => {
  const wrapper = shallowMount(Login);
  it('Render LoginForm component', () => {
    expect(wrapper.findComponent(LoginForm).exists()).toBe(true);
  });
});
