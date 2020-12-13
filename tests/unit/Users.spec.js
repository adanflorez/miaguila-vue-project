jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: 3 })),
}));

import { mount, createLocalVue } from '@vue/test-utils';
import Users from '@/views/pages/subpages/Users.vue';
import axios from 'axios'; // axios here is the mock from above!

const Vue = createLocalVue();

// Lodash
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
Vue.use(VueLodash, { lodash: lodash });

describe('Users.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Users, { sync: false, localVue: Vue });
  });

  it('Call getUsersList founction on mounted hook', async () => {
    const mockMethod = jest.spyOn(Users.methods, 'getUsersList');
    const wrapper = mount(Users, { sync: false, localVue: Vue });
    expect(mockMethod).toHaveBeenCalled();
    expect(axios.get).toBeCalledWith('https://api.mocki.io/v1/853804f2/users');
  });

  it('No render table', async () => {
    expect(wrapper.vm.users_list).toStrictEqual([]);
    expect(wrapper.find('.table-responsive').exists()).toBeFalsy();
  });

  it('Render table', async () => {
    const wrapper = mount(Users, {
      sync: false,
      localVue: Vue,
      data() {
        return {
          users_list: [
            {
              id: 1,
              name: 'Adan',
              last_name: 'Florez',
              email: 'adan@miaguila.com',
              phone_number: '3163625781',
              status: true,
            },
          ],
        };
      },
    });

    expect(wrapper.find('.table-responsive').exists()).toBeTruthy();
  });
});
