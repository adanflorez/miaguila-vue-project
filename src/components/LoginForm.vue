<template>
  <div id="login">
    <div class="container">
      <div class="d-flex align-items-center justify-content-center min-vh-100">
        <div class="card login-card">
          <div class="row no-gutters">
            <div class="col-md-12">
              <div class="card-body">
                <p class="login-card-description text-center">Inicia sesión</p>
                <form action="#!">
                  <div class="form-group">
                    <label for="email" class="sr-only">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      placeholder="***********"
                    />
                  </div>
                  <input
                    name="login"
                    id="login"
                    class="btn btn-block login-btn mb-4"
                    type="button"
                    value="Login"
                  />
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
  name: 'login-form'
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
      max-width: 326px;
    }

    .form-control {
      margin-bottom: 20px;
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

      &:hover {
        border: 1px solid $primary;
        background-color: transparent;
        color: $primary;
      }
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
