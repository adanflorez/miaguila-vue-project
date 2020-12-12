import flushPromises from 'flush-promises';
import { mount, createLocalVue } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

const Vue = createLocalVue();

import es from 'vee-validate/dist/locale/es';
import VeeValidate, { Validator } from 'vee-validate';
Vue.use(VeeValidate);
Validator.localize('es', es);

describe('LoginForm.vue', () => {
  
  it('Check required message if email input is empty', async () => {
    const wrapper = mount(LoginForm, { sync: false, localVue: Vue });
    const error = wrapper.find('.vee-error');

    expect(error.text()).toBe('');

    wrapper.find('[data-username]').setValue('');
    await flushPromises();

    expect(error.text()).toBe('El campo email es obligatorio');
  });

  it('Check error message if email input is not valid', async () => {
    const wrapper = mount(LoginForm, { sync: false, localVue: Vue });
    const error = wrapper.find('.vee-error');

    expect(error.text()).toBe('');

    wrapper.find('[data-username]').setValue('correo');
    await flushPromises();

    expect(error.text()).toBe(
      'El campo email debe ser un correo electrónico válido'
    );
  });

  it('Check required message if password input is empty', async () => {
    const wrapper = mount(LoginForm, { sync: false, localVue: Vue });
    const error = wrapper.find('#vee-error');

    expect(error.text()).toBe('');

    wrapper.find('[data-password]').setValue('');
    await flushPromises();

    expect(error.text()).toBe('El campo password es obligatorio');
  });

  it('check error message if password is not 8 or more characters', async () => {
    const wrapper = mount(LoginForm, { sync: false, localVue: Vue });
    const error = wrapper.find('#vee-error');

    expect(error.text()).toBe('');

    wrapper.find('[data-password]').setValue('A');
    await flushPromises();

    expect(error.text()).toBe(
      'El campo password debe tener al menos 8 caracteres'
    );
  });

  it('Check error message if password is not in valid format', async () => {
    const wrapper = mount(LoginForm, { sync: false, localVue: Vue });
    const error = wrapper.find('#vee-error');

    expect(error.text()).toBe('');

    wrapper.find('[data-password]').setValue('a1234567');
    await flushPromises();

    expect(error.text()).toBe('El formato del campo password no es válido');
  });

  it('Button disabled if inputs are empty', async () => {
    const email = '';
    const password = '';

    const wrapper = mount(LoginForm, { sync: false, localVue: Vue });
    await wrapper.find('[data-username]').setValue(email);
    await wrapper.find('[data-password]').setValue(password);

    expect(wrapper.vm.user.email).toBe(email);
    expect(wrapper.vm.user.password).toBe(password);

    expect(wrapper.vm.validateForm).toBeFalsy();
    expect(wrapper.find('.login-btn').attributes(['disabled']));
  });

  it('Button trigger login', () => {
    const wrapper = mount(LoginForm, { sync: false, localVue: Vue });
    const login = jest.fn();

    wrapper.setMethods({
      login,
    });

    wrapper.find('.login-btn').trigger('click');
    expect(login).toHaveBeenCalled();
  });

  
});
