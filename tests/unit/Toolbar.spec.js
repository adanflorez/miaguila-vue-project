import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Toolbar from '@/components/Toolbar.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Toolbar.spec.js', () => {
  let getters;
  let store;
  let $route;
  let user;

  beforeEach(() => {
    getters = {
      getEmail: () => 'demo@miaguila.com',
    };
    store = new Vuex.Store({
      getters,
    });
    $route = {
      path: '/inicio',
    };
  });

  it('render path', () => {
    const wrapper = shallowMount(Toolbar, {
      store,
      localVue,
      mocks: {
        $route,
      },
    });
    expect(wrapper.vm.path).toBe('Inicio');
  });

  it('render email', () => {
    const wrapper = shallowMount(Toolbar, {
      store,
      localVue,
      mocks: {
        $route,
      },
    });
    expect(wrapper.vm.userEmail).toBe('demo@miaguila.com');
  });
});
