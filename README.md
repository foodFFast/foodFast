# Food Fast

## [food-fast-henry.herokuapp.com/](https://food-fast-henry.herokuapp.com/)

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
-   axios

#### Back

-   MongoDB
-   mongoose
-   Express
-   cors
-   morgan

### Rutas

#### Front

-   localhost:3000/ _(landing page / productos y locales recomendados)_
    -   /shops _(ver todos los locales / buscar locales)_
    -   /categories _(ver todas las categorias)_
        -   /[id] _(ver todos los locales y productos de esa categoria)_
    -   /auth _(iniciar sesion / crear sesion)_
-   /user/[id] _(perfil)_
    -   /reviews _(ver todas mis reseñas)_
        -   /[id] _(ver detalle reseña)_
    -   /orders _(ver todos mis pedidos)_
        -   /[id] _(ver detalle pedido)_
-   /shop/[id] _(landing local)_
    -   /products _(ver productos del local / buscar producto)_
        -   /[id] _(ver detalle producto)_
    -   /reviews _(ver todas las reseñas del local)_
    -   /dashboard _(landing page gerente del local)_
        -   /orders _(ver todos los pedidos / administrar pedidos pendientes)_
        -   /products _(administrar productos y promociones del local)_

#### Back

-   api/v1
    -   /categories
        -   GET
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
        -   /redux
            -   /actions
            -   /reducers
            -   store.js
        -   App.js
        -   index.js
