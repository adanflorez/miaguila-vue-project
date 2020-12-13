# Mi Águila Vue Project
# Descripción general
Este es proyecto hecho en [Vue.js](https://vuejs.org/v2/guide/) que basicamente tiene un modulo de autenticación en donde se solicita un correo y una contraseña para poder ingrear; una vez ingrese, el usuario será redirigido a un nuevo modulo de usuario autenticado.

# Descripción específica

## Modulo Autenticación

### Formulario de inicio de sesión
En este formulario se deben tener las siguientes consideraciones:

1. Se debe ingresar un correo válido.
2. Cumplir requisitos de la contraseña.
3. Para ingresar se deben utilizar las siguientes credenciales correo: **demo@miaguila.com** y contraseña **Dm123456** o se mostrará un mensaje de error **Credenciales incorrectas**.

## Modulo usuario autenticado
Cuando el usuario inicia sesión ingresará a este modulo el cual se divide en tres partes: **Menú lateral**, **Toolbar** y **Contenido**.

### Menú lateral
Logo de la empresa, **Inicio** ,**Usuarios**, **Tareas**, **Salir** lanza alerta para confirmar si desea cerrar sesión, **Configuración** no tiene acción.

### Toolbar
Lado izquierdo: el **nombre** de la vista actual. 

En la parte derecha se encuentran: 
**Lupa**, **Campana de notificaciones**: total de _tareas pendientes_ y direcciona a la vista de tareas. **Correo** del usuario. **Icono de usuario** foto de perfíl del usuario o icono por defecto.

### Contenido
Contenido de cada vista

## Vistas de modulo de usuario autenticado

### Inicio
Vista bajo construcción.

### Usuarios
En esta vista se consume un _API_ de la pagina [mocki.io](https://mocki.io/fake-json-api) que devuelve una lista de 10 usuarios y se muestran ordenados alfabeticamente.

### Tareas
Vista en la que encontramos, un campo para agregar nuevas tareas y dos secciones, **Tareas pendientes** y **Tareas completadas**; en la primera se podrán aplicar las acciones de CRUD. En la sección **Tareas completadas** se mostrarán las tareas que cumplan esa condición.

## Otras consideraciones
1. Al escribir en la _URL_ alguna vista que no existe, si el usuario no está autenticado, se redirige hacía la pagina de **Login**, de lo contrario se redirige hacía la vista de **Inicio**.
2. Cuando el usuario está autenticado y tiene inactividad por 4 minutos se le mostrará una alerta durante un minuto para confirmar si desea **Seguir navegando** o **Cerrar sesión**, pasado el minuto se cerrará sesión de forma automatica; si escoge **Seguir navegando** el temporizador de los 5 minutos se reiniciará.

## Dependencias
* axios: "^0.21.0" - Peticiones _HTTP_
* idle-vue: "^2.0.5" - Observador de inactividad
* vee-validate: "^2.2.8" - Validacion de formularios
* vue: "^2.6.11" - Versión de Vue.js
* vue-lodash: "^2.1.2" - Manejo y edición de objetos, arrays, etc
* vue-router: "^3.2.0" - Manejo de rutas
* vue-sidebar-menu: "^4.7.4" - Menú lateral
* vue-sweetalert2: "^4.1.1" - Alertas
* vuex: "^3.4.0" - Store para almacenar datos de la aplicación

## Instalación del proyecto
```
yarn install
```

### Compila y recarga instantanea para modo desarrollo
```
yarn serve
```

### Compilación del proyecto
```
yarn build
yarn start <!-- Opcional para ver el proyecto en vivo con lite-server -->
```

### Pruebas unitarias
```
yarn test:unit
```

### Alcance de las pruebas unitarias
```
yarn test:coverage
```
