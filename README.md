# Miaguila Vue Project

Este es un que basicamente tiene un modulo de autenticación en donde se solicita un correo y una contraseña para poder ingrear; una vez ingrese, el usuario será redirigido a un nuevo modulo de usuario autenticado.

## Modulo Autenticación

### Formulario de inicio de sesión
En este formulario se deben tener las siguientes consideraciones:

1. Se debe ingresar un correo válido
2. La contraseña debe tener mínimo 7 caracteres, al menos un número y una letra mayúscula.
3. Si no se cumplen esas dos condiciones el botón **Entrar** no estará habilitado.
4. Para ingresar se deben utilizar las siguientes credenciales correo: **demo@miaguila.com** y contraseña **Dm123456**, en caso de cambiar alguna, se mostrará un mensaje de error **Credenciales incorrectas**.

## Modulo usuario autenticado
Cuando el usuario inicia sesión ingresará a este modulo el cual se divide en tres partes: **Menú lateral**, **Toolbar** y **Contenido**.

### Menú lateral
Menú donde podrá ver el logo de la empresa, 3 opciones para ver contenido, una opción para cerrar sesión y una para configuración: 
1. **Inicio** pagina por defecto, cuando el usuario está autenticado. 
2. **Usuarios**.
3. **Tareas**.
4. **Salir** al dar clic sobre esta opción se muestra una alerta para confirmar si desea cerrar sesión
5. **Configuración** no tiene acción.

### Toolbar
En esta sección se encuentra en el lado izquierdo: 
1. el **nombre** de la vista actual. 

En la parte derecha se encuentran: 
1. **Lupa** (no tiene acción).
2. **Campana de notificaciones** que muestra el total de _tareas pendientes_ y direcciona a la vista de tareas.
3. **Correo** se muestra de forma dínamica segun el usuario.
4. **Icono de usuario** en esta parte se muestra la foto de perfíl del usuario, en caso de no tener se muestra el icono por defecto.

### Contenido
Se muestran las vistas de cada una de las tres primeras opciones del menú lateral.

## Vistas de modulo de usuario autenticado

### Inicio
Vista bajo construcción.

### Usuarios
En esta vista se consume un _API_ de la pagina [mocki.io](https://mocki.io/fake-json-api) que devuelve una lista de 10 usuarios y se muestran ordenados alfabeticamente los datos de nombre completo, teléfono, email y estado.

### Tareas
Vista en la que encontramos, un campo para agregar nuevas tareas y dos secciones, **Tareas pendientes** y **Tareas completadas**; en la primera se verán todas las tareas creadas por el usuario, ahí se podrán marcar como completadas, actualizar el nombre de la tarea o eliminar de la lista, tambien se encontrará la opción de **Quitar las tareas** que elimina todas las tareas pendientes. En la sección **Tareas completadas** se mostrarán las tareas que cumplan esa condición.

## Otras consideraciones
1. Al escribir en la _URL_ alguna vista que no existe, si el usuario no está autenticado, se redirige hacía la pagina de **Login**, si el usuario ya inició sesión se redirige hacía la vista de **Inicio**.
2. Solo se puede ingresar a las vistas de **Inicio**, **Usuarios** y **Tareas** si el usuario está autenticado, de lo contrario se redirige hacia **Login**.
3. Cuando el usuario está autenticado y tiene inactividad por 4 minutos se le mostrará una alerta durante un minuto (completando así 5 minutos) donde se le preguntará si desea **Seguir navegando** o si quiere **Cerrar sesión**, en caso que el usuario no escoja ninguna de las opciones, se cerrará sesión de forma automatica; si escoge **Seguir navegando** el temporizador de los 5 minutos se reiniciará.

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
```

### Pruebas unitarias
```
yarn test:unit
```

### Alcance de las pruebas unitarias
```
yarn test:coverage
```