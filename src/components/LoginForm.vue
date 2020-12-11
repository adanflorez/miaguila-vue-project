<template>
  <div id="login">
    <div class="container">
      <div class="d-flex align-items-center justify-content-center min-vh-100">
        <div class="card login-card">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="card-body">
                <div
                  v-if="error_login"
                  class="alert alert-danger d-flex justify-content-between align-items-center"
                  role="alert"
                >
                  <span> Credenciales incorrectas </span>
                  <i
                    class="far fa-times-circle text-danger cursor-pointer"
                    @click="error_login = false"
                  ></i>
                </div>
                <p class="login-card-description text-center">Inicia sesión</p>
                <form>
                  <div class="form-group">
                    <label for="email" class="sr-only">Correo</label>
                    <input
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Correo"
                      v-model="user.email"
                    />
                    <small
                      class="text-danger text-xs"
                      v-show="errors.has('email')"
                      >{{ errors.first("email") }}</small
                    >
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Contraseña</label>
                    <input
                      v-validate="{
                        required: true,
                        min: 7,
                        regex: password_pattern,
                      }"
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="***********"
                      v-model="user.password"
                    />
                    <small
                      class="text-danger text-xs"
                      v-show="errors.has('password')"
                      >{{ errors.first("password") }}
                      <br />
                    </small>

                    <small class="text-dark text-xs"
                      >La contraseña debe tener mínimo 7 caracteres, al menos un
                      número y una letra mayúscula.</small
                    >
                  </div>
                  <button
                    :disabled="!validateForm"
                    name="login"
                    id="login"
                    class="btn btn-block login-btn mb-4"
                    @click="login"
                    type="button"
                  >
                    <span v-if="!loading">Entrar</span>
                    <div v-if="loading" class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>
                </form>
                <a href="#!" class="forgot-password-link"
                  >¿Olvidaste tu contraseña?</a
                >
                <p class="login-card-footer-text">
                  ¿No tienes cuenta?
                  <a href="#!" class="text-reset">Registrate aquí</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login-form',
  data() {
    return {
      user: {
        email: 'demo@miaguila.com',
        password: 'Dm123456'
      },
      password_pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z].{7,}/,
      loading: false,
      error_login: false
    };
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.user.email != "" && this.user.password != "";
    }
  },
  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        const payload = {
          email: this.user.email,
          password: this.user.password
        };
        this.$store
          .dispatch("auth/login", payload)
          .then(() => {
            console.log(payload);
            this.$router.push('/inicio');
          })
          .catch(error => {
            console.error(error);
            this.error_login = true;
          });
      }, 3000);

    }
  }
};
</script>

<style lang="scss">
#login {
  @media (max-width: 422px) {
    .login-card .card-body {
      padding: 35px 24px;
    }
  }

  .login-card-description {
    font-size: 1.5rem;
    color: $primary;
    font-weight: normal;
    margin-bottom: 23px;
  }

  .login-card {
    border: 0;
    border-radius: 27.5px;
    box-shadow: 0 10px 30px 0 rgba(172, 168, 168, 0.43);
    overflow: hidden;

    .card-body {
      padding: 85px 60px 60px;
    }

    form {
      width: 326px;
    }

    .form-control {
      min-height: 45px;
      font-size: 0.8125rem;
      line-height: 15;
      font-weight: normal;
    }

    .login-btn {
      padding: 13px 20px 12px;
      background-color: $primary;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: bold;
      line-height: 20px;
      color: #fff;
      margin-bottom: 24px;
    }

    .forgot-password-link {
      font-size: 0.875rem;
      color: #919aa3;
      margin-bottom: 12px;
    }
  }

  .login-card-footer-text {
    font-size: 1rem;
    color: #0d2366;
    margin-bottom: 30px;
  }

  @media (max-width: 767px) {
    .login-card-footer-text {
      margin-bottom: 24px;
    }
  }

  .login-card-footer-nav a {
    font-size: 0.875rem;
    color: #919aa3;
  }
}
</style>
