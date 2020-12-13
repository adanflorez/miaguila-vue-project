import { shallowMount, createLocalVue } from '@vue/test-utils';
import Main from '../../src/views/pages/Main.vue';
import Toolbar from '@/components/Toolbar.vue';

const Vue = createLocalVue();

import VueSidebarMenu from 'vue-sidebar-menu';
Vue.use(VueSidebarMenu);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter();

import Vuex from 'vuex';
Vue.use(Vuex);

// Sweet alert 2
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

describe('Main.vue', () => {
  let state;
  let store;
  let wrapper;

  beforeEach(() => {
    state = {
      idleVue: {
        isIdle: true,
      },
    };
    store = new Vuex.Store({
      state,
    });
    wrapper = shallowMount(Main, { store, sync: false, localVue: Vue, router });
  });

  it('Render Toolbar.vue', () => {
    expect(wrapper.findComponent(Toolbar).exists()).toBe(true);
  });

  it('Check menu', () => {
    const menu = [
      {
        href: '/inicio',
        title: 'Inicio',
        icon: 'fas fa-home',
      },
      {
        href: '/usuarios',
        title: 'Usuarios',
        icon: 'fas fa-users',
      },
      {
        href: '/tareas',
        title: 'Tareas',
        icon: 'fas fa-clipboard-list',
      },
      {
        title: 'Salir',
        icon: 'fas fa-sign-out-alt',
      },
    ];
    expect(wrapper.vm.menu).toStrictEqual(menu);
  });

  it('Call OnResize founction on munted hook', async () => {
    const mockMethod = jest.spyOn(Main.methods, 'onResize');
    const wrapper = shallowMount(Main, { store, sync: false, localVue: Vue });
    expect(mockMethod).toHaveBeenCalled();
  });

  it('Collapsed', () => {
    expect(wrapper.vm.collapsed).toBeFalsy();
  });

  it('Detect if is on mobile', () => {
    // Change the viewport to 500px.
    global.innerWidth = 990;
    // Trigger the window resize event.
    global.addEventListener('resize', wrapper.vm.onResize());
    expect(wrapper.vm.isOnMobile).toBeTruthy();
    expect(wrapper.vm.collapsed).toBeTruthy();
  });

  it('Detect if is on desktop', () => {
    // Change the viewport to 500px.
    global.innerWidth = 992;
    // Trigger the window resize event.
    global.addEventListener('resize', wrapper.vm.onResize());
    expect(wrapper.vm.isOnMobile).toBeFalsy();
    expect(wrapper.vm.collapsed).toBeFalsy();
  });

  it('Render title', () => {
    expect(wrapper.find('#title').text()).toBe('Mi águila');
  });

  it('Render configuration text', () => {
    expect(wrapper.find('#configuration').text()).toBe('Configuración');
  });

  it('Logout()', () => {
    wrapper.vm.logout();
    expect(wrapper.vm.$route.path).toBe('/login');
  });

  it('OnItemClick', () => {
    wrapper.vm.onItemClick(null, { title: 'Salir' }, null);
    wrapper.vm.$swal();
  });
});
