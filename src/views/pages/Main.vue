<template>
  <div id="main" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
    <toolbar />
    <div class="p-4 h-100">
      <router-view />
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
        :width="'255px'"
        :disableHover="true"
      >
        <span slot="toggle-icon">
          <i class="fas fa-bars"></i>
        </span>
        <span slot="header">
          <div class="vsm--header">
            <div>
              <img
                class="rounded-circle mr-2"
                src="@/assets/img/logo.svg"
                alt=""
              />
              <span>Mi águila</span>
            </div>
          </div>
        </span>
        <span slot="footer">
          <div class="vsm--footer cursor-pointer">
            <i class="vsm--icon fas fa-cog" aria-hidden="true"> </i>
            <span>Configuración</span>
          </div>
        </span>
      </sidebar-menu>
    </div>
  </div>
</template>
<script>
import Toolbar from '../../components/Toolbar.vue';
export default {
  components: {
    Toolbar
  },
  name: 'sidebar',
  data() {
    return {
      collapsed: false,
      isOnMobile: false,
      menu: [
        {
          href: '/inicio',
          title: 'Inicio',
          icon: 'fas fa-home'
        },
        {
          href: '/usuarios',
          title: 'Usuarios',
          icon: 'fas fa-users',
        }
        ,
        {
          href: '/tareas',
          title: 'Tareas',
          icon: 'fas fa-clipboard-list',
        }
      ]
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onToggleCollapse(collapsed) {
      console.log(collapsed);
      this.collapsed = collapsed;
    },
    onItemClick(event, item, node) {
      console.log('onItemClick');
      // console.log(event)
      // console.log(item)
      // console.log(node)
    },
    onResize() {
      if (window.innerWidth <= 991) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    }
  }
};
</script>

<style lang="scss">
#main {
  padding-left: 255px;
  transition: 0.3s ease;

  &.collapsed {
    padding-left: 50px;
  }

  &.onmobile {
    padding-left: 50px;
  }

  .pic-profile {
    width: 40px;
    height: 40px;
    background: $primary;
    border-radius: 50%;
    box-shadow: 0 0 2px $primary;
    border: 2px solid #fff;
  }
}
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.main {
  padding: 50px;
}
</style>