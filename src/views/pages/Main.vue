<template>
  <div id="main" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
    <toolbar />
    <div class="p-4 h-100">
      <router-view />
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        @item-click="onItemClick"
        :width="'255px'"
        :disableHover="true"
        :hideToggle="true"
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
              <span id="title">Mi águila</span>
            </div>
          </div>
        </span>
        <span slot="footer">
          <div class="vsm--footer cursor-pointer">
            <i class="vsm--icon fas fa-cog" aria-hidden="true"> </i>
            <span id="configuration">Configuración</span>
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
        },
        {
          href: '/tareas',
          title: 'Tareas',
          icon: 'fas fa-clipboard-list',
        },
        {
          title: 'Salir',
          icon: 'fas fa-sign-out-alt',
        }
      ]
    };
  },
  /** Initialize life cycle */
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    /**
     * @namespace onItemClick
     * Detect click, used to logout
     * @param {Event} event - Event occurred.
     * @param {Object} item - Object with information about the item that triggered the function.
     * @param {Any} node - Node from the DOM
     */
    onItemClick(event, item, node) {
      if (item.title === 'Salir') {
        this.$swal(
          {
            title: '¿Deseas cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cerrar',
            cancelButtonText: 'Cancelar'
          }
        ).then((result) => {
          if (result.isConfirmed) {
            this.logout();
          }
        });
      }
    },
    /** 
     * Detect changes in screen dimensions  
     */
    onResize() {
      if (window.innerWidth <= 991) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    },
    /** 
     * Allows you to log out  
     */
    logout() {
      localStorage.removeItem('userInfo');
      this.$router.push("/login");
    }
  },
  computed: {
    /**
     * @returns {Boolean} isIdle
     */
    isIdle() {
      return this.$store.state.idleVue.isIdle;
    }
  },
  watch: {
    isIdle() {
      if (this.isIdle) {
        let timerInterval;
        this.$swal({
          title: 'Tu sesión está proxima a expirar',
          html: 'Se cerrará en <b></b> segundos.',
          timer: 60000,
          timerProgressBar: true,
          confirmButtonText: 'Seguir navegando',
          cancelButtonText: 'Cerrar sesión',
          showCancelButton: true,
          willOpen: () => {
            timerInterval = setInterval(() => {
              const content = this.$swal.getContent();
              if (content) {
                const b = content.querySelector('b');
                if (b) {
                  let sec = Math.floor((this.$swal.getTimerLeft() % 60000) / 1000).toFixed(0);
                  b.textContent = sec;
                }
              }
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
          if (result.isDismissed) {
            switch (result.dismiss) {
              case 'cancel':
                this.logout();
                break;
              case 'timer':
                this.logout();
                break;
              default:
                this.logout();
                break;
            }
          }
        });
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