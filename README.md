# Food Fast

## Proyecto Grupal Soy Henry

E-commerce desarrollado como proyecto final para el bootcamp Soy Henry.

### Stack

#### Front

-   react
-   react-router
-   react-icons
-   redux
-   react-redux
-   redux-thunk
-   styled-components
-   sass

#### Back

-   MongoDB
-   mongoose
-   Express
-   cors
-   morgan

### Rutas

#### Front

-   localhost:3000/ _(landing page / productos y locales recomendados)_
    -   /locales _(ver todos los locales / buscar locales)_
    -   /categorias _(ver todas las categorias / buscar por categoria)_
    <!-- -   /productos _(ver todos los productos / buscar productos)_ -->
    -   /login _(iniciar sesion / crear sesion)_
-   /usuario/[id] _(perfil)_
    <!-- -   /reseñas _(ver todas mis reseñas)_
    -   /pedidos _(ver todos mis pedidos)_ -->
-   /local/[id] _(landing local)_
    -   /productos _(ver productos del local / buscar producto)_
    <!-- -   /promociones _(ver promociones del local)_ -->
    -   /reseñas _(ver todas las reseñas del local)_
    -   /dashboard _(landing page gerente del local)_
        -   /perfil _(info basica del local)_
        -   /pedidos _(ver todos los pedidos / administrar pedidos pendientes)_
        -   /productos _(administrar productos y promociones del local)_

#### Back

-   api/v1
    -   /categories
        -   GET
        -   PUT
        -   POST
        -   DELETE

### Estructura de archivos

-   /api
    -   /controllers
    -   /routes
    -   /src
        -   /models
        -   /routes
    -   app.js
-   /client
    -   /public
    -   /src
        -   /components
        -   /pages
        -   /redux
            -   /actions
            -   /reducers
            -   store.js
        -   App.js
        -   index.js
