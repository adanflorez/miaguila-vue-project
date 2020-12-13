jest.useFakeTimers();

import flushPromises from 'flush-promises';
import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
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

  it('should error credentials message', () => {
    const wrapper = mount(LoginForm, {
      sync: false,
      localVue: Vue,
      data() {
        return {
          error_login: true,
        };
      },
    });

    expect(wrapper.find('.alert-danger').exists()).toBeTruthy();
  });

  it('Credentials error message should not be displayed', () => {
    const wrapper = mount(LoginForm, {
      sync: false,
      localVue: Vue,
      data() {
        return {
          error_login: false,
        };
      },
    });

    expect(wrapper.find('.alert-danger').exists()).toBeFalsy();
  });

  it('Check placeholder in email input', async () => {
    const wrapper = shallowMount(LoginForm, { sync: false, localVue: Vue });
    const placeholder = wrapper
      .find('[data-username]')
      .attributes('placeholder');
    await flushPromises();

    expect(placeholder).toBe('Correo');
  });

  it('Check placeholder in password input', async () => {
    const wrapper = shallowMount(LoginForm, { sync: false, localVue: Vue });
    const placeholder = wrapper
      .find('[data-password]')
      .attributes('placeholder');
    await flushPromises();

    expect(placeholder).toBe('***********');
  });

  it('Button trigger login loading true', () => {
    const wrapper = mount(LoginForm, { sync: false, localVue: Vue });
    wrapper.vm.login();
    /* expect(payload).toStrictEqual({
      email: 'sdsdfs',
      password: 'hhhhh',
    }); */
    expect(wrapper.vm.loading).toBeTruthy();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });

  /*   it('settimeout', () => {
    const wrapper = mount(LoginForm, { sync: false, localVue: Vue });
    wrapper.vm.login();
    
  }); */
});
