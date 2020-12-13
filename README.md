# Miaguila Vue Project

Este es un que basicamente tiene un modulo de autenticación en donde se solicita un correo y una contraseña para poder ingrear; una vez ingrese, el usuario será redirigido a un nuevo modulo de usuario autenticado que consta de un menú lateral donde podrá ver 4 opciones **Inicio** (pagina por defecto, cuando el usuario está autenticado), **Usuarios**, **Tareas** y **Salir**

## Modulo Autenticación

### Formulario de inicio de sesión
En este formulario se deben tener las siguientes consideraciones:

1. Se debe ingresar un correo válido
2. La contraseña debe tener mínimo 7 caracteres, al menos un número y una letra mayúscula.
3. Si no se cumplen esas dos condiciones el botón **Entrar** no estará habilitado
4. Para ingresar se deben utilizar las siguientes credenciales correo: **demo@miaguila.com** y contraseña **Dm123456**, en caso de cambiar alguna, se mostrará un mensaje de error **Credenciales incorrectas**

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
